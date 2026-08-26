export interface SubService {
  title: string;
  tagline?: string;
  bullets: string[];
}

export interface LocationCard {
  country: string;
  flag: string;
  city: string;
}

export interface ServiceDetail {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  ready: { before: string; green: string };
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
  subServices: SubService[];
  locations?: LocationCard[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "web-development",
    num: "01",
    title: "Web Development",
    tagline: "Designed to convert. Built to last. Source code yours on day one.",
    ready: { before: "Ready to turn visitors into ", green: "paying customers?" },
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
    what: {
      heading: "Engineered to Convert. Built to Scale.",
      body: "High-speed websites, scalable web applications, and dynamic portals — crafted for seamless user experience and maximum revenue growth. Fixed scope. Fixed timeline. Fixed pricing. 100% source code ownership.",
      bullets: [
        "Landing pages that load under 2s and convert 3× industry average",
        "Full-stack web apps with real-time data, auth, and admin panels",
        "Custom CMS so you update content without a developer",
        "API integrations with any third-party tool you already use",
        "30-day post-launch support included, no extra charge",
      ],
    },
    how: {
      heading: "From idea to live in under 4 weeks.",
      steps: [
        { n: "01", title: "Discovery", desc: "60 minutes. We map your goals, user journey, and technical requirements.", time: "Day 1" },
        { n: "02", title: "Scope & Quote", desc: "Fixed-scope document with exact deliverables, timeline, and price.", time: "Day 2–3" },
        { n: "03", title: "Design", desc: "Hi-fi Figma designs you approve before we write a line of code.", time: "Week 1" },
        { n: "04", title: "Development", desc: "We build in sprints with daily updates. You see progress every day.", time: "Week 2–3" },
        { n: "05", title: "QA & Launch", desc: "Full device testing, SEO meta, Google Analytics, and go live.", time: "Week 4" },
      ],
    },
    roi: {
      heading: "How this pays for itself.",
      body: "A landing page that converts 2% better than your current site means every 1,000 visitors sends 20 extra leads. If each lead is worth ₹5,000 in business, that's ₹1,00,000 extra revenue in the first month alone.",
      metrics: [
        { val: "3×", label: "Average conversion lift vs old site" },
        { val: "60 days", label: "Typical payback period" },
        { val: "∞", label: "Ongoing revenue, zero recurring cost" },
      ],
      example: "A Mumbai coaching business replaced their static site with a Next.js landing page. Monthly inquiries went from 8 to 31 in 45 days.",
    },
    price: {
      from: "₹49,999",
      note: "Fixed price. No monthly retainer. Source code is yours.",
      includes: ["Figma design files", "Full source code (GitHub)", "Deployed & live", "30-day support", "SEO meta + sitemap", "Google Analytics setup"],
    },
    faq: [
      { q: "Do I own the code?", a: "100%. We push everything to your GitHub on day one of delivery. No lock-in." },
      { q: "What if I need changes after launch?", a: "30 days of free support included. After that, we offer hourly or retainer options." },
      { q: "Can you work with my existing design?", a: "Yes. If you have Figma files or even a screenshot, we'll build from it." },
      { q: "How fast can you start?", a: "Usually within 3 business days of signing scope." },
      { q: "Do you handle hosting?", a: "We deploy on Vercel, AWS, or your preferred hosting. Setup included." },
    ],
    subServices: [
      {
        title: "Professional Business Website",
        tagline: "Credibility-driven websites built to showcase services, establish market authority, and convert inquiries.",
        bullets: ["Custom service pages and lead-generation funnels", "Seamless CRM, email, and WhatsApp integration", "High-speed, responsive design across all devices", "Case studies, client testimonials, and trust-building sections", "SEO-optimized architecture for local and global reach", "Easy-to-manage CMS for effortless content updates"],
      },
      {
        title: "Corporate Website",
        tagline: "Enterprise-grade digital platforms engineered for brand authority, investor relations, and operational scale.",
        bullets: ["Multi-tier corporate architecture and stakeholder portals", "Dedicated investor relations, press releases, and career portals", "Enterprise-grade data security and compliance standards", "Multi-language support and international SEO setup", "Scalable cloud hosting architecture and CDN integration", "Role-based permissions and governance workflows"],
      },
      {
        title: "Portfolio Website",
        tagline: "Visually immersive showcase platforms crafted for creative studios, agencies, and independent professionals.",
        bullets: ["Interactive project galleries with dynamic category filtering", "High-resolution media optimization for ultra-fast loading", "Deep-dive case study layouts with project walkthroughs", "Integrated client testimonial and review grids", "Direct client inquiry and consultation booking forms", "Custom animations, micro-interactions, and dark/light modes"],
      },
      {
        title: "Blog Website",
        tagline: "High-readability, content-first platforms optimized for audience engagement, search visibility, and monetization.",
        bullets: ["Clean typography and distraction-free reading experience", "Advanced categorization, tagging, and instant search functionality", "Newsletter signup integrations (Mailchimp, Substack, ConvertKit)", "Ad network placement and affiliate monetization setup", "Schema-rich SEO architecture for Google Discover & News", "Multi-author management with custom editorial workflows"],
      },
      {
        title: "Educational Website & LMS",
        tagline: "Interactive e-learning portals and institutional platforms built for structured digital learning.",
        bullets: ["Full LMS integration — courses, quizzes, and certificates", "Secure student and instructor dashboards", "Live webinar and video classroom scheduling integrations", "Secure payment gateway integration for course enrollments", "Student progress tracking, grading systems, and resources", "Optimized video streaming with adaptive bandwidth"],
      },
      {
        title: "Real Estate Website",
        tagline: "Feature-rich property portals designed to showcase listings and generate high-intent buyer leads.",
        bullets: ["Advanced property search with multi-parameter filtering", "Interactive map integrations (Google Maps / Mapbox)", "Virtual 3D tour embeds and high-definition photo galleries", "Automated viewing schedulers and direct agent contact forms", "MLS/IDX feed integration for live property syncing", "Lead capture funnels synced with real estate CRMs"],
      },
      {
        title: "Healthcare & Medical Website",
        tagline: "Secure, patient-centric platforms designed to build trust and streamline medical appointments.",
        bullets: ["Online appointment booking and doctor schedule management", "Detailed doctor profiles, department pages, and treatment guides", "HIPAA-ready inquiry forms and secure patient portals", "Telemedicine and video consultation integrations", "Patient review, testimonial, and verified FAQ modules", "Emergency contact bars and clinic location finders"],
      },
      {
        title: "Travel & Tourism Website",
        tagline: "Immersive, booking-ready travel platforms engineered to turn wanderlust into confirmed reservations.",
        bullets: ["Interactive tour packages with dynamic day-by-day itineraries", "Real-time availability calendars and reservation booking engines", "Multi-currency support and global payment gateways", "Customer review widgets and TripAdvisor integrations", "High-impact video banners and interactive photo showcases", "Integrated weather widgets and destination guide blogs"],
      },
      {
        title: "Social Networking Website",
        tagline: "Scalable community platforms built for real-time interaction, user engagement, and networking.",
        bullets: ["Custom user profile creation and personalized activity dashboards", "Real-time activity feeds, posting, commenting, and reactions", "Direct messaging, group chats, and push notifications", "Robust moderation tools, user blocking, and reporting systems", "High-concurrency database architecture for instant scalability", "Third-party social login and OAuth authentication"],
      },
      {
        title: "Community & Membership Website",
        tagline: "Dedicated membership hubs and discussion forums built to foster engaged brand communities.",
        bullets: ["Tiered membership access and gated member-only content", "Structured discussion forums, thread voting, and topic categories", "Community event calendars and meetup RSVP systems", "Gamification features: badges, leaderboards, and member points", "Integrated knowledge bases and resource download libraries", "Automated recurring subscription billing and renewals"],
      },
      {
        title: "Landing Pages",
        tagline: "Ultra-fast, single-page funnels engineered specifically for high-conversion paid advertising campaigns.",
        bullets: ["Direct-response copywriting structure and strategic visual hierarchy", "Sub-second load times optimized for Google, Meta, and TikTok Ads", "A/B testing infrastructure setup for continuous conversion rate gains", "Interactive lead forms, instant validation, and CRM webhooks", "Clear CTA placements, sticky navigation, and countdown timers", "Full pixel tracking and analytics event configuration"],
      },
      {
        title: "Online Booking & Reservation Website",
        tagline: "Automated scheduling platforms designed to eliminate back-and-forth and fill your service calendar.",
        bullets: ["Real-time slot availability, multi-staff scheduling, and auto-sync", "Automated SMS and email confirmations, reminders, and follow-ups", "Integrated advance payment, deposit, and refund management", "Time zone auto-detection and calendar sync (Google, Apple, Outlook)", "Multi-location and multi-service booking workflows", "Custom cancellation and rescheduling policy logic"],
      },
      {
        title: "Interactive Website",
        tagline: "Immersive web experiences featuring rich 3D graphics, motion UI, and engaging user journeys.",
        bullets: ["Three.js, WebGL, and custom 3D model rendering", "GSAP-driven scroll animations and smooth micro-interactions", "Interactive product configurators, cost calculators, and customizers", "Gamified quizzes, assessments, and diagnostic funnels", "High-performance asset loading and GPU-accelerated graphics", "Engaging storytelling layouts tailored for maximum user dwell time"],
      },
      {
        title: "Government & Public Sector Website",
        tagline: "Secure, accessible, and citizen-first digital portals built for public institutions and civic bodies.",
        bullets: ["Full WCAG & ADA accessibility compliance for screen readers", "Public notice boards, citizen complaint portals, and gazette archives", "Multi-department directories and official staff contact locators", "Secure, encrypted infrastructure with role-based administrative access", "Multilingual support for diverse demographic reach", "High-traffic surge protection and DDoS mitigation"],
      },
      {
        title: "Personal Website",
        tagline: "Polished personal brand hubs built for executives, creators, keynote speakers, and consultants.",
        bullets: ["Custom bio, speaking engagement reels, and downloadable press kits", "Direct 1-on-1 consultation booking and calendar integration", "Thought leadership blog and article publishing hub", "Social channel consolidation and dynamic social feeds", "Newsletter signup forms and lead magnet delivery", "Modern aesthetic tailored to your individual voice and identity"],
      },
      {
        title: "Event & Conference Website",
        tagline: "High-energy platforms designed to drive ticket sales, manage attendees, and broadcast schedules.",
        bullets: ["Dynamic agenda schedules, speaker profiles, and breakout track details", "Multi-tier ticketing integration (Early Bird, VIP, Group passes)", "Sponsor and exhibitor showcase galleries with lead capture", "Live countdown timers, interactive venue maps, and travel guides", "Live stream embedding and virtual conference access", "Post-event photo/video highlights and presentation archives"],
      },
      {
        title: "News & Media Website",
        tagline: "High-velocity publishing platforms engineered for instant loading, breaking news, and scale.",
        bullets: ["Real-time breaking news tickers and live editorial feeds", "Multi-format media layouts (articles, podcast embeds, video players)", "Advanced paywall, subscription, and premium content gating", "AMP and Google Discover optimized publishing architecture", "High-volume concurrent reader handling with edge caching", "Programmatic ad network placement and native sponsor slots"],
      },
      {
        title: "Static Website",
        tagline: "Lightweight, ultra-secure, and lightning-fast web solutions with zero database overhead.",
        bullets: ["Blazing-fast page load speeds powered by modern JAMstack frameworks", "Near-zero hosting maintenance and virtually unhackable static files", "Global CDN distribution for instant worldwide accessibility", "Clean, lightweight HTML5, CSS3, and vanilla JS / Astro codebases", "Frictionless third-party form handling and headless API integrations", "Maximum cost-efficiency with rock-solid 99.9% uptime reliability"],
      },
      {
        title: "Dynamic Website",
        tagline: "Database-driven platforms built for real-time data handling, user logins, and complex business logic.",
        bullets: ["Robust database integration (PostgreSQL, MongoDB, MySQL)", "Secure user authentication, session control, and role permissions", "Real-time content updates and dynamic filtered search queries", "Custom backend business logic and automated data workflows", "Full API integration with third-party web services and ERPs", "Scalable cloud server architecture built for heavy concurrent usage"],
      },
      {
        title: "E-Commerce Website",
        tagline: "High-converting digital storefronts built to showcase products, manage inventory, and maximize sales.",
        bullets: ["Custom Shopify, WooCommerce, or headless e-commerce builds", "Frictionless one-page checkout and multi-gateway payment setups", "Automated inventory tracking, order management, and shipping sync", "Dynamic product filtering, variants, reviews, and wishlist features", "Abandoned cart recovery and automated email marketing funnels", "Conversion-rate-optimized product pages and 1-click upsell modules"],
      },
    ],
  },
  {
    slug: "app-development",
    num: "02",
    title: "App Development",
    tagline: "iOS and Android — one codebase, half the cost, both platforms.",
    ready: { before: "Ready to put your product in ", green: "every user's pocket?" },
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
        { n: "01", title: "UX Wireframes", desc: "Every screen mapped before design begins. We validate the user journey first.", time: "Week 1" },
        { n: "02", title: "UI Design", desc: "High-fidelity Figma designs for every screen, approved by you.", time: "Week 2" },
        { n: "03", title: "Development", desc: "React Native development with daily build previews on your phone.", time: "Week 3–5" },
        { n: "04", title: "QA Testing", desc: "Tested on 12+ real devices across iOS and Android versions.", time: "Week 5–6" },
        { n: "05", title: "Store Submission", desc: "We handle App Store and Play Store submissions including screenshots.", time: "Week 6" },
      ],
    },
    roi: {
      heading: "An app is a direct line to your customer.",
      body: "Apps see 3× higher engagement than mobile websites. Push notifications have 7× higher open rates than email. If your app re-engages 10% of dormant customers each month, that's direct revenue from a one-time build.",
      metrics: [
        { val: "3×", label: "Higher engagement vs mobile web" },
        { val: "7×", label: "Push notification vs email open rate" },
        { val: "60%", label: "Of consumers prefer apps over mobile sites" },
      ],
      example: "A UAE hospitality brand launched a loyalty app. Within 3 months, 38% of repeat bookings came through the app directly.",
    },
    price: {
      from: "₹1,50,000",
      note: "Both platforms. One price. Source code yours.",
      includes: ["iOS + Android app", "UI/UX design", "Backend API", "Push notifications", "App Store submission", "30-day support"],
    },
    faq: [
      { q: "Why React Native instead of native?", a: "Native (Swift + Kotlin) costs 2× more and takes 2× longer. React Native delivers 95% of the same performance for most apps." },
      { q: "Do you build the backend too?", a: "Yes. We build the Node.js API and database included in the project scope." },
      { q: "What if Apple rejects the app?", a: "We handle all rejections until approval. Included in the project." },
      { q: "Can you update an existing app?", a: "Yes — we take on legacy React Native or even native apps for feature additions." },
      { q: "How long does App Store review take?", a: "Typically 1–3 business days for iOS, 1–7 days for Android. We submit with all required materials." },
    ],
    subServices: [
      {
        title: "E-Commerce & M-Commerce Apps",
        tagline: "Conversion-focused mobile storefronts designed to drive recurring mobile purchases and increase average order value.",
        bullets: ["Frictionless 1-tap checkout (Apple Pay, Google Pay, Cards, Wallets)", "Real-time inventory syncing with Shopify, WooCommerce, or custom backends", "Push notifications for flash sales, order tracking, and abandoned carts", "Personalized product recommendations and visual search", "Wishlists, customer loyalty points, and coupon redemption systems", "Integrated barcode/QR scanners for in-store and delivery workflows"],
      },
      {
        title: "On-Demand Service & Delivery Apps",
        tagline: "End-to-end multi-app ecosystem connecting customers, service providers/drivers, and dispatch admins.",
        bullets: ["Dedicated 3-tier system: Customer App, Driver/Partner App, Admin Dispatch Panel", "Live GPS driver tracking and real-time ETA calculation", "Smart dispatch algorithms for automated task assignment", "In-app calling, masked messaging, and live SOS safety features", "Dynamic surge pricing and instant payout management", "In-app digital receipts, tipping, and multi-tier rating reviews"],
      },
      {
        title: "FinTech & Digital Wallet Apps",
        tagline: "Bank-grade secure financial applications engineered for payments, wealth management, and peer-to-peer transfers.",
        bullets: ["End-to-end data encryption, PCI-DSS, and KYC/AML compliance ready", "Multi-currency digital wallets, QR code payments, and P2P transfers", "Real-time expense tracking, categorized budgeting, and spending insights", "Plaid, Stripe, and banking API integrations", "Multi-factor biometric authentication and session timeout security", "Automated recurring investments and micro-saving modules"],
      },
      {
        title: "Healthcare & Telemedicine Apps",
        tagline: "HIPAA-ready healthcare mobile apps connecting patients with doctors for virtual care and medical tracking.",
        bullets: ["Encrypted WebRTC video consultations and secure doctor-patient chat", "Instant doctor appointment scheduling and digital queue status", "Electronic Health Record (EHR) and prescription management", "Pill reminder notifications and vital signs tracking", "Secure medical report upload, viewing, and digital lab results", "Integration with Apple HealthKit and Google Health Connect"],
      },
      {
        title: "Fitness & Wellness Tracking Apps",
        tagline: "Engaging habit-tracking and workout companion apps that keep users motivated and active.",
        bullets: ["Workout routines with interactive video demonstrations and timers", "Calorie, macronutrient, and daily water intake loggers", "Wearable syncing (Apple Watch, Fitbit, Garmin) for live heart-rate and steps", "Personalized AI workout plans and progress metric graphs", "Gamification: daily streaks, achievement badges, and social leaderboards", "In-app premium subscription tiers (In-App Purchases / Subscriptions)"],
      },
      {
        title: "Educational & E-Learning Apps",
        tagline: "Micro-learning platforms and mobile classrooms tailored for students, institutions, and self-learners.",
        bullets: ["Video lecture streaming with offline downloading capabilities", "Interactive gamified quizzes, flashcards, and instant grading", "Push reminders for study goals, daily streaks, and live classes", "Live tutor 1-on-1 audio/video breakout sessions", "Progress tracking dashboards, milestone certificates, and badges", "Student forum discussions and peer-to-peer messaging"],
      },
      {
        title: "Real Estate & Property Listing Apps",
        tagline: "Visual, map-centric mobile platforms built for home buyers, tenants, agents, and property managers.",
        bullets: ["Map-first search with custom boundary drawing and nearby amenity pins", "360° virtual tour embeds and full-screen HD photo swipe galleries", "Instant viewing appointment scheduling with live agent calendars", "Real-time mortgage and loan EMI calculator widgets", "Push alerts for price drops and new matching neighborhood listings", "Direct WhatsApp and in-app chat integration with verified brokers"],
      },
      {
        title: "Social Networking & Chat Apps",
        tagline: "High-concurrency social platforms built for real-time messaging, content sharing, and community engagement.",
        bullets: ["Real-time chat powered by WebSockets (text, voice notes, media sharing)", "Stories, short-form video feeds, and interactive post reactions", "User profiles, follow/connect mechanics, and discovery feeds", "Push notifications for mentions, direct messages, and comments", "AI content moderation, automated spam filtering, and reporting tools", "End-to-end encrypted private messaging options"],
      },
      {
        title: "Enterprise Mobility & Business Workflow Apps",
        tagline: "Custom internal mobile tools designed to empower field agents, automate warehouse tasks, and boost team productivity.",
        bullets: ["Role-based access control and Single Sign-On (SSO / SAML / Okta)", "Offline-first data sync for remote and field workers", "Barcode/RFID asset scanning and automated inventory updates", "Digital task dispatch, form submissions, and e-signature collection", "Real-time field workforce GPS tracking and attendance check-in", "Deep integration with custom ERP, CRM, and internal databases"],
      },
      {
        title: "Booking & Appointment Scheduling Apps",
        tagline: "Convenient, self-service mobile booking tools for salons, clinics, consultants, and service studios.",
        bullets: ["Real-time calendar slot picking with multi-staff selection", "Automated SMS, email, and push notification appointment reminders", "Upfront deposit and full payment processing via in-app gateways", "Time-zone auto detection and Google/Apple Calendar synchronization", "Self-service booking management (rescheduling and cancellations)", "Customer loyalty stamps, reward points, and recurring memberships"],
      },
      {
        title: "Travel, Booking & Navigation Apps",
        tagline: "All-in-one travel companions designed for itinerary planning, ticket booking, and local navigation.",
        bullets: ["Dynamic multi-day itinerary builders and offline travel guides", "Hotel, flight, and tour package booking integrations", "Offline GPS navigation, interactive city maps, and point-of-interest guides", "Digital boarding pass and ticket wallet storage", "Multi-currency converters and live local translation tools", "Automated flight delay and gate change push alerts"],
      },
      {
        title: "Restaurant & Food Delivery Apps",
        tagline: "Custom brand food-ordering apps built to bypass third-party aggregator commissions.",
        bullets: ["Interactive visual menus with item customizations (toppings, sizes, notes)", "Live kitchen preparation and delivery driver GPS tracking", "Table reservation and QR-code table-side ordering/paying", "Recurring loyalty points, digital scratch cards, and coupon codes", "Multi-branch selector and geo-fenced delivery zone validation", "Integration with kitchen POS systems (Toast, Clover, custom POS)"],
      },
      {
        title: "SaaS Companion & Cloud Apps",
        tagline: "Mobile extensions for web SaaS products, keeping power users connected to core metrics on the go.",
        bullets: ["High-level KPI dashboards, graphs, and live revenue reporting", "Critical event push alerts with quick actionable buttons", "Mobile-optimized CRUD operations for managing customer records", "Seamless session handoff between desktop web and mobile app", "Dark/Light mode theme syncing and biometric instant unlock", "Scalable RESTful / GraphQL API data streaming"],
      },
      {
        title: "IoT & Smart Device Controller Apps",
        tagline: "Hardware-connected applications built to configure, monitor, and control smart consumer devices and industrial hardware.",
        bullets: ["Bluetooth Low Energy (BLE), Wi-Fi, and MQTT device pairing protocols", "Real-time hardware telemetry, status alerts, and sensor graphs", "Remote on/off switches, schedulers, and automation trigger rules", "Over-The-Air (OTA) firmware update management directly from the app", "Smart home integrations (Apple HomeKit, Google Home, Alexa)", "Multi-user device sharing and permission hierarchies"],
      },
      {
        title: "Event Management & Ticketing Apps",
        tagline: "Interactive event apps for conferences, expos, and festivals that simplify attendee check-in and engagement.",
        bullets: ["In-app digital tickets with dynamic anti-screenshot QR codes", "Fast QR ticket scanning mode for event door staff", "Interactive venue maps, speaker schedules, and personal agenda builders", "Live audience Q&A, real-time polling, and session rating tools", "Attendee matchmaking and 1-on-1 networking chat", "Sponsor banner placement and virtual exhibitor booths"],
      },
      {
        title: "AI-Powered & Smart Assistant Apps",
        tagline: "Next-generation mobile applications powered by custom LLMs, computer vision, and predictive AI.",
        bullets: ["Custom voice and text AI chatbots with personalized conversational memory", "On-device and cloud-based computer vision (image recognition, document scanning)", "Predictive recommendation engines based on individual user behavior", "AI-assisted voice transcription, translation, and auto-summaries", "Integration with OpenAI, Anthropic, and custom fine-tuned LLM APIs", "Ultra-low latency streaming responses directly inside the mobile interface"],
      },
      {
        title: "Progressive Web Apps (PWA)",
        tagline: "Installable, app-like experiences delivered straight through the browser without App Store friction.",
        bullets: ["Add-to-Home-Screen installability with zero App Store download delays", "Full offline functionality powered by advanced Service Workers", "Native web push notification support on desktop, Android, and iOS", "Ultra-lightweight file size (<5MB) ensuring instant loading", "Zero app store submission fees or revenue split commissions", "Auto-updating technology — users always run the latest version instantly"],
      },
      {
        title: "Gaming & Entertainment Apps",
        tagline: "Engaging 2D and casual mobile games built for retention, monetization, and viral sharing.",
        bullets: ["2D/casual game mechanics with smooth 60fps rendering", "Global leaderboards, achievements, and daily challenge systems", "In-app purchases, virtual currency, and battle pass monetization", "Social sharing, friend invites, and multiplayer matchmaking", "Push notification re-engagement loops and streak rewards", "Cross-platform builds for iOS and Android from a single codebase"],
      },
      {
        title: "News & Media Apps",
        tagline: "High-velocity content distribution apps built for editorial teams, publishers, and media brands.",
        bullets: ["Category-based article feeds with personalized content ranking", "Offline article saving, bookmarks, and reading history", "Push notifications for breaking news and topic alerts", "Premium subscription tiers and paywalled content access", "Podcast player integration and live radio streaming", "Multi-format content (text, video, audio, photo essays)"],
      },
      {
        title: "Community & Social Apps",
        tagline: "Niche community platforms and interest-based social apps built to foster deep user engagement.",
        bullets: ["Interest-based profile matching and personalized discover feeds", "Real-time group chats, forums, and threaded discussions", "Community events, RSVP management, and in-app meetups", "Content moderation, user reporting, and safety shield tools", "Monetization via memberships, digital gifts, and creator subscriptions", "Push notification strategies for daily active user growth"],
      },
    ],
  },
  {
    slug: "digital-marketing",
    num: "03",
    title: "Digital Marketing",
    tagline: "Make your brand impossible to ignore. Grow every month.",
    ready: { before: "Ready to scale your ", green: "traffic and revenue?" },
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    what: {
      heading: "Marketing that pays you back, every month.",
      body: "From SEO to paid ads to social media management — we build a complete digital presence that drives qualified traffic, generates leads, and converts browsers into buyers.",
      bullets: [
        "SEO that puts you on page 1 within 3–6 months",
        "Google and Meta ads with proven ROAS from day one",
        "Social media management across Instagram, LinkedIn, Facebook",
        "Lead generation funnels built to convert at every touchpoint",
        "Weekly reports with real numbers, not vanity metrics",
      ],
    },
    how: {
      heading: "From audit to growth in 3 weeks.",
      steps: [
        { n: "01", title: "Audit", desc: "We analyse your current digital footprint, competitors, and quick-win opportunities.", time: "Week 1" },
        { n: "02", title: "Strategy", desc: "Custom growth plan with channels, budgets, content calendar, and KPIs.", time: "Week 1–2" },
        { n: "03", title: "Setup", desc: "All tracking, pixels, conversion goals, and accounts wired correctly.", time: "Week 2" },
        { n: "04", title: "Launch", desc: "Campaigns go live. Content starts posting. SEO work begins.", time: "Week 3" },
        { n: "05", title: "Optimize", desc: "Weekly tweaks based on real data. Monthly strategy reviews.", time: "Ongoing" },
      ],
    },
    roi: {
      heading: "Marketing that multiplies your investment.",
      body: "Google Ads average 200% ROAS for service businesses in India. A ₹25,000/month ad spend generating ₹75,000 in new business means your marketing pays 3× what it costs — every month.",
      metrics: [
        { val: "200%+", label: "Average ROAS for service businesses" },
        { val: "3–6 months", label: "To build organic SEO traction" },
        { val: "10×", label: "ROI potential from well-managed paid ads" },
      ],
      example: "A coaching business in Mumbai spent ₹30,000/month on Google Ads we managed. Month 3 revenue attributable to ads: ₹1.1L.",
    },
    price: {
      from: "₹25,000/mo",
      note: "Ad spend billed directly to you. Our fee covers strategy, creative, and management.",
      includes: ["Campaign strategy", "Ad creative & copywriting", "Tracking & pixels setup", "Weekly reports", "Monthly review call", "Landing page recommendations"],
    },
    faq: [
      { q: "Is the ad spend included?", a: "No — ad spend goes directly to Google/Meta. Our fee covers strategy, creative, and management." },
      { q: "How soon will I see results?", a: "Paid ads show results within 1–2 weeks. SEO takes 3–6 months to build traction." },
      { q: "Do you handle content creation?", a: "Yes. We write, design, and schedule everything. You approve before it posts." },
      { q: "Can you work with a small budget?", a: "Yes. We've run profitable campaigns with as little as ₹10,000/month in ad spend." },
      { q: "How do we measure ROI?", a: "We set up conversion tracking from day one. You see exactly which channel drove which lead." },
    ],
    subServices: [
      {
        title: "Search Engine Optimization (SEO)",
        tagline: "Sustainable organic visibility, top Google rankings, and consistent high-intent inbound traffic.",
        bullets: ["Comprehensive technical SEO audits and website architecture optimization", "High-intent keyword research and strategic content roadmaps", "On-page SEO, internal linking structure, and schema markup integration", "High-authority backlink acquisition and digital PR outreach", "Local SEO, Google Business Profile (GBP), and map pack dominance", "Keyword rank tracking and transparent monthly organic ROI reporting"],
      },
      {
        title: "Social Media Marketing (SMM)",
        tagline: "Strategic brand positioning, viral content distribution, and active community growth across top channels.",
        bullets: ["Multi-channel growth strategies tailored to your target audience", "Content calendar planning with high-impact graphics, carousels, and copy", "Community engagement, active conversation monitoring, and direct outreach", "Influencer collaboration management and creator partnerships", "Trend-jacking, hashtag optimization, and platform algorithm alignment", "Monthly performance analytics tracking reach, engagement, and follower growth"],
      },
      {
        title: "Meta Ads Management (Facebook & Instagram)",
        tagline: "High-converting paid advertising funnels engineered to capture demand, generate leads, and maximize ROAS.",
        bullets: ["Full-funnel campaign architecture (Top, Middle, and Bottom of Funnel)", "Custom high-converting ad creative design (UGC, static banners, motion video)", "Advanced audience segmentation, Lookalike Audiences, and retargeting pools", "Meta Conversions API (CAPI) and Facebook Pixel integration", "Continuous A/B split testing across hooks, ad copy, and landing pages", "Daily budget pacing, smart bid strategies, and scalable ROAS optimization"],
      },
      {
        title: "TikTok Ads Management",
        tagline: "Native, high-energy video campaigns designed to capture immediate attention and drive fast conversions.",
        bullets: ["TikTok-first native ad strategies and trending audio integration", "UGC-style video production with high-converting opening hooks", "In-Feed Ads, Spark Ads, and TopView campaign setup and management", "TikTok Pixel and Event API tracking setup for accurate attribution", "Behavioral targeting, hashtag affinity, and custom audience layering", "Rapid creative fatigue rotation to maintain low customer acquisition costs"],
      },
      {
        title: "LinkedIn Ads Management",
        tagline: "High-ticket B2B advertising precision-targeted to decision-makers, executives, and enterprise buyers.",
        bullets: ["Account-Based Marketing (ABM) and job-title/industry specific targeting", "Sponsored Content, Lead Gen Forms, and Conversation Ad campaigns", "Thought leadership promotion and high-value lead magnet distribution", "LinkedIn Insight Tag integration for website retargeting and event tracking", "Value-proposition A/B testing optimized for high-ticket deal sizes", "Direct CRM lead integration for immediate sales pipeline routing"],
      },
      {
        title: "Search Engine Marketing (SEM)",
        tagline: "Multi-engine paid search strategies capturing bottom-funnel commercial intent at the exact moment of search.",
        bullets: ["Commercial intent keyword mapping and aggressive negative keyword lists", "Multi-platform campaign management across Google Search and Microsoft/Bing Ads", "Dynamic search ad copy, callouts, and conversion-focused sitelink extensions", "Quality Score optimization to reduce Cost-Per-Click (CPC)", "Competitor brand conquesting and search market-share capture", "Full conversion attribution modeling and revenue tracking"],
      },
      {
        title: "Google Ads",
        tagline: "Full-spectrum Google advertising capturing high-intent search, Performance Max, Display, and YouTube audiences.",
        bullets: ["Search, Performance Max (PMax), Display, and Shopping campaign setups", "Target ROAS (tROAS) and Target CPA (tCPA) smart automated bidding", "Google Merchant Center feed setup and optimization for e-commerce", "Responsive display remarketing and YouTube in-stream video ads", "Server-side Google Tag Manager (GTM) and Google Analytics 4 (GA4) tracking", "Search term query scrubbing to eliminate wasted ad spend"],
      },
      {
        title: "Lead Generation",
        tagline: "Predictable, multi-channel acquisition funnels engineered to consistently deliver qualified prospects to your sales team.",
        bullets: ["High-converting landing page creation and interactive qualification quizzes", "Automated lead scoring and instant CRM webhook synchronization", "Multi-channel paid traffic acquisition (Search, Paid Social, Display)", "Gated content, lead magnet, and webinar registration funnels", "Real-time lead notifications via SMS, Email, or Slack", "Pipeline conversion tracking from first click to closed customer"],
      },
      {
        title: "Social Media Management",
        tagline: "Complete end-to-end management of your brand's daily digital presence, publishing, and community care.",
        bullets: ["Strategic monthly publishing calendars and cross-platform scheduling", "Daily feed posting, stories, and platform-specific format optimization", "Active community monitoring, comment responses, and inbox management", "Visual brand consistency across Instagram, Facebook, LinkedIn, and X", "Profile optimization, bio link architecture, and highlights branding", "Detailed monthly performance reviews with actionable growth insights"],
      },
      {
        title: "SMS Marketing",
        tagline: "Direct-to-mobile messaging campaigns delivering 98% open rates and immediate revenue response.",
        bullets: ["TCPA and GDPR-compliant subscriber capture forms and popups", "Automated SMS flows: welcome discounts, abandoned cart, and order alerts", "Targeted promotional broadcasts for flash sales and VIP product launches", "Dynamic personalization, custom branded shortlinks, and click tracking", "Deep integration with platforms like Klaviyo, Postscript, and Twilio", "Smart delivery scheduling and automated quiet-hours compliance"],
      },
      {
        title: "Email Marketing",
        tagline: "High-ROI lifecycle email marketing and automated retention funnels built to increase customer lifetime value (LTV).",
        bullets: ["Automated revenue workflows (Welcome Series, Abandoned Cart, Win-Back, Post-Purchase)", "Bespoke, responsive HTML email designs aligned with brand guidelines", "Advanced audience segmentation based on buying behavior and engagement", "Technical deliverability optimization, SPF/DKIM/DMARC setup, and inbox placement", "Subject line, preview text, and CTA A/B testing", "Detailed analytics tracking open rates, click-through rates, and attributed revenue"],
      },
    ],
  },
  {
    slug: "graphic-design",
    num: "04",
    title: "Graphic Design",
    tagline: "Your brand, made impossible to ignore.",
    ready: { before: "Ready to make your brand look ", green: "like the market leader?" },
    heroImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85",
    what: {
      heading: "Design that builds trust before you say a word.",
      body: "From logo to brand identity to marketing collateral — we design everything your business needs to look premium, credible, and consistent across every touchpoint.",
      bullets: [
        "Logo and brand identity that stands out in any market",
        "Social media kits and ad creatives ready to post",
        "Pitch decks that win investors and close clients",
        "Print collateral — brochures, banners, packaging",
        "Motion graphics and animated content for video platforms",
      ],
    },
    how: {
      heading: "Brand ready in 1–2 weeks.",
      steps: [
        { n: "01", title: "Brief", desc: "We understand your brand, audience, competitors, and vision.", time: "Day 1" },
        { n: "02", title: "Concepts", desc: "3 design directions presented for your feedback and selection.", time: "Day 3–5" },
        { n: "03", title: "Refine", desc: "We refine your chosen concept until it's exactly right.", time: "Day 5–8" },
        { n: "04", title: "Finalize", desc: "All files delivered: AI, EPS, SVG, PNG in light and dark versions.", time: "Day 9–10" },
        { n: "05", title: "Rollout", desc: "Brand applied to templates, social kits, and collateral you need.", time: "Week 2" },
      ],
    },
    roi: {
      heading: "Design is the first impression you never get back.",
      body: "Companies with strong brand identity see 20% higher customer loyalty and charge a premium. A ₹25,000 brand identity pays back through higher conversion rates, better referrals, and the ability to charge what you're worth.",
      metrics: [
        { val: "20%", label: "Higher customer loyalty with consistent branding" },
        { val: "3×", label: "More likely to be remembered with strong visual identity" },
        { val: "2 weeks", label: "From brief to brand-ready materials" },
      ],
      example: "A Hyderabad consultancy rebranded with us. Their proposal-to-client conversion went from 22% to 41% in 3 months — same services, better presentation.",
    },
    price: {
      from: "₹15,000",
      note: "Per project. Source files always included.",
      includes: ["3 design concepts", "Unlimited revisions", "All file formats (AI, EPS, SVG, PNG)", "Brand usage guidelines", "Social media versions", "Dark/light variants"],
    },
    faq: [
      { q: "Do I get the source files?", a: "Yes. You receive AI, EPS, SVG, and PNG in all variants. No lock-in." },
      { q: "How many revisions?", a: "Unlimited revisions until you're satisfied. We don't count revisions." },
      { q: "Can you match an existing brand?", a: "Yes. We extend existing brands with new materials while maintaining consistency." },
      { q: "How fast can you turn a logo around?", a: "First concepts in 3–5 business days. Final delivery typically within 10 days." },
      { q: "Do you do print-ready files?", a: "Yes. We deliver print-ready CMYK files with bleed and crop marks for any collateral." },
    ],
    subServices: [
      {
        title: "Logo Design & Brand Marks",
        tagline: "Distinctive, memorable visual marks engineered to capture your core brand essence and command instant recognition.",
        bullets: ["Primary logo, secondary mark, and submark variations", "Complete vector source files (.AI, .EPS, .SVG, .PDF, .PNG)", "Monogram, wordmark, and pictorial concept exploration", "Scalability testing for favicons, app icons, and large-format billboards", "Color psychology research and custom palette curation", "Full intellectual property and commercial copyright transfer"],
      },
      {
        title: "Complete Brand Identity Systems",
        tagline: "Cohesive visual ecosystems establishing consistent, authoritative brand recognition across every customer touchpoint.",
        bullets: ["Primary and secondary typography hierarchy rules", "Extended brand color palettes with RGB, CMYK, and HEX codes", "Brand voice, tone, and visual styling guidelines", "Custom graphic patterns, textures, and asset motifs", "Real-world collateral mockups (stationery, digital, signage)", "Comprehensive multi-page brand strategy guide"],
      },
      {
        title: "UI/UX Design (Web & Mobile)",
        tagline: "User-first, conversion-engineered digital interfaces designed for frictionless journeys and high user retention.",
        bullets: ["Wireframing and user journey/flow mapping", "High-fidelity interactive prototypes built in Figma", "Custom design systems with reusable component libraries", "Responsive desktop, tablet, and mobile interface design", "WCAG accessibility and color contrast compliance", "Developer-ready handover with inspectable CSS/code tokens"],
      },
      {
        title: "Social Media Creative Kits",
        tagline: "Scroll-stopping social media visual templates designed to boost engagement and keep your feed on-brand.",
        bullets: ["Custom templates for Instagram posts, carousels, and stories", "Platform-optimized designs for LinkedIn, X, and Facebook", "Editable Canva / Figma master template files", "Highlight covers, profile headers, and banner assets", "High-converting carousel slide frameworks", "Dynamic promotional and announcement creative kits"],
      },
      {
        title: "Performance Ad Creatives (Paid Ads)",
        tagline: "High-converting visual assets engineered specifically to lower CPC and maximize ROAS across Meta, TikTok, and Google.",
        bullets: ["Direct-response static banner and multi-angle product layouts", "Motion graphics and scroll-stopping visual hooks", "UGC-style design wrappers and quote-card creatives", "Split-test creative variations (headlines, colors, CTAs)", "Sizing optimized for feeds, stories, banners, and reels", "Conversion-focused visual hierarchy tailored for paid traffic"],
      },
      {
        title: "Pitch Deck & Presentation Design",
        tagline: "Persuasive, investor-ready presentation decks designed to secure funding, win clients, and close enterprise deals.",
        bullets: ["Custom investor pitch decks (Seed to Series B+)", "Sales collateral, proposal decks, and company credentials", "Custom infographics, financial charts, and traction visualizers", "Clean slide typography and structured story flow", "Editable formats in PowerPoint, Keynote, and Google Slides", "High-resolution PDF export for investor distribution"],
      },
      {
        title: "Product Packaging & Label Design",
        tagline: "Premium, shelf-ready packaging designs engineered to stand out in retail environments and unbox beautifully online.",
        bullets: ["Custom box, pouch, bottle, and wrapper packaging layouts", "Print-ready die-line creation with precise technical bleed", "Compliance labeling, barcode/QR placement, and ingredient typography", "Special finish preparation (spot UV, foil stamping, embossing)", "3D photorealistic packaging mockups for digital marketing", "Material selection and print production consulting"],
      },
      {
        title: "Marketing Collateral & Print Media",
        tagline: "Polished corporate stationery and promotional print materials designed for tangible brand credibility.",
        bullets: ["Business cards, corporate letterheads, and envelopes", "Flyers, leaflets, and promotional one-pagers", "Print-ready CMYK files with crop marks and bleeds", "Premium paper stock and print finish recommendations", "Corporate folders, invoices, and branded documents", "Cohesive alignment with official brand guidelines"],
      },
      {
        title: "Infographic & Data Visualization Design",
        tagline: "Transforming complex data, metrics, and business processes into engaging, easily digestible visual stories.",
        bullets: ["Custom visual frameworks for complex industry reports", "Interactive and static data visualization graphics", "Step-by-step process diagrams and workflow charts", "High-impact statistical graphs and comparison tables", "Optimized formatting for blog posts, social media, and PR releases", "Vector source files ready for digital and print reproduction"],
      },
      {
        title: "Vector Illustration & Custom Iconography",
        tagline: "Bespoke vector art and unified icon sets that give your product interface and website a unique visual identity.",
        bullets: ["Custom-crafted 2D/2.5D vector illustration sets", "Pixel-perfect icon sets matching your brand line weight", "Hero section custom illustrations for web and mobile", "Mascot and character development for brand storytelling", "SVG asset optimization for ultra-fast web rendering", "Scalable vector files without quality degradation"],
      },
      {
        title: "E-Commerce A+ Content & Visuals",
        tagline: "High-converting Amazon A+ content, marketplace banners, and enhanced product gallery visuals.",
        bullets: ["Amazon Enhanced Brand Content (EBC) / A+ page design", "Multi-angle product feature callout infographics", "Comparison charts and lifestyle product composites", "Marketplace hero images adhering to platform standards", "High-converting listing image stacks (7-image frameworks)", "Mobile-optimized layouts for fast marketplace browsing"],
      },
      {
        title: "Motion Graphics & Animated Assets",
        tagline: "Dynamic, animated visual content that brings static logos, interfaces, and marketing assets to life.",
        bullets: ["Animated logo reveals and brand stings", "Lottie animations for smooth web and app UI micro-interactions", "Animated social media ads, GIFs, and stickers", "Explainer graphic transitions and kinetic typography", "Video bumper animations and intro/outro screens", "Lightweight, high-performance web export formats"],
      },
      {
        title: "Brand Style Guidelines & Manuals",
        tagline: "The comprehensive rulebook protecting your brand identity and ensuring 100% visual consistency globally.",
        bullets: ["Logo usage rules, clear-space parameters, and misuse examples", "Full typography hierarchy (headings, subheadings, body)", "Master color palette with digital and print breakdowns", "Imagery and photography style curation guidelines", "Iconography and graphic element application rules", "Downloadable comprehensive PDF manual for internal teams and vendors"],
      },
      {
        title: "Merchandising & Apparel Design",
        tagline: "Branded merchandise and apparel graphics designed to turn team members and customers into walking brand champions.",
        bullets: ["Custom t-shirt, hoodie, and cap apparel graphics", "Branded swag design (tote bags, water bottles, tech gear)", "Screen-print and embroidery-ready vector separation files", "Colorway mockups on realistic apparel templates", "Production-ready specs and pantone color codes", "Sizing, placement guides, and print shop tech packs"],
      },
      {
        title: "Outdoor Advertising & Billboard Design",
        tagline: "Large-format, high-impact outdoor graphics engineered for 3-second readability and massive brand recall.",
        bullets: ["Highway billboards, digital LED screens, and unipole designs", "Transit advertising (bus wraps, metro panels, taxi wraps)", "Mall kiosk, building banner, and hoarding graphics", "Large-scale high-DPI vector artwork setup", "High-contrast typography optimized for long-distance viewing", "Print-production coordination and technical scaling"],
      },
      {
        title: "Newsletter & Email Template Design",
        tagline: "Visually stunning, responsive email layouts built to maximize click-through rates and brand retention.",
        bullets: ["Custom header banners, promo blocks, and product showcases", "Modular Figma/Canva designs for repeatable campaigns", "Fully responsive layouts optimized for mobile inboxes", "Alignment with ESPs like Klaviyo, Mailchimp, and HubSpot", "Animated GIF elements and dynamic CTA buttons", "Clean visual hierarchy to avoid spam filters and boost CTR"],
      },
      {
        title: "Brochure & Catalogue Design",
        tagline: "Structured, multi-page product catalogues and corporate brochures designed for effortless browsing.",
        bullets: ["B2B corporate brochures, bi-folds, and tri-folds", "Comprehensive multi-page product and wholesale catalogues", "Clean grid systems, table layouts, and product SKU indexes", "Digital interactive PDF versions with clickable hyperlinks", "High-resolution press-ready files with pagination setup", "Premium print finishing guides (binding, laminations)"],
      },
      {
        title: "Event Branding & Exhibition Booths",
        tagline: "360-degree experiential event visuals and exhibition booth displays that draw foot traffic and command attention.",
        bullets: ["Trade show booth backdrops, pop-up banners, and podiums", "Event entrance arches, stage backdrops, and photo walls", "Attendee badges, lanyards, and credential passes", "Directional signage and floor decal design", "Interactive digital booth screen graphics", "Dimensional blueprint rendering and technical print preparation"],
      },
      {
        title: "3D Product Mockups & Rendering",
        tagline: "Photorealistic 3D product visuals and digital staging that showcase your product before manufacturing.",
        bullets: ["3D CAD modeling and realistic texture mapping", "Studio lighting and realistic surface reflection rendering", "Transparent background product renders for e-commerce", "Lifestyle scene 3D composites and environment staging", "High-resolution multi-angle asset generation", "360-degree rotating product animation renders"],
      },
      {
        title: "Rebranding & Brand Modernization",
        tagline: "Strategic visual overhauls that revitalize outdated brand identities while preserving existing market equity.",
        bullets: ["In-depth visual brand audit and market gap analysis", "Modernizing legacy logos, colors, and typography", "Seamless transition blueprints for updating existing digital assets", "Brand repositioning aligned with modern consumer expectations", "Internal and external rebrand announcement assets", "Complete source asset migration and asset library organization"],
      },
    ],
  },
  {
    slug: "video-editing",
    num: "05",
    title: "Video Editing",
    tagline: "Content that stops the scroll and drives action.",
    ready: { before: "Ready to stop the scroll and ", green: "hook your audience?" },
    heroImg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=85",
    what: {
      heading: "Video content that builds brands and drives results.",
      body: "From Reels to corporate films to ad creatives — we edit, color grade, add motion graphics, and deliver videos that make people stop, watch, and act.",
      bullets: [
        "Reels and Shorts optimized for maximum reach on Instagram and TikTok",
        "YouTube video editing with chapters, B-roll, and SEO-ready titles",
        "Video ads tested for Meta, Google, and TikTok campaigns",
        "Corporate and brand films with color grading and sound design",
        "Fast turnaround: most projects delivered in 48–72 hours",
      ],
    },
    how: {
      heading: "Raw footage to ready-to-post in 72 hours.",
      steps: [
        { n: "01", title: "Brief & Footage", desc: "You share the raw footage and brief. We confirm the edit direction.", time: "Day 1" },
        { n: "02", title: "Rough Cut", desc: "First assembly delivered for your review and feedback.", time: "Day 2" },
        { n: "03", title: "Revisions", desc: "We refine based on your feedback — music, pacing, and graphics.", time: "Day 2–3" },
        { n: "04", title: "Color & Sound", desc: "Color grading, audio cleanup, and sound design applied.", time: "Day 3" },
        { n: "05", title: "Delivery", desc: "Final files in all required formats and resolutions.", time: "Day 3–4" },
      ],
    },
    roi: {
      heading: "Video drives 82% of internet traffic.",
      body: "Video content generates 1200% more shares than text and images combined. A single high-quality Reel or video ad can outperform months of static content — at a fraction of the cost of a production shoot.",
      metrics: [
        { val: "1200%", label: "More shares from video vs text and images" },
        { val: "82%", label: "Of internet traffic is video content" },
        { val: "48hrs", label: "Average turnaround on most projects" },
      ],
      example: "A Dubai-based restaurant brand ran a video Reel we edited. 220,000 views in 72 hours. 400+ new followers and 80+ enquiry DMs that week.",
    },
    price: {
      from: "₹5,000",
      note: "Per video. Volume discounts available for monthly packages.",
      includes: ["Professional editing", "Color grading", "Music and sound design", "Captions and subtitles", "Motion graphics", "3 rounds of revisions"],
    },
    faq: [
      { q: "Do you shoot the video or just edit?", a: "We edit footage you provide. If you need shooting, check our Production Shooting service." },
      { q: "What formats do you deliver?", a: "MP4 in all required sizes — 9:16 for Reels/TikTok, 16:9 for YouTube, 1:1 for feed." },
      { q: "Can you add subtitles in multiple languages?", a: "Yes. We add subtitles in English, Hindi, Arabic, and more on request." },
      { q: "How do I share raw footage with you?", a: "Google Drive or WeTransfer. We accept all major camera formats." },
      { q: "Do you have a monthly package?", a: "Yes. Monthly packages for 8, 12, or 20 videos/month with priority turnaround." },
    ],
    subServices: [
      {
        title: "Short-Form Video Editing (Reels, Shorts & TikTok)",
        tagline: "High-velocity, retention-engineered vertical edits built to stop the scroll, beat algorithms, and drive viral reach.",
        bullets: ["3-second hook optimization with pattern interrupts and zoom cuts", "Dynamic kinetic subtitles with brand colors and animated keyword highlights", "Fast-paced B-roll overlay integration and sound effect (SFX) layering", "Native 9:16 vertical framing with safe-zone compliance for platform UIs", "Trending audio matching, beat synchronization, and audio leveling", "High-volume batch editing workflows for consistent daily publishing"],
      },
      {
        title: "YouTube Long-Form Video Editing",
        tagline: "Engaging, story-driven editing designed to maximize Average Percentage Viewed (APV) and channel subscriber growth.",
        bullets: ["Narrative arc pacing to eliminate viewer drop-off points", "Multi-camera audio/video synchronization and seamless jump-cut smoothing", "Custom branded lower thirds, animated chapters, and data visual overlays", "Curated background music scoring balanced under spoken dialogue", "High-CTR thumbnail concept coordination and end-screen card layouts", "Full 4K high-bitrate rendering optimized for YouTube processing"],
      },
      {
        title: "Performance & Paid Video Ads (Meta, TikTok, Google)",
        tagline: "Direct-response video creatives engineered to capture attention, reduce customer acquisition cost, and maximize ROAS.",
        bullets: ["Multi-hook variation packages (3–5 opening variations) for rapid A/B testing", "High-contrast CTA banners, countdown overlays, and discount callouts", "Authentic UGC-style pacing and problem-solution visual frameworks", "Multi-ratio exports tailored for Feeds (1:1, 4:5), Stories (9:16), and YouTube (16:9)", "Clear visual hierarchy guiding the viewer directly to product purchase", "Fast creative fatigue turnaround to keep paid ad campaigns profitable"],
      },
      {
        title: "Corporate & Brand Films",
        tagline: "Polished, cinematic brand storytelling that elevates corporate authority and inspires investor and client trust.",
        bullets: ["Seamless blending of leadership interviews, company culture, and facility B-roll", "High-end typography, animated corporate logos, and executive title cards", "Color grading tailored to corporate brand manuals and color palettes", "Commercial licensed cinematic orchestral and ambient soundtracks", "Multi-stakeholder review workflows with milestone-based revisions", "Multi-format exports for company homepages, investor decks, and trade expos"],
      },
      {
        title: "Podcast & Interview Editing",
        tagline: "Professional audio and video mastering that transforms raw conversations into broadcast-ready studio content.",
        bullets: ["Multi-cam speaker switching with auto-framing and audio alignment", "Noise removal, room echo reduction, and vocal tone balancing", "Removal of dead air, awkward pauses, false starts, and filler words", "Extraction of viral 30–60 second micro-clips for social promotion", "Topic title cards, live quote callouts, and guest profile overlays", "Master outputs configured for YouTube, Spotify Video, and Apple Podcasts"],
      },
      {
        title: "E-Commerce & Product Showcase Videos",
        tagline: "Conversion-focused product edits showcasing key features, textures, and unboxing moments that drive instant checkouts.",
        bullets: ["Dynamic macro shot pacing, 360-degree rotation cuts, and benefit callouts", "Upbeat music synchronization matched to product energy and target demographic", "On-screen star rating graphics, customer reviews, and badge overlays", "Color correction ensuring 100% accurate product shade representation", "Mobile-first formats optimized for Amazon listings, Shopify stores, and ads", "Clean loop creation for automated landing page background displays"],
      },
      {
        title: "Motion Graphics & Animated Explainers",
        tagline: "Dynamic 2D/3D visual animations that simplify complex products, enterprise software, and business models.",
        bullets: ["Custom vector illustration animation and kinetic UI recreations", "Storyboard development matched to voiceover pacing and script milestones", "Dynamic data charts, interactive flowcharts, and abstract concept visualization", "Custom sound design (whooshes, clicks, ambient sweeps) layered on animation", "Seamless fluid scene transitions without abrupt visual cuts", "Lightweight web-ready exports (Lottie/MP4) and full 4K master files"],
      },
      {
        title: "Real Estate Video Tours & Walkthroughs",
        tagline: "Immersive, luxury property walkthroughs designed to captivate high-net-worth buyers and close listings faster.",
        bullets: ["Smooth gimbal stabilization, speed ramping, and fluid room-to-room transitions", "Drone aerial shot color correction and property boundary line animations", "Window pull adjustments and balanced interior/exterior HDR lighting", "Property detail callouts (square footage, layout specs, pricing, amenities)", "Agent portrait intros, branded lower thirds, and direct contact outros", "Dual deliverable formats: full horizontal cinematic tours and vertical social reels"],
      },
      {
        title: "Event Recap & Highlight Videos",
        tagline: "High-energy recap edits capturing keynote insights, venue excitement, and authentic attendee reactions.",
        bullets: ["Fast-paced chronological or thematic assembly set to dynamic music beats", "Speaker soundbite integration over crowd, venue, and workshop B-roll", "Sponsor logo bumper animations, stage backdrops, and event date graphics", "Audio mastering balancing live crowd atmosphere with clean speaker audio", "Rush 24–48 hour turnaround options for immediate post-event PR", "Promotional teaser cuts optimized for future ticket sales campaigns"],
      },
      {
        title: "Educational, Course & Webinar Editing",
        tagline: "Structured, high-clarity video post-production tailored for online academies, educators, and corporate training.",
        bullets: ["Synchronized side-by-side presentation slides and instructor video feeds", "Screen recording zoom-ins on key diagrams, code editors, and software tools", "Chapter marker insertion and clear module title bumper graphics", "Vocal clarity mastering for long-session, fatigue-free student listening", "Visual callout boxes summarizing core learning objectives and key takeaways", "Batch file processing for comprehensive multi-module course curricula"],
      },
      {
        title: "Documentary & Storytelling Edits",
        tagline: "Deep narrative construction with nuanced pacing, emotional depth, and cinematic documentary craftsmanship.",
        bullets: ["Complex story assembly weaving multiple interview tracks and narrative threads", "Integration of archival footage, historic photographs, and dynamic document pans", "Atmospheric cinematic scoring, nuanced foley, and multi-layered soundscapes", "Film-emulation color grading (35mm grain, vintage LUTs, rich contrast)", "Dialogue subtitling, translation integration, and location identifier cards", "High-bitrate master exports meeting film festival and streaming standards"],
      },
      {
        title: "Cinematic Color Grading & Correction",
        tagline: "Studio-grade color balancing and look development in DaVinci Resolve that elevates footage from flat to cinematic.",
        bullets: ["Shot-to-shot white balance matching, exposure balancing, and skin-tone perfection", "Log-to-Rec.709 conversion and custom creative LUT generation", "Stylized color palette design (Teal & Orange, Moody Monochrome, Warm Film)", "Secondary color isolation, sky replacements, and selective object recoloring", "Noise reduction and digital film grain emulation", "Master rendering color-managed for OLED displays, web, and mobile devices"],
      },
      {
        title: "Professional Sound Design & Audio Mixing",
        tagline: "Immersive sonic engineering that makes dialogue crystal clear and gives every visual transition impactful punch.",
        bullets: ["AI-assisted noise reduction: removing room reverberation, hum, and wind hiss", "Dialogue equalization, dynamic range compression, and sibilance de-essing", "Custom Sound FX library layering (whooshes, impacts, cinematic drops, foley)", "Multi-track ducking ensuring background music never overpowers spoken voice", "Industry loudness compliance (-14 LUFS for streaming, -24 LKFS for broadcast)", "Spatial stereo widening and balanced master audio outputs"],
      },
      {
        title: "Visual Effects (VFX) & Compositing",
        tagline: "Seamless visual magic from screen replacements and green screen removal to dynamic 3D object integration.",
        bullets: ["Clean chroma key (green/blue screen) extraction and realistic background compositing", "Screen replacements on phones, monitors, and laptops with realistic reflections", "Unwanted object removal, wire cleanup, and background plate reconstruction", "3D camera tracking and planar tracking for pinned graphic elements", "Atmospheric visual effects: light leaks, dust particles, smoke, and lens flares", "Rotoscoping and multi-layer element masking"],
      },
      {
        title: "Testimonial & Case Study Videos",
        tagline: "Trust-building customer interview edits structured to showcase concrete problem-solving and validated client ROI.",
        bullets: ["Strategic narrative assembly following the Problem → Solution → Result format", "Metric callout graphics highlighting revenue gains, time savings, and growth", "B-roll cutaways of products, offices, and team in action", "Professional lower thirds, name tags, and company logo overlays", "Short social-proof clips (15–30s) extracted for ad campaigns", "Optimized versions for websites, email nurture sequences, and sales decks"],
      },
      {
        title: "Fashion & Lookbook Videos",
        tagline: "Fast-cut editorial fashion films that showcase collections with energy, style, and brand personality.",
        bullets: ["Fast-cut music-synced editing with editorial pacing", "Color grading tuned to brand aesthetic and seasonal palette", "Multiple model look sequences with smooth wardrobe transitions", "Stories, Reels, and full campaign format deliverables", "Behind-the-scenes content packaged alongside hero film", "Slow-motion and speed-ramp effects for cinematic visual impact"],
      },
      {
        title: "Food & Beverage Content Videos",
        tagline: "Appetite-driving food films that make dishes irresistible across social, menus, and delivery platforms.",
        bullets: ["Slow-motion food reveal editing with appetite-driving close-ups", "Warm, rich color treatment optimized for food presentation", "Restaurant ambience, kitchen action, and table-setting B-roll integration", "Optimized for Instagram, Zomato, Swiggy, and delivery app listings", "Short-form dish spotlights for seasonal promotions", "Full-format recipe and chef showcase videos for YouTube"],
      },
      {
        title: "Travel & Destination Content Videos",
        tagline: "Cinematic destination films and travel highlight reels that inspire bookings and showcase experiences.",
        bullets: ["Destination highlight reels with cinematic landscape coverage", "Seamless aerial drone and ground-level footage blending", "Atmospheric music selection and ambient sound mixing", "Adventure pacing, time-lapses, and golden-hour visual storytelling", "Itinerary and activity spotlight segments for tour operators", "Platform-optimized versions for Instagram, YouTube, and travel websites"],
      },
      {
        title: "Social Media Content Packs",
        tagline: "Monthly batch-edited video content ensuring your brand publishes consistently across every platform.",
        bullets: ["Monthly video content calendar editing for all platforms", "Consistent brand style guide applied across all edits", "All platform formats delivered (9:16, 1:1, 16:9, 4:5)", "Priority turnaround for scheduled campaign posts", "Repurposing long-form content into short-form clips", "Content performance analytics review and edit optimization"],
      },
      {
        title: "Educational & Tutorial Content",
        tagline: "Clear, structured instructional videos for online courses, tutorials, software walkthroughs, and how-to content.",
        bullets: ["Lecture and tutorial structure editing for maximum retention", "Screen recording and on-camera instructor video integration", "Chapter title bumpers and lesson number graphics", "Engagement retention techniques with visual pacing adjustments", "Animated diagrams and graphic overlays for complex concepts", "Multi-module batch processing for complete course curricula"],
      },
    ],
  },
  {
    slug: "production-shooting",
    num: "06",
    title: "Production Shooting",
    tagline: "Professional photography and video production. We come to you.",
    ready: { before: "Ready to bring your brand story ", green: "to life on camera?" },
    heroImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=85",
    locations: [
      { country: "India", flag: "🇮🇳", city: "Nationwide" },
      { country: "Dubai (UAE)", flag: "🇦🇪", city: "Dubai & UAE" },
    ],
    what: {
      heading: "We shoot everything your brand needs to look world-class.",
      body: "Product photography, corporate films, brand shoots, events — our production team covers everything from concept to final deliverable. We operate across India and Dubai.",
      bullets: [
        "Professional photography for products, people, and places",
        "Brand film and commercial video production",
        "Studio and on-location shoots across India and Dubai",
        "Same-day edited previews for social media urgency",
        "Full rights to all images and video — no licensing fees",
      ],
    },
    how: {
      heading: "Shoot day to final delivery in 5 steps.",
      steps: [
        { n: "01", title: "Brief & Concept", desc: "We understand your brand, audience, and what the content will be used for.", time: "Day 1" },
        { n: "02", title: "Pre-production", desc: "Shot list, mood board, location scouting, equipment, and team confirmed.", time: "Day 2–3" },
        { n: "03", title: "Shoot Day", desc: "Full production execution — lighting, direction, and capturing every required shot.", time: "Day 4" },
        { n: "04", title: "Selection & Edit", desc: "Best frames selected, color graded, retouched, or video edited.", time: "Day 5–7" },
        { n: "05", title: "Delivery", desc: "High-resolution files delivered via drive. Ready for print, web, and social.", time: "Day 7–10" },
      ],
    },
    roi: {
      heading: "Great content pays for itself every day.",
      body: "Professional photography increases product sales by up to 30%. A one-time shoot produces content you use for 6–12 months across ads, social, and your website — far cheaper than recurring stock photo subscriptions.",
      metrics: [
        { val: "30%", label: "Average sales increase with professional imagery" },
        { val: "12 months", label: "Useful life of a professional shoot" },
        { val: "2×", label: "Higher engagement with branded visual content" },
      ],
      example: "A Dubai food brand shot with us in one day. Those photos ran across Instagram ads and their website for 8 months, generating consistent leads at a fraction of the cost of reshooting.",
    },
    price: {
      from: "₹25,000",
      note: "Per session. Location and travel charges may apply.",
      includes: ["Professional photographer/videographer", "Studio or location setup", "Lighting equipment", "Basic styling", "Edited final files", "Full usage rights"],
    },
    faq: [
      { q: "Do you shoot in both India and Dubai?", a: "Yes. We have production teams in both locations. International shoots can also be arranged." },
      { q: "How many final images do I get?", a: "Depends on the package — typically 30–100 edited images per day shoot." },
      { q: "Do you provide models or props?", a: "We can arrange models, props, and styling on request. This is quoted separately." },
      { q: "How long does editing take?", a: "5–7 business days for standard delivery. Rush delivery available in 48 hours." },
      { q: "Can I use the images for paid ads?", a: "Yes. Full commercial usage rights included — print, digital, ads, and social." },
    ],
    subServices: [
      { title: "Product Photography", bullets: ["White background and lifestyle product shots", "360° product rotation for e-commerce", "Detail and close-up macro photography", "Multiple angle and variant coverage"] },
      { title: "Corporate Headshots", bullets: ["Professional headshots for teams and founders", "Consistent lighting and background across all", "Individual and group shot options", "LinkedIn and press-ready resolution"] },
      { title: "Brand Photography", bullets: ["Lifestyle and behind-the-scenes imagery", "Brand color palette-aligned settings", "Founder and team storytelling shots", "Usage across web, social, and print"] },
      { title: "Food Photography", bullets: ["Appetite-driven food styling and plating", "Restaurant ambience and table setups", "Menu photography for print and apps", "Delivery platform imagery optimization"] },
      { title: "Real Estate Photography", bullets: ["Interior and exterior architectural shots", "Twilight and golden hour property photos", "Wide-angle lens for spacious perspectives", "Virtual staging integration available"] },
      { title: "Event Photography", bullets: ["Full event coverage from setup to close", "Candid and formal moments captured", "Same-day preview delivery for socials", "Corporate, conferences, and private events"] },
      { title: "Fashion Photography", bullets: ["Studio and on-location fashion shoots", "Catalogue and editorial layouts", "Model direction and styling assistance", "Seasonal collection coverage"] },
      { title: "Industrial & Manufacturing", bullets: ["Factory floor and process documentation", "Equipment and machinery close-ups", "Safety-compliant on-site shoots", "For brochures, tenders, and websites"] },
      { title: "Video Production", bullets: ["Full commercial video production", "Multi-camera setup with director", "Script and storyboard development", "Final edited video with soundtrack"] },
      { title: "Commercial Ad Shooting", bullets: ["30s and 60s advertisement production", "Script, cast, location, and direction", "Production-quality lighting and sound", "Ready for TV, OTT, and digital ads"] },
      { title: "Social Media Content", bullets: ["One-day shoot producing 1–3 months of content", "Reels, stories, and feed content in one shoot", "Optimized framing for all social formats", "Quick turnaround for campaign deadlines"] },
      { title: "Documentary Production", bullets: ["Long-form documentary direction and shooting", "Interview setups and B-roll sequences", "Multi-day production planning", "Narration and soundtrack integration"] },
      { title: "Wedding & Corporate Events", bullets: ["Full-day event photography and video", "Pre-event and post-event coverage", "Cinematic highlight reel production", "Online gallery delivery for clients"] },
      { title: "Aerial & Drone Footage", bullets: ["Licensed drone operators across India and UAE", "Aerial property and landscape coverage", "Cinematic flyover sequences", "FAA/DGCA compliant operations"] },
      { title: "Studio Shoots", bullets: ["Fully equipped studio in India and Dubai", "Custom set builds for themed shoots", "Lighting rigs for any product or portrait", "Multiple looks in a single studio day"] },
      { title: "On-Location Shoots", bullets: ["Location scouting and permit management", "Mobile lighting and equipment setup", "Urban, outdoor, and architectural locations", "Travel coverage across India and UAE"] },
      { title: "360° Photography", bullets: ["Virtual tour photography for properties", "360° product spins for e-commerce", "Immersive environment captures", "Web embed and VR-ready outputs"] },
      { title: "Lifestyle Photography", bullets: ["Product in real-world usage scenarios", "People and environment storytelling", "Aspirational brand imagery", "Seasonal and campaign-based shoots"] },
      { title: "E-Commerce Catalog", bullets: ["High-volume product batch photography", "Consistent white background and specs", "Quick editing turnaround for large catalogs", "Formatted for Amazon, Flipkart, Noon, etc."] },
      { title: "Behind The Scenes", bullets: ["Process and making-of content capture", "Team culture and workspace documentation", "Social-first candid storytelling", "Great for LinkedIn and brand trust content"] },
    ],
  },
  {
    slug: "ai-automation",
    num: "07",
    title: "AI & Automation",
    tagline: "Replace manual work with intelligent systems that run 24/7.",
    ready: { before: "Ready to put your business operations ", green: "on autopilot?" },
    heroImg: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
    what: {
      heading: "The manual work your team hates — automated.",
      body: "We audit your current workflows, find the highest-ROI automation opportunities, and build them in under 3 weeks. n8n pipelines, AI agents, WhatsApp bots, voice AI — all wired together.",
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
        { n: "01", title: "Workflow Audit", desc: "We map every manual step your team repeats daily and find the highest-ROI automations.", time: "Day 1–2" },
        { n: "02", title: "Blueprint", desc: "Visual automation flow you approve — every trigger, action, and fallback shown.", time: "Day 3–4" },
        { n: "03", title: "Build & Integrate", desc: "We connect your tools and build automation logic using n8n, LangChain, or custom code.", time: "Week 2" },
        { n: "04", title: "Test & Train", desc: "End-to-end testing with real data. Your team trained in 30 minutes.", time: "Week 3" },
        { n: "05", title: "Monitor & Optimize", desc: "We watch the first 2 weeks of live runs and tune error handling.", time: "Week 3–4" },
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
      example: "A Dubai real estate agency was spending 4 hours/day qualifying WhatsApp leads manually. We automated it. Same quality, zero human time.",
    },
    price: {
      from: "₹75,000",
      note: "One-time build. No platform fees from us.",
      includes: ["Workflow audit included", "n8n / LangChain / custom code", "All integrations wired", "30-day monitoring", "Team training session", "Documentation handover"],
    },
    faq: [
      { q: "Do I need technical knowledge to use it?", a: "No. We build it so your team can run it. Training is included." },
      { q: "What if a step in the automation fails?", a: "We build error handling and fallbacks into every flow. You get notified immediately." },
      { q: "Can you automate WhatsApp specifically?", a: "Yes — we use the official WhatsApp Business API or Twilio depending on your volume." },
      { q: "Will this work with my existing CRM?", a: "We integrate with HubSpot, Salesforce, Zoho, Airtable, Google Sheets, and most others." },
      { q: "Can you build a custom AI agent?", a: "Yes. We build LLM-powered agents using GPT-4, Claude, or open-source models depending on your needs." },
    ],
    subServices: [
      { title: "Customer Support AI", bullets: ["AI chatbot trained on your products and FAQs", "Multi-channel: website, WhatsApp, and app", "Escalation to human agent when needed", "Ticket creation and CRM logging"] },
      { title: "Voice AI Agent", bullets: ["Human-sounding outbound and inbound calling", "Lead qualification and appointment booking", "Multi-language support (English, Hindi, Arabic)", "Call recording, transcript, and CRM logging"] },
      { title: "LLM / RAG Applications", bullets: ["Custom AI built on your company knowledge base", "Document Q&A and internal search assistant", "Fine-tuned or RAG-based for domain accuracy", "Deployed on your infrastructure for data privacy"] },
      { title: "RPA (Robotic Process Automation)", bullets: ["Browser and desktop task automation", "Form filling, data extraction, and reporting", "Excel, ERP, and legacy system integration", "Scheduled and trigger-based execution"] },
      { title: "n8n Workflow Automation", bullets: ["Visual workflow builder for any business process", "1000+ app integrations available", "Self-hosted or cloud deployment options", "Error handling and retry logic built-in"] },
      { title: "WhatsApp AI Bot", bullets: ["24/7 auto-reply to new inquiries", "Lead qualification conversation flow", "Appointment booking and confirmation", "CRM sync after each conversation"] },
      { title: "Lead Generation Automation", bullets: ["Scraping and enrichment of prospects", "Outreach via email or WhatsApp sequences", "Lead scoring and priority routing", "Daily qualified lead report to your inbox"] },
      { title: "CRM Automation", bullets: ["Auto-create contacts from web forms and WhatsApp", "Pipeline stage movement based on actions", "Follow-up task creation and reminders", "Deal reporting and revenue forecasting"] },
      { title: "Document Processing AI", bullets: ["Invoice, contract, and form data extraction", "AI-powered document classification", "Validation and error flagging before entry", "Integration with accounting or ERP systems"] },
      { title: "AI Chatbot", bullets: ["Website chatbot with conversational UI", "Trained on your content and product catalog", "Lead capture and qualification built-in", "Handoff to WhatsApp or email seamlessly"] },
      { title: "Data Analysis Automation", bullets: ["Auto-pull from multiple data sources daily", "AI-generated insights and anomaly alerts", "Dashboard update without manual work", "Weekly AI summary report delivered automatically"] },
      { title: "Email Automation", bullets: ["Drip campaigns triggered by user behavior", "Personalized email using CRM data", "A/B testing and performance tracking", "Unsubscribe and compliance handling"] },
      { title: "Social Media Automation", bullets: ["Auto-schedule posts from a content calendar", "AI-generated caption and hashtag suggestions", "Engagement monitoring and response drafting", "Cross-platform publishing in one click"] },
      { title: "Appointment Booking Bot", bullets: ["Conversational booking flow on WhatsApp or web", "Real-time calendar availability check", "Confirmation, reminder, and follow-up automated", "Cancellation and reschedule handling"] },
      { title: "E-Commerce Automation", bullets: ["Order confirmation and tracking updates", "Abandoned cart recovery messages", "Low stock alerts and reorder triggers", "Customer review request automation"] },
      { title: "HR & Recruitment Automation", bullets: ["CV screening and shortlisting AI", "Interview scheduling via automated messages", "Onboarding document collection flow", "Employee query chatbot for HR FAQs"] },
      { title: "Finance & Accounting Automation", bullets: ["Invoice generation and sending automation", "Payment reminder sequences", "Expense report extraction from receipts", "Bank reconciliation automation"] },
      { title: "Custom AI Agent", bullets: ["Bespoke AI agent for your specific workflow", "Multi-step reasoning and tool use", "Integration with any API or data source", "Built with GPT-4, Claude, or open-source LLMs"] },
      { title: "AI Content Generation", bullets: ["Blog, social media, and ad copy automation", "Brand voice trained into the model", "Batch content generation for campaigns", "Human review workflow before publishing"] },
      { title: "API Integration & Automation", bullets: ["Connect any two systems via API", "Webhook-driven real-time data sync", "Custom middleware for complex integrations", "Documentation and maintenance handover"] },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find(s => s.slug === slug);
}
