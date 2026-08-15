import { chromium } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/services",
  "/ai-calling-agent",
  "/bundles",
  "/bundles/restaurant",
  "/bundles/ai-ml",
  "/bundles/ecommerce",
  "/projects",
  "/contact",
  "/appointment",
  "/terms-and-conditions",
  "/privacy-policy",
  "/refund-policy",
];

const baseUrl = process.env.BASE_URL ?? "http://localhost:4321";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.setDefaultTimeout(30000);

for (const route of routes) {
  try {
    await page.goto(baseUrl + route, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(900);
    const info = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      const broken = imgs.filter((i) => !i.naturalWidth).map((i) => i.getAttribute("src"));
      const h1 = document.querySelector("h1");
      return {
        sections: document.querySelectorAll("section").length,
        h1: h1 ? h1.textContent.trim().slice(0, 60) : null,
        imgs: imgs.length,
        broken: broken.slice(0, 8),
      };
    });
    console.log(
      `[${info.sections}sec][${info.imgs}img] ${route} | h1: ${info.h1 || "(none)"}` +
        (info.broken.length ? ` | BROKEN: ${info.broken.join(", ")}` : "")
    );
  } catch (e) {
    console.log(`ERROR ${route}: ${e.message.split("\n")[0]}`);
  }
}

await browser.close();
