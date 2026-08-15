import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const URL = 'https://boonware.in/';
const OUT = path.resolve('docs');

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('Navigating to', URL);
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  // Full page screenshot at desktop
  const refs = path.join(OUT, 'design-references');
  fs.mkdirSync(refs, { recursive: true });
  await page.screenshot({ path: path.join(refs, 'full-desktop.png'), fullPage: true });
  console.log('Saved full-desktop.png');

  // Global info extraction
  const globalInfo = await page.evaluate(() => {
    const all = [...document.querySelectorAll('*')];
    const fonts = new Map();
    all.slice(0, 1000).forEach(el => {
      const ff = getComputedStyle(el).fontFamily;
      const fs_ = getComputedStyle(el).fontSize;
      const key = ff.split(',')[0].trim().replace(/["']/g, '');
      if (key) fonts.set(key, (fonts.get(key) || 0) + 1);
    });

    const colors = new Map();
    all.forEach(el => {
      const cs = getComputedStyle(el);
      ['color', 'backgroundColor'].forEach(prop => {
        const v = cs[prop];
        if (v && v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent') {
          colors.set(v, (colors.get(v) || 0) + 1);
        }
      });
    });

    const images = [...document.querySelectorAll('img')].map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      parentClass: img.parentElement?.className?.toString().slice(0, 80),
      position: getComputedStyle(img).position,
    }));

    const backgroundImages = [...document.querySelectorAll('*')]
      .filter(el => {
        const bg = getComputedStyle(el).backgroundImage;
        return bg && bg !== 'none';
      })
      .slice(0, 50)
      .map(el => ({
        url: getComputedStyle(el).backgroundImage.slice(0, 200),
        tag: el.tagName + '.' + el.className?.toString().split(' ')[0],
      }));

    const videos = [...document.querySelectorAll('video')].map(v => ({
      src: v.src || v.querySelector('source')?.src,
      poster: v.poster,
      autoplay: v.autoplay,
      loop: v.loop,
      muted: v.muted,
    }));

    return {
      title: document.title,
      fonts: [...fonts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15),
      colors: [...colors.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30),
      images,
      backgroundImages,
      videos,
      svgCount: document.querySelectorAll('svg').length,
      linkTags: [...document.querySelectorAll('link')].map(l => ({ rel: l.rel, href: l.href })),
      scriptTags: [...document.querySelectorAll('script[src]')].map(s => s.src),
      bodyClasses: document.body.className,
      htmlClasses: document.documentElement.className,
      scrollHeight: document.documentElement.scrollHeight,
      hasLenis: !!document.querySelector('.lenis'),
      hasLocomotive: !!document.querySelector('.locomotive-scroll'),
    };
  });

  fs.writeFileSync(path.join(OUT, 'research', 'GLOBAL.json'), JSON.stringify(globalInfo, null, 2));
  console.log('Saved GLOBAL.json');

  // Page topology: identify top-level sections by structure
  const topology = await page.evaluate(() => {
    const sections = [];
    // Walk top-level children of #root
    const root = document.querySelector('#root');
    const walk = (el, depth) => {
      if (!el || depth > 6) return null;
      const rect = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const hasBg = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' || cs.backgroundImage !== 'none';
      const id = el.id || '';
      const cls = el.className?.toString().slice(0, 100) || '';
      return {
        tag: el.tagName.toLowerCase(),
        id,
        cls,
        childCount: el.children.length,
        rect: { w: Math.round(rect.width), h: Math.round(rect.height) },
        hasBg,
        bgColor: cs.backgroundColor,
        textSample: el.textContent?.trim().slice(0, 100),
        children: [...el.children].slice(0, 15).map(c => walk(c, depth + 1)).filter(Boolean),
      };
    };
    // Get top-level layout blocks
    return [...root.children].map(c => walk(c, 0)).filter(Boolean);
  });

  fs.writeFileSync(path.join(OUT, 'research', 'TOPOLOGY.json'), JSON.stringify(topology, null, 2));
  console.log('Saved TOPOLOGY.json');

  // Save raw HTML for reference
  const html = await page.content();
  fs.writeFileSync(path.join(OUT, 'research', 'PAGE.html'), html);
  console.log('Saved PAGE.html');

  // Mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(refs, 'full-mobile.png'), fullPage: true });
  console.log('Saved full-mobile.png');

  await browser.close();
  console.log('Recon complete');
}

main().catch(e => { console.error(e); process.exit(1); });
