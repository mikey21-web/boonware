import { mkdirSync, writeFileSync } from "fs";

const localRefs = [
  "icon_logo-CTOVYnVL.png",
  "BoonWare_icon-DaJz79lM.png",
  "ishaque-RBoHBDVo.jpeg",
  "suzanne1-j5b959xL.jpeg",
  "shabaan-CbrrHu3f.jpeg",
  "pokhrajjewellers-Dlp82dqa.png",
  "pokhraj_logo-D22YXwvP.png",
  "thumbnailAlhayat-CrkJDk6X.jpeg",
  "alhayat_constructions-DzF3byyM.jpeg",
  "firstlight_events-BnjwFESQ.jpeg",
  "drinking_branding-CzKQPBLP.jpg",
  "motion_graphics-D995Ikkq.png",
  "logo_design-K2_Xl-pQ.jpg",
  "Poster_design_1-DK-twxiR.jpeg",
  "Poster_design_2-dupTx-zC.jpeg",
  "Poster_design_3-BQIq4xpm.jpeg",
  "Poster_design_4-DPjUVY_F.jpeg",
  "Poster_design_5-CU7bDr6-.jpeg",
  "Poster_design_6-B9oFaQVm.jpeg",
  "Poster_design_7-C1lAlKoW.jpeg",
  "Poster_design_8-Cj3br1MP.jpeg",
  "Poster_design_9-DU_POh5_.jpeg",
  "Poster_design_10-B0jCjWdh.jpeg",
  "Poster_design_11-ClB1Xfub.jpeg",
  "Poster_design_12-B_L5gbSG.jpeg",
  "social_media_post_advert-BEs-XCif.jpg",
  "DocPlixForDentist-C0TKbwSW.png",
  "DocPlixRX-2AbwLUUx.png",
  "plixcast-Ck1f1ZxH.png",
  "DocPlix-BXV8qokV.png",
  "bombay_design_banner_og-CxLx1u4Y.png",
  "sleepyowl-B4qif9Ju.png",
  "funZilla-BFcFiqqw.png",
  "jalanjalan_shopify-a6FbaDYS.png",
  "deviant_ink-iCuO2bDw.png",
  "caos_clothing-BEU-SZnE.png",
  "urbethh-dZuu2hDe.png",
  "three_monkeys-BgnVp2Wm.png",
  "vision_book_publisher-DrS2YoT7.png",
  "sg_college-ycO7Bemb.png",
  "lo_foods-CPUAvu8t.png",
  "copper_clothing-B9aQ-OHB.png",
  "quantraz-D--QeJDL.png",
  "abrazo-BQRcFAYM.png",
  "rashmishree_creation-BEc4wvo0.png",
  "querated-Bruz9LV-.png",
];

mkdirSync("public/pages", { recursive: true });

let code = `import { mkdirSync, writeFileSync } from "fs";\nimport { dirname } from "path";\n\nconst files = ${JSON.stringify(localRefs, null, 2)};\n\nfor (const f of files) {\n  const url = "https://boonware.in/assets/" + f;\n  try {\n    const res = await fetch(url);\n    if (!res.ok) { console.log("FAIL", f, res.status); continue; }\n    const buf = Buffer.from(await res.arrayBuffer());\n    writeFileSync("public/pages/" + f, buf);\n    console.log("OK", f, buf.length);\n  } catch (e) {\n    console.log("ERR", f, e.message);\n  }\n}\n`;

writeFileSync("scripts/download-pages-assets.mjs", code);
console.log("script written");
