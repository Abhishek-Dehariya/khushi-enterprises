/**
 * Full-page responsive screenshots.
 *
 * Drives one headless Chrome over the DevTools Protocol and writes a
 * full-page PNG for every route × viewport combination, so layout can be
 * reviewed by eye across the whole breakpoint range.
 *
 * Usage:
 *   node scripts/responsive-shots.mjs
 *   BASE_URL=http://localhost:3001 WIDTHS=360,768,1440 ROUTES=/,/projects \
 *     OUT=/tmp/shots node scripts/responsive-shots.mjs
 */
import { spawn } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3001";
const OUT_DIR = process.env.OUT ?? "/tmp/responsive-shots";
const PORT = 9800 + Math.floor(Math.random() * 200);

const ROUTES = (
  process.env.ROUTES ??
  "/,/about,/solar-om,/solar-services,/services,/projects,/gallery,/clients,/quality-safety,/contact"
)
  .split(",")
  .map((route) => route.trim())
  .filter(Boolean);

const VIEWPORTS = (process.env.WIDTHS ?? "360,768,1440")
  .split(",")
  .map((width) => Number(width.trim()))
  .filter((width) => Number.isFinite(width) && width > 0);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

class CdpSession {
  #ws;
  #nextId = 1;
  #pending = new Map();

  static async connect(webSocketDebuggerUrl) {
    const session = new CdpSession();
    session.#ws = new WebSocket(webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      session.#ws.onopen = resolve;
      session.#ws.onerror = () => reject(new Error("CDP socket failed"));
    });
    session.#ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (!message.id) return;
      const pending = session.#pending.get(message.id);
      if (!pending) return;
      session.#pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    };
    return session;
  }

  send(method, params = {}) {
    const id = this.#nextId++;
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.#ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.#ws.close();
  }
}

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
  await sleep(300);
}

async function main() {
  const userDataDir = mkdtempSync(join(tmpdir(), "responsive-shots-"));
  mkdirSync(OUT_DIR, { recursive: true });

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

  try {
    session = await CdpSession.connect(await waitForChrome(PORT));
    await session.send("Page.enable");
    await session.send("Runtime.enable");

    for (const width of VIEWPORTS) {
      await session.send("Emulation.setDeviceMetricsOverride", {
        width,
        height: width >= 900 ? 900 : 780,
        deviceScaleFactor: 1,
        mobile: width < 900,
        screenWidth: width,
        screenHeight: width >= 900 ? 900 : 780,
      });

      for (const route of ROUTES) {
        await session.send("Page.navigate", { url: `${BASE_URL}${route}` });
        await waitForReady(session);

        const shot = await session.send("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: true,
          optimizeForSpeed: true,
        });

        const name = `w${width}${route.replace(/\//g, "_") || "_home"}.png`;
        writeFileSync(join(OUT_DIR, name), Buffer.from(shot.data, "base64"));
        console.log(`wrote ${name}`);
      }
    }
  } finally {
    session?.close();
    chrome.kill();
    await sleep(300);
    try {
      rmSync(userDataDir, { recursive: true, force: true });
    } catch {
      /* Chrome can still hold a lock while shutting down. */
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
