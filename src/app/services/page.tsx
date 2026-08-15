"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import Link from "next/link";
import Image from "next/image";

/* ─── DATA ─────────────────────────────────────────────────── */

const OUTCOMES = [
  {
    key: "BUILD",
    label: "BUILD",
    title: "Build from zero to live.",
    copy: "Full-stack websites, mobile apps, admin dashboards — designed to convert, engineered to last. Fixed scope. Fixed price. Source code yours.",
    tags: ["Websites", "Web Apps", "Mobile Apps", "APIs", "Admin Panels"],
    flow: ["Discovery", "Design", "Development", "Testing", "Launch"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    key: "AUTOMATE",
    label: "AUTOMATE",
    title: "Kill the manual work.",
    copy: "n8n workflows, AI chatbots, WhatsApp automation, LangChain agents. We replace hours of salary-work with logic that runs while you sleep.",
    tags: ["n8n Workflows", "AI Agents", "WhatsApp Bots", "CRM Sync", "Lead Routing"],
    flow: ["Audit", "Blueprint", "Build", "Test", "Deploy"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    key: "SELL",
    label: "SELL",
    title: "Sell more. Sell faster.",
    copy: "E-commerce stores, multi-vendor marketplaces, AI-powered sales agents. Everything wired to turn visitors into paying customers from day one.",
    tags: ["Shopify Builds", "Marketplaces", "Payment Gateways", "AI SDR", "Upsell Flows"],
    flow: ["Store Design", "Catalog Setup", "Payment Wiring", "Launch", "Optimise"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    key: "CONNECT",
    label: "CONNECT",
    title: "Turn strangers into regulars.",
    copy: "WhatsApp marketing, QR ordering, loyalty programs, automated follow-ups. The technology that keeps your customers coming back — automatically.",
    tags: ["WhatsApp Broadcast", "QR Menus", "Loyalty Programs", "Auto Follow-up", "Email Sequences"],
    flow: ["Map Touchpoints", "Build Flows", "Integrate", "Go Live", "Optimise"],
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
  },
  {
    key: "GROW",
    label: "GROW",
    title: "Make your brand impossible to ignore.",
    copy: "Logo, brand kit, social content, Google & Meta ads, SEO. A complete growth stack so you outrank and out-brand every competitor in your market.",
    tags: ["Brand Identity", "Social Content", "Google Ads", "Meta Ads", "SEO"],
    flow: ["Brand Audit", "Identity", "Content", "Ads", "Track & Scale"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

const SERVICES = [
  { num: "01", slug: "website-development", title: "Website & App Development", sub: "From landing pages to full-stack platforms", detail: "React, Next.js, Node.js — delivered in 2-4 weeks with fixed scope and fixed price. Every project ships with source code, documentation, and a 30-day support window.", chips: ["Landing Pages", "SaaS Apps", "Admin Dashboards", "Custom CMS", "APIs"], from: "₹49,999", outcome: "BUILD" },
  { num: "02", slug: "ai-automation", title: "AI & Automation", sub: "Replace manual work with intelligent systems", detail: "n8n pipelines, LangChain agents, WhatsApp bots, AI calling agents. We audit your current workflows, identify the highest-ROI automations, and build them in under 3 weeks.", chips: ["n8n Pipelines", "LangChain Agents", "WhatsApp Automation", "AI Calling", "CRM Sync"], from: "₹75,000", outcome: "AUTOMATE" },
  { num: "03", slug: "restaurant-technology", title: "Restaurant Technology", sub: "Complete digitization for F&B businesses", detail: "QR ordering, live kitchen display, WhatsApp menu, POS integration. Typically pays for itself within 90 days through order volume increase and labour cost reduction.", chips: ["QR Menu", "Kitchen Display", "Online Ordering", "POS Integration", "Loyalty"], from: "₹1,20,000", outcome: "CONNECT" },
  { num: "04", slug: "ecommerce-marketplaces", title: "E-Commerce & Marketplaces", sub: "Shopify stores and multi-vendor platforms", detail: "Full buyer/seller/admin dashboards, payment gateways, seller onboarding, and analytics. Built to scale from 10 to 10,000 transactions with zero re-architecture.", chips: ["Shopify", "Multi-vendor", "Payment Gateway", "Seller Dashboard", "Analytics"], from: "₹80,000", outcome: "SELL" },
  { num: "05", slug: "branding-marketing", title: "Branding & Marketing", sub: "Logo to paid ads — the full brand stack", detail: "Brand identity, social media content, Google/Meta ad management, and monthly performance reports. Everything to make you the obvious choice in your market.", chips: ["Logo & Brand Kit", "Social Content", "Google Ads", "Meta Ads", "SEO"], from: "₹25,000", outcome: "GROW" },
  { num: "06", slug: "mobile-apps", title: "Mobile Applications", sub: "iOS & Android — one codebase, both platforms", detail: "React Native cross-platform apps with push notifications, offline mode, App Store submission, and backend APIs. A fraction of the cost of two native builds.", chips: ["iOS & Android", "Push Notifications", "Offline Mode", "App Store Submit", "Backend APIs"], from: "₹1,50,000", outcome: "BUILD" },
  { num: "07", slug: "whatsapp-automation", title: "WhatsApp Automation", sub: "Your best salesperson — on 24/7", detail: "Lead capture, qualification, follow-up, appointment booking — all on WhatsApp. Integrates with your CRM and sends you a summary every morning.", chips: ["Lead Capture", "Qualification", "Follow-up", "Booking", "CRM Sync"], from: "₹45,000", outcome: "CONNECT" },
  { num: "08", slug: "ai-calling-agent", title: "AI Calling Agent", sub: "Outbound calls, handled by AI", detail: "Human-sounding voice AI that calls leads, qualifies them, and books meetings in your calendar. Works across English, Hindi, and regional languages.", chips: ["Voice AI", "Lead Qualification", "Calendar Booking", "Multi-language", "CRM Logging"], from: "₹1,00,000", outcome: "AUTOMATE" },
  { num: "09", slug: "analytics-dashboards", title: "Analytics & Dashboards", sub: "See everything. Decide faster.", detail: "Custom analytics dashboards that pull from your website, CRM, ads, and social media into a single view. Built in React, updated in real-time.", chips: ["Real-time Data", "Custom KPIs", "Multi-source", "Alerts", "Export"], from: "₹60,000", outcome: "GROW" },
];

const PROOFS = [
  {
    name: "Pokhraj Jewellers",
    result: "3× online enquiries in 60 days",
    detail: "Full e-commerce rebuild with WhatsApp checkout flow and Google Shopping integration.",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
  {
    name: "Restaurant Chain (Dubai)",
    result: "40% reduction in order wait time",
    detail: "QR menu system, kitchen display, and WhatsApp ordering integrated with existing POS.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const showroomRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [activeOutcome, setActiveOutcome] = useState(0);
  const [openService, setOpenService] = useState<number | null>(null);

  /* GSAP init */
  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      /* Hero lines - clip-path reveal */
      const heroLines = heroRef.current?.querySelectorAll(".hero-line-inner");
      if (heroLines?.length) {
        gsap.to(heroLines, {
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.1,
        });
        // Extra: clip-path wipe on the hero heading wrappers
        const heroWrappers = heroRef.current?.querySelectorAll(".hero-line-wrap") ?? [];
        gsap.fromTo(heroWrappers,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power4.out", stagger: 0.08, delay: 0.1 }
        );
      }
      const heroSub = heroRef.current?.querySelector(".hero-sub") ?? null;
      if (heroSub) {
        gsap.fromTo(heroSub, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.55 });
      }

      /* Picker buttons stagger */
      gsap.fromTo(
        pickerRef.current?.querySelectorAll(".outcome-btn") ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.07,
          scrollTrigger: { trigger: pickerRef.current, start: "top 80%", once: true },
        }
      );

      /* Showroom cards */
      gsap.fromTo(
        showroomRef.current?.querySelectorAll(".show-card") ?? [],
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: showroomRef.current, start: "top 75%", once: true },
        }
      );

      /* Service rows */
      gsap.fromTo(
        accordionRef.current?.querySelectorAll(".svc-row") ?? [],
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.04,
          scrollTrigger: { trigger: accordionRef.current, start: "top 80%", once: true },
        }
      );

      /* Proof cards */
      gsap.fromTo(
        proofRef.current?.querySelectorAll(".proof-card") ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: proofRef.current, start: "top 80%", once: true },
        }
      );

      /* CTA */
      const ctaInner = ctaRef.current?.querySelector(".cta-inner") ?? null;
      if (ctaInner) {
        gsap.fromTo(
          ctaInner,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: ctaRef.current, start: "top 80%", once: true },
          }
        );
      }
    };
    run();
  }, []);

  const active = OUTCOMES[activeOutcome];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#ffffff" }}>
      <style>{`
        @media (max-width: 768px) {
          .outcome-panel { grid-template-columns: 1fr !important; }
          .accordion-layout { grid-template-columns: 1fr !important; }
          .accordion-sticky { position: static !important; }
          .showroom-grid { grid-template-columns: 1fr !important; }
          .proof-cards { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 500px) {
          .outcome-buttons { gap: 6px !important; }
          .outcome-buttons button { padding: 10px 16px !important; font-size: 13px !important; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          background: "#17171c",
          padding: "clamp(140px, 18vw, 220px) clamp(24px, 6vw, 100px) clamp(80px, 10vw, 120px)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* grid texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative" }}>
          <div className="hero-line-wrap" style={{ overflow: "hidden", marginBottom: 4 }}>
            <span className="hero-line-inner" style={{
              display: "block",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              transform: "translateY(110%)",
              willChange: "transform",
            }}>
              What do you
            </span>
          </div>
          <div className="hero-line-wrap" style={{ overflow: "hidden", marginBottom: 4 }}>
            <span className="hero-line-inner" style={{
              display: "block",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              transform: "translateY(110%)",
              willChange: "transform",
              background: "linear-gradient(90deg, #e8643c 0%, #ff9a6c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              want to change?
            </span>
          </div>

          <p className="hero-sub" style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: 520,
            lineHeight: 1.7,
            marginTop: 32,
            fontFamily: "'Inter', sans-serif",
            opacity: 0,
          }}>
            Pick your outcome below. We'll show you exactly what we build, how it works, and what it costs.
          </p>
        </div>
      </section>

      {/* ── OUTCOME PICKER ── */}
      <section
        ref={pickerRef}
        style={{
          background: "#111116",
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 100px)",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          {/* Buttons row */}
          <div style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 48,
          }}>
            {OUTCOMES.map((o, i) => (
              <button
                key={o.key}
                className="outcome-btn"
                onClick={() => setActiveOutcome(i)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "14px 28px",
                  borderRadius: 9999,
                  border: activeOutcome === i ? "none" : "1px solid rgba(255,255,255,0.12)",
                  background: activeOutcome === i ? "#e8643c" : "transparent",
                  color: activeOutcome === i ? "#ffffff" : "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                  transition: "all 0.22s ease",
                  opacity: 0,
                }}
                onMouseEnter={e => {
                  if (activeOutcome !== i) {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
                  }
                }}
                onMouseLeave={e => {
                  if (activeOutcome !== i) {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  }
                }}
              >
                {o.label}
              </button>
            ))}
          </div>

          {/* Live panel */}
          <div
            key={active.key}
            className="outcome-panel"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 80px)",
              alignItems: "center",
              animation: "fadeSlideIn 0.45s ease both",
            }}
          >
            <div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 52px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}>
                {active.title}
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                margin: "0 0 32px",
              }}>
                {active.copy}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
                {active.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#e8643c",
                    border: "1px solid rgba(232,100,60,0.35)",
                    borderRadius: 9999,
                    padding: "5px 14px",
                  }}>{t}</span>
                ))}
              </div>

              {/* Flow steps */}
              <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" }}>
                {active.flow.map((step, i) => (
                  <div key={step} style={{ display: "flex", alignItems: "center" }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.6)",
                      background: "rgba(255,255,255,0.06)",
                      padding: "6px 14px",
                      borderRadius: 6,
                      letterSpacing: "0.04em",
                    }}>{step}</span>
                    {i < active.flow.length - 1 && (
                      <span style={{ color: "#e8643c", fontSize: 16, margin: "0 4px" }}>→</span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919076269629"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 36,
                  background: "#e8643c",
                  color: "#fff",
                  borderRadius: 9999,
                  padding: "14px 32px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              >
                Start this project →
              </a>
            </div>

            {/* Image side */}
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image
                src={active.img}
                alt={active.title}
                fill
                unoptimized
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(232,100,60,0.15) 0%, transparent 60%)",
              }} />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ── SHOWROOM ── */}
      <section
        ref={showroomRef}
        style={{
          background: "#f7f8f4",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 100px)",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "rgba(0,0,0,0.4)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}>What we ship</p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(30px, 4vw, 56px)",
                fontWeight: 700,
                color: "#17171c",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
              }}>
                Real work.<br />Real results.
              </h2>
            </div>
            <Link href="/projects" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#17171c",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              paddingBottom: 2,
            }}>
              See all projects →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                title: "Jewellery E-Commerce",
                label: "3× enquiries in 60 days",
                img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
                tags: ["E-Commerce", "WhatsApp Checkout"],
              },
              {
                title: "AI Calling Agent",
                label: "800+ calls per day, automated",
                img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
                tags: ["AI", "Automation", "Voice"],
              },
              {
                title: "Restaurant QR System",
                label: "40% faster order cycle",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
                tags: ["Restaurant Tech", "QR", "POS"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="show-card"
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  opacity: 0,
                  willChange: "transform",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image src={card.img} alt={card.title} fill unoptimized style={{ objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", bottom: 12, left: 12,
                    background: "#e8643c",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "5px 12px",
                    borderRadius: 9999,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {card.label}
                  </div>
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#17171c",
                    margin: "0 0 12px",
                    letterSpacing: "-0.02em",
                  }}>{card.title}</h3>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {card.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 11,
                        color: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(0,0,0,0.1)",
                        borderRadius: 9999,
                        padding: "3px 10px",
                        fontFamily: "'Inter', sans-serif",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE ACCORDION ── */}
      <section
        ref={accordionRef}
        style={{
          background: "#ffffff",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 100px)",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className="accordion-layout" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(32px, 5vw, 80px)", alignItems: "start" }}>
            <div className="accordion-sticky" style={{ position: "sticky", top: 120 }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "rgba(0,0,0,0.4)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}>Everything we do</p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 700,
                color: "#17171c",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                margin: "0 0 24px",
              }}>
                Nine services.<br />One partner.
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "rgba(0,0,0,0.5)",
                lineHeight: 1.75,
                margin: "0 0 32px",
              }}>
                Click any service to see exactly what we build, what tech we use, and starting prices.
              </p>
              <a
                href="https://wa.me/919076269629"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#17171c",
                  color: "#fff",
                  borderRadius: 9999,
                  padding: "13px 28px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#e8643c"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#17171c"}
              >
                Get a quote
              </a>
            </div>

            {/* Accordion list */}
            <div>
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.num}
                  className="svc-row"
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    opacity: 0,
                    willChange: "transform",
                  }}
                >
                  <button
                    onClick={() => setOpenService(openService === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "24px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: "rgba(0,0,0,0.25)",
                        minWidth: 24,
                      }}>{svc.num}</span>
                      <div>
                        <div style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "clamp(16px, 2vw, 22px)",
                          fontWeight: 600,
                          color: "#17171c",
                          letterSpacing: "-0.02em",
                          marginBottom: 3,
                        }}>{svc.title}</div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 13,
                          color: "rgba(0,0,0,0.4)",
                        }}>{svc.sub}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
                      <span style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(15px, 1.5vw, 18px)",
                        fontWeight: 700,
                        color: "#17171c",
                        letterSpacing: "-0.02em",
                      }}>from {svc.from}</span>
                      <span style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,0,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        color: openService === i ? "#e8643c" : "rgba(0,0,0,0.4)",
                        transition: "transform 0.25s ease, color 0.2s",
                        transform: openService === i ? "rotate(45deg)" : "none",
                        flexShrink: 0,
                      }}>+</span>
                    </div>
                  </button>

                  {/* Detail panel */}
                  <div style={{
                    overflow: "hidden",
                    maxHeight: openService === i ? 400 : 0,
                    transition: "max-height 0.4s ease",
                  }}>
                    <div style={{
                      paddingBottom: 28,
                      paddingLeft: 44,
                    }}>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 15,
                        color: "rgba(0,0,0,0.6)",
                        lineHeight: 1.75,
                        margin: "0 0 20px",
                        maxWidth: 540,
                      }}>{svc.detail}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                        {svc.chips.map(c => (
                          <span key={c} style={{
                            fontSize: 12,
                            color: "#e8643c",
                            border: "1px solid rgba(232,100,60,0.3)",
                            borderRadius: 9999,
                            padding: "4px 12px",
                            fontFamily: "'Inter', sans-serif",
                          }}>{c}</span>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <a
                          href="https://wa.me/919076269629"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 14,
                            fontWeight: 600,
                            background: "#e8643c",
                            color: "#fff",
                            textDecoration: "none",
                            borderRadius: 9999,
                            padding: "10px 20px",
                            transition: "opacity 0.2s",
                          }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                        >Get a quote →</a>
                        <Link
                          href={`/services/${svc.slug}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#17171c",
                            textDecoration: "none",
                            border: "1px solid rgba(0,0,0,0.15)",
                            borderRadius: 9999,
                            padding: "10px 20px",
                            transition: "border-color 0.2s",
                          }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#17171c"}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.15)"}
                        >Full details →</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section
        ref={proofRef}
        style={{
          background: "#17171c",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 100px)",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 56,
            textAlign: "center",
          }}>It works. Here's proof.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 80 }}>
            {PROOFS.map(p => (
              <div
                key={p.name}
                className="proof-card"
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.07)",
                  opacity: 0,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
              >
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <Image src={p.img} alt={p.name} fill unoptimized style={{ objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(23,23,28,0.9) 0%, transparent 50%)",
                  }} />
                  <div style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                  }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#e8643c",
                      letterSpacing: "-0.02em",
                      marginBottom: 4,
                    }}>{p.result}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                    }}>{p.name}</div>
                  </div>
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}>{p.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial quote */}
          <div style={{
            maxWidth: 680,
            margin: "0 auto",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 64,
          }}>
            <div style={{
              fontSize: 48,
              color: "#e8643c",
              lineHeight: 1,
              marginBottom: 24,
              fontFamily: "Georgia, serif",
            }}>&ldquo;</div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(18px, 2vw, 26px)",
              fontWeight: 500,
              color: "#ffffff",
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
              margin: "0 0 32px",
            }}>
              They built our entire online ordering system in 18 days. Our kitchen team adapted in a week. Revenue up 22% the next month.
            </p>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
            }}>
              Hamza Al-Rashid — Braai Boys, Dubai
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{
        background: "#e8643c",
        padding: "clamp(40px, 5vw, 60px) clamp(24px, 6vw, 100px)",
      }}>
        <div style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 32,
          textAlign: "center",
        }}>
          {[
            { val: "243+", label: "Projects Delivered" },
            { val: "100+", label: "Businesses Served" },
            { val: "5", label: "Countries" },
            { val: "30d", label: "Avg. Delivery" },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 8,
              }}>{s.val}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.75)",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        style={{
          background: "#17171c",
          padding: "clamp(100px, 13vw, 160px) clamp(24px, 6vw, 100px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ambient glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(232,100,60,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="cta-inner" style={{ position: "relative", opacity: 0 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}>Ready when you are</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 6vw, 88px)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            maxWidth: 800,
            margin: "0 auto 16px",
          }}>
            Tell us what needs
            <span style={{ color: "#e8643c" }}> to change.</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.5vw, 18px)",
            color: "rgba(255,255,255,0.4)",
            maxWidth: 440,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}>
            Fixed price. Source code yours. Done right the first time.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919076269629"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#e8643c",
                color: "#fff",
                borderRadius: 9999,
                padding: "16px 36px",
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
            >
              WhatsApp us
            </a>
            <a
              href="mailto:info@boonware.in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                borderRadius: 9999,
                padding: "16px 36px",
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.15)",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              info@boonware.in
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
