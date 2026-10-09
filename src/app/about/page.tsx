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
    <section className="about-people-section" style={{ padding: "32px 24px 64px", borderBottom: "1px solid #e4e4e7" }}>
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>

        {/* Our People & Approach */}
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.12, color: "#17171c", margin: "0 0 20px" }}>
          Our People &amp; Approach
        </h2>
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, margin: 0 }}>
          BoonWare is powered by a specialized collective of software engineers, AI architects, creative designers, and performance marketers united by a passion for scalable tech and measurable growth. We blend clean engineering, data-backed insights, and continuous optimization to turn ambitious ideas into high-performing digital assets.
        </p>
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, marginTop: 16 }}>
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
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, margin: 0 }}>
          In a fast-paced digital ecosystem, <strong style={{ color: "#17171c" }}>sustainable growth</strong> requires aligning <strong style={{ color: "#17171c" }}>powerful technology</strong> with <strong style={{ color: "#17171c" }}>precision-targeted marketing</strong>. At <strong style={{ color: "#17171c" }}>BoonWare</strong>, we help brands uncover <strong style={{ color: "#17171c" }}>high-yield opportunities</strong>, <strong style={{ color: "#17171c" }}>automate key workflows</strong>, and transform web and mobile platforms into <strong style={{ color: "#17171c" }}>scalable revenue engines</strong>.
        </p>
        <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, marginTop: 16 }}>
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
          .about-values-section { padding-top:48px!important; padding-bottom:24px!important; }
          .about-people-section { padding-top:24px!important; padding-bottom:48px!important; }
          .about-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-team-grid { grid-template-columns: 1fr !important; }
          .about-val-grid { grid-template-columns: 1fr 1fr !important; }
          .about-proc-grid { grid-template-columns: 1fr 1fr !important; }
          .about-cta-row { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .about-val-grid { grid-template-columns: 1fr !important; }
          .about-proc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ padding: "clamp(88px, 12vw, 120px) 24px clamp(44px, 5vw, 64px)", borderBottom: "1px solid #e4e4e7", overflow: "hidden" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }} className="hero-line">
            About BoonWare
          </span>
          <div className="about-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: 48, alignItems: "end" }}>
            <h1 style={{ fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.02, color: "#17171c", margin: 0 }} className="hero-line">
              We build the technology<br />
              your business{" "}
              <span style={{ color: "#16a34a", fontWeight: 700 }}>needs to grow.</span>
            </h1>
            <p style={{ fontSize: 18, color: "#71717a", lineHeight: 1.7, margin: 0, paddingBottom: 6 }} className="hero-line">
              Build it right. Automate the rest. Grow without limits. BoonWare brings together full-suite web development, next-gen AI workflows, and data-driven marketing to take your business from launch to market leader.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "72px 24px", borderBottom: "1px solid #e4e4e7" }}>
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
              We founded BoonWare to bridge the gap between innovative AI and the everyday business. In a world flooded with generic tools, we focus on crafting intelligent, adaptive solutions that evolve with our clients&apos; needs.
            </p>
            <blockquote style={{ borderLeft: "3px solid #00897B", paddingLeft: 20, marginTop: 28 }}>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#17171c", lineHeight: 1.55, margin: 0, letterSpacing: "-0.2px" }}>
                &ldquo;Technology should be an extension of purpose — enhancing how people work, connect, and grow. We build with empathy, intelligence, and intent.&rdquo;
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
      <section className="founders-section" aria-labelledby="founders-title">
        <div className="founders-inner">
          <div className="founders-heading">
            <div>
              <span className="founders-eyebrow">THE PEOPLE BEHIND BOONWARE</span>
              <h2 id="founders-title">Our <span>Founders</span></h2>
            </div>
            <p>Meet our co-founders. Bringing business vision and thoughtful execution together to build what comes next.</p>
          </div>
          <div ref={teamRef} className="founders-grid">
            {TEAM.map((member, i) => (
              <article key={member.name} className="team-card founder-card">
                <div className="founder-portrait">
                  <Image src={member.img} alt={member.name} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 44vw, 540px" style={{ objectFit: "cover", objectPosition: "center 28%" }} unoptimized />
                  <span className="founder-number">0{i + 1} / CO-FOUNDER</span>
                  <div className="founder-photo-caption">{i === 0 ? "The vision." : "The execution."}</div>
                </div>
                <div className="founder-info">
                  <span className="founder-role">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.bio}</p>
                  <div className="founder-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>LinkedIn <span aria-hidden="true">↗</span></a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Instagram`}>Instagram <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="founders-bottom"><span>VISION × EXECUTION</span><p>Different strengths. A shared commitment to your growth.</p><Link href="/contact">Let’s build together <span aria-hidden="true">↗</span></Link></div>
        </div>
        <style>{`
          .founders-section { padding:88px 24px 56px; background:#063e37; color:#fff; position:relative; overflow:hidden; }
          .founders-section::before { content:""; position:absolute; width:620px; height:620px; border:1px solid #ffffff0d; border-radius:50%; top:-310px; right:-180px; pointer-events:none; box-shadow:0 0 0 80px #ffffff03,0 0 0 160px #ffffff02; }
          .founders-inner { max-width:1240px; margin:auto; position:relative; }
          .founders-heading { text-align:center; margin-bottom:48px; }
          .founders-eyebrow { display:block; color:#afdbc5; font-size:11px; font-weight:600; letter-spacing:2px; margin-bottom:20px; }
          .founders-heading h2 { margin:0; font-size:clamp(34px,4.1vw,58px); line-height:1.08; letter-spacing:-2px; font-weight:600; }
          .founders-heading h2 span { color:#c0e9c9; }
          .founders-heading > p { max-width:520px; margin:20px auto 0; color:#c2d6d0; font-size:14px; line-height:1.8; }
          .founders-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:32px; }
          .founder-card { min-width:0; background:#f7f8f2; color:#153d35; border-radius:18px; overflow:hidden; transition:box-shadow .3s; animation:founder-float 6s ease-in-out infinite; }
          .founder-card:nth-child(2) { animation-delay:-3s; }
          @keyframes founder-float { 0%,100% { translate:0 0; } 50% { translate:0 -8px; } }
          .founder-card:hover { animation-play-state:paused; box-shadow:0 24px 60px #001e2460; }
          .founder-portrait { position:relative; height:400px; overflow:hidden; background:#cbd7cc; }
          .founder-portrait img { transition:transform .7s; }
          .founder-card:hover .founder-portrait img { transform:scale(1.035); }
          .founder-portrait::after { content:""; position:absolute; inset:0; background:linear-gradient(180deg,#00291c20 0%,transparent 40%,#00291caa 100%); pointer-events:none; }
          .founder-number { position:absolute; z-index:1; top:20px; left:22px; padding:8px 12px; border-radius:99px; background:#063e37e6; color:#fff; font-size:10px; letter-spacing:1.3px; }
          .founder-photo-caption { position:absolute; bottom:22px; left:28px; z-index:1; color:#fff; font-size:34px; letter-spacing:-1px; font-weight:500; }
          .founder-info { padding:32px 34px; }
          .founder-role { color:#006c59; font-size:11px; font-weight:600; letter-spacing:1px; text-transform:uppercase; }
          .founder-info h3 { margin:8px 0 12px; font-size:28px; letter-spacing:-.8px; line-height:1.2; font-weight:600; }
          .founder-info > p { margin:0; color:#576760; font-size:14px; line-height:1.75; min-height:74px; max-width:420px; }
          .founder-links { display:flex; gap:24px; margin-top:22px; padding-top:18px; border-top:1px solid #dbe2d7; }
          .founder-links a { display:flex; align-items:center; justify-content:space-between; gap:18px; min-height:44px; color:#174c3f; text-decoration:none; font-size:12px; font-weight:600; }
          .founder-links a:hover { color:#00897b; }
          .founder-links a:focus-visible,.founders-bottom a:focus-visible { outline:2px solid #30bca0; outline-offset:5px; }
          .founders-bottom { display:flex; align-items:center; gap:32px; border-top:1px solid #ffffff25; padding-top:26px; margin-top:40px; }
          .founders-bottom > span { color:#b4d5be; font-size:10px; letter-spacing:1.7px; white-space:nowrap; }
          .founders-bottom p { color:#c2d6d0; font-size:13px; margin:0; flex:1; }
          .founders-bottom a { color:#fff; text-decoration:none; font-size:13px; padding:12px 0; white-space:nowrap; }
          .founders-bottom a span { margin-left:16px; }
          @media(max-width:700px) { .founders-section { padding:56px 20px 32px; } .founders-heading { display:block; margin-bottom:28px; } .founders-heading > p { margin:20px auto 0; max-width:380px; } .founders-heading h2 { letter-spacing:-1.3px; } .founders-grid { grid-template-columns:1fr; gap:24px; } .founder-portrait { height:320px; } .founder-info { padding:24px; } .founders-bottom { flex-wrap:wrap; gap:14px; margin-top:28px; } .founders-bottom p { flex-basis:100%; order:2; } }
          @media(prefers-reduced-motion:reduce) { .founder-card,.founder-portrait img { transition:none; animation:none; translate:none; } .founders-section .team-card { opacity:1!important; transform:none!important; } }
        `}</style>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values-section" style={{ padding: "64px 24px 32px", borderBottom: "1px solid #e4e4e7" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            What we stand for
          </span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.12, color: "#17171c", margin: "0 0 28px" }}>
            Our values.
          </h2>
          <div className="val-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="val-card"
                style={{
                  background: "#f7f8f4", border: "1px solid #e4e4e7",
                  padding: 24, opacity: 0,
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
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", margin: "20px 0 8px" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 13, color: "#71717a", margin: 0, lineHeight: 1.63 }}>
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
            Tell us what you need. We&apos;ll scope it, price it, and build it.
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
