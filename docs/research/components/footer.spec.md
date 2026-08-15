# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static with hover states
- **Section:** bg-slate-950 text-white, height 381px

## DOM Structure
```
footer (bg-slate-950 dark:bg-[#10281a] text-white)
└─ div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12)
   ├─ div (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8)
   │  ├─ div [Brand column]
   │  │  ├─ div (flex items-center space-x-2 mb-4)
   │  │  │  ├─ div (w-8 h-8 rounded-lg flex items-center justify-center)
   │  │  │  │  └─ img /clients/icon_logo-CTOVYnVL.png (h-10 w-auto logo)
   │  │  │  └─ span (text-3xl font-bold text-primary) "BoonWare"
   │  │  ├─ p (text-muted-foreground text-sm mb-4) "AI, automation, and software service bundles..."
   │  │  ├─ div (flex space-x-3) [social icons]
   │  │  │  ├─ a YouTube (hover:text-primary-light)
   │  │  │  └─ div (flex space-x-4)
   │  │  │     ├─ a LinkedIn
   │  │  │     ├─ a Instagram
   │  │  │     └─ a GitHub
   │  │  └─ p (text-sm mt-4 text-gray-300) "Working with clients across <br><span class=text-white font-medium>Dubai, UK, US, UAE, Australia, India, and Canada</span>"
   │  ├─ div [Quick Links]
   │  │  ├─ h3 (text-lg font-semibold mb-4 text-white) "Quick Links"
   │  │  └─ ul (space-y-2)
   │  │     └─ li > a (text-muted-foreground hover:text-primary-light transition-colors)
   │  ├─ div [More Resources]
   │  │  ├─ h3 "More Resources"
   │  │  └─ ul (space-y-2) > li > a
   │  └─ div [Contact Info]
   │     ├─ h3 "Contact Info"
   │     └─ div (space-y-3)
   │        ├─ div (flex items-center space-x-3) [phones - 2 numbers]
   │        │  └─ Phone icons + numbers
   │        └─ div (flex items-center space-x-3) [email]
   └─ div (border-t border-border dark:border-[#1e3a24] mt-8 pt-8 text-center)
      └─ p (text-muted-foreground text-sm) "© 2026 BoonWare. All rights reserved."
```

## Computed Styles

### Footer
- backgroundColor: rgb(2,6,23) (slate-950)
- dark:bg-[#10281a]
- color: white, padding: 48px 0

### Brand column
- span "BoonWare": text-3xl font-bold text-primary (30px, 700, color #007060)
- p: text-sm (14px), text-muted-foreground (rgb(148,163,184) on dark), marginBottom 16px

### Social icons
- size 16px, color text-muted-foreground, hover:text-primary-light
- YouTube: https://www.youtube.com/channel/UCfrCaEErQ_OK6yQZyAILtHg
- LinkedIn: https://www.linkedin.com/company/boonware/
- Instagram: https://www.instagram.com/boonware_agency/ (target=_blank)
- GitHub: https://github.com/boonware-agency

### Column headers (h3)
- text-lg font-semibold text-white (18px, 600), marginBottom: 16px

### Links
- ul space-y-2 (8px gap)
- a: text-muted-foreground hover:text-primary-light transition-colors (14px)

### Contact info
- div space-y-3, each item flex items-center space-x-3
- Phone: +91 9076269629, +91 8291393581
- Email: info@boonware.in

### Bottom bar
- borderTop: 1px solid rgb(226,232,240) (border-border)
- marginTop: 32px, paddingTop: 32px, textAlign: center
- p: text-sm text-muted-foreground

## Quick Links Content
- Home → /
- About Us → /about
- Services → /services
- Bundles → /bundles

## More Resources Content
- Terms & Conditions → /terms-and-conditions
- Privacy Policy → /privacy-policy
- Refund Policy → /refund-policy

## Assets
- /clients/icon_logo-CTOVYnVL.png
- Icons from src/components/icons.tsx: YouTubeIcon, LinkedInIcon, InstagramIcon, GitHubIcon
- Phone, Mail from lucide-react

## Responsive
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column
