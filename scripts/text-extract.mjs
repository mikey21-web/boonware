import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

const dir = "docs/research/pages";
const files = readdirSync(dir).filter((f) => f.endsWith(".html"));

let out = "";
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
  out += `===== ${f} =====\n${text}\n\n`;
}
writeFileSync("docs/research/pages/TEXT_ALL.txt", out);
console.log(out.slice(0, 9000));
