"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TEAM = [
  {
    name: "Suzanne Ansari",
    role: "Co-Founder & CEO",
    img: "/assets/suzanne1-j5b959xL.jpeg",
    bio: "Drives strategy, client relationships, and business growth. Suzanne ensures every project delivers measurable ROI.",
    linkedin: "https://linkedin.com/in/suzanne16/",
    instagram: "https://instagram.com/boonware_agency/",
  },
  {
    name: "Shabaan Sayed",
    role: "Co-Founder & COO",
    img: "/assets/shabaan-CbrrHu3f.jpeg",
    bio: "Keeps operations tight and delivery on schedule. Shabaan bridges client expectations with engineering execution.",
    linkedin: "https://linkedin.com/in/shabaan-sayed-51513b1a4/",
    instagram: "https://instagram.com/shabaansayed11/",
  },
];

const VALUES = [
  { title: "Global Impact", desc: "Making AI accessible to businesses worldwide — from Hyderabad to Dubai to London." },
  { title: "Technical Excellence", desc: "Delivering world-class code and architecture that scales with your ambition." },
  { title: "Innovation First", desc: "Pushing boundaries with emerging technologies so you stay ahead of the competition." },
  { title: "Client-Centric", desc: "Your success is our success. We work collaboratively until the outcome is exactly right." },
];

const PROCESS = [
  { n: "01", title: "Strategic Discovery", time: "1–2 weeks", desc: "We dive deep into your market, technical requirements, and core revenue goals to blueprint a high-ROI digital strategy tailored to your growth." },
  { n: "02", title: "UI/UX & Architecture Design", time: "1–2 weeks", desc: "Crafting conversion-optimised, user-centric interfaces and responsive prototypes that elevate your brand and ensure frictionless user adoption." },
  { n: "03", title: "Engineering & Integration", time: "2–6 weeks", desc: "Building robust, scalable digital platforms using modern tech stacks, agile sprints, and enterprise-grade security standards." },
  { n: "04", title: "Launch, Training & Handover", time: "1 week", desc: "Executing a seamless deployment, delivering 100% clean and documented source code ownership, and onboarding your team for immediate operational success." },
];

const PILLARS = [
  {
    title: "Goal Oriented",
    icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#00897B" strokeWidth="1.8"/><circle cx="12" cy="12" r="5" stroke="#00897B" strokeWidth="1.8"/><circle cx="12" cy="12" r="1.5" fill="#00897B"/></svg>,
  },
  {
    title: "Affordable Services",
    icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#00897B" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="#00897B" strokeWidth="1.8"/></svg>,
  },
  {
    title: "Quick Support",
    icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00897B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

const WHY_ITEMS = [
  { title: "Full-Stack Synergy", desc: "Integrated expertise bridging custom software engineering, AI automation, UI/UX design, and performance marketing under one roof." },
  { title: "Proven Delivery Since 2021", desc: "A solid track record of taking ambitious ideas from early concept to scalable, high-performing digital platforms." },
  { title: "Transparent & Agile Collaboration", desc: "Direct communication, milestone-driven execution, and zero unnecessary overhead." },
  { title: "Scalable & Cost-Effective Architecture", desc: "Modern tech stacks and data-backed marketing funnels designed to expand seamlessly alongside your revenue." },
  { title: "Rapid Technical & Growth Support", desc: "Dedicated specialist teams on standby for swift troubleshooting, ongoing feature updates, and continuous campaign optimization." },
];

function PeopleSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7" }}>
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>

        {/* Our People & Approach */}
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-1px", color: "#17171c", margin: "0 0 20px" }}>
          Our People &amp; Approach
        </h2>
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, maxWidth: 780, margin: 0 }}>
          BoonWare is powered by a specialized collective of software engineers, AI architects, creative designers, and performance marketers united by a passion for scalable tech and measurable growth. We blend clean engineering, data-backed insights, and continuous optimization to turn ambitious ideas into high-performing digital assets.
        </p>
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, maxWidth: 780, marginTop: 16 }}>
          Since 2021, we have partnered with forward-thinking startups and growing enterprises, earning trust through agile execution, transparent collaboration, and dependable end-to-end support.
        </p>

        {/* 3 Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 40 }}>
          {PILLARS.map(p => (
            <div key={p.title} style={{ background: "#f7f8f4", border: "1px solid #e4e4e7", borderRadius: 14, padding: "28px 24px", display: "flex", alignItems: "center", gap: 16 }}>
              {p.icon}
              <span style={{ fontSize: 17, fontWeight: 700, color: "#17171c", letterSpacing: "-0.3px" }}>{p.title}</span>
            </div>
          ))}
        </div>

        {/* How We Create Impact */}
        <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.8px", color: "#17171c", margin: "72px 0 20px" }}>
          How We Create{" "}
          <span style={{ color: "#00897B" }}>Impact</span>
        </h2>
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, maxWidth: 780, margin: 0 }}>
          In a fast-paced digital ecosystem, <strong style={{ color: "#17171c" }}>sustainable growth</strong> requires aligning <strong style={{ color: "#17171c" }}>powerful technology</strong> with <strong style={{ color: "#17171c" }}>precision-targeted marketing</strong>. At <strong style={{ color: "#17171c" }}>BoonWare</strong>, we help brands uncover <strong style={{ color: "#17171c" }}>high-yield opportunities</strong>, <strong style={{ color: "#17171c" }}>automate key workflows</strong>, and transform web and mobile platforms into <strong style={{ color: "#17171c" }}>scalable revenue engines</strong>.
        </p>
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, maxWidth: 780, marginTop: 16 }}>
          We focus on building <strong style={{ color: "#17171c" }}>lasting value</strong> and engineering <strong style={{ color: "#17171c" }}>scalable systems</strong>—not chasing temporary vanity metrics.
        </p>

        {/* Why Businesses Choose BoonWare */}
        <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.8px", color: "#00897B", margin: "72px 0 24px" }}>
          Why Businesses Choose BoonWare
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #e4e4e7" }}>
          {WHY_ITEMS.map((item, i) => (
            <div key={item.title} style={{ borderBottom: "1px solid #e4e4e7" }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "20px 0", textAlign: "left", fontFamily: "inherit",
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, color: "#17171c", letterSpacing: "-0.3px" }}>{item.title}</span>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0, transition: "transform 0.25s", transform: openIdx === i ? "rotate(45deg)" : "none" }}>
                  <path d="M12 5v14M5 12h14" stroke="#00897B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div style={{
                overflow: "hidden",
                maxHeight: openIdx === i ? 120 : 0,
                transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}>
                <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero: staggered word-by-word animation
      const heroWords = heroRef.current?.querySelectorAll(".hero-word") ?? [];
      if (heroWords.length) {
        gsap.fromTo(heroWords,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: "power3.out", delay: 0.2 }
        );
      }

      // Fallback for hero-line elements
      gsap.from(heroRef.current?.querySelectorAll(".hero-line") ?? [], {
        y: 48, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power4.out", delay: 0.2,
      });

      // Story: left column slides from left, right column from right
      const storyLeft = storyRef.current?.querySelector(".story-left") ?? null;
      const storyRight = storyRef.current?.querySelector(".story-right") ?? null;
      if (storyLeft) {
        gsap.fromTo(storyLeft,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 80%", once: true } }
        );
      }
      if (storyRight) {
        gsap.fromTo(storyRight,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 80%", once: true } }
        );
      }

      // team cards: stagger with rotateY:5
      gsap.fromTo(
        teamRef.current?.querySelectorAll(".team-card") ?? [],
        { opacity: 0, y: 40, rotateY: 5 },
        { opacity: 1, y: 0, rotateY: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: teamRef.current, start: "top 80%", once: true } }
      );

      // value cards: diagonal stagger
      gsap.fromTo(".val-card",
        { opacity: 0, y: 32, x: 16 },
        { opacity: 1, y: 0, x: 0, duration: 0.6, stagger: { amount: 0.5, grid: [1, 4], from: "start", axis: "x" }, ease: "power3.out",
          scrollTrigger: { trigger: ".val-grid", start: "top 80%", once: true } }
      );

      // process steps
      gsap.fromTo(".proc-step",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".proc-grid", start: "top 80%", once: true } }
      );
    };
    run();
  }, []);

  return (
    <div style={{ background: "#ffffff", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-team-grid { grid-template-columns: 1fr !important; }
          .about-val-grid { grid-template-columns: 1fr 1fr !important; }
          .about-proc-grid { grid-template-columns: 1fr 1fr !important; }
          .about-cta-row { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .about-val-grid { grid-template-columns: 1fr !important; }
          .about-proc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ padding: "clamp(96px, 16vw, 140px) 24px clamp(72px, 10vw, 100px)", borderBottom: "1px solid #e4e4e7", overflow: "hidden" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }} className="hero-line">
            About BoonWare
          </span>
          <h1 style={{ fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.02, color: "#17171c", margin: 0 }} className="hero-line">
            We build the technology<br />
            your business{" "}
            <span style={{ color: "#16a34a", fontWeight: 700 }}>needs to grow.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#71717a", maxWidth: 620, lineHeight: 1.7, marginTop: 28 }} className="hero-line">
            Build it right. Automate the rest. Grow without limits. BoonWare brings together full-suite web development, next-gen AI workflows, and data-driven marketing to take your business from launch to market leader.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7" }}>
        <div ref={storyRef} className="about-story-grid" style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div className="story-left" style={{ willChange: "transform" }}>
            <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
              Our story
            </span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: 0 }}>
              Built to bridge AI<br />and real business.
            </h2>
          </div>
          <div className="story-right" style={{ willChange: "transform" }}>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, margin: 0 }}>
              BoonWare began as a shared vision between three passionate technologists — not just to build products, but to build the future. From our very first project, we knew we wanted to be more than a software studio.
            </p>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, marginTop: 20 }}>
              We founded BoonWare to bridge the gap between innovative AI and the everyday business. In a world flooded with generic tools, we focus on crafting intelligent, adaptive solutions that evolve with our clients' needs.
            </p>
            <blockquote style={{ borderLeft: "3px solid #00897B", paddingLeft: 20, marginTop: 28 }}>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#17171c", lineHeight: 1.55, margin: 0, letterSpacing: "-0.2px" }}>
                "Technology should be an extension of purpose — enhancing how people work, connect, and grow. We build with empathy, intelligence, and intent."
              </p>
            </blockquote>
            <div style={{ display: "flex", gap: 32, marginTop: 36, paddingTop: 32, borderTop: "1px solid #e4e4e7" }}>
              {[["265+", "Businesses powered"], ["15+", "Industries served"], ["9", "Countries active"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.8px", color: "#17171c" }}>{num}</div>
                  <div style={{ fontSize: 13, color: "#71717a", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7", background: "#f7f8f4" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-story-grid">
          {/* Left: services illustration — fills cell fully */}
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.12)", height: 480, position: "relative" }}>
            <img
              src="/assets/boonware-services-journey.png"
              alt="BoonWare services"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: "none",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>

          {/* Right: timeline */}
          <div>
            <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 28 }}>
              Our Journey
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  text: "Founded in 2021, BoonWare began with bespoke services including Website and Mobile App Development. As digital trends evolved, so did we.",
                },
                {
                  text: "Today, we operate as a comprehensive, full-suite digital agency with dedicated, specialized teams across the entire spectrum — delivering measurable growth and scalable systems.",
                },
                {
                  text: null,
                  rich: <>Our services include <strong>Custom Web &amp; App Development, Brand Strategy &amp; UI/UX Design, Performance Marketing &amp; Ads, AI &amp; Automation Systems, SEO &amp; Content Strategy, Social Media Management</strong>, and <strong>E-Commerce Solutions</strong>, enabling us to build, scale, and transform businesses from the ground up.</>,
                },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#17171c",
                  borderRadius: 14,
                  padding: "20px 24px",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}>
                  {item.rich ?? item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7", background: "#00897B" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-1px", color: "#fff", margin: "0 0 48px" }}>
            Our Founder
          </h2>

          <div ref={teamRef} className="about-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 760, margin: "0 auto" }}>
            {TEAM.map(member => (
              <div
                key={member.name}
                className="team-card"
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "40px 32px 32px",
                  textAlign: "center",
                  width: "100%",
                  opacity: 0,
                  transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Circular photo */}
                <div style={{ width: 170, height: 170, borderRadius: "50%", overflow: "hidden", margin: "0 auto 24px", border: "4px solid #00897B", position: "relative", background: "#f4f4f5" }}>
                  <Image
                    src={member.img} alt={member.name} fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    unoptimized
                    sizes="140px"
                  />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px", color: "#17171c", margin: 0 }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: 13, color: "#00897B", fontWeight: 600, marginTop: 4 }}>
                  {member.role}
                </p>
                <div style={{ display: "flex", gap: 10, marginTop: 16, justifyContent: "center" }}>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: "50%", background: "#f4f4f5", color: "#0a66c2", textDecoration: "none", transition: "background 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#0a66c2"; (e.currentTarget.querySelector("svg") as SVGElement).style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#f4f4f5"; (e.currentTarget.querySelector("svg") as SVGElement).style.color = "#0a66c2"; }}
                    aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: "50%", background: "#f4f4f5", color: "#e1306c", textDecoration: "none", transition: "background 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#e1306c"; (e.currentTarget.querySelector("svg") as SVGElement).style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#f4f4f5"; (e.currentTarget.querySelector("svg") as SVGElement).style.color = "#e1306c"; }}
                    aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            What we stand for
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: "0 0 48px" }}>
            Our values.
          </h2>
          <div className="val-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="val-card"
                style={{
                  background: "#f7f8f4", border: "1px solid #e4e4e7",
                  padding: 28, opacity: 0,
                  transition: "border-color 0.22s, transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#17171c";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "1px" }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", marginTop: 32 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 13, color: "#71717a", marginTop: 8, lineHeight: 1.63 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEOPLE & APPROACH + IMPACT + WHY BOONWARE ── */}
      <PeopleSection />

      {/* ── PROCESS ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7", background: "#f7f8f4" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            How we work
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: "0 0 48px" }}>
            From idea to live in <span style={{ color: "#00897B" }}>4 phases.</span>
          </h2>
          <div className="proc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {PROCESS.map(s => (
              <div
                key={s.n}
                className="proc-step"
                style={{ borderTop: "2px solid #17171c", paddingTop: 12, opacity: 0, transition: "border-color 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00897B"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#17171c"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#71717a", letterSpacing: "0.6px" }}>{s.n}</span>
                  <span style={{ fontSize: 11, color: "#00897B", fontWeight: 600 }}>{s.time}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", marginTop: 24 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#71717a", marginTop: 8, lineHeight: 1.63 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "104px 24px", textAlign: "center" }}>
        <div style={{ width: "min(700px, calc(100% - 48px))", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: 0 }}>
            Ready to work with us?
          </h2>
          <p style={{ fontSize: 17, color: "#71717a", marginTop: 16, lineHeight: 1.63 }}>
            Tell us what you need. We'll scope it, price it, and build it.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "13px 32px", background: "#17171c", color: "#fff",
              borderRadius: 9999, fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#00897B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#17171c"; }}
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media(max-width:850px) {
          [style*="grid-template-columns: 1fr 1fr 1fr"],[style*="repeat(3, 1fr)"]{grid-template-columns:1fr!important}
          [style*="repeat(4, 1fr)"]{grid-template-columns:1fr 1fr!important}
          [style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
        }
        @media(max-width:560px){
          [style*="repeat(4, 1fr)"]{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
