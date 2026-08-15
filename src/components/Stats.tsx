"use client";
import { useEffect, useRef } from "react";

const STATS = [
  { target: 243, suffix: "+", label: "Projects delivered" },
  { target: 100, suffix: "+", label: "Businesses powered" },
  { target: 10,  suffix: "+", label: "Industries served" },
  { target: 5,   suffix: "",  label: "Countries active" },
];

export default function Stats() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

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

      // Horizontal divider line grows from 0 to 100%
      if (dividerRef.current) {
        gsap.fromTo(dividerRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
          }
        );
      }
    };
    run();
  }, []);

  return (
    <div ref={sectionRef} style={{
      background: "#1d1916",
      color: "#fff",
      padding: "28px 0",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Horizontal divider line */}
      <div ref={dividerRef} style={{ height: 1, background: "rgba(255,255,255,0.08)", willChange: "transform" }} />
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
                paddingLeft: i === 0 ? 0 : 28,
              }}
            >
              <div
                ref={el => { refs.current[i] = el; }}
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                0{s.suffix}
              </div>
              <div style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                marginTop: 4,
                fontWeight: 500,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
