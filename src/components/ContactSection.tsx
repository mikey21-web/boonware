"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctaHeading = ref.current?.querySelector(".cta-heading") ?? null;
      if (ctaHeading) gsap.fromTo(ctaHeading, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
      const ctaSub = ref.current?.querySelector(".cta-sub") ?? null;
      if (ctaSub) gsap.fromTo(ctaSub, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.15, scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
      const ctaBtns = ref.current?.querySelector(".cta-btns") ?? null;
      if (ctaBtns) gsap.fromTo(ctaBtns, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.3, scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
    };
    run();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        textAlign: "center",
        padding: "120px 24px",
        background: "#17171c",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pulse */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,100,60,0.08) 0%, transparent 70%)",
        animation: "cta-pulse 5s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <h2
        className="cta-heading"
        style={{
          fontSize: "clamp(36px, 5vw, 72px)",
          fontWeight: 700,
          letterSpacing: "-1.44px",
          lineHeight: 1.05,
          maxWidth: 700,
          margin: "0 auto",
          color: "#fff",
          opacity: 0,
        }}
      >
        Ready to work{" "}
        <span style={{ color: "#00897B" }}>with us?</span>
      </h2>
      <p
        className="cta-sub"
        style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.55)",
          maxWidth: 480,
          margin: "16px auto 0",
          lineHeight: 1.65,
          opacity: 0,
        }}
      >
        Tell us what you need. We'll scope it, price it, and build it.
      </p>

      <div
        className="cta-btns"
        style={{
          display: "flex",
          gap: 10,
          marginTop: 28,
          justifyContent: "center",
          flexWrap: "wrap",
          opacity: 0,
        }}
      >
        <Link
          href="/contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "14px 32px", borderRadius: 9999,
            fontSize: 15, fontWeight: 600,
            background: "#ffffff", color: "#17171c",
            textDecoration: "none",
            transition: "background 0.22s, transform 0.22s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "#00897B";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "#ffffff";
            (e.currentTarget as HTMLElement).style.color = "#17171c";
          }}
        >
          Start a project →
        </Link>
      </div>
      <style>{`
        @keyframes cta-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
