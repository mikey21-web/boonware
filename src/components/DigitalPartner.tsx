"use client";
import { useEffect, useRef } from "react";

const ROWS = [
  {
    get: "A Clear Plan From Day One",
    means: "No confusion, no guesswork. You get a clear roadmap, defined milestones, and a realistic timeline from start to launch.",
  },
  {
    get: "Transparent, Fixed Pricing",
    means: "Know exactly what you're paying before we begin — no hidden costs, unexpected invoices, or surprises.",
  },
  {
    get: "A Website Built Around Your Brand",
    means: "Your website shouldn't look like everyone else's. We create a unique digital experience that reflects your brand, values, and audience.",
  },
  {
    get: "Built to Perform Everywhere",
    means: "Fast, responsive, and mobile-first — so your customers get a smooth experience whether they're on a phone, tablet, or desktop.",
  },
  {
    get: "Easy to Manage",
    means: "Need to update content later? No problem. We build your website so you can manage everyday changes without depending on a developer.",
  },
  {
    get: "Long-Term Support You Can Count On",
    means: "We don't disappear after launch. From updates and security to maintenance and backups, we keep your website running smoothly.",
  },
  {
    get: "Built to Generate Business",
    means: "We don't build websites just to look good. We design strategic pages, CTAs, forms, and user journeys that turn visitors into real enquiries and customers.",
  },
];

export function DigitalPartner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ref.current?.querySelectorAll(".dp-row") ?? [],
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
        }
      );
    };
    run();
  }, []);

  return (
    <section ref={ref} style={{ background: "#faf9f7", borderBottom: "1px solid #e4e4e7", padding: "96px 0", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto" }}>
        <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
          Why Boonware
        </span>
        <h2 style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.08, color: "#17171c", maxWidth: 760, margin: 0 }}>
          More Than a Website. A <span style={{ color: "#00897B" }}>Digital Partner</span> for Your Business.
        </h2>
        <p style={{ color: "#71717a", fontSize: 16, lineHeight: 1.7, maxWidth: 720, marginTop: 18 }}>
          From strategy and design to development and ongoing support, Boonware gives you everything you need to build a digital presence that looks professional, performs seamlessly, and helps your business grow.
        </p>

        {/* Table header */}
        <div className="dp-head" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24, marginTop: 52, paddingBottom: 14, borderBottom: "2px solid #17171c" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#17171c", letterSpacing: "0.08em", textTransform: "uppercase" }}>What You Get</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#17171c", letterSpacing: "0.08em", textTransform: "uppercase" }}>What It Means for Your Business</span>
        </div>

        {ROWS.map((r, i) => (
          <div
            key={r.get}
            className="dp-row"
            style={{
              display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24,
              padding: "22px 0", borderBottom: "1px solid #e4e4e7", opacity: 0,
              transition: "background 0.22s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#00897B", marginTop: 3, flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <strong style={{ fontSize: 16, fontWeight: 700, color: "#17171c", letterSpacing: "-0.3px", lineHeight: 1.35 }}>
                {r.get}
              </strong>
            </div>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: 0 }}>{r.means}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .dp-head { display: none !important; }
          .dp-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}

export default DigitalPartner;
