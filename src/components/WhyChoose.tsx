"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const GOALS = [
  {
    id: "customers",
    icon: "↗",
    title: "Get more customers",
    sub: "Attract, engage, qualify and convert.",
    solution: "Lead-gen website + AI chatbot + WhatsApp automation",
    desc: "We build you a high-converting website, add an AI chatbot that qualifies visitors 24/7, and wire up a WhatsApp automation that follows up every lead automatically.",
    tags: ["Website", "AI Chatbot", "WhatsApp Bot", "Lead Funnel"],
    accent: "#e8643c",
  },
  {
    id: "operations",
    icon: "⚡",
    title: "Reduce manual work",
    sub: "Automate repetitive operations.",
    solution: "n8n workflow automation + AI agents",
    desc: "We identify your most time-consuming manual tasks and replace them with automated workflows — from invoice processing to customer follow-ups.",
    tags: ["n8n Workflows", "AI Agents", "CRM Integration", "Auto-Reports"],
    accent: "#7c3aed",
  },
  {
    id: "build",
    icon: "◆",
    title: "Build something new",
    sub: "Launch a product, platform or app.",
    solution: "Full-stack web app or mobile app",
    desc: "From MVP to full product — we design, build and launch your app with clean code, fixed price and source code that's yours to keep.",
    tags: ["Web App", "Mobile App", "API", "Dashboard"],
    accent: "#0ea5e9",
  },
  {
    id: "modernize",
    icon: "⬡",
    title: "Modernize my business",
    sub: "Connect systems and add intelligence.",
    solution: "System integrations + AI upgrade",
    desc: "Connect your existing tools, migrate legacy systems, and layer AI on top — so your team spends less time copy-pasting and more time growing.",
    tags: ["Integrations", "AI Upgrade", "Data Migration", "Dashboards"],
    accent: "#10b981",
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const autoActivatedRef = useRef(false);

  // Cards stagger in + auto-activate first card on scroll
  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const cards = sectionRef.current?.querySelectorAll(".disc-card") ?? [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
            onEnter: () => {
              if (!autoActivatedRef.current) {
                autoActivatedRef.current = true;
                setTimeout(() => setActive("customers"), 500);
              }
            },
          },
        }
      );
    };
    run();
  }, []);

  // Spectacular staggered animation on solution panel open
  useEffect(() => {
    if (!active || !solutionRef.current) return;
    const el = solutionRef.current;
    const run = async () => {
      const gsap = (await import("gsap")).default;

      const title = el.querySelector(".sol-title") ?? null;
      const desc = el.querySelector(".sol-desc") ?? null;
      const tags = el.querySelectorAll(".sol-tag");
      const cta = el.querySelector(".sol-cta") ?? null;
      const bar = el.querySelector(".sol-bar") ?? null;

      const tl = gsap.timeline();

      // Panel slides down from 0 height
      tl.fromTo(el,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      // Accent bar sweeps in
      if (bar) tl.fromTo(bar,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.35, ease: "power2.out" },
        "-=0.15"
      );

      // Title slides in from left
      if (title) tl.fromTo(title,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      );

      // Description fades up
      if (desc) tl.fromTo(desc,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        "-=0.15"
      );

      // Tags pop in staggered
      if (tags.length) tl.fromTo(tags,
        { opacity: 0, scale: 0.7, y: 8 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, stagger: 0.06, ease: "back.out(1.5)" },
        "-=0.1"
      );

      // CTA bounces in
      if (cta) tl.fromTo(cta,
        { opacity: 0, scale: 0.8, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(2)" },
        "-=0.05"
      );
    };
    run();
  }, [active]);

  const chosen = GOALS.find(g => g.id === active);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#f7f8f4",
        borderTop: "1px solid #e4e4e7",
        borderBottom: "1px solid #e4e4e7",
        padding: "104px 0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
        <span style={{
          display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c",
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
        }}>
          Start with your goal
        </span>
        <h2 style={{
          fontSize: "clamp(30px, 4.5vw, 60px)", fontWeight: 700,
          letterSpacing: "-1.44px", lineHeight: 1.05, color: "#17171c",
        }}>
          What are you trying to <span style={{ color: "#e8643c" }}>improve?</span>
        </h2>
        <p style={{
          color: "#71717a", fontSize: 17, lineHeight: 1.63,
          maxWidth: 560, marginTop: 16,
        }}>
          Don't know which service you need? Start with the business outcome.
          We'll show you what BoonWare can build to get there.
        </p>

        <div className="disc-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginTop: 40,
        }}>
          {GOALS.map(g => (
            <button
              key={g.id}
              className="disc-card"
              onClick={() => setActive(active === g.id ? null : g.id)}
              style={{
                background: active === g.id ? "#17171c" : "#ffffff",
                color: active === g.id ? "#fff" : "#17171c",
                border: active === g.id ? `2px solid ${g.accent}` : "1px solid #e4e4e7",
                padding: 24,
                minHeight: 180,
                textAlign: "left",
                cursor: "pointer",
                transition: "border-color 0.22s, transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.22s, box-shadow 0.3s",
                opacity: 0,
                willChange: "transform",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                if (active !== g.id) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#17171c";
                  el.style.transform = "translateY(-5px)";
                  el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                }
              }}
              onMouseLeave={e => {
                if (active !== g.id) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#e4e4e7";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }
              }}
            >
              {/* Accent dot top-right */}
              <span style={{
                position: "absolute", top: 18, right: 18,
                width: 8, height: 8, borderRadius: "50%",
                background: active === g.id ? g.accent : "#e4e4e7",
                transition: "background 0.3s",
              }} />

              <span style={{
                fontSize: 24,
                display: "block",
                marginBottom: 32,
                color: active === g.id ? g.accent : "#71717a",
                transition: "color 0.22s",
              }}>
                {g.icon}
              </span>

              <strong style={{
                fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px",
                display: "block", lineHeight: 1.25,
              }}>
                {g.title}
              </strong>
              <span style={{
                fontSize: 12,
                color: active === g.id ? "rgba(255,255,255,0.45)" : "#71717a",
                display: "block", marginTop: 6,
                transition: "color 0.22s",
              }}>
                {g.sub}
              </span>

              {/* Active indicator */}
              {active === g.id && (
                <span style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 3, background: g.accent,
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Solution panel */}
        {chosen && (
          <div
            ref={solutionRef}
            style={{
              marginTop: 0,
              background: "#17171c",
              color: "#fff",
              padding: "32px 36px",
              overflow: "hidden",
              borderTop: `3px solid ${chosen.accent}`,
              position: "relative",
            }}
          >
            {/* Animated accent bar */}
            <div
              className="sol-bar"
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: chosen.accent,
                transformOrigin: "left",
              }}
            />

            <div className="sol-inner" style={{
              display: "flex",
              gap: 40,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}>
              <div style={{ flex: "1 1 340px", minWidth: 0 }}>
                <h3
                  className="sol-title"
                  style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.2 }}
                >
                  {chosen.solution}
                </h3>
                <p
                  className="sol-desc"
                  style={{ color: "rgba(255,255,255,0.55)", marginTop: 10, fontSize: 14, lineHeight: 1.7 }}
                >
                  {chosen.desc}
                </p>
              </div>

              <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {chosen.tags.map(t => (
                    <span
                      key={t}
                      className="sol-tag"
                      style={{
                        border: `1px solid ${chosen.accent}40`,
                        background: `${chosen.accent}15`,
                        color: chosen.accent,
                        padding: "5px 12px", fontSize: 12, fontWeight: 600,
                        borderRadius: 4,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="sol-cta"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "12px 24px",
                    background: chosen.accent, color: "#fff",
                    borderRadius: 9999, fontSize: 13, fontWeight: 600,
                    textDecoration: "none",
                    alignSelf: "flex-start",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                >
                  Get started →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .disc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .disc-grid { grid-template-columns: 1fr !important; }
          .sol-inner { flex-direction: column; gap: 20px; }
        }
      `}</style>
    </section>
  );
}
