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

  // FAQ: click each item and record answer text
  const faqResults = [];
  const faqButtons = await page.locator('button[data-state]').all();
  console.log('FAQ buttons:', faqButtons.length);
  // Use accordion trigger selectors
  const triggers = await page.locator('[id*="radix-accordion"] button, button[data-state]').all();
  const seen = new Set();
  for (const t of triggers.slice(0, 6)) {
    const q = (await t.textContent())?.trim();
    if (!q || seen.has(q)) continue;
    seen.add(q);
    await t.click();
    await page.waitForTimeout(600);
    // Find open panel
    const answer = await page.evaluate(() => {
      const open = document.querySelector('[data-state="open"]');
      if (!open) return '';
      // panel content is sibling
      let sib = open.nextElementSibling;
      let depth = 0;
      while (sib && depth < 3) {
        const txt = sib.textContent?.trim();
        if (txt && txt !== open.textContent?.trim()) return txt.slice(0, 500);
        sib = sib.nextElementSibling;
        depth++;
      }
      return '';
    });
    faqResults.push({ question: q, answer });
    // close it
    await t.click();
    await page.waitForTimeout(300);
  }
  fs.writeFileSync(path.join(OUT, 'FAQ.json'), JSON.stringify(faqResults, null, 2));
  console.log('Saved FAQ.json');

  // Contact section + whychoose cards + bundles cards full extraction
  const sections = await page.evaluate(() => {
    const allSections = [...document.querySelectorAll('main section')];
    const info = allSections.map((s, i) => ({
      index: i,
      cls: s.className.slice(0, 120),
      text: s.textContent?.trim().slice(0, 150)
    }));
    return info;
  });
  fs.writeFileSync(path.join(OUT, 'SECTIONS_LIST.json'), JSON.stringify(sections, null, 2));
  console.log('Sections:', sections.map(s => `${s.index}: ${s.cls.slice(0, 40)}`).join('\n'));

  // Check for client logos in marquee
  const marquee = await page.evaluate(() => {
    const containers = document.querySelectorAll('.rfm-marquee-container');
    return [...containers].map(c => {
      return [...c.querySelectorAll('img')].map(img => ({ src: img.src, alt: img.alt, w: img.naturalWidth, h: img.naturalHeight }));
    });
  });
  fs.writeFileSync(path.join(OUT, 'MARQUEE.json'), JSON.stringify(marquee, null, 2));
  console.log('Saved MARQUEE.json');

  // Test hero buttons, check what links they point to
  const links = await page.evaluate(() => {
    return [...document.querySelectorAll('a')].map(a => ({ text: a.textContent?.trim().slice(0, 40), href: a.href })).filter(a => a.href);
  });
  fs.writeFileSync(path.join(OUT, 'LINKS.json'), JSON.stringify(links, null, 2));

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
