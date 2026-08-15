"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const GOALS = [
  {
    id: "customers",
    title: "Get more customers",
    sub: "Attract, engage, qualify and convert.",
    solution: "Lead-gen website + AI chatbot + WhatsApp automation",
    desc: "We build you a high-converting website, add an AI chatbot that qualifies visitors 24/7, and wire up a WhatsApp automation that follows up every lead automatically.",
    tags: ["Website", "AI Chatbot", "WhatsApp Bot", "Lead Funnel"],
  },
  {
    id: "operations",
    title: "Reduce manual work",
    sub: "Automate repetitive operations.",
    solution: "n8n workflow automation + AI agents",
    desc: "We identify your most time-consuming manual tasks and replace them with automated workflows — from invoice processing to customer follow-ups.",
    tags: ["n8n Workflows", "AI Agents", "CRM Integration", "Auto-Reports"],
  },
  {
    id: "build",
    title: "Build something new",
    sub: "Launch a product, platform or app.",
    solution: "Full-stack web app or mobile app",
    desc: "From MVP to full product — we design, build and launch your app with clean code, fixed price and source code that's yours to keep.",
    tags: ["Web App", "Mobile App", "API", "Dashboard"],
  },
  {
    id: "modernize",
    title: "Modernize my business",
    sub: "Connect systems and add intelligence.",
    solution: "System integrations + AI upgrade",
    desc: "Connect your existing tools, migrate legacy systems, and layer AI on top — so your team spends less time copy-pasting and more time growing.",
    tags: ["Integrations", "AI Upgrade", "Data Migration", "Dashboards"],
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".disc-card") ?? [],
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );
    };
    run();
  }, []);

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
          fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700,
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

        <div style={{
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
                border: "1px solid #e4e4e7",
                padding: 24,
                minHeight: 190,
                textAlign: "left",
                cursor: "pointer",
                transition: "border-color 0.22s, transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.22s, box-shadow 0.3s",
                opacity: 0, // GSAP will animate in
              }}
              onMouseEnter={e => {
                if (active !== g.id) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#17171c";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                }
              }}
              onMouseLeave={e => {
                if (active !== g.id) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }
              }}
            >
              <strong style={{
                fontSize: 19, fontWeight: 700, letterSpacing: "-0.4px",
                display: "block", marginTop: 46, lineHeight: 1.2,
              }}>
                {g.title}
              </strong>
              <span style={{
                fontSize: 13,
                color: active === g.id ? "rgba(255,255,255,0.45)" : "#71717a",
                display: "block", marginTop: 6,
              }}>
                {g.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Solution output */}
        {chosen && (
          <div style={{
            marginTop: 14,
            background: "#17171c",
            color: "#fff",
            padding: 28,
            animation: "slide-down 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}>
            <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.64px" }}>
              {chosen.solution}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.45)", marginTop: 6, fontSize: 14, lineHeight: 1.63 }}>
              {chosen.desc}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
              {chosen.tags.map(t => (
                <span key={t} style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "5px 12px", fontSize: 12, fontWeight: 500,
                }}>
                  {t}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                marginTop: 20, padding: "10px 20px",
                background: "#e8643c", color: "#fff",
                borderRadius: 9999, fontSize: 13, fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get started →
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 850px) {
          /* handled via grid */
        }
      `}</style>
    </section>
  );
}
