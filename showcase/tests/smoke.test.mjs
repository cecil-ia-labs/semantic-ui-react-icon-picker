import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const html = read('../index.html'), js = read('../app.js'), css = read('../style.css');
test('project npm/source and authorship links', () => {
  assert.match(html, /npmjs.com\/package\/@cecilialabs\/semantic-ui-react-icon-picker/);
  assert.match(html, /github.com\/cecil-ia-labs\/semantic-ui-react-icon-picker/);
  assert.match(html, /Sam Knutson/);
});
test('preview clearly distinguishes illustrative icons from actual package', () => {
  assert.match(html, /illustrative interface, not the actual Semantic UI React component/);
  assert.match(html, /Illustrative Unicode symbols/);
});
test('accessible controls and event handling', () => {
  for (const id of ['query','icons','clear','copy']) assert.ok(html.includes('id="'+id+'"'));
  assert.ok(js.includes("search.addEventListener('input',render)"));
  assert.ok(js.includes('button.setAttribute'));
});
test('responsive layout and correct canonical', () => {
  assert.match(css, /@media\(max-width:620px\)/);
  assert.match(html, /rel="canonical"/);
});