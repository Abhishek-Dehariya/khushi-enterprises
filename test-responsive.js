const http = require('http');

// Simple CDP script using Node built-in http and websocket or Chrome remote debugging
const { spawn } = require('child_process');

async function testScreenshots() {
  const viewports = [
    { name: 'mobile-375', w: 375, h: 812 },
    { name: 'mobile-390', w: 390, h: 844 },
    { name: 'mobile-430', w: 430, h: 932 },
    { name: 'tablet-768', w: 768, h: 1024 },
    { name: 'desktop-1024', w: 1024, h: 768 },
    { name: 'desktop-1440', w: 1440, h: 900 },
    { name: 'desktop-1920', w: 1920, h: 1080 }
  ];

  const routes = ['/', '/solar-om', '/quality-safety', '/services', '/projects', '/contact', '/about'];

  for (const vp of viewports) {
    for (const r of routes) {
      const filename = `/tmp/screen-${vp.name}-${r.replace(/\//g, '_') || 'home'}.png`;
      // Use chrome command
      const cmd = `google-chrome --headless --disable-gpu --window-size=${vp.w},${vp.h} --screenshot="${filename}" "http://localhost:3000${r}"`;
      // Run synchronously
      require('child_process').execSync(cmd, { stdio: 'ignore' });
      const stat = require('fs').statSync(filename);
      console.log(`Rendered ${vp.name} (${vp.w}x${vp.h}) for ${r} -> ${stat.size} bytes`);
    }
  }
}

testScreenshots().catch(console.error);
