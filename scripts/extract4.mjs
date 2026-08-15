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

  // Get the FAQ section container
  const faqSection = page.locator('section.py-16.bg-gray-50').last();
  await faqSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  const answers = await faqSection.evaluate((sec) => {
    const buttons = sec.querySelectorAll('button[data-state]');
    const out = [];
    buttons.forEach((b) => {
      const q = b.textContent?.trim().replace(/\s+/g, ' ').slice(0, 120);
      // Find the content div controlled by this button
      const contentId = b.getAttribute('aria-controls');
      let content = document.getElementById(contentId);
      if (!content) {
        // fallback: look in the accordion item wrapper
        const item = b.closest('[data-state][data-orientation]') || b.closest('div.border');
        content = item?.querySelector('[data-state="open"], [role="region"]') || null;
      }
      const visible = content && content.getAttribute('data-state') === 'open';
      out.push({ question: q, hasContent: !!content, contentVisible: visible, contentText: content?.textContent?.trim().slice(0, 200) });
    });
    return out;
  });

  // Now click each and capture
  const faqItems = [];
  const buttons = await faqSection.locator('button[data-state]').all();
  for (const b of buttons) {
    const q = (await b.textContent())?.replace(/\s+/g, ' ').trim();
    if (faqItems.some(f => f.question === q)) continue;
    await b.click();
    await page.waitForTimeout(600);
    const ans = await faqSection.evaluate(() => {
      const content = document.querySelector('[data-state="open"][role="region"]');
      return content?.textContent?.trim().replace(/\s+/g, ' ').slice(0, 600) || '';
    });
    faqItems.push({ question: q, answer: ans });
    // close
    await b.click();
    await page.waitForTimeout(400);
  }
  fs.writeFileSync(path.join(OUT, 'FAQ3.json'), JSON.stringify(faqItems, null, 2));
  console.log('FAQ3:', JSON.stringify(faqItems, null, 2));

  // Also grab the exact accordion item HTML for styling
  const accordionHtml = await faqSection.evaluate((sec) => {
    const items = sec.querySelectorAll('div[data-state][data-orientation]');
    if (items.length) return items[0].outerHTML;
    return sec.querySelector('div.border')?.outerHTML || '';
  });
  fs.writeFileSync(path.join(OUT, 'ACCORDION_ITEM.html'), accordionHtml);
  console.log('Accordion item HTML saved, length:', accordionHtml.length);

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
