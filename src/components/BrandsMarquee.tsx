"use client";
import { useEffect, useRef } from "react";

const BASE = "/assets/";

const BRANDS = [
  { name: "Braai Boys", img: `${BASE}braai_boys-DxurLl5E.png` },
  { name: "Lo Foods", img: `${BASE}lo_foods-CPUAvu8t.png` },
  { name: "FunZilla", img: `${BASE}funZilla-BFcFiqqw.png` },
  { name: "Caos Clothing", img: `${BASE}caos_clothing-BEU-SZnE.png` },
  { name: "Copper Clothing", img: `${BASE}copper_clothing-B9aQ-OHB.png` },
  { name: "Deviant Ink", img: `${BASE}deviant_ink-iCuO2bDw.png` },
  { name: "Abrazo", img: `${BASE}abrazo-BQRcFAYM.png` },
  { name: "Jalan Jalan", img: `${BASE}jalanjalan_shopify-a6FbaDYS.png` },
  { name: "Pokhraj Jewellers", img: `${BASE}pokhraj_logo-D22YXwvP.png` },
  { name: "Trippy Tour", img: `${BASE}trippytour-DwdFzO-D.png` },
  { name: "Plixcast", img: `${BASE}plixcast-Ck1f1ZxH.png` },
  { name: "Quantraz", img: `${BASE}quantraz-D--QeJDL.png` },
  { name: "83D Network", img: `${BASE}83d_network_logo-CIX5qxdy.png` },
  { name: "Ammorada", img: `${BASE}Ammorada_new_Logo-D34n8gQr.png` },
  { name: "Dhoom", img: `${BASE}dhoom-YYD2M81F.jpeg` },
];

const ROW1 = [...BRANDS.slice(0, 8), ...BRANDS.slice(0, 8)];
const ROW2 = [...BRANDS.slice(7), ...BRANDS.slice(7)];

function LogoImg({ b }: { b: { name: string; img: string } }) {
  return (
    <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: 72, padding: "0 16px" }}>
      <img
        src={b.img}
        alt={b.name}
        loading="lazy"
        style={{ height: 60, maxWidth: 180, objectFit: "contain", filter: "opacity(0.75)", transition: "filter 0.3s, transform 0.3s" }}
        onMouseEnter={e => { e.currentTarget.style.filter = "opacity(1)"; e.currentTarget.style.transform = "scale(1.08)"; }}
        onMouseLeave={e => { e.currentTarget.style.filter = "opacity(0.75)"; e.currentTarget.style.transform = "scale(1)"; }}
      />
    </div>
  );
}

export function BrandsMarquee() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
        );
      }
    };
    run();
  }, []);

  return (
    <section ref={sectionRef} style={{ opacity: 0, willChange: "transform", background: "#ffffff", borderTop: "1px solid #e4e4e7", borderBottom: "1px solid #e4e4e7", padding: "56px 0", fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#71717a", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Trusted by <strong style={{ color: "#16a34a", fontWeight: 700 }}>Brand</strong>
        </span>
        <span style={{ fontSize: 13, color: "#71717a" }}>
          Across 15+ industries · 9 countries
        </span>
      </div>

      {/* Row 1 — left to right */}
      <div style={{ position: "relative", overflow: "hidden", marginBottom: 16 }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div className="bw-marquee-row1" style={{ display: "flex", alignItems: "center", gap: 40, width: "max-content" }}>
          {ROW1.map((b, i) => <LogoImg key={i} b={b} />)}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div className="bw-marquee-row2" style={{ display: "flex", alignItems: "center", gap: 40, width: "max-content" }}>
          {ROW2.map((b, i) => <LogoImg key={i} b={b} />)}
        </div>
      </div>

      <style>{`
        .bw-marquee-row1 { animation: bw-marquee-ltr 22s linear infinite; }
        .bw-marquee-row1:hover { animation-play-state: paused; }
        .bw-marquee-row2 { animation: bw-marquee-rtl 22s linear infinite; }
        .bw-marquee-row2:hover { animation-play-state: paused; }
        @keyframes bw-marquee-ltr { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes bw-marquee-rtl { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </section>
  );
}
