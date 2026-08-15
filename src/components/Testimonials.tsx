"use client";
import { useEffect, useRef } from "react";

const QUOTE = {
  text: "BoonWare delivered our full restaurant ordering system in 3 weeks. Orders up 40%. The QR menu alone paid for everything in the first month.",
  author: "Hamza Al-Rashid",
  role: "Owner, Braai Boys Dubai",
};

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ref.current?.querySelector(".quote-text"),
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ref.current?.querySelector(".quote-author"),
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    };
    run();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "104px 0",
        textAlign: "center",
        borderTop: "1px solid #e4e4e7",
        fontFamily: "'Inter', sans-serif",
        background: "#ffffff",
      }}
    >
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
        <p
          className="quote-text"
          style={{
            fontSize: "clamp(24px, 3.2vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            lineHeight: 1.2,
            maxWidth: 780,
            margin: "0 auto",
            color: "#17171c",
            opacity: 0,
          }}
        >
          &ldquo;{QUOTE.text}&rdquo;
        </p>
        <p
          className="quote-author"
          style={{
            marginTop: 22, color: "#71717a", fontSize: 14, fontWeight: 500,
            opacity: 0,
          }}
        >
          <strong style={{ color: "#17171c", fontWeight: 700 }}>{QUOTE.author}</strong>
          {" — "}{QUOTE.role}
        </p>
      </div>
    </section>
  );
}
