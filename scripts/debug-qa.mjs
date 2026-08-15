import { chromium } from "@playwright/test";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.setDefaultTimeout(30000);

page.on("framenavigated", (f) => console.log("NAVIGATED:", f.url()));

await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
console.log("after goto url:", page.url());
console.log("title:", await page.title());

try {
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log("scrollHeight:", h);
} catch (e) {
  console.log("evaluate failed:", e.message);
}

await page.waitForTimeout(2000);
console.log("after 2s url:", page.url());

try {
  const info = await page.evaluate(() => ({
    h: document.documentElement.scrollHeight,
    sections: document.querySelectorAll("section").length,
    footers: document.querySelectorAll("footer").length,
  }));
  console.log("info:", JSON.stringify(info));
} catch (e) {
  console.log("evaluate2 failed:", e.message);
}

await browser.close();
