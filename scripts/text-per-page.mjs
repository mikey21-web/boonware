import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const dir = "docs/research/pages";
const outDir = "docs/research/pages/text";
mkdirSync(outDir, { recursive: true });

const files = readdirSync(dir).filter((f) => f.endsWith(".html"));
for (const f of files) {
  const html = readFileSync(join(dir, f), "utf8");
  const body = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  const text = body
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, " [img: $1] ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  writeFileSync(join(outDir, f.replace(".html", ".txt")), text);
}
console.log("wrote per-page text to", outDir);

const structural = {};
for (const f of files) {
  const html = readFileSync(join(dir, f), "utf8");
  const sections = [];
  const re = /<section[^>]*>([\s\S]*?)<\/section>/g;
  let m;
  let i = 0;
  while ((m = re.exec(html)) && i < 30) {
    const sec = m[1];
    const heading = sec.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/);
    const secClass = (m[0].match(/<section([^>]*)>/) || [])[1] || "";
    sections.push({
      n: i,
      class: secClass.slice(0, 120),
      heading: heading ? heading[1].replace(/<[^>]+>/g, "").slice(0, 80) : null,
    });
    i++;
  }
  structural[f] = sections;
}
writeFileSync("docs/research/pages/STRUCTURE.json", JSON.stringify(structural, null, 2));
console.log("wrote STRUCTURE.json");
