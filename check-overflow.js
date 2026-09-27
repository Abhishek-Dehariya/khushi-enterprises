const { spawn } = require('child_process');
const http = require('http');

async function checkOverflow(width, height, url) {
  return new Promise((resolve, reject) => {
    // Launch Chrome with remote debugging
    const chrome = spawn('google-chrome', [
      '--headless',
      '--remote-debugging-port=9222',
      '--disable-gpu',
      `--window-size=${width},${height}`,
      url
    ]);

    setTimeout(async () => {
      try {
        // Fetch CDP version/json
        const res = await new Promise((res2, rej2) => {
          http.get('http://127.0.0.1:9222/json', (resp) => {
            let data = '';
            resp.on('data', chunk => data += chunk);
            resp.on('end', () => res2(JSON.parse(data)));
          }).on('error', rej2);
        });

        const target = res.find(t => t.type === 'page');
        if (!target) throw new Error('No page target found');

        // Connect WebSocket
        const WebSocket = require('node:stream'); 
        // We can use simple evaluate via HTTP or curl
        resolve(res);
      } catch (e) {
        reject(e);
      } finally {
        chrome.kill();
      }
    }, 1500);
  });
}
console.log('Script ready');
