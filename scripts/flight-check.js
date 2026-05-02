#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function fail(message) {
  console.error(`[flight-check] ${message}`);
  process.exit(1);
}

const root = process.cwd();
const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const version = pkg.version;
const tag = process.env.GITHUB_REF_NAME || process.env.npm_config_tag || process.env.RELEASE_TAG;
if (tag) {
  const normalized = tag.startsWith('v') ? tag.slice(1) : tag;
  if (normalized !== version) {
    fail(`Tag/version mismatch: tag="${tag}" package.json version="${version}"`);
  }
}

const distDir = path.join(root, 'dist');
if (!fs.existsSync(distDir)) {
  fail('dist/ directory not found. Run "npm run build" first.');
}

const distFiles = fs.readdirSync(distDir).filter((name) => !name.startsWith('.'));
if (distFiles.length === 0) {
  fail('dist/ is empty. Build artifacts are missing.');
}

const requiredFromPkg = [pkg.main, pkg.module]
  .filter(Boolean)
  .map((entry) => path.normalize(entry));

for (const rel of requiredFromPkg) {
  const absolute = path.join(root, rel);
  if (!fs.existsSync(absolute)) {
    fail(`Missing required build output: ${rel}`);
  }
}

const dtsFiles = distFiles.filter((name) => name.endsWith('.d.ts'));
if (dtsFiles.length === 0) {
  fail('No declaration files (*.d.ts) found in dist/.');
}

console.log('[flight-check] OK');
console.log(`[flight-check] version=${version} tag=${tag || '(not provided)'}`);
console.log(`[flight-check] files=${distFiles.join(', ')}`);
