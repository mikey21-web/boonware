# Contact Section Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Interaction model:** static form (client-side only, no backend)
- **Section:** py-16 lg:py-24 bg-gray-100, height 797px

## DOM Structure
```
section (py-16 lg:py-24 bg-gray-100 dark:bg-slate-800)
└─ div (container mx-auto px-4 sm:px-6 lg:px-8)
   └─ div (max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-lg p-8 border border-gray-200 dark:border-slate-700)
      ├─ div (text-center mb-12)
      │  ├─ h2 (text-3xl lg:text-4xl font-bold text-neutral-dark dark:text-white mb-4) "Ready to Get Started?"
      │  └─ p (text-neutral-gray dark:text-gray-300 text-lg) "Tell us about your project and we'll get back to you within 24 hours."
      └─ div (grid grid-cols-1 lg:grid-cols-2 gap-8)
         ├─ div [form column]
         │  ├─ h3 (text-xl font-semibold text-neutral-dark dark:text-white mb-4) "Send us a message"
         │  └─ div (rounded-lg border shadow-sm bg-white dark:bg-slate-800 p-8)
         │     └─ form (space-y-6)
         │        ├─ div (flex row gap-6)
         │        │  ├─ div.quick-contact [Name field]
         │        │  └─ div.quick-contact [Email field]
         │        ├─ div [Message field]
         │        └─ button "Send Message" (bg-primary hover:bg-primary-dark dark:bg-blue-700 dark:hover:bg-blue-800 w-full)
         └─ div (lg:pl-8) [contact info]
            ├─ h3 "Or reach out directly" (text-xl font-semibold mb-4)
            └─ div (space-y-4)
               ├─ div [Phone: +91 9076269629]
               ├─ div [Email: info@boonware.in]
               └─ div [Response Time: Within 24 hours]
```

## Computed Styles

### Section
- backgroundColor: rgb(243,244,246) (gray-100); padding: 64px/96px

### Outer card
- maxWidth: 896px (max-w-4xl), backgroundColor: rgb(255,255,255)
- borderRadius: 8px, padding: 32px
- border: 1px solid rgb(229,231,235) (gray-200)

### h2
- fontSize: 36px (lg:text-4xl), fontWeight: 700, color: rgb(33,33,33) (neutral-dark)
- marginBottom: 16px, textAlign: center

### subtitle p
- fontSize: 18px, color: rgb(158,158,158) (neutral-gray)

### h3 (form header)
- fontSize: 20px, fontWeight: 600, marginBottom: 16px

### Form inputs
- Name/Email: input with label. Input classes:
  `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm`
- Labels: `text-sm font-medium leading-none`
- Placeholders: "Your Name", "Email Address"

### Message textarea
- `w-full px-3 py-2 border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`
- placeholder: "Tell us about your project..."
- rows: 4

### Send Message button
- `text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary-dark dark:bg-blue-700 dark:hover:bg-blue-800`
- backgroundColor: rgb(0,112,96), color: white, borderRadius: 6px
- height: 40px, width: 100%

### Contact info block
- h4: `font-medium text-neutral-dark dark:text-white` (16px, 500)
- p: `text-neutral-gray dark:text-gray-300` (16px)
- gap: 16px (space-y-4)

## Form Fields
- Name (input text, required, placeholder "Your Name")
- Email (input email, required, placeholder "Email Address")
- Message (textarea, required, placeholder "Tell us about your project...", rows 4)

## Contact Info Content
- Phone: +91 9076269629
- Email: info@boonware.in
- Response Time: Within 24 hours

## States & Behaviors
- Form submit: prevent default (client-side only), optionally show success message
- Name+Email side by side (flex row gap-6)

## Responsive
- Desktop: 2 columns (form | contact info)
- Mobile: 1 column
