"use client";
import { useState, useEffect, useRef } from "react";

const FAQS = [
  {
    q: "How long does it take to design and develop a custom website?",
    a: "A typical custom website project takes between 2 to 6 weeks, depending on complexity, page count, and custom functionalities. Simple high-converting landing pages take 1–2 weeks, while complex dynamic web apps and multi-tier e-commerce platforms take 4–8 weeks.",
  },
  {
    q: "Will I own the source code and design assets after launch?",
    a: "Yes, 100%. Upon project completion and final deployment, we hand over full source code ownership, design files (Figma), database access, and intellectual property rights with zero recurring lock-in fees.",
  },
  {
    q: "Are your websites mobile-responsive and optimized for search engines (SEO)?",
    a: "Every website we engineer is built mobile-first, passes Google Core Web Vitals with sub-2-second load speeds, and includes clean on-page technical SEO, structured schema markup, and responsive cross-browser rendering.",
  },
  {
    q: "What tech stack does Boonware specialize in?",
    a: "We build using modern, scalable frameworks tailored to your needs — including React, Next.js, Vue, Node.js, Python/Django, WordPress, Webflow, Shopify, and headless CMS architectures paired with PostgreSQL, MongoDB, or MySQL.",
  },
  {
    q: "Do you sign a Non-Disclosure Agreement (NDA) before discussing project details?",
    a: "Yes, absolutely. We sign a mutual NDA before initial discovery calls to ensure your proprietary product ideas, business logic, and trade secrets remain 100% confidential and legally protected.",
  },
  {
    q: "Do you provide post-launch maintenance, security, and updates?",
    a: "Yes. We provide comprehensive post-launch support packages covering security patches, regular server backups, uptime monitoring, performance tuning, and continuous feature additions.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ref.current?.querySelectorAll(".faq-row") ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    };
    run();
  }, []);

  return (
    <section ref={ref} style={{ background: "#ffffff", borderBottom: "1px solid #e4e4e7", padding: "96px 0", fontFamily: "'Inter', sans-serif" }}>
      <div className="faq-wrap" style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
        <div>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            FAQ
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "#17171c", margin: 0 }}>
            Questions, <span style={{ color: "#00897B" }}>answered.</span>
          </h2>
          <p style={{ color: "#71717a", fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
            Still unsure about something? Message us on WhatsApp and we'll answer within the hour.
          </p>
        </div>

        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="faq-row" style={{ borderBottom: "1px solid #e4e4e7", opacity: 0 }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between",
                    alignItems: "center", gap: 20, padding: "20px 0",
                    background: "none", border: "none", cursor: "pointer",
                    textAlign: "left", fontFamily: "inherit",
                  }}
                >
                  <strong style={{ fontSize: 16, fontWeight: 600, color: isOpen ? "#00897B" : "#17171c", letterSpacing: "-0.2px", lineHeight: 1.4, transition: "color 0.22s" }}>
                    {f.q}
                  </strong>
                  <span style={{
                    flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
                    border: `1px solid ${isOpen ? "#00897B" : "#d4d4d8"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, color: isOpen ? "#00897B" : "#71717a",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.28s cubic-bezier(0.16,1,0.3,1), border-color 0.22s, color 0.22s",
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 400 : 0, overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s",
                  opacity: isOpen ? 1 : 0,
                }}>
                  <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.75, margin: "0 0 20px", paddingRight: 44 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .faq-wrap { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

export default FAQ;
