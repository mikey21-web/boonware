export interface ServiceDetail {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  heroImg: string;
  what: {
    heading: string;
    body: string;
    bullets: string[];
  };
  how: {
    heading: string;
    steps: { n: string; title: string; desc: string; time: string }[];
  };
  roi: {
    heading: string;
    body: string;
    metrics: { val: string; label: string }[];
    example: string;
  };
  price: {
    from: string;
    note: string;
    includes: string[];
  };
  faq: { q: string; a: string }[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "website-development",
    num: "01",
    title: "Website & App Development",
    tagline: "Designed to convert. Built to last. Yours on day one.",
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
    what: {
      heading: "Websites and apps that work as hard as you do.",
      body: "We build fast, conversion-focused websites, full-stack web applications, and admin dashboards using React, Next.js, and Node.js. Fixed scope. Fixed price. Source code handed to you on delivery.",
      bullets: [
        "Landing pages that load under 2s and convert 3× industry average",
        "Full-stack web apps with real-time data, auth, and admin panels",
        "Custom CMS so you update content without a developer",
        "API integrations with any third-party tool you already use",
        "30-day post-launch support included, no extra charge",
      ],
    },
    how: {
      heading: "How we go from idea to live in under 4 weeks.",
      steps: [
        { n: "01", title: "Discovery call", desc: "60 minutes. We map your goals, user journey, and technical requirements.", time: "Day 1" },
        { n: "02", title: "Scope & quote", desc: "Fixed-scope document with exact deliverables, timeline, and price. No surprises.", time: "Day 2–3" },
        { n: "03", title: "Design", desc: "Hi-fi Figma designs you approve before we write a line of code.", time: "Week 1" },
        { n: "04", title: "Development", desc: "We build in sprints with daily updates. You see progress every single day.", time: "Week 2–3" },
        { n: "05", title: "QA & launch", desc: "Full device testing, SEO meta, Google Analytics, and go live.", time: "Week 4" },
      ],
    },
    roi: {
      heading: "How this pays for itself.",
      body: "A ₹49,999 landing page that converts 2% better than your current site means every 1,000 visitors sends 20 extra leads your way. If each lead is worth ₹5,000 in business, that's ₹1,00,000 in extra revenue from the first month alone.",
      metrics: [
        { val: "3×", label: "Average conversion lift vs old site" },
        { val: "60 days", label: "Typical payback period" },
        { val: "∞", label: "Ongoing revenue, zero recurring cost" },
      ],
      example: "A Mumbai-based coaching business replaced their static site with a Next.js landing page. Monthly inquiries went from 8 to 31 in 45 days.",
    },
    price: {
      from: "₹49,999",
      note: "Fixed price. No monthly retainer. Source code is yours.",
      includes: [
        "Figma design files",
        "Full source code (GitHub)",
        "Deployed & live",
        "30-day support",
        "SEO meta + sitemap",
        "Google Analytics setup",
      ],
    },
    faq: [
      { q: "Do I own the code?", a: "100%. We push everything to your GitHub on day one of delivery. No lock-in." },
      { q: "What if I need changes after launch?", a: "30 days of free support included. After that, we offer hourly or retainer options." },
      { q: "Can you work with my existing design?", a: "Yes. If you have Figma files or even a screenshot, we'll build from it." },
      { q: "How fast can you start?", a: "Usually within 3 business days of signing scope." },
    ],
  },
  {
    slug: "ai-automation",
    num: "02",
    title: "AI & Automation",
    tagline: "Replace salary-hours with logic that runs while you sleep.",
    heroImg: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
    what: {
      heading: "The manual work your team hates — automated.",
      body: "We audit your current workflows, find the highest-ROI automation opportunities, and build them in under 3 weeks. n8n pipelines, LangChain AI agents, WhatsApp bots, CRM sync — all wired together.",
      bullets: [
        "Lead qualification bots that filter 500+ daily leads without a human",
        "WhatsApp auto-reply flows that book appointments 24/7",
        "n8n pipelines connecting your CRM, email, WhatsApp, and calendar",
        "AI agents that read documents, extract data, and take action",
        "Daily summary reports delivered to you on WhatsApp every morning",
      ],
    },
    how: {
      heading: "We find the bottleneck, then we kill it.",
      steps: [
        { n: "01", title: "Workflow audit", desc: "We map every manual step your team repeats daily and find the three highest-ROI automations.", time: "Day 1–2" },
        { n: "02", title: "Blueprint", desc: "Visual automation flow you approve — showing every trigger, action, and fallback.", time: "Day 3–4" },
        { n: "03", title: "Build & integrate", desc: "We connect your tools and build the automation logic using n8n, LangChain, or custom code.", time: "Week 2" },
        { n: "04", title: "Test & train", desc: "End-to-end testing with real data. Your team trained in 30 minutes.", time: "Week 3" },
        { n: "05", title: "Monitor & optimise", desc: "We watch the first 2 weeks of live runs and tune error handling.", time: "Week 3–4" },
      ],
    },
    roi: {
      heading: "Every rupee saved is a rupee earned.",
      body: "A ₹75,000 automation that replaces 3 hours of daily manual work at ₹400/hour saves ₹36,000/month — paying for itself in under 3 months. Then it's pure profit every month after.",
      metrics: [
        { val: "3 months", label: "Average payback period" },
        { val: "10–40h/week", label: "Team time freed per automation" },
        { val: "24/7", label: "System runs with zero overtime" },
      ],
      example: "A Dubai-based real estate agency was spending 4 hours/day qualifying WhatsApp leads manually. We automated it. Same quality, zero human time.",
    },
    price: {
      from: "₹75,000",
      note: "One-time build. No platform fees from us.",
      includes: [
        "Workflow audit included",
        "n8n / LangChain / custom code",
        "All integrations wired",
        "30-day monitoring",
        "Team training session",
        "Documentation handover",
      ],
    },
    faq: [
      { q: "Do I need technical knowledge to use it?", a: "No. We build it so your team can run it. Training is included." },
      { q: "What if a step in the automation fails?", a: "We build error handling and fallbacks into every flow. You get notified immediately." },
      { q: "Can you automate WhatsApp specifically?", a: "Yes — we use the official WhatsApp Business API or Twilio depending on your volume." },
      { q: "Will this work with my existing CRM?", a: "We integrate with HubSpot, Salesforce, Zoho, Airtable, Google Sheets, and most others." },
    ],
  },
  {
    slug: "restaurant-technology",
    num: "03",
    title: "Restaurant Technology",
    tagline: "QR menus. Digital orders. Less chaos. More covers.",
    heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    what: {
      heading: "Complete digitization for your F&B operation.",
      body: "QR ordering system, live kitchen display, WhatsApp menu, and POS integration — everything that reduces wait times, increases table turns, and cuts order errors.",
      bullets: [
        "QR menu on every table — customers order from their phone",
        "Live kitchen display so chefs see orders the second they're placed",
        "WhatsApp ordering for takeaway and delivery",
        "Full POS integration with your existing billing system",
        "Loyalty programme that auto-sends discounts to repeat customers",
      ],
    },
    how: {
      heading: "Live in your restaurant within 2 weeks.",
      steps: [
        { n: "01", title: "Site visit / call", desc: "We understand your layout, team size, and current pain points.", time: "Day 1" },
        { n: "02", title: "Digital menu setup", desc: "We upload your full menu with photos, prices, and categories.", time: "Week 1" },
        { n: "03", title: "System integration", desc: "Kitchen display, POS sync, and WhatsApp ordering all wired together.", time: "Week 1–2" },
        { n: "04", title: "Staff training", desc: "2-hour training session for your entire team. It's that simple to use.", time: "Week 2" },
        { n: "05", title: "Go live + support", desc: "We're available for 30 days post-launch to fix any hiccup immediately.", time: "Week 2" },
      ],
    },
    roi: {
      heading: "Pays for itself in 90 days. Guaranteed.",
      body: "If QR ordering increases table turns from 3 to 4 per sitting, and your average cover is ₹800, that's ₹800 extra per table per day. Across 20 tables, that's ₹16,000/day — ₹4.8L/month.",
      metrics: [
        { val: "90 days", label: "Typical payback period" },
        { val: "25–40%", label: "Average order value increase" },
        { val: "0 errors", label: "Missed or wrong orders with KDS" },
      ],
      example: "A restaurant in Dubai moved from paper orders to QR. Average wait time dropped from 18 to 9 minutes. Monthly covers up 31%.",
    },
    price: {
      from: "₹1,20,000",
      note: "Complete system. One-time setup. No per-order commission.",
      includes: [
        "QR menu system",
        "Kitchen display software",
        "WhatsApp ordering",
        "POS integration",
        "Staff training",
        "30-day support",
      ],
    },
    faq: [
      { q: "Do customers need an app to order?", a: "No. They scan a QR code and order from their browser. Zero friction." },
      { q: "What POS systems do you integrate with?", a: "Petpooja, UrbanPiper, Lightspeed, Square, and most others. Tell us what you use." },
      { q: "Can we update the menu ourselves?", a: "Yes. You get a simple dashboard to add items, update prices, and run offers." },
      { q: "Does it work for multiple branches?", a: "Yes — one dashboard, multiple locations, each with separate menus if needed." },
    ],
  },
  {
    slug: "ecommerce-marketplaces",
    num: "04",
    title: "E-Commerce & Marketplaces",
    tagline: "Built to sell from day one. Scales to 10,000 orders without a rewrite.",
    heroImg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",
    what: {
      heading: "Stores that sell. Platforms that scale.",
      body: "Shopify stores, custom multi-vendor marketplaces with full buyer/seller/admin dashboards, payment gateway integration, and AI-powered upsell flows. Everything to turn visitors into repeat buyers.",
      bullets: [
        "Shopify stores with custom theme, upsell flows, and abandoned cart recovery",
        "Multi-vendor marketplaces with seller onboarding and commission management",
        "Razorpay, Stripe, PayU payment gateway integration",
        "AI-powered product recommendations that increase basket size",
        "Full analytics: revenue, conversion, CAC, LTV in one dashboard",
      ],
    },
    how: {
      heading: "From product catalogue to first sale in 3 weeks.",
      steps: [
        { n: "01", title: "Store strategy", desc: "We map your customer journey, pricing model, and competitor gaps.", time: "Day 1–2" },
        { n: "02", title: "Design & UX", desc: "Conversion-optimised layouts — every click designed to push toward purchase.", time: "Week 1" },
        { n: "03", title: "Build & integrate", desc: "Payment gateway, product catalogue, inventory sync, and seller portal if needed.", time: "Week 2" },
        { n: "04", title: "Test & optimise", desc: "Full purchase flow tested on mobile and desktop. Speed optimised to under 2s.", time: "Week 3" },
        { n: "05", title: "Launch & growth", desc: "Go live with Google Shopping setup, basic SEO, and Meta pixel wired.", time: "Week 3" },
      ],
    },
    roi: {
      heading: "Your store is a 24/7 salesperson.",
      body: "If your current store converts at 1% and we get it to 2%, that's double the revenue from the same traffic. With 10,000 monthly visitors at ₹2,000 average order value, that's ₹2,00,000 extra revenue per month.",
      metrics: [
        { val: "2×", label: "Revenue from same traffic with better conversion" },
        { val: "0%", label: "Commission to us (unlike marketplaces)" },
        { val: "24/7", label: "Selling while you sleep" },
      ],
      example: "Pokhraj Jewellers went from 8 monthly online enquiries to 31 in 45 days after we rebuilt their e-commerce with WhatsApp checkout.",
    },
    price: {
      from: "₹80,000",
      note: "Fixed price. Your domain. Your data. Your customers.",
      includes: [
        "Custom Shopify or Next.js store",
        "Payment gateway integration",
        "Product catalogue setup",
        "Mobile-first design",
        "Google Analytics + Meta Pixel",
        "30-day support",
      ],
    },
    faq: [
      { q: "Shopify or custom?", a: "Shopify if you need speed and simplicity. Custom Next.js if you need marketplace features or complete control." },
      { q: "Can you migrate from an existing store?", a: "Yes — we migrate product data, customer accounts, and order history." },
      { q: "Do you handle payment gateway registration?", a: "We guide you through it and do all the technical integration." },
      { q: "What about shipping and logistics?", a: "We integrate with Shiprocket, Delhivery, or any logistics partner you use." },
    ],
  },
  {
    slug: "branding-marketing",
    num: "05",
    title: "Branding & Marketing",
    tagline: "Logo to paid ads — the complete brand stack.",
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    what: {
      heading: "Make your brand impossible to ignore.",
      body: "Logo, brand identity, social media content, Google and Meta ad management — everything a growing business needs to dominate their market without hiring a full marketing team.",
      bullets: [
        "Brand identity: logo, typography, colour system, brand guidelines",
        "Social media content calendar and monthly posts across 3 platforms",
        "Google Search and Display ad campaigns with real weekly reporting",
        "Meta (Instagram + Facebook) ads with A/B tested creatives",
        "SEO: on-page optimisation, Google My Business, and monthly content",
      ],
    },
    how: {
      heading: "Brand built in 2 weeks. Ads running in 3.",
      steps: [
        { n: "01", title: "Brand audit", desc: "We audit your current brand, competitors, and market positioning.", time: "Day 1–2" },
        { n: "02", title: "Identity design", desc: "Logo, colours, fonts, and guidelines. 3 concepts, unlimited refinements until perfect.", time: "Week 1" },
        { n: "03", title: "Content setup", desc: "First month of social content designed and scheduled.", time: "Week 2" },
        { n: "04", title: "Ad campaigns", desc: "Google and Meta campaigns launched with conversion tracking wired.", time: "Week 3" },
        { n: "05", title: "Report & optimise", desc: "Weekly performance reports and monthly campaign reviews.", time: "Ongoing" },
      ],
    },
    roi: {
      heading: "Marketing that pays you back.",
      body: "Google Ads average 200% ROAS for service businesses in India. A ₹25,000/month ad spend generating ₹75,000 in new business means your marketing pays 3× what it costs.",
      metrics: [
        { val: "200%+", label: "Average ROAS for service businesses" },
        { val: "3–6 months", label: "To build organic SEO traction" },
        { val: "₹0", label: "Wasted on brand work that doesn't align" },
      ],
      example: "A coaching business in Mumbai spent ₹30,000/month on Google Ads we managed. Month 3 revenue attributable to ads: ₹1.1L.",
    },
    price: {
      from: "₹25,000",
      note: "Brand package is one-time. Ad management is monthly.",
      includes: [
        "Logo + brand kit",
        "Social media templates",
        "First-month content",
        "Google/Meta campaign setup",
        "Weekly reporting",
        "Monthly review call",
      ],
    },
    faq: [
      { q: "Is the ad spend included in the price?", a: "No — ad spend goes directly to Google/Meta. Our fee covers strategy, creative, and management." },
      { q: "Can you just do branding without ads?", a: "Yes. Brand identity is a standalone package from ₹25,000." },
      { q: "How do we measure ROI?", a: "We set up conversion tracking from day one. You see exactly which ad drove which lead." },
      { q: "Do you write the content or do we?", a: "We write, design, and schedule everything. You approve before it posts." },
    ],
  },
  {
    slug: "mobile-apps",
    num: "06",
    title: "Mobile Applications",
    tagline: "iOS and Android — one codebase, half the cost, both platforms.",
    heroImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=85",
    what: {
      heading: "Apps that work on every phone your customers carry.",
      body: "React Native cross-platform apps built for iOS and Android simultaneously. Push notifications, offline mode, biometric auth, App Store + Play Store submission — everything included.",
      bullets: [
        "Single codebase runs natively on both iOS and Android",
        "Push notifications for re-engagement and transactional alerts",
        "Offline mode — works without internet, syncs when connected",
        "Biometric authentication (Face ID, Touch ID, fingerprint)",
        "App Store and Google Play submission handled by us",
      ],
    },
    how: {
      heading: "From wireframe to both app stores in 6 weeks.",
      steps: [
        { n: "01", title: "UX wireframes", desc: "Every screen mapped before design begins. We validate the user journey first.", time: "Week 1" },
        { n: "02", title: "UI design", desc: "High-fidelity Figma designs for every screen, approved by you.", time: "Week 2" },
        { n: "03", title: "Development", desc: "React Native development with daily build previews you can install on your phone.", time: "Week 3–5" },
        { n: "04", title: "QA testing", desc: "Tested on 12+ real devices across iOS and Android versions.", time: "Week 5–6" },
        { n: "05", title: "Store submission", desc: "We handle App Store and Play Store submissions including screenshots and descriptions.", time: "Week 6" },
      ],
    },
    roi: {
      heading: "An app is a direct line to your customer.",
      body: "Apps see 3× higher engagement than mobile websites. Push notifications have 7× higher open rates than email. If your app re-engages 10% of dormant customers each month at ₹1,000 average purchase, that's direct revenue from a one-time build.",
      metrics: [
        { val: "3×", label: "Higher engagement vs mobile web" },
        { val: "7×", label: "Push notification vs email open rate" },
        { val: "60%", label: "Of consumers prefer apps over mobile sites" },
      ],
      example: "A UAE hospitality brand launched an app with loyalty points. Within 3 months, 38% of repeat bookings were coming through the app directly.",
    },
    price: {
      from: "₹1,50,000",
      note: "Both platforms. One price. Source code yours.",
      includes: [
        "iOS + Android app",
        "UI/UX design",
        "Backend API",
        "Push notifications",
        "App Store submission",
        "30-day support",
      ],
    },
    faq: [
      { q: "Why React Native instead of native?", a: "Native (Swift + Kotlin) costs 2× more and takes 2× longer. React Native delivers 95% of the same performance for most apps." },
      { q: "Do you build the backend too?", a: "Yes. We build the Node.js API and database included in the project scope." },
      { q: "What if Apple rejects the app?", a: "We handle all rejections until approval. Included in the project." },
      { q: "Can you update an existing app?", a: "Yes — we take on legacy React Native or even native apps for feature additions." },
    ],
  },
  {
    slug: "whatsapp-automation",
    num: "07",
    title: "WhatsApp Automation",
    tagline: "Your best salesperson — available 24/7, never takes a day off.",
    heroImg: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=85",
    what: {
      heading: "Turn WhatsApp into your #1 sales and support channel.",
      body: "Lead capture, qualification, follow-up, appointment booking — all automated on WhatsApp. Integrates with your CRM and sends you a morning summary of every conversation.",
      bullets: [
        "Auto-reply to every new enquiry within 30 seconds, 24/7",
        "Qualify leads with conversational questions before passing to sales",
        "Book appointments into your calendar without human intervention",
        "Follow-up sequences: Day 1, Day 3, Day 7 — automated",
        "Morning WhatsApp summary: leads received, replied, booked",
      ],
    },
    how: {
      heading: "Your WhatsApp selling machine in 2 weeks.",
      steps: [
        { n: "01", title: "Flow mapping", desc: "We map every conversation type: new lead, existing customer, booking, complaint.", time: "Day 1–2" },
        { n: "02", title: "Message writing", desc: "We write every message in your brand voice. You approve before it goes live.", time: "Day 3–5" },
        { n: "03", title: "Integration", desc: "Connected to WhatsApp Business API, your CRM, and Google Calendar.", time: "Week 2" },
        { n: "04", title: "Testing", desc: "100 test conversations across every scenario. Edge cases handled.", time: "Week 2" },
        { n: "05", title: "Go live", desc: "Flip the switch. You start seeing automated conversations within hours.", time: "Week 2" },
      ],
    },
    roi: {
      heading: "What one missed reply costs you.",
      body: "The average business responds to WhatsApp leads in 6 hours. Our automation responds in 30 seconds. Studies show lead conversion drops 80% after the first 5 minutes. If you get 50 leads/month and convert 10%, that's 5 clients. Speed that response and you could be converting 15–20.",
      metrics: [
        { val: "30 sec", label: "Response time vs your 6-hour average" },
        { val: "80%", label: "Drop in conversion after 5 minutes unresponsive" },
        { val: "3×", label: "More bookings from same lead volume" },
      ],
      example: "A real estate agency was losing 60% of WhatsApp leads after hours. Post-automation: 91% replied within 1 minute. Monthly bookings up 2.4×.",
    },
    price: {
      from: "₹45,000",
      note: "One-time build. WhatsApp API costs billed at actuals (usually ₹0.50–₹1 per conversation).",
      includes: [
        "WhatsApp Business API setup",
        "Full conversation flow build",
        "CRM integration",
        "Calendar booking",
        "Follow-up sequences",
        "30-day monitoring",
      ],
    },
    faq: [
      { q: "Is this the official WhatsApp API?", a: "Yes. We use Meta's official WhatsApp Business API — no grey-market tools." },
      { q: "Will it feel robotic to customers?", a: "We write natural, on-brand messages. Most customers don't realise it's automated." },
      { q: "What happens when a bot can't answer?", a: "It escalates to your team with full conversation context. The handoff is seamless." },
      { q: "Can it work in multiple languages?", a: "Yes. We build multi-language flows for Hindi, Arabic, regional languages — whatever your market needs." },
    ],
  },
  {
    slug: "ai-calling-agent",
    num: "08",
    title: "AI Calling Agent",
    tagline: "Human-sounding outbound calls. Zero staff. Zero overtime.",
    heroImg: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=85",
    what: {
      heading: "An AI that calls your leads and books meetings in your calendar.",
      body: "Our AI calling agent dials leads, asks qualifying questions in natural conversation, handles objections, and books meetings directly into your calendar — in English, Hindi, and regional languages.",
      bullets: [
        "Makes 500–1,000 outbound calls per day without staffing costs",
        "Qualifies leads with a 5-question conversation before booking",
        "Books meetings directly into Google Calendar or Calendly",
        "Handles common objections with contextual responses",
        "Full call transcript and recording logged to your CRM",
      ],
    },
    how: {
      heading: "Your AI caller live in 3 weeks.",
      steps: [
        { n: "01", title: "Script design", desc: "We write the calling script based on your service, audience, and typical objections.", time: "Week 1" },
        { n: "02", title: "Voice training", desc: "Voice model trained on your brand tone. Sounds natural, not robotic.", time: "Week 1" },
        { n: "03", title: "Integration", desc: "Connected to your CRM, calendar, and lead source (CSV, Zapier, or API).", time: "Week 2" },
        { n: "04", title: "Test calls", desc: "50 test calls reviewed by your team. Script refined.", time: "Week 2–3" },
        { n: "05", title: "Launch", desc: "Go live. First real calls within 24 hours of approval.", time: "Week 3" },
      ],
    },
    roi: {
      heading: "One agent. 800 calls a day. No salary.",
      body: "A full-time tele-caller in India costs ₹20,000–₹35,000/month and makes 80–120 calls/day. Our AI caller makes 800+/day at a fraction of the cost. If your close rate stays the same and you're calling 6× more leads, do the math.",
      metrics: [
        { val: "800+", label: "Calls per day vs 80–120 from a human" },
        { val: "₹0", label: "Salary, EPF, or overtime" },
        { val: "6×", label: "Lead coverage from same budget" },
      ],
      example: "A loan DSA in Mumbai replaced 4 tele-callers with our AI agent. Monthly qualified meetings went from 38 to 104. Cost per meeting: 72% lower.",
    },
    price: {
      from: "₹1,00,000",
      note: "One-time build. Telephony costs billed at actuals (approx ₹0.80–₹1.50/min).",
      includes: [
        "AI voice model build",
        "Custom calling script",
        "CRM + calendar integration",
        "Call recording & transcripts",
        "Lead source integration",
        "30-day monitoring",
      ],
    },
    faq: [
      { q: "Does it really sound human?", a: "Modern voice AI is indistinguishable from humans in most conversations. We let you hear samples before we build." },
      { q: "What languages does it support?", a: "English, Hindi, Hinglish, Arabic, Tamil, and Telugu. More on request." },
      { q: "Is this legal in India?", a: "Outbound calling is legal with proper DND compliance. We build DND-check into every call." },
      { q: "Can it handle inbound calls too?", a: "Yes — we can add inbound handling for support, FAQs, and call routing." },
    ],
  },
  {
    slug: "analytics-dashboards",
    num: "09",
    title: "Analytics & Dashboards",
    tagline: "Everything you need to know. One screen. Real-time.",
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    what: {
      heading: "Stop making decisions on gut. Start seeing everything.",
      body: "Custom analytics dashboards built in React that pull from your website, CRM, ad accounts, and social media into a single, real-time view — with alerts when something needs your attention.",
      bullets: [
        "Real-time revenue, leads, and conversion metrics in one view",
        "Multi-source: connects to Google Analytics, Meta Ads, HubSpot, Shopify, and more",
        "Custom KPIs specific to your business (not generic templates)",
        "Automated WhatsApp alerts when key metrics drop or spike",
        "Weekly PDF report generated and sent automatically",
      ],
    },
    how: {
      heading: "Your dashboard live in 2 weeks.",
      steps: [
        { n: "01", title: "Metric audit", desc: "We identify the 10–15 numbers that actually drive your business decisions.", time: "Day 1–2" },
        { n: "02", title: "Data mapping", desc: "We map every data source and build the extraction pipelines.", time: "Week 1" },
        { n: "03", title: "Dashboard build", desc: "React frontend with live data, charts, and drill-down capability.", time: "Week 1–2" },
        { n: "04", title: "Alert setup", desc: "WhatsApp and email alerts for the numbers you can't afford to miss.", time: "Week 2" },
        { n: "05", title: "Training", desc: "30-minute walkthrough. Your team uses it independently from day one.", time: "Week 2" },
      ],
    },
    roi: {
      heading: "Bad data costs more than good dashboards.",
      body: "The average business wastes 20% of its ad budget on campaigns that don't work — they just don't have visibility to see it. A ₹60,000 dashboard that kills ₹15,000/month in wasted ad spend pays for itself in 4 months.",
      metrics: [
        { val: "20%", label: "Average wasted ad spend from poor visibility" },
        { val: "4 months", label: "Typical payback from budget optimisation alone" },
        { val: "10 min", label: "Daily time to review vs 3 hours pulling reports" },
      ],
      example: "A Hyderabad e-commerce brand discovered their top Google Ad campaign had a 4× higher cost per sale than their second-best. Shifting budget saved ₹40,000/month.",
    },
    price: {
      from: "₹60,000",
      note: "One-time build. Data infrastructure is yours.",
      includes: [
        "Custom React dashboard",
        "Up to 5 data sources",
        "Real-time data sync",
        "WhatsApp + email alerts",
        "Weekly auto-reports",
        "30-day support",
      ],
    },
    faq: [
      { q: "Can it connect to Google Sheets?", a: "Yes. Google Sheets, Airtable, Notion, and any API-connected tool." },
      { q: "Is the data stored by you?", a: "No. Data stays in your infrastructure. We build the pipelines and UI only." },
      { q: "Can we add more data sources later?", a: "Yes. We build it modular so new sources plug in without rebuilding the dashboard." },
      { q: "What if we already have Looker or Power BI?", a: "We can build on top of existing tools or replace them — whichever makes more sense for your team." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find(s => s.slug === slug);
}
