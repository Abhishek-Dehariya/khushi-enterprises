/**
 * Responsive layout audit.
 *
 * Drives one headless Chrome over the DevTools Protocol and, for every route ×
 * viewport combination, reports:
 *
 *   1. horizontal page scroll (document wider than the viewport)
 *   2. elements that stick out past the viewport and are NOT contained by an
 *      ancestor that hides or scrolls its overflow (real layout bugs)
 *   3. tap targets under 40px in the mobile viewports
 *
 * Usage:
 *   node scripts/responsive-audit.mjs
 *   BASE_URL=http://localhost:3001 WIDTHS=320,375,768,1440 node scripts/responsive-audit.mjs
 *   SHOTS=1 node scripts/responsive-audit.mjs        # also write screenshots to /tmp
 */
import { spawn } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3001";
const PORT = 9700 + Math.floor(Math.random() * 200);
const SHOTS = process.env.SHOTS === "1";
const SHOT_DIR = "/tmp/responsive-shots";

const ROUTES = (
  process.env.ROUTES ??
  "/,/about,/solar-om,/solar-services,/services,/projects,/gallery,/clients,/quality-safety,/contact"
)
  .split(",")
  .map((route) => route.trim())
  .filter(Boolean);

const VIEWPORTS = (
  process.env.WIDTHS ?? "320,360,375,390,414,430,480,640,768,820,1024,1280,1440,1920"
)
  .split(",")
  .map((width) => Number(width.trim()))
  .filter((width) => Number.isFinite(width) && width > 0)
  .map((width) => ({ width, height: width >= 900 ? 900 : 780 }));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class CdpSession {
  #ws;
  #nextId = 1;
  #pending = new Map();
  #listeners = new Map();

  static async connect(webSocketDebuggerUrl) {
    const session = new CdpSession();
    session.#ws = new WebSocket(webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      session.#ws.onopen = resolve;
      session.#ws.onerror = () => reject(new Error("CDP socket failed"));
    });
    session.#ws.onmessage = (event) => session.#onMessage(event.data);
    return session;
  }

  #onMessage(raw) {
    const message = JSON.parse(raw);
    if (message.id) {
      const pending = this.#pending.get(message.id);
      if (!pending) return;
      this.#pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
      return;
    }
    const handlers = this.#listeners.get(message.method) ?? [];
    for (const handler of handlers) handler(message.params);
  }

  send(method, params = {}) {
    const id = this.#nextId++;
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.#ws.send(JSON.stringify({ id, method, params }));
    });
  }

  on(event, handler) {
    const handlers = this.#listeners.get(event) ?? [];
    handlers.push(handler);
    this.#listeners.set(event, handlers);
  }

  close() {
    this.#ws.close();
  }
}

async function waitForChrome(port, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await response.json();
      const page = targets.find((target) => target.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {
      /* Chrome is not listening yet. */
    }
    await sleep(200);
  }
  throw new Error("Chrome did not expose a page target in time");
}

/* ------------------------------------------------------------- measuring --- */

const MEASURE = `(() => {
  const viewportWidth = document.documentElement.clientWidth;
  const docWidth = Math.max(
    document.documentElement.scrollWidth,
    document.body ? document.body.scrollWidth : 0,
  );

  const isClipped = (element) => {
    let parent = element.parentElement;
    while (parent && parent !== document.body) {
      const overflowX = getComputedStyle(parent).overflowX;
      if (overflowX !== "visible") return true;
      parent = parent.parentElement;
    }
    return false;
  };

  const overflowing = [];
  for (const element of document.querySelectorAll("body *")) {
    const style = getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden") continue;

    const rect = element.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) continue;

    const overhang = Math.round(rect.right - viewportWidth);
    if (overhang <= 1) continue;
    if (isClipped(element)) continue;

    overflowing.push({
      tag: element.tagName.toLowerCase(),
      cls: (typeof element.className === "string" ? element.className : "").slice(0, 110),
      width: Math.round(rect.width),
      overhang,
    });
  }
  overflowing.sort((a, b) => b.overhang - a.overhang);

  const smallTargets = [];
  if (viewportWidth < 900) {
    const isControl = (element) =>
      /^(button|input|select|textarea)$/i.test(element.tagName) ||
      getComputedStyle(element).display !== "inline";

    for (const element of document.querySelectorAll(
      "a[href], button, input:not([type='hidden']), select, textarea",
    )) {
      const rect = element.getBoundingClientRect();
      if (rect.width < 8 && rect.height < 8) continue; // visually hidden helpers
      if (rect.width < 1 || rect.height < 1) continue;
      if (!isControl(element)) continue; // plain text links are not target-sized controls
      if (element.closest("nav ul, ul li, p")) continue;
      if (rect.height < 40 || rect.width < 40) {
        smallTargets.push({
          tag: element.tagName.toLowerCase(),
          text: (element.textContent || element.getAttribute("aria-label") || "").trim().slice(0, 40),
          w: Math.round(rect.width),
          h: Math.round(rect.height),
        });
      }
    }
  }

  return {
    viewportWidth,
    docWidth,
    horizontalScroll: docWidth > viewportWidth + 1,
    overflowing: overflowing.slice(0, 8),
    overflowingCount: overflowing.length,
    smallTargets: smallTargets.slice(0, 8),
    smallTargetCount: smallTargets.length,
  };
})()`;
/* ------------------------------------------------------------------ run ---- */

async function waitForReady(session, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const { result } = await session.send("Runtime.evaluate", {
      expression: "document.readyState",
      returnByValue: true,
    });
    if (result.value === "complete") break;
    await sleep(120);
  }
  await session.send("Runtime.evaluate", {
    expression: "document.fonts ? document.fonts.ready : null",
    awaitPromise: true,
    returnByValue: true,
  });
  await sleep(250);
}

async function main() {
  const userDataDir = mkdtempSync(join(tmpdir(), "responsive-audit-"));
  if (SHOTS) mkdirSync(SHOT_DIR, { recursive: true });

  const chrome = spawn(
    "google-chrome",
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${userDataDir}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-gpu",
      "--hide-scrollbars",
      "--disable-dev-shm-usage",
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  let session;
  const failures = [];

  try {
    session = await CdpSession.connect(await waitForChrome(PORT));
    await session.send("Page.enable");
    await session.send("Runtime.enable");

    for (const viewport of VIEWPORTS) {
      await session.send("Emulation.setDeviceMetricsOverride", {
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: 1,
        mobile: viewport.width < 900,
        screenWidth: viewport.width,
        screenHeight: viewport.height,
      });

      console.log(`\n=== ${viewport.width}×${viewport.height} ===`);

      for (const route of ROUTES) {
        await session.send("Page.navigate", { url: `${BASE_URL}${route}` });
        await waitForReady(session);

        const { result } = await session.send("Runtime.evaluate", {
          expression: MEASURE,
          returnByValue: true,
        });
        const metrics = result.value;

        const problems = [];
        if (metrics.horizontalScroll) problems.push(`page scrolls horizontally (${metrics.docWidth}px)`);
        if (metrics.overflowingCount > 0) problems.push(`${metrics.overflowingCount} element(s) past the viewport`);
        if (metrics.smallTargetCount > 0) problems.push(`${metrics.smallTargetCount} tap target(s) under 40px`);

        if (problems.length === 0) {
          console.log(`  PASS  ${route}`);
          continue;
        }

        console.log(`  FAIL  ${route} — ${problems.join(", ")}`);
        for (const item of metrics.overflowing) {
          console.log(`          ${item.tag}.${item.cls} w=${item.width} overhang=${item.overhang}`);
        }
        for (const item of metrics.smallTargets) {
          console.log(`          tap: ${item.tag} "${item.text}" ${item.w}×${item.h}`);
        }
        failures.push({ viewport: viewport.width, route, metrics });

        if (SHOTS) {
          const shot = await session.send("Page.captureScreenshot", { format: "png" });
          const name = `w${viewport.width}${route.replace(/\//g, "_") || "_home"}.png`;
          writeFileSync(join(SHOT_DIR, name), Buffer.from(shot.data, "base64"));
        }
      }
    }
  } finally {
    session?.close();
    chrome.kill();
    await sleep(300);
    try {
      rmSync(userDataDir, { recursive: true, force: true });
    } catch {
      /* Chrome can still hold a lock while shutting down — not a test failure. */
    }
  }

  console.log(`\n=== SUMMARY: ${failures.length} failing route/viewport combinations ===`);
  for (const failure of failures) {
    console.log(
      `  ${failure.viewport}px ${failure.route}: scroll=${failure.metrics.horizontalScroll} elements=${failure.metrics.overflowingCount} taps=${failure.metrics.smallTargetCount}`,
    );
  }

  process.exitCode = failures.length > 0 ? 1 : 0;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
