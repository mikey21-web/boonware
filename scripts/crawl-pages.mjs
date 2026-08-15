import { chromium } from "@playwright/test";
import { mkdirSync, writeFileSync } from "fs";

const routes = [
  "about",
  "services",
  "ai-calling-agent",
  "bundles",
  "bundles/restaurant",
  "bundles/ai-ml",
  "bundles/ecommerce",
  "projects",
  "contact",
  "appointment",
  "terms-and-conditions",
  "privacy-policy",
  "refund-policy",
];

const outDir = "docs/research/pages";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.setDefaultTimeout(60000);

for (const route of routes) {
  const url = `https://boonware.in/${route}`;
  const slug = route.replace(/\//g, "_");
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(2500);
    const info = await page.evaluate(() => {
      const main = document.querySelector("#root");
      const clone = main ? main.cloneNode(true) : document.body.cloneNode(true);
      const imgs = clone.querySelectorAll("img");
      imgs.forEach((i) => {
        const src = i.getAttribute("src") || "";
        i.setAttribute("data-src-captured", src);
      });
      return {
        url: location.href,
        title: document.title,
        height: document.documentElement.scrollHeight,
        sectionCount: document.querySelectorAll("section").length,
        textLen: (main ? main.textContent : "").trim().length,
        html: clone.outerHTML,
      };
    });
    const fileName = `${outDir}/${slug}.html`;
    writeFileSync(fileName, `<!-- ${info.url} -->\n${info.html}`);
    await page.screenshot({ path: `${outDir}/${slug}.png`, fullPage: true, timeout: 45000 });
    console.log(`OK ${route} | ${info.title} | sections=${info.sectionCount} | h=${info.height} | chars=${info.textLen} | -> ${fileName}`);
  } catch (e) {
    console.log(`FAIL ${route}: ${e.message.split("\n")[0]}`);
  }
}

await browser.close();
