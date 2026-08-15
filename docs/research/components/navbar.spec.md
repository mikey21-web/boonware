# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** static + mobile menu toggle
- **Position:** sticky top-0 z-50

## DOM Structure
```
nav (sticky top-0 z-50 bg-background shadow-sm border-b border-border)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   └─ div (flex justify-between items-center h-16)
      ├─ a href="/" (flex items-center space-x-2) [logo]
      │  ├─ div (w-8 h-8 rounded-lg flex items-center justify-center)
      │  │  └─ img /clients/icon_logo-CTOVYnVL.png h-10 w-auto logo
      │  └─ img /clients/BoonWare_icon-DaJz79lM.png h-10 w-auto namelogo
      ├─ div (hidden md:flex items-center space-x-8) [desktop nav]
      │  ├─ a Home (text-primary-light active)
      │  ├─ div.relative > button About + ChevronDown (dropdown)
      │  ├─ a Services /services
      │  ├─ a AI Calling Agent /ai-calling-agent
      │  ├─ a Bundles /bundles
      │  ├─ a Projects /projects
      │  ├─ a Contact /contact
      │  ├─ span Products (muted, cursor-not-allowed)
      │  └─ a Request Demo /appointment (bg-primary button)
      └─ button (md:hidden) [hamburger menu icon]
```

## Computed Styles

### Nav container
- backgroundColor: rgb(255,255,255) (light); dark:bg-[#10281a]
- borderBottom: 1px solid rgb(226,232,240); dark:border-[#1e3a24]
- boxShadow: 0 1px 2px rgba(0,0,0,0.05)
- height: 64px content

### Logo
- icon: h-10 w-auto (32px in 32px container)
- namelogo: h-10 w-auto, margin-left 8px

### Nav links (desktop)
- fontSize: 14px, fontWeight: 500, lineHeight: 20px
- color: rgb(2,8,23) (text-foreground); hover:text-primary-light (transition-colors 0.15s)
- Active "Home": color: rgb(77,182,172) = text-primary-light
- gap between items: 32px (space-x-8)
- "Products": text-muted-foreground cursor-not-allowed

### Request Demo button
- className: inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ... bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2
- backgroundColor: rgb(0,112,96) (=#007060), color: rgb(248,250,252)
- width 125px, height 40px, border-radius 6px

### About dropdown button
- flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary-light transition-colors
- Contains span "About" + ChevronDown (w-4 h-4)

## States & Behaviors
- Sticky at top. On mobile (<768px), desktop nav hidden, hamburger shown.
- Mobile menu: full-screen overlay menu toggled by hamburger (Menu icon ↔ X icon). Mobile menu should include all nav links stacked, plus Request Demo button.
- About button shows dropdown on hover/click. (From original: it's a dropdown for About — includes About Us link.)

## Assets
- `/clients/icon_logo-CTOVYnVL.png` (logo icon)
- `/clients/BoonWare_icon-DaJz79lM.png` (wordmark)
- Icons: ChevronDown, Menu, X from lucide-react

## Text Content
Home, About, Services, AI Calling Agent, Bundles, Projects, Contact, Products, Request Demo

## Responsive
- Desktop (1440px): logo + 9 nav items inline, h-16
- Tablet/Mobile (<768px): hamburger only, nav hidden
