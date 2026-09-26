"use client";
import { useEffect, useRef } from "react";

const STATS = [
  { target: 265, suffix: "+", label: "Projects", labelHighlight: "Completed" },
  { target: 100, suffix: "+", label: "Businesses powered", labelHighlight: "" },
  { target: 15,  suffix: "+", label: "Industries served", labelHighlight: "" },
  { target: 9,   suffix: "",  label: "Countries", labelHighlight: "" },
];

export default function Stats() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      refs.current.forEach((el, i) => {
        if (!el) return;
        const stat = STATS[i];
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: stat.target,
          duration: 2,
          ease: "power2.out",
          onUpdate() {
            if (el) el.textContent = Math.round(proxy.val) + stat.suffix;
          },
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    };
    run();
  }, []);

  return (
    <div ref={sectionRef} style={{
      background: "#000000",
      color: "#fff",
      padding: "36px 0",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ width: "min(1300px, 94%)", margin: "0 auto" }}>
        <div className="bw-stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px 16px",
          alignItems: "center",
        }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "0 12px",
              }}
            >
              <div
                ref={el => { refs.current[i] = el; }}
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  color: "#ffffff",
                }}
              >
                0{s.suffix}
              </div>
              <div style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.6)",
                marginTop: 6,
                fontWeight: 500,
              }}>
                {s.label}{s.labelHighlight && (
                  <strong style={{ color: "#4ade80", fontWeight: 700 }}> {s.labelHighlight}</strong>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

