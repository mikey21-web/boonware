import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const dir = "docs/research/pages";
const outBase = "docs/research/pages/sections";
mkdirSync(outBase, { recursive: true });

const files = readdirSync(dir).filter((f) => f.endsWith(".html") && f !== "TEXT_ALL.txt");

for (const f of files) {
  const html = readFileSync(join(dir, f), "utf8");
  const main = html.match(/<main class="flex-1">([\s\S]*?)<\/main>/);
  const mainHtml = main ? main[1] : html;
  const sections = [];
  const re = /<section[^>]*>[\s\S]*?<\/section>/g;
  let m;
  while ((m = re.exec(mainHtml))) sections.push(m[0]);
  const dirOut = join(outBase, f.replace(".html", ""));
  mkdirSync(dirOut, { recursive: true });
  sections.forEach((s, i) => {
    writeFileSync(join(dirOut, `section-${i}.html`), s);
  });
  writeFileSync(join(dirOut, "_index.json"), JSON.stringify({ file: f, sectionCount: sections.length }));
  console.log(`${f}: ${sections.length} sections`);
}
