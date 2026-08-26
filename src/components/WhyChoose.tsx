"use client";
import { useState, useEffect, useRef } from "react";

const GOALS = [
  {
    id: "customers",
    q: "How do I get more customers?",
    solution: "Lead-gen website + AI chatbot + WhatsApp follow-up",
    desc: "We build a high-converting website, add an AI chatbot that qualifies visitors 24/7, and wire WhatsApp automation to follow up every lead automatically.",
    tags: ["Website", "AI Chatbot", "WhatsApp Bot", "Lead Funnel"],
  },
  {
    id: "operations",
    q: "How do I reduce manual work?",
    solution: "n8n workflow automation + AI agents",
    desc: "We replace your most time-consuming manual tasks with automated workflows — from invoice processing to customer follow-ups.",
    tags: ["n8n Workflows", "AI Agents", "CRM Integration", "Auto-Reports"],
  },
  {
    id: "build",
    q: "How do I launch my app idea?",
    solution: "Full-stack web app or mobile app",
    desc: "From MVP to full product — we design, build and launch your app with clean code and ship it fast.",
    tags: ["Web App", "Mobile App", "API", "Dashboard"],
  },
  {
    id: "modernize",
    q: "How do I modernize my business?",
    solution: "System integrations + AI upgrade layer",
    desc: "Connect your existing tools, migrate legacy systems, and layer AI on top — so your team spends less time copy-pasting and more time growing.",
    tags: ["Integrations", "AI Upgrade", "Data Migration", "Dashboards"],
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoActivated = useRef(false);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const cards = sectionRef.current?.querySelectorAll(".disc-card") ?? [];
      gsap.fromTo(cards,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
            onEnter: () => {
              if (!autoActivated.current) {
                autoActivated.current = true;
                setTimeout(() => setActive("customers"), 600);
              }
            },
          },
        }
      );
    };
    run();
  }, []);

  // Animate solution reveal per card
  useEffect(() => {
    if (!active) return;
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const panel = document.querySelector(`[data-sol="${active}"]`);
      if (!panel) return;
      const tags = panel.querySelectorAll(".sol-tag");
      const tl = gsap.timeline();
      tl.fromTo(panel, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.38, ease: "power3.out" });
      tl.fromTo(panel.querySelector(".sol-title"), { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }, "-=0.1");
      tl.fromTo(panel.querySelector(".sol-desc"), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }, "-=0.1");
      if (tags.length) tl.fromTo(tags, { opacity: 0, scale: 0.75 }, { opacity: 1, scale: 1, stagger: 0.05, duration: 0.25, ease: "back.out(2)" }, "-=0.05");
      tl.fromTo(panel.querySelector(".sol-cta"), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.25, ease: "back.out(1.7)" }, "-=0.05");
    };
    run();
  }, [active]);

  return (
    <section ref={sectionRef} style={{ background: "#ffffff", borderTop: "1px solid #e4e4e7", borderBottom: "1px solid #e4e4e7", padding: "96px 0", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto" }}>

        <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
          Start with your goal
        </span>
        <h2 style={{ fontSize: "clamp(28px, 4.5vw, 56px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.07, color: "#17171c", maxWidth: 600 }}>
          What do you want to <span style={{ color: "#00897B" }}>achieve?</span>
        </h2>
        <p style={{ color: "#71717a", fontSize: 16, lineHeight: 1.65, maxWidth: 500, marginTop: 14 }}>
          Tell us your goal — We'll show you the technology to get there.
        </p>

        <div className="disc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginTop: 44 }}>
          {GOALS.map(g => {
            const isActive = active === g.id;
            return (
              <div key={g.id} style={{ display: "flex", flexDirection: "column" }}>
                {/* Question card */}
                <button
                  className="disc-card"
                  onClick={() => setActive(isActive ? null : g.id)}
                  style={{
                    background: isActive ? "#17171c" : "#faf9f7",
                    border: `2px solid ${isActive ? "#17171c" : "#e4e4e7"}`,
                    padding: "26px 24px 22px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "background 0.28s, border-color 0.28s, transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s",
                    opacity: 0,
                    willChange: "transform",
                    borderRadius: 2,
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#17171c";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.10)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#e4e4e7";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  <strong style={{
                    fontSize: "clamp(15px, 2vw, 19px)",
                    fontWeight: 700, letterSpacing: "-0.3px",
                    display: "block", lineHeight: 1.3,
                    color: isActive ? "#fff" : "#17171c",
                    transition: "color 0.28s",
                  }}>
                    {g.q}
                  </strong>
                  <span style={{
                    display: "inline-block", marginTop: 10,
                    fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
                    color: isActive ? "rgba(255,255,255,0.5)" : "#71717a",
                    transition: "color 0.28s",
                  }}>
                    {isActive ? "HIDE ANSWER" : "SEE SOLUTION"}
                  </span>
                </button>

                {/* Inline solution panel — black & cream */}
                <div
                  data-sol={g.id}
                  style={{
                    background: "#faf9f7",
                    border: "2px solid #e4e4e7",
                    borderTop: "3px solid #17171c",
                    padding: isActive ? "22px 24px 24px" : "0 24px",
                    overflow: "hidden",
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                    transition: "padding 0.1s",
                  }}
                >
                  <p className="sol-title" style={{ fontSize: 16, fontWeight: 700, color: "#17171c", letterSpacing: "-0.3px", marginBottom: 8 }}>
                    {g.solution}
                  </p>
                  <p className="sol-desc" style={{ fontSize: 13, color: "#555", lineHeight: 1.75, marginBottom: 14 }}>
                    {g.desc}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                    {g.tags.map(t => (
                      <span key={t} className="sol-tag" style={{
                        background: "#fff", color: "#17171c",
                        border: "1px solid #d4d4d8",
                        padding: "4px 10px", fontSize: 11, fontWeight: 600, borderRadius: 4,
                      }}>{t}</span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/919076269629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sol-cta"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      background: "#17171c", color: "#fff",
                      padding: "10px 20px", borderRadius: 9999,
                      fontSize: 13, fontWeight: 600, textDecoration: "none",
                    }}
                  >
                    Talk to us on WhatsApp →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .disc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
