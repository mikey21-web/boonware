import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

const dir = "docs/research/pages";
const files = readdirSync(dir).filter((f) => f.endsWith(".html"));
const urls = new Set();
const localRefs = new Set();

for (const f of files) {
  const html = readFileSync(join(dir, f), "utf8");
  const re = /<img[^>]*src="([^"]+)"[^>]*>/g;
  let m;
  while ((m = re.exec(html))) {
    const src = m[1];
    if (src.startsWith("data:")) continue;
    if (src.startsWith("http")) urls.add(src);
    else if (src.startsWith("/")) localRefs.add(src);
    else localRefs.add(src);
  }
}
writeFileSync("docs/research/pages/IMGS.json", JSON.stringify({ urls: [...urls], localRefs: [...localRefs] }, null, 2));
console.log("URLS:");
for (const u of urls) console.log("  " + u);
console.log("LOCAL REFS:");
for (const l of localRefs) console.log("  " + l);
