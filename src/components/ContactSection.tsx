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
      }}
    >
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
        Ready to build the technology your business{" "}
        <span style={{ color: "#e8643c" }}>needs?</span>
      </h2>

      <p
        className="cta-sub"
        style={{
          maxWidth: 480,
          margin: "18px auto 0",
          color: "rgba(255,255,255,0.4)",
          fontSize: 17,
          lineHeight: 1.63,
          opacity: 0,
        }}
      >
        Fixed price. Source code yours. Done right the first time.
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
          href="https://wa.me/919076269629"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "14px 28px", borderRadius: 9999,
            fontSize: 15, fontWeight: 600,
            background: "#ffffff", color: "#17171c",
            textDecoration: "none",
            transition: "background 0.22s, transform 0.22s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "#e8643c";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "#ffffff";
            (e.currentTarget as HTMLElement).style.color = "#17171c";
          }}
        >
          WhatsApp us
        </Link>
        <Link
          href="mailto:info@boonware.in"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "14px 28px", borderRadius: 9999,
            fontSize: 15, fontWeight: 500,
            background: "transparent", color: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.18)",
            textDecoration: "none",
            transition: "color 0.22s, border-color 0.22s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.color = "#fff";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
          }}
        >
          info@boonware.in
        </Link>
      </div>
    </section>
  );
}
