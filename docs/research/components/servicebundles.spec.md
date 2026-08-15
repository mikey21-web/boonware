# ServiceBundles Specification

## Overview
- **Target file:** `src/components/ServiceBundles.tsx`
- **Interaction model:** static with hover shadow, cards link to /bundles/*
- **Section:** py-20 bg-white, height 534px

## DOM Structure
```
section (py-20 bg-white dark:bg-slate-900)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   ├─ h2 "Our Service Bundles" (text-3xl font-bold text-center text-gray-900 dark:text-white mb-12)
   └─ div (grid grid-cols-1 md:grid-cols-3 gap-8)
      └─ [3 bundle cards]
         Card:
         div (rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-card-foreground shadow-sm hover:shadow-lg transition-shadow cursor-pointer)
         ├─ div (flex flex-col space-y-1.5 p-6)
         │  ├─ div (flex justify-center mb-4) > svg w-8 h-8 text-primary-light
         │  ├─ h3 (font-semibold tracking-tight text-xl text-center dark:text-white)
         │  └─ p (text-sm text-muted-foreground text-center dark:text-gray-300)
         └─ div (p-6 pt-0 text-center)
            ├─ p (text-2xl font-bold text-primary-light dark:text-blue-400 mb-4) "Starting at ₹55,000"
            └─ a "Learn More" (bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-md)
```

## Computed Styles

### Section
- backgroundColor: rgb(255,255,255); padding: 80px 0

### h2
- fontSize: 30px, fontWeight: 700, color: rgb(17,24,39), textAlign: center, marginBottom: 48px

### Grid
- grid-template-columns: repeat(3, minmax(0, 1fr)), gap: 32px

### Card
- width 384px, height 290px, borderRadius: 8px
- border: 1px solid rgb(229,231,235) (gray-200)
- boxShadow: 0 1px 2px rgba(0,0,0,0.05)
- transition box-shadow 0.15s; hover:shadow-lg; cursor-pointer

### Card h3
- fontSize: 20px, fontWeight: 600, letterSpacing: -0.5px, lineHeight: 28px, textAlign: center
- marginTop: 6px

### Card description
- fontSize: 14px, lineHeight: 20px, color: rgb(100,116,139) (muted-foreground), textAlign: center, marginTop: 6px

### Price
- fontSize: 24px, fontWeight: 700, lineHeight: 32px, color: rgb(77,182,172) (primary-light)
- marginBottom: 16px, textAlign: center

### Learn More button
- bg-primary (rgb(0,112,96)) text-primary-foreground hover:bg-primary/90
- width: 100%, height: 40px, borderRadius: 6px, fontSize: 14px
- padding: 8px 16px

## Bundle Content
1. Icon: Utensils, Title: "Restaurant Automation", Desc: "Complete restaurant digitization from QR ordering to POS billing", Price: "Starting at ₹55,000", href: /bundles/restaurant
2. Icon: Bot, Title: "AI/ML Bundle", Desc: "Intelligent features like recommendations and smart chatbots", Price: "Starting at ₹55,000", href: /bundles/ai-ml
3. Icon: ShoppingCart, Title: "E-Commerce Bundle", Desc: "Complete multi-role marketplace with user, seller, and admin systems", Price: "Starting at ₹49,999", href: /bundles/ecommerce

## Icons
- lucide-react: Utensils, Bot, ShoppingCart (all w-8 h-8 text-primary-light)

## Responsive
- Desktop: 3 columns
- Tablet: 1 column (md:grid-cols-3 means 3 cols at md+; below md stacks)
