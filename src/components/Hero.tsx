"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export function Hero() {
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);
  const line3 = useRef<HTMLSpanElement>(null);
  const eyebrow = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLParagraphElement>(null);
  const actions = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const run = async () => {
      const gsap = (await import("gsap")).default;

      // lines slide up
      gsap.to([line1.current, line2.current, line3.current], {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      });

      // eyebrow, copy, actions fade up
      gsap.to([eyebrow.current, copy.current, actions.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.6,
      });
    };

    run();
    return () => { if (ctx) ctx.revert(); };
  }, []);

  return (
    <section
      style={{
        padding: "140px 24px 100px",
        textAlign: "center",
        borderBottom: "1px solid #e4e4e7",
        overflow: "hidden",
        position: "relative",
        background: "#ffffff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Subtle radial blob */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 500,
          background: "radial-gradient(ellipse at center, rgba(232,100,60,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "pulse-blob 6s ease-in-out infinite",
        }}
      />

      {/* Eyebrow badge */}
      <div
        ref={eyebrow}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          background: "#f4f4f5",
          border: "1px solid #e4e4e7",
          borderRadius: 9999,
          padding: "5px 13px",
          fontSize: 12,
          fontWeight: 600,
          color: "#71717a",
          marginBottom: 32,
          fontFamily: "ui-monospace, monospace",
          letterSpacing: "0.275px",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#e8643c",
            display: "inline-block",
            flexShrink: 0,
            animation: "blink 2s ease-in-out infinite",
          }}
        />
        AI · Automation · Software · Digital
      </div>

      {/* H1 with clip-mask slide-up */}
      <h1
        style={{
          fontSize: "clamp(56px, 8vw, 96px)",
          fontWeight: 700,
          lineHeight: 1.02,
          letterSpacing: "-2.4px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <span style={{ overflow: "hidden", display: "block" }}>
          <span
            ref={line1}
            style={{
              display: "block",
              color: "#17171c",
              transform: "translateY(110%)",
            }}
          >
            Build the technology
          </span>
        </span>
        <span style={{ overflow: "hidden", display: "block" }}>
          <span
            ref={line2}
            style={{
              display: "block",
              color: "#71717a",
              transform: "translateY(110%)",
            }}
          >
            your business actually
          </span>
        </span>
        <span style={{ overflow: "hidden", display: "block" }}>
          <span
            ref={line3}
            style={{
              display: "block",
              color: "#e8643c",
              transform: "translateY(110%)",
            }}
          >
            needs.
          </span>
        </span>
      </h1>

      {/* Sub copy */}
      <p
        ref={copy}
        style={{
          fontSize: 17,
          fontWeight: 400,
          color: "#71717a",
          maxWidth: 580,
          lineHeight: 1.63,
          margin: "24px auto 0",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        BoonWare helps startups and growing businesses{" "}
        <strong style={{ color: "#17171c", fontWeight: 600 }}>
          build, automate and improve
        </strong>{" "}
        the technology behind their operations — AI assistants, calling agents,
        software, mobile apps and e-commerce.
      </p>

      {/* CTAs */}
      <div
        ref={actions}
        style={{
          display: "flex",
          gap: 10,
          marginTop: 32,
          justifyContent: "center",
          flexWrap: "wrap",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        <Link
          href="/services"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "13px 22px",
            borderRadius: 9999,
            fontSize: 14,
            fontWeight: 600,
            background: "#17171c",
            color: "#fff",
            border: "1px solid #17171c",
            textDecoration: "none",
            transition: "transform 0.22s, background 0.22s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
        >
          Find My Solution →
        </Link>
        <Link
          href="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "13px 22px",
            borderRadius: 9999,
            fontSize: 14,
            fontWeight: 600,
            background: "transparent",
            color: "#17171c",
            border: "1px solid #e4e4e7",
            textDecoration: "none",
            transition: "transform 0.22s, border-color 0.22s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.borderColor = "#17171c";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
          }}
        >
          See Our Work
        </Link>
      </div>

      <style>{`
        @keyframes pulse-blob {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.12); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
