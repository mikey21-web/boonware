# Stats Specification

## Overview
- **Target file:** `src/components/Stats.tsx`
- **Interaction model:** static
- **Section:** py-20 bg-gray-50, height 316px

## DOM Structure
```
section (py-20 bg-gray-50 dark:bg-slate-800)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   ├─ h2 "Projects Completed" (text-3xl font-bold text-center text-gray-900 dark:text-white mb-12)
   └─ div (grid grid-cols-1 md:grid-cols-3 gap-8 text-center)
      └─ [3 stat items]
         Item:
         div
         ├─ span (text-3xl font-bold text-primary-light) "243+"
         └─ p (text-lg text-gray-600 dark:text-gray-300 mt-2) "Happy Clients"
```

## Computed Styles

### Section
- backgroundColor: rgb(249,250,251) (gray-50); padding: 80px 0

### h2
- fontSize: 30px, fontWeight: 700, color: rgb(17,24,39)
- textAlign: center, marginBottom: 48px

### Grid
- grid-template-columns: repeat(3, minmax(0, 1fr)), gap: 32px, textAlign: center

### Stat number (span)
- fontSize: 30px, fontWeight: 700, lineHeight: 36px
- color: rgb(77,182,172) (text-primary-light)

### Stat label (p)
- fontSize: 18px, lineHeight: 28px, color: rgb(75,85,99) (gray-600)
- marginTop: 8px

## Stats Content
1. "243+" / "Happy Clients"
2. "250+" / "Projects Successfully Delivered"
3. "97%" / "Client Satisfaction"

## Responsive
- Desktop: 3 columns
- Mobile: 1 column
