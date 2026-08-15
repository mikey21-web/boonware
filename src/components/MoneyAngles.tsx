"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── Top 3 picks: range of categories, strongest visual + business story ── */
const PROJECTS = [
  {
    img: "https://boonware.in/assets/drinking_branding-CzKQPBLP.jpg",
    cat: "Branding & Packaging",
    title: "Luxury Vodka Brand",
    result: "Award-winning identity",
    desc: "From zero to shelf-ready. Full brand naming, logo system, and packaging for 6 SKUs with metallic finishes and global distribution positioning.",
    techs: ["Brand Strategy", "Illustrator", "Packaging Design"],
    demo: "/projects",
    liveUrl: null,
    logo: null,
    logoText: "LA CLÉ D'OR",
    featured: true,
  },
  {
    img: "https://boonware.in/assets/pokhrajjewellers-Dlp82dqa.png",
    cat: "E-Commerce",
    title: "Pokhraj Jewellers",
    result: "3× enquiries in 45 days",
    desc: "Heritage jewellery brand rebuilt in Shopify with WhatsApp checkout, Google Shopping, and a conversion-first product experience.",
    techs: ["Shopify", "WhatsApp API", "Google Shopping"],
    demo: "https://pokhrajjewellers.com/",
    liveUrl: "https://pokhrajjewellers.com/",
    logo: "https://www.google.com/s2/favicons?domain=pokhrajjewellers.com&sz=32",
    logoText: "Pokhraj Jewellers",
    featured: false,
  },
  {
    img: "https://boonware.in/assets/bombay_design_banner_og-CxLx1u4Y.png",
    cat: "Custom Website",
    title: "Bombay Design Studio",
    result: "Premium interactive experience",
    desc: "Bespoke React website for a design studio — fluid animations, custom interactions, and a portfolio that converts visitors into clients.",
    techs: ["React.js", "Framer Motion", "Netlify"],
    demo: "/projects",
    liveUrl: null,
    logo: null,
    logoText: "Bombay Design",
    featured: false,
  },
];

export function MoneyAngles() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ref.current?.querySelector(".section-header") ?? [],
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ref.current?.querySelectorAll(".work-card") ?? [],
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0,
          duration: 0.75, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    };
    run();
  }, []);

  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <section
      ref={ref}
      style={{
        background: "#17171c",
        color: "#fff",
        padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Header */}
        <div className="section-header" style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 48,
          opacity: 0,
        }}>
          <div>
            <span style={{
              display: "block", fontSize: 11, fontWeight: 700,
              color: "#e8643c", letterSpacing: "1.4px",
              textTransform: "uppercase", marginBottom: 14,
            }}>Selected work</span>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 700, letterSpacing: "-0.04em",
              lineHeight: 1.05, color: "#fff", margin: 0,
            }}>
              We build things that <span style={{ color: "#e8643c" }}>work.</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.4)", maxWidth: 480,
              marginTop: 12, fontSize: 16, lineHeight: 1.65,
            }}>
              243+ projects across 10 industries and 5 countries.
            </p>
          </div>
          <Link
            href="/projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 9999, fontSize: 14, fontWeight: 600,
              color: "rgba(255,255,255,0.7)", textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, background 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#17171c";
              el.style.background = "#ffffff";
              el.style.borderColor = "#ffffff";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "rgba(255,255,255,0.7)";
              el.style.background = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            See all 40+ projects →
          </Link>
        </div>

        {/* Magazine grid: 1 featured (left 60%) + 2 stacked (right 40%) */}
        <div className="money-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gridTemplateRows: "auto",
          gap: 12,
        }}>
          {/* Featured card */}
          <Link
            href={featured.liveUrl ?? featured.demo}
            target={featured.liveUrl ? "_blank" : undefined}
            rel={featured.liveUrl ? "noopener noreferrer" : undefined}
            className="work-card"
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden",
              textDecoration: "none",
              opacity: 0,
              transition: "border-color 0.3s, box-shadow 0.3s",
              gridRow: "1 / 3",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.2)";
              el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.07)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", flexShrink: 0 }}>
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                unoptimized
                style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
              />
              {/* Result badge */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                background: "#e8643c", color: "#fff",
                fontSize: 12, fontWeight: 700,
                padding: "6px 14px", borderRadius: 9999,
                letterSpacing: "0.02em",
              }}>{featured.result}</div>
            </div>

            {/* Info */}
            <div style={{ padding: "28px 28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
              <span style={{
                fontSize: 11, fontWeight: 700, color: "#e8643c",
                letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 10,
              }}>{featured.cat}</span>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(22px, 2.5vw, 30px)",
                fontWeight: 700, letterSpacing: "-0.04em",
                color: "#fff", lineHeight: 1.15, margin: "0 0 12px",
              }}>{featured.title}</h3>
              <p style={{
                fontSize: 14, color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7, margin: "0 0 20px", flex: 1,
              }}>{featured.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {featured.techs.map(t => (
                  <span key={t} style={{
                    fontSize: 11, fontWeight: 500,
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "4px 10px", color: "rgba(255,255,255,0.4)",
                    borderRadius: 4,
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 700, color: "#e8643c",
                }}>{featured.liveUrl ? "Visit live site →" : "View project →"}</span>

                {/* Logo badge */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 9999,
                  padding: "5px 12px",
                }}>
                  {featured.logo && (
                    <img src={featured.logo} alt="" width={16} height={16} style={{ borderRadius: 3, flexShrink: 0 }} />
                  )}
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>
                    {featured.logoText}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Two stacked cards */}
          {rest.map((p, i) => (
            <Link
              key={i}
              href={p.liveUrl ?? p.demo}
              target={p.liveUrl ? "_blank" : undefined}
              rel={p.liveUrl ? "noopener noreferrer" : undefined}
              className="work-card"
              style={{
                display: "flex",
                flexDirection: "row",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden",
                textDecoration: "none",
                opacity: 0,
                transition: "border-color 0.3s, box-shadow 0.3s",
                minHeight: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.2)";
                el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image left */}
              <div style={{
                position: "relative",
                width: "45%",
                flexShrink: 0,
                overflow: "hidden",
              }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  unoptimized
                  style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.06)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                />
              </div>

              {/* Info right */}
              <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{
                    fontSize: 10, fontWeight: 700, color: "#e8643c",
                    letterSpacing: "1.2px", textTransform: "uppercase", display: "block", marginBottom: 8,
                  }}>{p.cat}</span>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(16px, 1.8vw, 20px)",
                    fontWeight: 700, letterSpacing: "-0.03em",
                    color: "#fff", lineHeight: 1.2, margin: "0 0 8px",
                  }}>{p.title}</h3>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(232,100,60,0.12)",
                    border: "1px solid rgba(232,100,60,0.25)",
                    borderRadius: 9999, padding: "3px 10px",
                    fontSize: 11, fontWeight: 700, color: "#e8643c",
                    marginBottom: 10,
                  }}>{p.result}</div>
                  <p style={{
                    fontSize: 13, color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.65, margin: 0,
                  }}>{p.desc}</p>
                </div>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  marginTop: 14, fontSize: 12, fontWeight: 700, color: "#e8643c",
                }}>View project →</span>
              </div>
            </Link>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .money-grid { grid-template-columns: 1fr !important; }
            .money-grid .work-card:first-child { grid-row: auto !important; }
            .money-side-card { flex-direction: column !important; }
            .money-side-card > div:first-child { width: 100% !important; height: 180px !important; position: relative !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
