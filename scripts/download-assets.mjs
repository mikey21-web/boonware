import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, '../public');

const assets = [
  // Logos & brand
  'https://boonware.in/assets/icon_logo-CTOVYnVL.png',
  'https://boonware.in/assets/BoonWare_icon-DaJz79lM.png',
  // Marquee row 1
  'https://boonware.in/assets/aventodesign-C1q_UmoP.jpeg',
  'https://boonware.in/assets/83d_network_logo-CIX5qxdy.png',
  'https://boonware.in/assets/sivas-BqIVLJmo.jpeg',
  'https://boonware.in/assets/Medifee-BK9IjXwz.jpeg',
  'https://boonware.in/assets/trippytour-DwdFzO-D.png',
  'https://boonware.in/assets/magical%20hands-F-Qin0ls.jpeg',
  'https://boonware.in/assets/braai_boys-DxurLl5E.png',
  // Marquee row 2
  'https://boonware.in/assets/Ammorada_new_Logo-D34n8gQr.png',
  'https://boonware.in/assets/smokey%20charlie-DVjj1GTf.png',
  'https://boonware.in/assets/logo-bombaydesign-BW9fKecq-BW9fKecq.png',
  'https://boonware.in/assets/dhoom-YYD2M81F.jpeg',
  'https://boonware.in/assets/prodigy-hxb4lkIk.jpeg',
  'https://boonware.in/assets/too%20yumm-BNVkXW67.png',
  // Favicon
  'https://boonware.in/assets/favicon-CLQGK-nJ.ico'
];

function nameFromUrl(url) {
  const base = url.split('/').pop().split('?')[0];
  return decodeURIComponent(base);
}

async function download(url, dest) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  console.log('OK', nameFromUrl(url), res.headers.get('content-type'), buf.length);
}

async function main() {
  fs.mkdirSync(path.join(PUBLIC, 'clients'), { recursive: true });
  fs.mkdirSync(path.join(PUBLIC, 'seo'), { recursive: true });

  const batch = 4;
  for (let i = 0; i < assets.length; i += batch) {
    const slice = assets.slice(i, i + batch);
    await Promise.all(slice.map(async (url) => {
      const name = nameFromUrl(url);
      const dest = path.join(PUBLIC, 'clients', name);
      try {
        await download(url, dest);
      } catch (e) {
        console.error('FAIL', name, e.message);
      }
    }));
  }
  console.log('Done');
}

main();
