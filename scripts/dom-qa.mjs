import { chromium } from "@playwright/test";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3100";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.setDefaultTimeout(30000);
await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);

const report = await page.evaluate(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const style = (el) => {
    if (!el) return null;
    const c = getComputedStyle(el);
    return {
      bg: c.backgroundColor,
      color: c.color,
      fontSize: c.fontSize,
      fontWeight: c.fontWeight,
      border: c.borderRadius,
    };
  };

  const sections = $$("section");
  const hero = sections[0];
  const stats = $$("section")[2];
  const bundles = $$("section")[2];
  const h1 = $("h1");
  const nav = $("header");
  const footer = $("footer");
  const whatsapp = $("a[href*='wa.me']");
  const accordionItems = $$("[data-orientation] button, [role='button']");

  return {
    url: location.href,
    title: document.title,
    sectionCount: sections.length,
    sectionBackgrounds: sections.map((s) => getComputedStyle(s).backgroundColor),
    navPresent: !!nav,
    navBg: nav ? getComputedStyle(nav).backgroundColor : null,
    navSticky: nav ? getComputedStyle(nav).position : null,
    h1: h1 ? h1.textContent.trim().slice(0, 80) : null,
    h1Color: h1 ? getComputedStyle(h1).color : null,
    h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
    h1Bg: h1 ? getComputedStyle(h1).backgroundColor : null,
    whatsappBg: whatsapp ? getComputedStyle(whatsapp).backgroundColor : null,
    whatsappPos: whatsapp ? getComputedStyle(whatsapp).position : null,
    footerBg: footer ? getComputedStyle(footer).backgroundColor : null,
    footerText: footer ? footer.textContent.trim().slice(0, 120) : null,
    accordionItemCount: $$("[data-state]").length,
    accordionTriggerText: $$("[data-state]").map((el) => el.textContent.trim().slice(0, 60)),
    marqueeEl: !!$(".marquee-container, [class*='marquee']"),
    imagesLoaded: $$("img").map((img) => ({ src: img.getAttribute("src"), w: img.naturalWidth, h: img.naturalHeight })),
    links404: null,
  };
});

console.log(JSON.stringify(report, null, 2));

for (const img of report.imagesLoaded) {
  if (!img.src) continue;
  const resp = await page.request.get(img.src.startsWith("http") ? img.src : baseUrl + img.src);
  if (resp.status() !== 200) console.log("BROKEN IMG:", img.src, resp.status());
}

await browser.close();
