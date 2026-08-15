import { readFileSync } from "fs";
const t = readFileSync("docs/research/pages/projects.html", "utf8");
const re = /<img[^>]*src="([^"]*Poster_design[^"]*)"[^>]*>/g;
let m;
while ((m = re.exec(t))) console.log(m[1]);
