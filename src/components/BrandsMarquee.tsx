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

export function BrandsMarquee() {
  const doubled = [...BRANDS, ...BRANDS];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
          }
        );
      }
    };
    run();
  }, []);

  return (
    <section ref={sectionRef} style={{
      opacity: 0,
      willChange: "transform",
      background: "#ffffff",
      borderTop: "1px solid #e4e4e7",
      borderBottom: "1px solid #e4e4e7",
      padding: "56px 0",
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",
    }}>
      <div style={{
        width: "min(1180px, calc(100% - 48px))",
        margin: "0 auto 36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <span style={{
          fontSize: 11, fontWeight: 700, color: "#e8643c",
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          Trusted by 100+ businesses
        </span>
        <span style={{ fontSize: 13, color: "#71717a" }}>
          Across 10 industries · 5 countries
        </span>
      </div>

      {/* Marquee track */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 120,
          background: "linear-gradient(to right, #ffffff, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 120,
          background: "linear-gradient(to left, #ffffff, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />

        <div className="bw-marquee-track" style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          width: "max-content",
        }}>
          {doubled.map((b, i) => (
            <div key={i} style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
              padding: "0 8px",
            }}>
              <img
                src={b.img}
                alt={b.name}
                loading="lazy"
                style={{
                  height: 36,
                  maxWidth: 120,
                  objectFit: "contain",
                  filter: "opacity(0.75)",
                  transition: "filter 0.3s, transform 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.filter = "opacity(1)"; e.currentTarget.style.transform = "scale(1.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.filter = "opacity(0.75)"; e.currentTarget.style.transform = "scale(1)"; }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bw-marquee-track {
          animation: bw-marquee 30s linear infinite;
        }
        .bw-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes bw-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
