#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');
const puppeteer = require('puppeteer');

const viewport = { width: 1280, height: 720, deviceScaleFactor: 1 };
const expectedLog = 'PUP_DEMO_READY:selected=anchor';
const threshold = 0.001;

function readPng(filePath) {
  return PNG.sync.read(fs.readFileSync(filePath));
}

function serveFixture(filePath) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      if (req.url === '/demo.html' || req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(fs.readFileSync(filePath));
        return;
      }
      res.writeHead(404);
      res.end('not found');
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

async function main() {
  const demoPath = path.join(process.cwd(), 'tests/fixtures/pup/demo.html');
  const baselineDir = path.join(process.cwd(), 'tests/fixtures/pup/baseline');
  const outputDir = path.join(process.cwd(), 'tests/fixtures/pup/current');
  const baselinePath = path.join(baselineDir, 'demo.png');
  const currentPath = path.join(outputDir, 'demo.png');
  const diffPath = path.join(outputDir, 'demo.diff.png');

  fs.mkdirSync(outputDir, { recursive: true });

  const { server, port } = await serveFixture(demoPath);
  const consoleLines = [];
  const consoleErrors = [];

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--disable-gpu',
        '--font-render-hinting=none',
        '--force-color-profile=srgb',
        '--disable-skia-runtime-opts',
      ],
      defaultViewport: viewport,
    });

    const page = await browser.newPage();
    page.on('console', (msg) => {
      const line = `[${msg.type()}] ${msg.text()}`;
      consoleLines.push(line);
      if (msg.type() === 'error') consoleErrors.push(line);
    });
    page.on('pageerror', (err) => {
      consoleErrors.push(`[pageerror] ${err.message}`);
    });

    await page.goto(`http://127.0.0.1:${port}/demo.html`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: currentPath });

    await browser.close();

    if (!consoleLines.some((line) => line.includes(expectedLog))) {
      throw new Error(`Expected console log not found: ${expectedLog}`);
    }
    if (consoleErrors.length > 0) {
      throw new Error(`Console contains errors:\n${consoleErrors.join('\n')}`);
    }

    if (!fs.existsSync(baselinePath)) {
      fs.copyFileSync(currentPath, baselinePath);
      console.log(`[test:pup] Baseline created at ${baselinePath}`);
      return;
    }

    const baselineImage = readPng(baselinePath);
    const currentImage = readPng(currentPath);
    if (
      baselineImage.width !== currentImage.width ||
      baselineImage.height !== currentImage.height
    ) {
      throw new Error('Screenshot dimensions do not match baseline.');
    }

    const diffImage = new PNG({ width: baselineImage.width, height: baselineImage.height });
    const diffPixels = pixelmatch(
      baselineImage.data,
      currentImage.data,
      diffImage.data,
      baselineImage.width,
      baselineImage.height,
      { threshold: 0.1 }
    );

    const ratio = diffPixels / (baselineImage.width * baselineImage.height);
    fs.writeFileSync(diffPath, PNG.sync.write(diffImage));

    if (ratio > threshold) {
      throw new Error(`Screenshot mismatch ratio ${ratio.toFixed(6)} exceeds ${threshold}`);
    }

    console.log(`[test:pup] OK (diff ratio=${ratio.toFixed(6)})`);
  } finally {
    server.close();
  }
}

main().catch((err) => {
  console.error('[test:pup] FAIL');
  console.error(err);
  process.exit(1);
});
