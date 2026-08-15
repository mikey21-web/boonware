"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

/* ─── STEP DATA ─────────────────────────────────────────────── */

const STEP1 = [
  { label: "Build something", sub: "Website, app, software or product" },
  { label: "Automate something", sub: "AI, workflows or repetitive work" },
  { label: "Get more customers", sub: "Marketing, e-commerce or digital" },
  { label: "Improve an experience", sub: "Chat, voice, web or mobile" },
];

const STEP2 = [
  { label: "Web Development", sub: "Websites & web applications" },
  { label: "AI & Automation", sub: "Intelligent workflows" },
  { label: "Mobile Application", sub: "iOS / Android experience" },
  { label: "E-Commerce", sub: "Online store solutions" },
  { label: "AI Assistant / Chatbot", sub: "Conversational AI" },
  { label: "AI Calling Agent", sub: "Inbound & outbound calls" },
  { label: "Custom Software", sub: "Tailored business systems" },
  { label: "Design / Marketing", sub: "Brand & digital growth" },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const expectRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(1);
  const [pick1, setPick1] = useState<number | null>(null);
  const [pick2, setPick2] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", extra: "", source: "Google" });
  const [submitted, setSubmitted] = useState(false);

  const TOTAL = 4;
  const pct = (step / TOTAL) * 100;

  /* GSAP */
  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      /* Hero */
      const lines = heroRef.current?.querySelectorAll(".h-line-inner");
      if (lines?.length) {
        gsap.to(lines, { y: 0, duration: 1.1, ease: "power4.out", stagger: 0.07, delay: 0.1 });
      }
      const heroFoot = heroRef.current?.querySelector(".hero-foot") ?? null;
      if (heroFoot) {
        gsap.fromTo(
          heroFoot,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
        );
      }

      /* Expect cards */
      const expCards = expectRef.current?.querySelectorAll(".exp-card") ?? [];
      if (expCards.length) {
        gsap.fromTo(
          expCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: expectRef.current, start: "top 78%", once: true },
          }
        );
      }
      const expHeading = expectRef.current?.querySelector(".exp-heading") ?? null;
      if (expHeading) {
        gsap.fromTo(
          expHeading,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: expectRef.current, start: "top 80%", once: true },
          }
        );
      }

      /* CTA */
      const ctaInner = ctaRef.current?.querySelector(".cta-inner") ?? null;
      if (ctaInner) {
        gsap.fromTo(
          ctaInner,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: ctaRef.current, start: "top 80%", once: true },
          }
        );
      }
    };
    run();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    background: "#161616",
    border: "1px solid #2a2a2a",
    color: "#ffffff",
    padding: "14px 16px",
    fontSize: 14,
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    borderRadius: 0,
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 9,
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    color: "#666",
    marginBottom: 7,
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f7f8f4" }}>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid-split { grid-template-columns: 1fr !important; }
          .contact-sticky { position: static !important; }
          .expect-cards { grid-template-columns: 1fr !important; }
          .details-row { grid-template-columns: 1fr !important; gap: 40px !important; }
          .choices-2col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .choices-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          background: "#f7f8f4",
          padding: "clamp(140px, 18vw, 200px) clamp(24px, 6vw, 100px) clamp(80px, 10vw, 100px)",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#888",
            fontWeight: 700,
            marginBottom: 28,
          }}>BoonWare / New Business</p>

          <div style={{ overflow: "hidden", marginBottom: 2 }}>
            <span className="h-line-inner" style={{
              display: "block",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(60px, 9.5vw, 148px)",
              fontWeight: 700,
              color: "#090909",
              letterSpacing: "-0.06em",
              lineHeight: 0.88,
              transform: "translateY(110%)",
            }}>Something needs</span>
          </div>
          <div style={{ overflow: "hidden", marginBottom: 2 }}>
            <span className="h-line-inner" style={{
              display: "block",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(60px, 9.5vw, 148px)",
              fontWeight: 700,
              color: "#898982",
              letterSpacing: "-0.06em",
              lineHeight: 0.88,
              transform: "translateY(110%)",
            }}>to happen.</span>
          </div>

          <div className="hero-foot" style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 50,
            marginTop: 70,
            flexWrap: "wrap",
            opacity: 0,
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.7,
              color: "#666",
              maxWidth: 610,
              margin: 0,
            }}>
              Maybe you&apos;re starting something new. Maybe your current system is holding the business back. Maybe you know AI can do more for you. Tell us where you are — we&apos;ll figure out where to go next.
            </p>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              lineHeight: 1.8,
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "1.4px",
              flexShrink: 0,
            }}>
              Dubai · UK · US · UAE<br />
              Australia · India · Canada
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section style={{
        background: "#17171c",
        color: "#fff",
        padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 100px)",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="contact-grid-split" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "clamp(40px, 7vw, 90px)" }}>

            {/* Left: sticky intro */}
            <div className="contact-sticky" style={{ position: "sticky", top: 30, alignSelf: "start" }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#666",
                fontWeight: 700,
                marginBottom: 18,
              }}>01 / Tell us about it</p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 4vw, 58px)",
                fontWeight: 600,
                letterSpacing: "-0.06em",
                lineHeight: 0.9,
                margin: "0 0 20px",
              }}>
                Start with the problem. Not the technology.
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                color: "#999",
                lineHeight: 1.7,
                maxWidth: 360,
                fontSize: 14,
                margin: 0,
              }}>
                You don&apos;t need a polished brief. A rough idea is enough to start the conversation.
              </p>

              <div style={{ borderTop: "1px solid #333", marginTop: 60, paddingTop: 20 }}>
                <small style={{ display: "block", color: "#666", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: 9 }}>Prefer email?</small>
                <a href="mailto:info@boonware.in" style={{
                  display: "block",
                  color: "#ddd",
                  marginTop: 8,
                  fontSize: 15,
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#e8643c"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#ddd"}
                >info@boonware.in</a>
              </div>

              <div style={{ borderTop: "1px solid #333", marginTop: 24, paddingTop: 20 }}>
                <small style={{ display: "block", color: "#666", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: 9 }}>Prefer a call?</small>
                <a href="tel:+919076269629" style={{
                  display: "block",
                  color: "#ddd",
                  marginTop: 8,
                  fontSize: 15,
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#e8643c"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#ddd"}
                >+91 9076269629</a>
                <a href="tel:+918291393581" style={{
                  display: "block",
                  color: "#ddd",
                  marginTop: 8,
                  fontSize: 15,
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#e8643c"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#ddd"}
                >+91 8291393581</a>
              </div>
            </div>

            {/* Right: multi-step form */}
            <div style={{
              background: "#111",
              border: "1px solid #2a2a2a",
              padding: "clamp(24px, 3vw, 38px)",
            }}>
              {submitted ? (
                /* Confirm */
                <div style={{ textAlign: "center", padding: "55px 15px" }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "#e8643c",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 27,
                    margin: "0 auto 22px",
                    fontFamily: "'Inter', sans-serif",
                  }}>✓</div>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    margin: "0 0 10px",
                  }}>We have your brief.</h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#888",
                    lineHeight: 1.7,
                    fontSize: 14,
                    margin: 0,
                  }}>
                    We reply within 4 hours on weekdays. For urgent projects, WhatsApp us directly.
                  </p>
                  <a href="https://wa.me/919390739090" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: 28,
                    background: "#e8643c",
                    color: "#fff",
                    borderRadius: 9999,
                    padding: "13px 28px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}>WhatsApp us →</a>
                </div>
              ) : (
                <>
                  {/* Form header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, marginBottom: 0 }}>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 31,
                      fontWeight: 600,
                      color: "#fff",
                      letterSpacing: "-0.03em",
                      margin: 0,
                    }}>Start a project</h3>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10,
                      color: "#666",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      paddingTop: 8,
                    }}>{String(step).padStart(2, "0")} / 04</span>
                  </div>

                  {/* Progress bar */}
                  <div style={{ height: 2, background: "#292929", margin: "28px 0 32px" }}>
                    <div style={{
                      width: `${pct}%`,
                      height: 2,
                      background: "#e8643c",
                      transition: "width 0.3s ease",
                    }} />
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1 */}
                    {step === 1 && (
                      <div>
                        <div style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 23,
                          fontWeight: 600,
                          color: "#fff",
                          letterSpacing: "-0.02em",
                          marginBottom: 7,
                        }}>What brings you here?</div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#777",
                          fontSize: 13,
                          lineHeight: 1.6,
                          marginBottom: 25,
                        }}>Pick the closest one. You can explain the rest later.</div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                          {STEP1.map((c, i) => (
                            <button
                              key={c.label}
                              type="button"
                              onClick={() => setPick1(i)}
                              style={{
                                background: pick1 === i ? "#e8643c" : "#161616",
                                border: pick1 === i ? "1px solid #e8643c" : "1px solid #333",
                                color: pick1 === i ? "#fff" : "#ccc",
                                textAlign: "left",
                                padding: "17px",
                                minHeight: 83,
                                cursor: "pointer",
                                transition: "all 0.2s",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              <strong style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: 15,
                                fontWeight: 600,
                                display: "block",
                              }}>{c.label}</strong>
                              <small style={{
                                display: "block",
                                color: pick1 === i ? "rgba(255,255,255,0.75)" : "#777",
                                marginTop: 5,
                                fontSize: 10,
                              }}>{c.sub}</small>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div>
                        <div style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 23,
                          fontWeight: 600,
                          color: "#fff",
                          letterSpacing: "-0.02em",
                          marginBottom: 7,
                        }}>What are you looking for?</div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#777",
                          fontSize: 13,
                          lineHeight: 1.6,
                          marginBottom: 25,
                        }}>Select the capability that sounds closest.</div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                          {STEP2.map((c, i) => (
                            <button
                              key={c.label}
                              type="button"
                              onClick={() => setPick2(i)}
                              style={{
                                background: pick2 === i ? "#e8643c" : "#161616",
                                border: pick2 === i ? "1px solid #e8643c" : "1px solid #333",
                                color: pick2 === i ? "#fff" : "#ccc",
                                textAlign: "left",
                                padding: "17px",
                                minHeight: 83,
                                cursor: "pointer",
                                transition: "all 0.2s",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              <strong style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: 14,
                                fontWeight: 600,
                                display: "block",
                              }}>{c.label}</strong>
                              <small style={{
                                display: "block",
                                color: pick2 === i ? "rgba(255,255,255,0.75)" : "#777",
                                marginTop: 5,
                                fontSize: 10,
                              }}>{c.sub}</small>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div>
                        <div style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 23,
                          fontWeight: 600,
                          color: "#fff",
                          letterSpacing: "-0.02em",
                          marginBottom: 7,
                        }}>Give us the context.</div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#777",
                          fontSize: 13,
                          lineHeight: 1.6,
                          marginBottom: 25,
                        }}>The more useful the context, the better the first conversation.</div>

                        <div style={{ marginBottom: 17 }}>
                          <label style={labelStyle}>Your name</label>
                          <input
                            required
                            placeholder="Your name"
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            style={fieldStyle}
                          />
                        </div>
                        <div style={{ marginBottom: 17 }}>
                          <label style={labelStyle}>Work email</label>
                          <input
                            required
                            type="email"
                            placeholder="you@company.com"
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            style={fieldStyle}
                          />
                        </div>
                        <div style={{ marginBottom: 17 }}>
                          <label style={labelStyle}>Company</label>
                          <input
                            placeholder="Company name"
                            value={form.company}
                            onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                            style={fieldStyle}
                          />
                        </div>
                        <div style={{ marginBottom: 17 }}>
                          <label style={labelStyle}>Tell us about the project</label>
                          <textarea
                            required
                            placeholder="What are you trying to achieve? What's happening today?"
                            value={form.message}
                            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                            style={{ ...fieldStyle, minHeight: 120, resize: "vertical" }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4 */}
                    {step === 4 && (
                      <div>
                        <div style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 23,
                          fontWeight: 600,
                          color: "#fff",
                          letterSpacing: "-0.02em",
                          marginBottom: 7,
                        }}>Anything else we should know?</div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#777",
                          fontSize: 13,
                          lineHeight: 1.6,
                          marginBottom: 25,
                        }}>Budget, timeline, existing product, reference links — whatever matters.</div>

                        <div style={{ marginBottom: 17 }}>
                          <label style={labelStyle}>Additional context</label>
                          <textarea
                            placeholder="Optional"
                            value={form.extra}
                            onChange={e => setForm(f => ({ ...f, extra: e.target.value }))}
                            style={{ ...fieldStyle, minHeight: 120, resize: "vertical" }}
                          />
                        </div>
                        <div style={{ marginBottom: 17 }}>
                          <label style={labelStyle}>How did you find BoonWare?</label>
                          <select
                            value={form.source}
                            onChange={e => setForm(f => ({ ...f, source: e.target.value }))}
                            style={{ ...fieldStyle, cursor: "pointer" }}
                          >
                            {["Google", "LinkedIn", "Referral", "Social media", "Other"].map(o => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 25,
                    }}>
                      <button
                        type="button"
                        onClick={() => setStep(s => Math.max(1, s - 1))}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#777",
                          cursor: "pointer",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          visibility: step === 1 ? "hidden" : "visible",
                        }}
                      >← Back</button>

                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 10,
                        color: "#666",
                      }}>{step} of {TOTAL}</span>

                      {step < TOTAL ? (
                        <button
                          type="button"
                          onClick={() => setStep(s => Math.min(TOTAL, s + 1))}
                          style={{
                            background: "#e8643c",
                            border: "none",
                            color: "#fff",
                            borderRadius: 9999,
                            padding: "13px 20px",
                            fontWeight: 700,
                            cursor: "pointer",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 14,
                            transition: "opacity 0.2s",
                          }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                        >Continue →</button>
                      ) : (
                        <button
                          type="submit"
                          style={{
                            background: "#e8643c",
                            border: "none",
                            color: "#fff",
                            borderRadius: 9999,
                            padding: "13px 20px",
                            fontWeight: 700,
                            cursor: "pointer",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 14,
                            transition: "opacity 0.2s",
                          }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                        >Send Project Brief →</button>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section
        ref={expectRef}
        style={{
          background: "#ffffff",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 100px)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#888",
            fontWeight: 700,
            marginBottom: 20,
          }}>02 / What happens next</p>

          <h2 className="exp-heading" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 0.9,
            color: "#090909",
            maxWidth: 900,
            margin: "0 0 22px",
            opacity: 0,
          }}>
            No disappearing into a black hole.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            color: "#666",
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 0 60px",
          }}>
            The contact page should make the next step feel obvious instead of making a visitor wonder what happens after pressing "Submit."
          </p>

          <div className="expect-cards" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "#e4e4e7",
            border: "1px solid #e4e4e7",
          }}>
            {[
              {
                n: "01",
                title: "You send the brief.",
                body: "Tell us the problem, context and what you're trying to achieve.",
              },
              {
                n: "02",
                title: "We understand the opportunity.",
                body: "The first conversation is about the business first, technology second.",
              },
              {
                n: "03",
                title: "We define the right build.",
                body: "Scope the service or combination of capabilities that actually fits.",
              },
            ].map(c => (
              <div
                key={c.n}
                className="exp-card"
                style={{
                  background: "#ffffff",
                  padding: 30,
                  minHeight: 245,
                  opacity: 0,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#f7f8f4"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#ffffff"}
              >
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#999",
                }}>{c.n}</div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(18px, 2vw, 27px)",
                  fontWeight: 600,
                  color: "#090909",
                  letterSpacing: "-0.03em",
                  marginTop: 58,
                  marginBottom: 0,
                  lineHeight: 1.2,
                }}>{c.title}</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.6,
                  marginTop: 8,
                  margin: "8px 0 0",
                }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section style={{
        background: "#e9e9e3",
        padding: "clamp(80px, 10vw, 105px) clamp(24px, 6vw, 100px)",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="details-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 60 }}>
            {/* Email */}
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#888",
                fontWeight: 700,
                marginBottom: 15,
              }}>Direct</p>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 28,
                fontWeight: 600,
                color: "#090909",
                letterSpacing: "-0.03em",
                marginBottom: 8,
              }}>Email</h3>
              <a href="mailto:info@boonware.in" style={{
                display: "block",
                color: "#666",
                fontSize: 14,
                lineHeight: 1.7,
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#090909"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
              >info@boonware.in</a>
            </div>

            {/* Phone */}
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#888",
                fontWeight: 700,
                marginBottom: 15,
              }}>Phone</p>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 28,
                fontWeight: 600,
                color: "#090909",
                letterSpacing: "-0.03em",
                marginBottom: 8,
              }}>Talk to us</h3>
              <a href="tel:+919076269629" style={{
                display: "block",
                color: "#666",
                fontSize: 14,
                lineHeight: 1.7,
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#090909"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
              >+91 9076269629</a>
              <a href="tel:+918291393581" style={{
                display: "block",
                color: "#666",
                fontSize: 14,
                lineHeight: 1.7,
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#090909"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
              >+91 8291393581</a>
            </div>

            {/* Global */}
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#888",
                fontWeight: 700,
                marginBottom: 15,
              }}>Global</p>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 28,
                fontWeight: 600,
                color: "#090909",
                letterSpacing: "-0.03em",
                marginBottom: 15,
              }}>Working across</h3>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                {["Dubai", "UK", "US", "UAE", "Australia", "India", "Canada"].map(loc => (
                  <span key={loc} style={{
                    border: "1px solid #c9c9c1",
                    borderRadius: 9999,
                    padding: "7px 10px",
                    fontSize: 10,
                    color: "#666",
                    fontFamily: "'Inter', sans-serif",
                  }}>{loc}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        ref={ctaRef}
        style={{
          background: "#e8643c",
          padding: "clamp(100px, 13vw, 125px) clamp(24px, 6vw, 100px)",
          textAlign: "center",
        }}
      >
        <div className="cta-inner" style={{ opacity: 0 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "rgba(0,0,0,0.45)",
            fontWeight: 700,
            marginBottom: 32,
          }}>03 / Your move</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(52px, 8.5vw, 115px)",
            fontWeight: 700,
            letterSpacing: "-0.07em",
            lineHeight: 0.82,
            color: "#fff",
            margin: "0 auto 25px",
            maxWidth: 900,
          }}>
            Let&apos;s make something<br />worth building.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 560,
            margin: "0 auto 30px",
          }}>
            Have an idea? A problem? A system that needs fixing? Start the conversation.
          </p>
          <a
            href="#start"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "inline-block",
              background: "#111",
              color: "#fff",
              borderRadius: 9999,
              padding: "15px 24px",
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#17171c"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#111"}
          >
            Start a Project →
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
