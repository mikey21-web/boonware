"use client";
import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    num: 1,
    title: "Discovery call",
    desc: "We learn your business, your goals, and what you need built. 30 minutes. No sales pitch.",
  },
  {
    n: "02",
    num: 2,
    title: "Proposal & scope",
    desc: "Fixed price. Fixed timeline. Exact deliverables. No surprises.",
  },
  {
    n: "03",
    num: 3,
    title: "Design & build",
    desc: "We design in Figma, build in code, and update you every step of the way.",
  },
  {
    n: "04",
    num: 4,
    title: "Review & refine",
    desc: "You get unlimited revisions on the agreed scope until it's exactly right.",
  },
  {
    n: "05",
    num: 5,
    title: "Launch & hand off",
    desc: "We deploy, train your team, and hand you the full source code.",
  },
];

// Re-exporting as ProcessSection (TrustedBrands slot now holds this)
export function TrustedBrands() {
  const ref = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Step cards stagger from x:-30
      gsap.fromTo(
        ref.current?.querySelectorAll(".step-card") ?? [],
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );

      // Step numbers count up from 0
      numRefs.current.forEach((el, i) => {
        if (!el) return;
        const step = STEPS[i];
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: step.num,
          duration: 1.2,
          ease: "power2.out",
          onUpdate() {
            if (el) {
              const v = Math.round(proxy.val);
              el.textContent = v < 10 ? `0${v}` : `${v}`;
            }
          },
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        });
      });
    };
    run();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#f7f8f4",
        borderTop: "1px solid #e4e4e7",
        padding: "104px 0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
        <span style={{
          display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c",
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
        }}>
          How it works
        </span>
        <h2 style={{
          fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700,
          letterSpacing: "-1.44px", lineHeight: 1.05, color: "#17171c",
        }}>
          From idea to live in<br />
          <span style={{ color: "#e8643c" }}>5 steps.</span>
        </h2>

        <div className="bw-steps-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10,
          marginTop: 48,
        }}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="step-card"
              style={{
                borderTop: "2px solid #17171c",
                paddingTop: 12,
                opacity: 0,
                transition: "border-color 0.25s",
                willChange: "transform",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e8643c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#17171c"; }}
            >
              <span
                ref={el => { numRefs.current[i] = el; }}
                style={{ fontSize: 11, fontWeight: 700, color: "#71717a", letterSpacing: "0.6px" }}
              >
                {s.n}
              </span>
              <h3 style={{
                fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px",
                marginTop: 24, color: "#17171c",
              }}>
                {s.title}
              </h3>
              <p style={{ color: "#71717a", fontSize: 13, marginTop: 6, lineHeight: 1.63 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
