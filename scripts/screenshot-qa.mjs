import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const outDir = "docs/clone-screenshots";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.addInitScript(() => {
  const style = document.createElement("style");
  style.textContent = "* { animation: none !important; transition: none !important; }";
  document.head.appendChild(style);
});
page.setDefaultTimeout(60000);

await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/clone-full-desktop.png`, fullPage: true });

await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(500);
await page.screenshot({ path: `${outDir}/clone-full-mobile.png`, fullPage: true });

await page.setViewportSize({ width: 1440, height: 900 });
await page.waitForTimeout(500);
const sections = [
  ["hero", "section", 0],
  ["trustedbrands", "div", 0],
  ["servicebundles", "section", 2],
  ["testimonials", "section", 3],
  ["contact", "section", 4],
  ["faq", "section", 5],
  ["footer", "footer", 0],
];
for (const [name, tag, idx] of sections) {
  const loc = page.locator(`${tag}:visible`).nth(idx);
  if (await loc.count()) {
    await loc.screenshot({ path: `${outDir}/clone-${name}.png` });
  }
}

await browser.close();
console.log(`done -> ${outDir}`);
