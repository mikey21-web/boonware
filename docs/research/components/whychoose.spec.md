# WhyChoose Specification

## Overview
- **Target file:** `src/components/WhyChoose.tsx`
- **Interaction model:** static with hover shadows
- **Section:** py-20 bg-white, height 488px

## DOM Structure
```
section (py-20 bg-white dark:bg-slate-900)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   ├─ h2 "Why Choose BoonWare?" (text-3xl font-bold text-center text-gray-900 dark:text-white mb-12)
   └─ div (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8)
      └─ [4 cards]
         Card:
         div (rounded-lg border bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-shadow)
         ├─ div (flex flex-col space-y-1.5 p-6)
         │  ├─ div (flex justify-center mb-4) > Icon svg w-8 h-8 text-primary-light
         │  └─ h3 (font-semibold tracking-tight text-xl) 
         └─ div (p-6 pt-0) > p (text-sm text-muted-foreground)
```

## Computed Styles

### Section
- backgroundColor: rgb(255,255,255); padding: 80px 0

### h2
- fontSize: 30px, fontWeight: 700, color: rgb(17,24,39) (gray-900)
- textAlign: center, marginBottom: 48px

### Grid
- grid-template-columns: repeat(4, minmax(0, 1fr)), gap: 32px

### Card
- backgroundColor: rgb(255,255,255), borderRadius: 8px
- border: 1px solid rgb(226,232,240)
- boxShadow: 0 1px 2px rgba(0,0,0,0.05)
- transition: box-shadow 0.15s; hover:shadow-lg
- width 280px, height 244px, textAlign: center

### Card icon
- width 32px, height 32px, color: rgb(77,182,172) = text-primary-light

### Card h3
- fontSize: 20px, fontWeight: 600, letterSpacing: -0.5px, lineHeight: 28px

### Card p
- fontSize: 14px, lineHeight: 20px, color: rgb(100,116,139) (muted-foreground)

## Card Content
1. Icon: Zap, Title: "Lightning Fast Delivery", Desc: "Get your projects completed in record time with our streamlined processes and expert team."
2. Icon: Shield, Title: "Enterprise-Grade Security", Desc: "Your data and applications are protected with industry-leading security measures."
3. Icon: Rocket, Title: "Scale Ready Solutions", Desc: "Build for today, scale for tomorrow. Our solutions grow with your business."
4. Icon: CircleCheckBig, Title: "24/7 Support", Desc: "Round-the-clock support to ensure your business never misses a beat."

## Icons
- lucide-react: Zap, Shield, Rocket, CircleCheckBig (all w-8 h-8 text-primary-light)

## Responsive
- Desktop: 4 columns
- Tablet: 2 columns (md:grid-cols-2)
- Mobile: 1 column
