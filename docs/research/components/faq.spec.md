# FAQ Section Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Interaction model:** click-driven accordion (shadcn Accordion)
- **Section:** py-16 bg-gray-50, height 502px

## DOM Structure
```
section (py-16 bg-gray-50 dark:bg-slate-900)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
   └─ div (grid grid-cols-1 lg:grid-cols-2 gap-10 items-start)
      ├─ div
      │  └─ h2 (text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight)
      │     "Frequently Asked<br>Questions"
      └─ div
         └─ Accordion (type single, collapsible) space-y-4
            └─ [5 items]
               Item:
               div (bg-white dark:bg-slate-800 border rounded-lg px-4 shadow-sm)
               └─ AccordionItem (value=...)
                  ├─ AccordionTrigger (flex flex-1 items-center justify-between font-medium py-4)
                  │  ├─ div (flex items-center gap-3 text-left)
                  │  │  ├─ div (w-1 h-6 bg-black dark:bg-white rounded-full) [accent bar]
                  │  │  └─ span (text-base md:text-lg font-medium) [question]
                  │  └─ ChevronDown (h-4 w-4 shrink-0 transition-transform duration-200)
                  └─ AccordionContent (overflow-hidden text-sm)
```

## Computed Styles

### Section
- backgroundColor: rgb(249,250,251) (gray-50); padding: 64px 0

### h2
- fontSize: 48px (lg:text-5xl), fontWeight: 600, lineHeight: 48px
- color: rgb(15,23,42) (slate-900)
- "Frequently Asked" + <br> + "Questions"

### Accordion item
- backgroundColor: rgb(255,255,255), border: 1px solid rgb(226,232,240)
- borderRadius: 8px, padding: 0 16px (px-4)
- boxShadow: 0 1px 2px rgba(0,0,0,0.05)

### Trigger
- font-medium, padding: 16px 0 (py-4)
- ChevronDown rotates 180deg when open (transition-transform duration-200)

### Accent bar
- width 4px (w-1), height 24px (h-6), bg-black dark:bg-white rounded-full

### Question span
- text-base md:text-lg font-medium (16px/18px)

### Content
- text-sm (14px), text-muted-foreground
- padding: 0 16px 16px 16px when open

## FAQ Content (5 items)
1. Q: "What makes BoonWare different from other service providers?"
   A: "BoonWare specializes in comprehensive service bundles that combine AI, automation, and software development. We focus on delivering complete solutions rather than piecemeal services, ensuring faster deployment and better integration."
2. Q: "How long does it take to complete a typical project?"
   A: "Project timelines vary based on complexity, but our streamlined bundles are designed for quick deployment. Restaurant automation typically takes 4-6 weeks, while AI/ML integrations can be completed in 2-4 weeks."
3. Q: "Do you provide ongoing support after project completion?"
   A: "Yes, we provide 24/7 support and maintenance services. Our team ensures your systems run smoothly and can scale as your business grows."
4. Q: "Can you customize the bundles for our specific needs?"
   A: "Absolutely! While our bundles provide a solid foundation, we can customize them to meet your specific business requirements and integrate with your existing systems."
5. Q: "What technologies do you use?"
   A: "We use cutting-edge technologies including AI/ML frameworks, modern web development stacks, cloud platforms, and automation tools. Our tech stack is chosen based on your project's specific needs."

## Implementation
- Use shadcn Accordion (single type, collapsible)
- Style AccordionTrigger/Content to match computed styles above
- ChevronDown icon rotates on open

## Responsive
- Desktop: 2 columns (left heading, right accordion)
- Mobile: stacks, heading 30px
