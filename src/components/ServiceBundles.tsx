"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const BUNDLES = [
  {
    tag: "🌐 Websites",
    title: "Starter Site Bundle",
    desc: "A professional website that actually converts — built with your brand, SEO-ready, and live in 2 weeks. Includes design, copy, hosting setup and WhatsApp integration.",
    price: "From ₹49,999",
  },
  {
    tag: "🤖 AI & Automation",
    title: "AI + Automation Bundle",
    desc: "Replace your most time-consuming manual work with an AI agent or n8n workflow. From lead qualification bots to invoice automation — fully custom, fully yours.",
    price: "From ₹79,999",
  },
  {
    tag: "📱 Full Digital",
    title: "Full Digital Bundle",
    desc: "Complete digital presence — website, mobile app, AI agent, and brand identity. One team, one fixed price, one deadline. Best for businesses launching from zero.",
    price: "From ₹1,49,999",
  },
];

export function ServiceBundles() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Heading clip-path reveal
      const headingInner = ref.current?.querySelector(".sb-heading-inner") ?? null;
      if (headingInner) {
        gsap.fromTo(headingInner,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          {
            clipPath: "inset(0 0% 0 0)", opacity: 1,
            duration: 0.9, ease: "power4.out",
            scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
          }
        );
      }

      // Bundle cards stagger
      gsap.fromTo(
        ref.current?.querySelectorAll(".bundle-card") ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );

      // Price tags pulse animation on enter
      gsap.fromTo(
        ref.current?.querySelectorAll(".bundle-price") ?? [],
        { scale: 0.85, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.55, stagger: 0.12, ease: "back.out(1.7)",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        }
      );
    };
    run();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        borderTop: "1px solid #e4e4e7",
        borderBottom: "1px solid #e4e4e7",
        padding: "104px 0",
        background: "#ffffff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
        <span style={{
          display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c",
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
        }}>
          Service bundles
        </span>
        <h2 className="sb-heading-inner" style={{
          fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700,
          letterSpacing: "-1.44px", lineHeight: 1.05, color: "#17171c",
          opacity: 0,
          willChange: "clip-path",
        }}>
          Everything you need,<br />
          <span style={{ color: "#71717a" }}>nothing you don't.</span>
        </h2>

        {/* 3 equal white cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginTop: 48,
        }}>
          {BUNDLES.map((b, i) => (
            <div
              key={i}
              className="bundle-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                padding: 32,
                minHeight: 280,
                display: "flex",
                flexDirection: "column",
                opacity: 0,
                transition: "border-color 0.25s, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#17171c";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.09)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 11, fontWeight: 700, letterSpacing: "1.1px",
                textTransform: "uppercase", color: "#e8643c", marginBottom: 20,
              }}>
                {b.tag}
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.72px", lineHeight: 1.15, color: "#17171c" }}>
                {b.title}
              </h3>
              <p style={{ color: "#71717a", marginTop: 10, fontSize: 14, lineHeight: 1.63, flex: 1 }}>
                {b.desc}
              </p>
              <div className="bundle-price" style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", marginTop: 16, willChange: "transform" }}>
                {b.price}
              </div>
              <Link
                href="/services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  marginTop: 20, padding: "10px 18px",
                  background: "#17171c", color: "#fff",
                  borderRadius: 9999, fontSize: 13, fontWeight: 600,
                  textDecoration: "none", alignSelf: "flex-start",
                  transition: "background 0.22s, transform 0.22s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e8643c"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#17171c"; }}
              >
                View services →
              </Link>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div style={{
          marginTop: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 32,
          borderTop: "1px solid #e4e4e7",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <p style={{ color: "#71717a", fontSize: 15, maxWidth: 500, lineHeight: 1.6, margin: 0 }}>
            Need something custom? Every bundle is fully adjustable — just tell us what you need and we'll scope it for you.
          </p>
          <Link
            href="/services"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#17171c", color: "#fff", padding: "13px 24px",
              borderRadius: 9999, fontSize: 14, fontWeight: 600, flexShrink: 0,
              textDecoration: "none",
              transition: "background 0.22s, transform 0.22s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#e8643c";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#17171c";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
