# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Interaction model:** static
- **Section:** py-20, height 463px

## DOM Structure
```
section (bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 py-20)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   └─ div (text-center)
      ├─ h1 (text-4xl lg:text-6xl font-bold text-neutral-dark dark:text-white mb-6)
      │  └─ "Mastering Innovation, " + span.text-gradient "Simplifying Success"
      ├─ div (w-24 h-1 gradient-border mx-auto mb-6)
      ├─ p (text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto)
      └─ div (flex flex-col sm:flex-row gap-4 justify-center)
         ├─ a Request Demo (bg-primary, href=/appointment) h-11 rounded-md px-8
         └─ a View Bundles (border, href=/bundles) h-11 rounded-md px-8
```

## Computed Styles

### Section
- backgroundImage: linear-gradient(to right bottom, rgb(239,246,255), rgb(224,231,255))
  = from-blue-50 to-indigo-100
- padding: 80px 0 (py-20)

### h1
- fontSize: 60px (lg), 36px (base text-4xl), fontWeight: 700
- lineHeight: 60px, color: rgb(33,33,33) = #212121 (neutral-dark)
- marginBottom: 24px
- textAlign: center

### .text-gradient span
- background: linear-gradient(135deg, #007060, #4db6ac)
- background-clip: text; -webkit-text-fill-color: transparent

### gradient-border div
- width: 96px, height: 3px, background: linear-gradient(to right, #007060, #4db6ac)
- borderRadius: 2px, margin: 0 auto 24px

### p subtitle
- fontSize: 20px, color: rgb(75,85,99) (gray-600), maxWidth: 768px
- margin: 0 auto 32px
- text: "Complete service bundles for startups and growing businesses. Get AI, automation, and software solutions that scale with your success."

### Request Demo button (a)
- inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8
- backgroundColor: rgb(0,112,96), color: rgb(248,250,252) — solid primary (no border)
- width 157px, height 44px, borderRadius 6px
- padding: 0 32px

### View Bundles button (a)
- Same classes but bg-white, border 1px solid rgb(226,232,240), color rgb(2,8,23)
- width 151px, height 44px

## States & Behaviors
- Buttons: hover:bg-primary/90 (Request Demo), hover:bg-accent (View Bundles)

## Text Content
- "Mastering Innovation, Simplifying Success"
- "Complete service bundles for startups and growing businesses. Get AI, automation, and software solutions that scale with your success."
- "Request Demo" → /appointment
- "View Bundles" → /bundles

## Responsive
- Desktop: h1 text-6xl (60px), two buttons inline
- Mobile: h1 text-4xl (36px), buttons stack vertically (flex-col)
