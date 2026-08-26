"use client";
import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    name: "Discover",
    headline: "Understand your goals.",
    desc: "We learn about your business, challenges, audience, and objectives to identify exactly what needs to be improved, built, or automated.",
  },
  {
    n: "02",
    name: "Strategize",
    headline: "Build the right roadmap.",
    desc: "We recommend the right combination of technology, design, AI, automation, or digital marketing — with a clear scope, timeline, and investment.",
  },
  {
    n: "03",
    name: "Build & Launch",
    headline: "Turn the strategy into reality.",
    desc: "Our team designs, develops, integrates, and implements your solution while keeping you updated throughout the process.",
  },
  {
    n: "04",
    name: "Test & Optimize",
    headline: "Refine everything that matters.",
    desc: "We test, review, measure, and improve the solution to make sure it performs smoothly and delivers against your goals.",
  },
  {
    n: "05",
    name: "Scale & Support",
    headline: "Launch with confidence.",
    desc: "We deploy your solution, help your team get started, and provide ongoing support so your technology can grow with your business.",
  },
];

export function FiveSteps() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ref.current?.querySelectorAll(".fs-step") ?? [],
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
        }
      );
    };
    run();
  }, []);

  return (
    <section ref={ref} style={{ background: "#ffffff", borderBottom: "1px solid #e4e4e7", padding: "96px 0", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto" }}>
        <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
          How it works
        </span>
        <h2 style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "#17171c", maxWidth: 760, margin: 0 }}>
          From your goal to real results in <span style={{ color: "#00897B" }}>5 steps.</span>
        </h2>

        <div className="fs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginTop: 52 }}>
          {STEPS.map(s => (
            <div
              key={s.n}
              className="fs-step"
              style={{ borderTop: "2px solid #17171c", paddingTop: 14, opacity: 0, transition: "border-color 0.25s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00897B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#17171c"; }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#71717a", letterSpacing: "0.08em" }}>
                {s.n} — <span style={{ color: "#17171c" }}>{s.name}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.4px", color: "#00897B", marginTop: 20, lineHeight: 1.3 }}>
                {s.headline}
              </h3>
              <p style={{ fontSize: 13, color: "#71717a", marginTop: 10, lineHeight: 1.68 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .fs-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 28px !important; } }
        @media (max-width: 520px) { .fs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

export default FiveSteps;
