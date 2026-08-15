"use client";
import { useEffect, useRef } from "react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getServiceBySlug, SERVICES_DETAIL } from "@/lib/services-data";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const svc = getServiceBySlug(slug);

  const heroRef = useRef<HTMLDivElement>(null);
  const roiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svc) return;
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const lines = heroRef.current?.querySelectorAll(".hd-line");
      if (lines?.length) {
        gsap.to(lines, { y: 0, duration: 1, ease: "power4.out", stagger: 0.07, delay: 0.1 });
      }
      const heroSubs = heroRef.current?.querySelectorAll(".hd-sub");
      if (heroSubs?.length) {
        gsap.fromTo(heroSubs, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, delay: 0.5, ease: "power3.out" });
      }

      /* ROI metrics count up */
      const metrics = roiRef.current?.querySelectorAll(".metric-val");
      metrics?.forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      /* steps */
      gsap.fromTo(".step-card", { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".steps-wrap", start: "top 80%", once: true },
      });

      /* bullets */
      gsap.fromTo(".bullet-item", { opacity: 0, x: -12 }, {
        opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".bullets-wrap", start: "top 85%", once: true },
      });

      /* faq */
      gsap.fromTo(".faq-item", { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".faq-wrap", start: "top 80%", once: true },
      });
    };
    run();
  }, [svc]);

  if (!svc) return notFound();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      <Navbar />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .price-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          background: "#17171c",
          padding: "clamp(120px, 16vw, 180px) clamp(20px, 5vw, 80px) clamp(60px, 8vw, 100px)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <Link href="/services" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"}
            >← All services</Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>/</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{svc.title}</span>
          </div>

          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: "#e8643c",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 20,
                fontWeight: 600,
              }}>{svc.num} / Service</p>

              <div style={{ overflow: "hidden", marginBottom: 4 }}>
                <h1 className="hd-line" style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  margin: 0,
                  transform: "translateY(110%)",
                  display: "block",
                }}>{svc.title}</h1>
              </div>

              <p className="hd-sub" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.65,
                margin: "20px 0 36px",
                opacity: 0,
              }}>{svc.tagline}</p>

              <div className="hd-sub" style={{ display: "flex", gap: 10, flexWrap: "wrap", opacity: 0 }}>
                <a href="https://wa.me/919076269629" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#e8643c", color: "#fff",
                  borderRadius: 9999, padding: "14px 30px",
                  fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 600,
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >Get a quote →</a>
                <a href="https://wa.me/919076269629" style={{
                  display: "inline-flex", alignItems: "center",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.6)", borderRadius: 9999,
                  padding: "14px 30px",
                  fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500,
                  textDecoration: "none", transition: "color 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                  }}
                >WhatsApp us</a>
              </div>
            </div>

            <div className="hd-sub" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", position: "relative", opacity: 0 }}>
              <Image src={svc.heroImg} alt={svc.title} fill unoptimized style={{ objectFit: "cover" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(232,100,60,0.18) 0%, transparent 60%)",
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICE PILL ── */}
      <div style={{
        background: "#e8643c",
        padding: "20px clamp(20px, 5vw, 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.75)",
            fontWeight: 500,
          }}>Starting from</span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>{svc.price.from}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.65)",
          }}>{svc.price.note}</span>
        </div>
        <a href="https://wa.me/919076269629" style={{
          display: "inline-flex", alignItems: "center",
          background: "#fff", color: "#17171c",
          borderRadius: 9999, padding: "12px 28px",
          fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700,
          textDecoration: "none", whiteSpace: "nowrap" as const,
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
        >Start this project →</a>
      </div>

      {/* ── WHAT WE BUILD ── */}
      <section style={{
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        background: "#ffffff",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: "#e8643c",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 16,
                fontWeight: 600,
              }}>What we build</p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "#17171c",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}>{svc.what.heading}</h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 17px)",
                color: "#71717a",
                lineHeight: 1.75,
                margin: 0,
              }}>{svc.what.body}</p>
            </div>

            <div className="bullets-wrap">
              {svc.what.bullets.map((b, i) => (
                <div key={i} className="bullet-item" style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "16px 0",
                  borderBottom: i < svc.what.bullets.length - 1 ? "1px solid #f0f0f0" : "none",
                  opacity: 0,
                }}>
                  <div style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(232,100,60,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#e8643c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: "#17171c",
                    lineHeight: 1.6,
                  }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE DO IT ── */}
      <section style={{
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        background: "#f7f8f4",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "#e8643c",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 16,
            fontWeight: 600,
          }}>How we do it</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(26px, 3.5vw, 44px)",
            fontWeight: 700,
            color: "#17171c",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 48px",
          }}>{svc.how.heading}</h2>

          <div className="steps-wrap steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {svc.how.steps.map((step, i) => (
              <div key={step.n} className="step-card" style={{
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                padding: "24px 20px",
                borderRadius: 12,
                position: "relative",
                opacity: 0,
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#e8643c",
                  letterSpacing: "0.06em",
                  marginBottom: 28,
                }}>{step.n}</div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#17171c",
                  letterSpacing: "-0.02em",
                  margin: "0 0 10px",
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#71717a",
                  lineHeight: 1.6,
                  margin: "0 0 14px",
                }}>{step.desc}</p>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#e8643c",
                  background: "rgba(232,100,60,0.08)",
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: 9999,
                }}>{step.time}</div>
                {i < svc.how.steps.length - 1 && (
                  <div style={{
                    position: "absolute",
                    right: -9,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 18,
                    height: 18,
                    background: "#e8643c",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    fontSize: 10,
                    color: "#fff",
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI / HOW IT MAKES MONEY ── */}
      <section
        ref={roiRef}
        style={{
          padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
          background: "#17171c",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: "#e8643c",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 16,
                fontWeight: 600,
              }}>How it pays for itself</p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                margin: "0 0 24px",
              }}>{svc.roi.heading}</h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                margin: "0 0 32px",
              }}>{svc.roi.body}</p>

              {/* Case study */}
              <div style={{
                background: "rgba(232,100,60,0.08)",
                border: "1px solid rgba(232,100,60,0.2)",
                borderRadius: 12,
                padding: "20px 24px",
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: "#e8643c",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 10,
                  fontWeight: 600,
                }}>Real result</p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  margin: 0,
                }}>{svc.roi.example}</p>
              </div>
            </div>

            {/* Metrics */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {svc.roi.metrics.map((m, i) => (
                <div key={i} className="metric-val" style={{
                  background: "#111116",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  padding: "28px 32px",
                  opacity: 0,
                  transition: "transform 0.25s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateX(0)"}
                >
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    fontWeight: 700,
                    color: "#e8643c",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>{m.val}</div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        background: "#ffffff",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "#e8643c",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 16,
            fontWeight: 600,
          }}>Pricing</p>

          <div className="price-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 60px)", alignItems: "start" }}>
            {/* Price card */}
            <div style={{
              border: "2px solid #17171c",
              borderRadius: 20,
              padding: "clamp(28px, 4vw, 48px)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: 0, right: 0,
                width: 120,
                height: 120,
                background: "radial-gradient(circle at top right, rgba(232,100,60,0.12) 0%, transparent 70%)",
              }} />

              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#71717a",
                marginBottom: 8,
              }}>Starting from</div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 700,
                color: "#17171c",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 12,
              }}>{svc.price.from}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#71717a",
                marginBottom: 32,
              }}>{svc.price.note}</div>

              <div style={{ borderTop: "1px solid #e4e4e7", paddingTop: 28 }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#71717a",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}>What's included</div>
                {svc.price.includes.map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: i < svc.price.includes.length - 1 ? "1px solid #f5f5f5" : "none",
                  }}>
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#e8643c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#17171c" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA side */}
            <div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 700,
                color: "#17171c",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}>
                Fixed price.<br />No surprises.<br />Source code yours.
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#71717a",
                lineHeight: 1.75,
                margin: "0 0 36px",
              }}>
                We scope every project before taking a rupee. You know exactly what you&apos;re getting, when you&apos;re getting it, and what it costs — before we start.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="https://wa.me/919076269629" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: "#e8643c", color: "#fff",
                  borderRadius: 9999, padding: "16px 32px",
                  fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 700,
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >Start this project on WhatsApp →</a>
                <a href="mailto:info@boonware.in" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: "transparent", color: "#17171c",
                  border: "1px solid #e4e4e7",
                  borderRadius: 9999, padding: "16px 32px",
                  fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500,
                  textDecoration: "none", transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#17171c"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7"}
                >Send an email instead</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        background: "#f7f8f4",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "#e8643c",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 16,
            fontWeight: 600,
          }}>Questions</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(26px, 3.5vw, 44px)",
            fontWeight: 700,
            color: "#17171c",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 48px",
          }}>Things people always ask.</h2>

          <div className="faq-wrap two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {svc.faq.map((item, i) => (
              <div key={i} className="faq-item" style={{
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: 14,
                padding: "24px 28px",
                opacity: 0,
              }}>
                <h4 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#17171c",
                  letterSpacing: "-0.02em",
                  margin: "0 0 10px",
                }}>{item.q}</h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#71717a",
                  lineHeight: 1.7,
                  margin: 0,
                }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section style={{
        padding: "clamp(60px, 6vw, 80px) clamp(20px, 5vw, 80px)",
        background: "#ffffff",
        borderTop: "1px solid #e4e4e7",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 700,
              color: "#17171c",
              letterSpacing: "-0.02em",
              margin: 0,
            }}>Other services</h3>
            <Link href="/services" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#17171c",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              paddingBottom: 2,
            }}>See all →</Link>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {SERVICES_DETAIL.filter(s => s.slug !== slug).slice(0, 4).map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "#17171c",
                textDecoration: "none",
                border: "1px solid #e4e4e7",
                borderRadius: 9999,
                padding: "10px 20px",
                transition: "background 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#17171c";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#17171c";
                }}
              >{s.title} →</Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
