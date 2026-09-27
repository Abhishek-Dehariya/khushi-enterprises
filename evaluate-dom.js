const { spawn, execSync } = require('child_process');
const http = require('http');

async function testWidth(w, h, route) {
  // Use CDP via Chrome
  const port = 9222 + Math.floor(Math.random() * 500);
  const chrome = spawn('google-chrome', [
    '--headless',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    `--window-size=${w},${h}`,
    `http://localhost:3000${route}`
  ]);

  await new Promise(r => setTimeout(r, 1200));

  try {
    const list = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json`, res => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(JSON.parse(d)));
      }).on('error', reject);
    });

    const page = list.find(x => x.type === 'page');
    if (!page || !page.webSocketDebuggerUrl) throw new Error('No page ws');

    const wsUrl = page.webSocketDebuggerUrl;
    // We can use node ws or raw websocket frames
    // In node 20+, WebSocket is globally available!
    const ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    // Send Runtime.evaluate to check document.documentElement.scrollWidth > window.innerWidth
    const evalPromise = new Promise((resolve, reject) => {
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 1) {
          resolve(msg.result);
        }
      };
      ws.send(JSON.stringify({
        id: 1,
        method: "Runtime.evaluate",
        params: {
          expression: `(() => {
            const docWidth = document.documentElement.clientWidth;
            const scrollWidth = document.documentElement.scrollWidth;
            const bodyScrollWidth = document.body.scrollWidth;
            const overflows = [];
            document.querySelectorAll('*').forEach(el => {
              const r = el.getBoundingClientRect();
              if (r.right > docWidth + 1) {
                overflows.push({
                  tag: el.tagName,
                  cls: el.className,
                  id: el.id,
                  right: Math.round(r.right),
                  width: Math.round(r.width),
                  docWidth
                });
              }
            });
            return {
              docWidth,
              scrollWidth,
              bodyScrollWidth,
              hasHorizontalScroll: scrollWidth > docWidth || bodyScrollWidth > docWidth,
              overflowCount: overflows.length,
              sampleOverflows: overflows.slice(0, 5)
            };
          })()`,
          returnByValue: true
        }
      }));
    });

    const res = await evalPromise;
    ws.close();
    return res.result.value;
  } finally {
    chrome.kill();
  }
}

async function run() {
  const viewports = [
    { name: 'iPhone SE (375px)', w: 375, h: 667 },
    { name: 'iPhone 14/15 (390px)', w: 390, h: 844 },
    { name: 'iPhone Pro Max (430px)', w: 430, h: 932 },
    { name: 'Tablet iPad (768px)', w: 768, h: 1024 },
    { name: 'Small Laptop (1024px)', w: 1024, h: 768 },
    { name: 'Desktop (1440px)', w: 1440, h: 900 },
    { name: 'Ultrawide/FullHD (1920px)', w: 1920, h: 1080 }
  ];

  const routes = ['/', '/solar-om', '/quality-safety', '/services', '/projects', '/about', '/contact', '/clients', '/gallery', '/solar-services'];

  console.log('--- STARTING COMPREHENSIVE RESPONSIVE AUDIT ---');
  let failures = 0;

  for (const vp of viewports) {
    console.log(`\nTesting Viewport: ${vp.name} (${vp.w}x${vp.h})`);
    for (const route of routes) {
      try {
        const result = await testWidth(vp.w, vp.h, route);
        if (result.hasHorizontalScroll || result.overflowCount > 0) {
          console.error(`❌ FAIL [${vp.name}] ${route}: scrollWidth=${result.scrollWidth}, docWidth=${result.docWidth}, overflows=${result.overflowCount}`);
          console.error('Sample overflowing elements:', JSON.stringify(result.sampleOverflows, null, 2));
          failures++;
        } else {
          console.log(`✅ PASS [${vp.name}] ${route}`);
        }
      } catch (err) {
        console.error(`⚠️ ERROR testing [${vp.name}] ${route}:`, err.message);
      }
    }
  }

  console.log(`\nAudit completed with ${failures} layout failures.`);
}

run();
