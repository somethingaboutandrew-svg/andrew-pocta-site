// Deterministic site check. Run: node tests/verify.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const url = 'file://' + path.join(root, 'index.html');
let failed = 0;
const check = (name, ok, extra = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  (' + extra + ')' : ''}`); if (!ok) failed++; };

const browser = await chromium.launch();
for (const [label, width, height] of [['desktop', 1440, 900], ['phone', 390, 844]]) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) errors.push(m.text()); });
  await page.goto(url);
  await page.waitForTimeout(800);

  check(`${label}: no console errors`, errors.length === 0, errors.join(' | '));
  check(`${label}: no horizontal overflow`, !(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)));

  if (label === 'desktop') {
    const projects = await page.evaluate(() => window.SITE.projects.map(p => p.id));
    for (const id of projects) {
      const opener = page.locator(`button[data-p="${id}"]`).first();
      check(`project "${id}" has a tile`, (await opener.count()) > 0);
      await opener.click();
      await page.waitForTimeout(450);
      check(`project "${id}" panel opens`, await page.evaluate(() => document.getElementById('drawer').classList.contains('on')));
      await page.keyboard.press('Escape');
      await page.waitForTimeout(450);
      check(`project "${id}" panel closes`, !(await page.evaluate(() => document.getElementById('drawer').classList.contains('on'))));
    }
    if (await page.locator('#ans button[data-v="56"]').count()) {
      await page.click('#ans button[data-v="56"]');
      check('Math Mystic demo answers', /Yes!/.test(await page.textContent('#fb')));
    }
    await page.keyboard.press('Control+k');
    await page.waitForTimeout(250);
    const items = await page.$$eval('#kl li', l => l.map(x => x.textContent));
    check('⌘K palette lists every project', projects.length > 0 && (await page.evaluate(() => window.SITE.projects.every(p => document.getElementById('kl').textContent.includes(p.title)))), `${items.length} items`);
    await page.keyboard.press('Escape');
    const demoIds = await page.evaluate(() => window.SITE.projects.filter(p => /^https?:\/\/|^\//.test(p.link || '') || p.video).map(p => p.id));
    check('projects with a demo show a Live demo button', (await page.$$eval('#bento .demo', l => l.length)) === demoIds.length, `${demoIds.length} demo(s)`);
    check('visitors see no [PLACEHOLDER] tags', (await page.evaluate(() => document.body.innerText.includes('PLACEHOLDER'))) === false);
    const draft = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await draft.goto(url + '?draft'); await draft.waitForTimeout(500);
    const phInContent = await draft.evaluate(() => JSON.stringify(window.SITE).includes('[PLACEHOLDER'));
    let phSeen = await draft.$$eval('.ph', l => l.length);
    for (const id of projects) {                       // placeholders can also live inside project panels
      await draft.locator(`button[data-p="${id}"]`).first().click();
      await draft.waitForTimeout(350);
      phSeen += await draft.$$eval('#dbody .ph', l => l.length);
      await draft.keyboard.press('Escape');
      await draft.waitForTimeout(350);
    }
    check('?draft mode shows remaining placeholders', !phInContent || phSeen > 0, `${phSeen} tag(s)`);
    await draft.close();
    const linkCount = await page.$$eval('#links > *', l => l.length);
    const expected = await page.evaluate(() => 1 + (window.SITE.links || []).length);
    check('contact shows email + all links', linkCount === expected, `${linkCount}/${expected}`);
  }
  await page.close();
}
await browser.close();
console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
