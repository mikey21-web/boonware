import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const URL = 'https://boonware.in/';
const OUT = path.resolve('docs/research');

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);

  // Find accordion structure
  const structure = await page.evaluate(() => {
    const roots = document.querySelectorAll('[data-orientation="vertical"]');
    const out = [];
    roots.forEach(r => {
      const items = r.querySelectorAll('[data-state]');
      items.forEach(it => {
        out.push({
          tag: it.tagName,
          state: it.getAttribute('data-state'),
          id: it.id,
          cls: it.className.toString().slice(0, 100),
          text: it.textContent.trim().slice(0, 80),
          parentCls: it.parentElement?.className.toString().slice(0, 100),
          html: it.outerHTML.slice(0, 400)
        });
      });
    });
    return out;
  });
  fs.writeFileSync(path.join(OUT, 'ACCORDION.json'), JSON.stringify(structure, null, 2));
  console.log('Accordion structure:', JSON.stringify(structure, null, 2).slice(0, 2000));

  // Use Radix accordion trigger and content
  const faqItems = [];
  const triggerSel = '[data-slot="accordion-trigger"]';
  const triggers = await page.locator(triggerSel).all();
  console.log('Triggers found:', triggers.length);
  if (triggers.length === 0) {
    // fallback: look for buttons inside section[data-slot="accordion"]
    const alt = await page.locator('section[data-slot="accordion"] button, [data-slot="accordion"] button').all();
    console.log('Alt triggers:', alt.length);
  }

  for (let i = 0; i < triggers.length; i++) {
    const q = (await triggers[i].textContent())?.trim();
    await triggers[i].click();
    await page.waitForTimeout(500);
    const contentSel = `[data-slot="accordion-content"][data-state="open"]`;
    const ans = await page.locator(contentSel).textContent().catch(() => '');
    faqItems.push({ question: q, answer: ans?.trim().slice(0, 600) || '' });
  }
  fs.writeFileSync(path.join(OUT, 'FAQ2.json'), JSON.stringify(faqItems, null, 2));
  console.log('FAQ2:', JSON.stringify(faqItems, null, 2));

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
