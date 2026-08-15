import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const URL = 'https://boonware.in/';
const OUT = path.resolve('docs/research');

const SELECTORS = {
  'nav': 'nav',
  'hero': 'section.bg-gradient-to-br',
  'whychoose': 'main > div > section:nth-of-type(2)',
  'stats': 'main > div > section:nth-of-type(3)',
  'marquee1': '.rfm-marquee-container.mb-6',
  'marquee2': '.rfm-marquee-container:not(.mb-6)',
  'bundles': 'main > div > section:nth-of-type(5)',
  'testimonials': 'main > div > section:nth-of-type(6)',
  'contact': 'main > div > section:nth-of-type(7)',
  'faq': 'main > div > section:nth-of-type(8)',
  'whatsapp': 'a.fixed.bottom-5',
  'footer': 'footer'
};

const EXTRACT_SCRIPT = (sel) => {
  const PROPS = ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','textTransform','textDecoration','backgroundColor','backgroundImage','padding','paddingTop','paddingRight','paddingBottom','paddingLeft','margin','marginTop','marginRight','marginBottom','marginLeft','width','height','maxWidth','minWidth','maxHeight','minHeight','display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns','gridTemplateRows','borderRadius','border','borderTop','borderBottom','borderLeft','borderRight','boxShadow','overflow','position','top','right','bottom','left','zIndex','opacity','transform','transition','cursor','objectFit','whiteSpace','flexWrap','alignContent','outline','outlineOffset','textAlign','verticalAlign','textShadow','stroke','fill'];
  function extractStyles(el) {
    const cs = getComputedStyle(el);
    const styles = {};
    PROPS.forEach(p => {
      const v = cs[p];
      if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') styles[p] = v;
    });
    return styles;
  }
  function walk(el, depth, maxDepth) {
    if (!el || depth > maxDepth) return null;
    const children = [...el.children];
    const rect = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(),
      cls: el.className?.toString?.().split(' ').slice(0, 14).join(' ') || '',
      text: el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 400) : null,
      href: el.tagName === 'A' ? el.getAttribute('href') : undefined,
      styles: extractStyles(el),
      rect: { w: Math.round(rect.width), h: Math.round(rect.height) },
      img: el.tagName === 'IMG' ? { src: el.src, alt: el.alt, nw: el.naturalWidth, nh: el.naturalHeight } : null,
      childCount: children.length,
      children: children.slice(0, 30).map(c => walk(c, depth + 1, maxDepth)).filter(Boolean)
    };
  }
  const el = document.querySelector(sel);
  if (!el) return { error: 'not found: ' + sel };
  return walk(el, 0, 6);
};

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);

  const results = {};
  for (const [name, sel] of Object.entries(SELECTORS)) {
    try {
      const data = await page.evaluate(EXTRACT_SCRIPT, sel);
      results[name] = data;
      console.log('OK:', name, data?.error ? data.error : `h=${data?.rect?.h}`);
    } catch (e) {
      results[name] = { error: e.message.slice(0, 200) };
      console.log('FAIL:', name, e.message.slice(0, 120));
    }
  }

  fs.writeFileSync(path.join(OUT, 'SECTION_STYLES.json'), JSON.stringify(results, null, 2));
  console.log('Saved SECTION_STYLES.json');
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
