# WhatsApp Float Specification

## Overview
- **Target file:** `src/components/WhatsAppFloat.tsx`
- **Interaction model:** static with hover scale
- **Position:** fixed bottom-right

## DOM Structure
```
a (fixed bottom-5 right-5 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform)
└─ WhatsAppIcon (w-6 h-6)
```

## Computed Styles
- position: fixed, bottom: 20px, right: 20px, zIndex: 40
- backgroundColor: rgb(37,211,102) (#25D366)
- color: white, padding: 16px (p-4)
- borderRadius: 9999px (rounded-full)
- boxShadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)
- width/height: 56px
- Icon: w-6 h-6 (24px)

## States & Behaviors
- hover:scale-110 with transition-transform

## Implementation
- Link to WhatsApp: https://wa.me/919076269629

## Assets
- WhatsAppIcon from src/components/icons.tsx
