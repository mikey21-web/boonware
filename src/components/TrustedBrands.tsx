"use client";
import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    num: 1,
    title: "Discover",
    subtitle: "Understand your goals.",
    desc: "We learn about your business, challenges, audience, and objectives to identify exactly what needs to be improved, built, or automated.",
  },
  {
    n: "02",
    num: 2,
    title: "Strategize",
    subtitle: "Build the right roadmap.",
    desc: "We recommend the right combination of technology, design, AI, automation, or digital marketing — with a clear scope, timeline, and investment.",
  },
  {
    n: "03",
    num: 3,
    title: "Build & Launch",
    subtitle: "Turn the strategy into reality.",
    desc: "Our team designs, develops, integrates, and implements your solution while keeping you updated throughout the process.",
  },
  {
    n: "04",
    num: 4,
    title: "Test & Optimize",
    subtitle: "Refine everything that matters.",
    desc: "We test, review, measure, and improve the solution to make sure it performs smoothly and delivers against your goals.",
  },
  {
    n: "05",
    num: 5,
    title: "Scale & Support",
    subtitle: "Launch with confidence.",
    desc: "We deploy your solution, help your team get started, and provide ongoing support so your technology can grow with your business.",
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
          display: "block", fontSize: 11, fontWeight: 700, color: "#00897B",
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
        }}>
          How it works
        </span>
        <h2 style={{
          fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700,
          letterSpacing: "-1.44px", lineHeight: 1.05, color: "#17171c",
        }}>
          From your goal to real results in{" "}
          <span style={{ color: "#16a34a" }}>5 steps.</span>
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
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00897B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#17171c"; }}
            >
              <span
                ref={el => { numRefs.current[i] = el; }}
                style={{ fontSize: 11, fontWeight: 700, color: "#71717a", letterSpacing: "0.6px" }}
              >
                {s.n}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px", marginTop: 24, color: "#17171c" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#16a34a", marginTop: 4 }}>
                {s.subtitle}
              </p>
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
