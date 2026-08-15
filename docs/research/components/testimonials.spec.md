# Testimonials Specification

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Interaction model:** click-driven carousel (dot indicators + prev/next buttons)
- **Section:** py-16 bg-white, height 505px

## DOM Structure
```
section (py-16 bg-white dark:bg-slate-900)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   └─ div (grid grid-cols-1 lg:grid-cols-2 gap-10 items-start)
      ├─ div
      │  └─ h2 (text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight)
      │     "What Our<br>Clients Say"
      └─ div
         └─ Card:
            div (text-card-foreground bg-white dark:bg-slate-800 border rounded-xl shadow-sm)
            └─ div (p-6)
               ├─ div (flex gap-3 mb-4)
               │  ├─ div (w-1 h-8 bg-black dark:bg-white rounded-full) [vertical accent bar]
               │  └─ p (text-gray-700 dark:text-gray-300 leading-relaxed) [quote text]
               ├─ div (mt-6 border-t pt-4)
               │  ├─ h4 (font-semibold text-slate-900 dark:text-white) [name]
               │  └─ p (text-sm text-gray-500 dark:text-gray-400) [role]
               └─ div (flex items-center justify-between mt-6)
                  ├─ div (flex gap-2) [4 dot indicators]
                  │  └─ button (w-2 h-2 rounded-full transition-all bg-black dark:bg-white) active
                  │     button (w-2 h-2 rounded-full transition-all bg-gray-300 dark:bg-gray-600) inactive
                  └─ div (flex gap-2) [prev/next buttons]
                     ├─ button (border rounded-full h-9 w-9) > ChevronLeft h-4 w-4
                     └─ button (border rounded-full h-9 w-9) > ChevronRight h-4 w-4
```

## Computed Styles

### h2
- fontSize: 48px (lg:text-5xl), fontWeight: 600, lineHeight: 48px
- color: rgb(15,23,42) (slate-900), leading-tight
- "What Our" + <br> + "Clients Say"

### Card
- borderRadius: 16px (rounded-xl), border: 1px solid rgb(226,232,240)
- boxShadow: 0 1px 2px rgba(0,0,0,0.05)
- width 588px, height 377px

### Vertical accent bar
- width 4px (w-1), height 32px (h-8), backgroundColor rgb(0,0,0), borderRadius 9999px

### Quote text
- fontSize 16px, color: rgb(55,65,81) (gray-700), line-height relaxed (1.625)

### Name (h4)
- fontSize: 16px, fontWeight: 600

### Role (p)
- fontSize: 14px, color: rgb(107,114,128) (gray-500)

### Dot indicators
- w-2 h-2 rounded-full transition-all
- Active: bg-black dark:bg-white
- Inactive: bg-gray-300 dark:bg-gray-600

### Prev/Next buttons
- h-9 w-9 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground
- ChevronLeft / ChevronRight h-4 w-4

## Testimonial Content
- Quote: "Partnering with BoonWare has been an incredibly smooth and rewarding experience. As a brand rooted in traditional Indian fashion, we were looking for a tech partner who could respect our legacy while helping us transition into a more modern digital space. The BoonWare team brought clarity, creativity, and technical excellence to the table. We're excited to soon launch our new website — a project that reflects both innovation and cultural depth — and BoonWare played a key role in making it happen."
- Name: "Feroz"
- Role: "Founder, Bombay Design"
- 4 dots, dot 1 active (index 0)
- 1 testimonial in the array (carousel has 4 dots but only 1 testimonial shown on load)

## States & Behaviors
- Carousel with state index (0-3)
- Dot click sets index
- Prev/Next buttons cycle index (wrapping)
- Active dot = bg-black; inactive = bg-gray-300

## Responsive
- Desktop: 2 columns (left heading, right card)
- Mobile: stacks, heading 30px
