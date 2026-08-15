# TrustedBrands Specification

## Overview
- **Target file:** `src/components/TrustedBrands.tsx`
- **Interaction model:** time-driven marquee (auto-scrolling)
- **Section:** py-10 bg-white overflow-hidden, height 340px
- Uses `react-fast-marquee` library (already installed)

## DOM Structure
```
section (py-10 bg-white dark:bg-slate-900 overflow-hidden)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   ├─ h2 "Trusted By Brands" (text-3xl font-bold text-center text-gray-900 dark:text-white mb-10)
   ├─ Marquee speed={30} gradient={false} pauseOnHover [row 1]
   │  └─ div (flex items-center) [7 imgs]
   └─ Marquee speed={25} gradient={false} pauseOnHover direction="reverse" [row 2]
      └─ div (flex items-center) [6 imgs]
```

## Computed Styles

### h2
- fontSize: 30px, fontWeight: 700, color: rgb(17,24,39), textAlign: center, marginBottom: 40px

### Marquee logos
- className: h-12 md:h-16 lg:h-20 mx-6 object-contain
- height: 80px on lg (h-20), margin: 0 24px (mx-6)
- container height 80px per row

### Row 1 images (7 logos, order):
1. /clients/aventodesign-C1q_UmoP.jpeg (alt: aventodesign, 1245x602)
2. /clients/83d_network_logo-CIX5qxdy.png (alt: dnetwork, 200x200)
3. /clients/sivas-BqIVLJmo.jpeg (alt: sivas, 300x181)
4. /clients/Medifee-BK9IjXwz.jpeg (alt: medifee, 700x213)
5. /clients/trippytour-DwdFzO-D.png (alt: trippytour, 600x340)
6. /clients/magical hands-F-Qin0ls.jpeg (alt: magicalhands, 400x273)
7. /clients/braai_boys-DxurLl5E.png (alt: braaiboys, 225x225)

### Row 2 images (6 logos, order, reversed direction):
1. /clients/Ammorada_new_Logo-D34n8gQr.png (alt: ammarada, 1000x250)
2. /clients/smokey charlie-DVjj1GTf.png (alt: smokeycharlie, 326x154)
3. /clients/logo-bombaydesign-BW9fKecq-BW9fKecq.png (alt: bombaydesign, 500x500)
4. /clients/dhoom-YYD2M81F.jpeg (alt: dhoom, 1536x1024)
5. /clients/prodigy-hxb4lkIk.jpeg (alt: prodigy, 913x517)
6. /clients/too yumm-BNVkXW67.png (alt: tooyumm, 259x194)

## States & Behaviors
- Marquee auto-scrolls continuously, infinite
- Row 1 scrolls left (normal), row 2 scrolls right (reverse)
- pauseOnHover: paused
- Original durations: row1 ~32.8s, row2 ~30.6s

## Implementation
```tsx
import Marquee from "react-fast-marquee";
<Marquee speed={30} pauseOnHover gradient={false}>
  <div className="flex items-center">
    <img src="/clients/..." alt="..." className="h-12 md:h-16 lg:h-20 mx-6 object-contain" />
  </div>
</Marquee>
```

## Responsive
- Logo height: h-12 (48px) mobile, h-16 (64px) tablet, h-20 (80px) desktop
