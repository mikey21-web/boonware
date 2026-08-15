"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TEAM = [
  {
    name: "Suzanne Ansari",
    role: "Co-Founder & CEO",
    img: "https://boonware.in/assets/suzanne1-j5b959xL.jpeg",
    bio: "Drives strategy, client relationships, and business growth. Suzanne ensures every project delivers measurable ROI.",
    linkedin: "https://linkedin.com/in/suzanne16/",
    instagram: "https://instagram.com/boonware_agency/",
  },
  {
    name: "Mohammed Ishaque Inamdar",
    role: "Co-Founder & Founding Engineer",
    img: "https://boonware.in/assets/ishaque-RBoHBDVo.jpeg",
    bio: "Full-stack architect behind BoonWare's core builds. Ishaque leads technical decisions and product architecture.",
    linkedin: "https://linkedin.com/in/mohammed-ishaque-inamdar-22b6b622b/",
    instagram: "https://instagram.com/ishaque_inamdar8291/",
  },
  {
    name: "Shabaan Sayed",
    role: "Co-Founder & COO",
    img: "https://boonware.in/assets/shabaan-CbrrHu3f.jpeg",
    bio: "Keeps operations tight and delivery on schedule. Shabaan bridges client expectations with engineering execution.",
    linkedin: "https://linkedin.com/in/shabaan-sayed-51513b1a4/",
    instagram: "https://instagram.com/shabaansayed11/",
  },
];

const VALUES = [
  { title: "Global Impact", desc: "Making AI accessible to businesses worldwide — from Hyderabad to Dubai to London." },
  { title: "Technical Excellence", desc: "Delivering world-class code and architecture that scales with your ambition." },
  { title: "Innovation First", desc: "Pushing boundaries with emerging technologies so you stay ahead of the competition." },
  { title: "Client-Centric", desc: "Your success is our success. We work collaboratively until the outcome is exactly right." },
];

const PROCESS = [
  { n: "01", title: "Discovery", time: "1–2 weeks", desc: "We dive deep into your business needs, goals, and challenges to design the perfect solution." },
  { n: "02", title: "Design", time: "1–2 weeks", desc: "User-centered designs that align with your brand and provide exceptional experiences." },
  { n: "03", title: "Development", time: "2–6 weeks", desc: "Robust, scalable solutions built with cutting-edge tech and best practices." },
  { n: "04", title: "Deliver", time: "1 week", desc: "We deploy, train your team, and hand over full source code — clean and documented." },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // hero text
      gsap.from(heroRef.current?.querySelectorAll(".hero-line") ?? [], {
        y: 48, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power4.out", delay: 0.2,
      });

      // team cards
      gsap.fromTo(
        teamRef.current?.querySelectorAll(".team-card") ?? [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: teamRef.current, start: "top 80%", once: true } }
      );

      // value cards
      gsap.fromTo(".val-card",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: ".val-grid", start: "top 80%", once: true } }
      );

      // process steps
      gsap.fromTo(".proc-step",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".proc-grid", start: "top 80%", once: true } }
      );
    };
    run();
  }, []);

  return (
    <div style={{ background: "#ffffff", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-team-grid { grid-template-columns: 1fr !important; }
          .about-val-grid { grid-template-columns: 1fr 1fr !important; }
          .about-proc-grid { grid-template-columns: 1fr 1fr !important; }
          .about-cta-row { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .about-val-grid { grid-template-columns: 1fr !important; }
          .about-proc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ padding: "140px 24px 100px", borderBottom: "1px solid #e4e4e7", overflow: "hidden" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }} className="hero-line">
            About BoonWare
          </span>
          <h1 style={{ fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.02, color: "#17171c", margin: 0 }} className="hero-line">
            We build the technology<br />
            <span style={{ color: "#17171c" }}>your business</span>{" "}
            <span style={{ color: "#e8643c" }}>needs.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#71717a", maxWidth: 600, lineHeight: 1.7, marginTop: 28 }} className="hero-line">
            A passionate team of AI engineers, full-stack developers, and business strategists — bridging the gap between innovative AI and the everyday business.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7" }}>
        <div className="about-story-grid" style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
              Our story
            </span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: 0 }}>
              Built to bridge AI<br />and real business.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, margin: 0 }}>
              BoonWare began as a shared vision between three passionate technologists — not just to build products, but to build the future. From our very first project, we knew we wanted to be more than a software studio.
            </p>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.75, marginTop: 20 }}>
              We founded BoonWare to bridge the gap between innovative AI and the everyday business. In a world flooded with generic tools, we focus on crafting intelligent, adaptive solutions that evolve with our clients' needs.
            </p>
            <blockquote style={{ borderLeft: "3px solid #e8643c", paddingLeft: 20, marginTop: 28 }}>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#17171c", lineHeight: 1.55, margin: 0, letterSpacing: "-0.2px" }}>
                "Technology should be an extension of purpose — enhancing how people work, connect, and grow. We build with empathy, intelligence, and intent."
              </p>
            </blockquote>
            <div style={{ display: "flex", gap: 32, marginTop: 36, paddingTop: 32, borderTop: "1px solid #e4e4e7" }}>
              {[["100+", "Businesses powered"], ["10+", "Industries served"], ["5", "Countries active"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.8px", color: "#17171c" }}>{num}</div>
                  <div style={{ fontSize: 13, color: "#71717a", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7", background: "#f7f8f4" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            Meet the team
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: "0 0 48px" }}>
            The people who build it.
          </h2>

          <div ref={teamRef} className="about-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {TEAM.map(member => (
              <div
                key={member.name}
                className="team-card"
                style={{
                  border: "1px solid #e4e4e7",
                  overflow: "hidden",
                  background: "#ffffff",
                  opacity: 0,
                  transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Photo */}
                <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", position: "relative", background: "#f4f4f5" }}>
                  <Image
                    src={member.img} alt={member.name} fill
                    style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}
                    unoptimized
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  />
                </div>
                {/* Info */}
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", margin: 0 }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "#e8643c", fontWeight: 600, marginTop: 4 }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: 13, color: "#71717a", marginTop: 10, lineHeight: 1.6 }}>
                    {member.bio}
                  </p>
                  <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      fontSize: 12, fontWeight: 600, color: "#17171c",
                      border: "1px solid #e4e4e7", borderRadius: 9999,
                      padding: "5px 12px", textDecoration: "none",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#0a66c2"; (e.currentTarget as HTMLElement).style.color = "#0a66c2"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7"; (e.currentTarget as HTMLElement).style.color = "#17171c"; }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      fontSize: 12, fontWeight: 600, color: "#17171c",
                      border: "1px solid #e4e4e7", borderRadius: 9999,
                      padding: "5px 12px", textDecoration: "none",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e8643c"; (e.currentTarget as HTMLElement).style.color = "#e8643c"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7"; (e.currentTarget as HTMLElement).style.color = "#17171c"; }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            What we stand for
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: "0 0 48px" }}>
            Our values.
          </h2>
          <div className="val-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="val-card"
                style={{
                  background: "#f7f8f4", border: "1px solid #e4e4e7",
                  padding: 28, opacity: 0,
                  transition: "border-color 0.22s, transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#17171c";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "#e8643c", letterSpacing: "1px" }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", marginTop: 32 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 13, color: "#71717a", marginTop: 8, lineHeight: 1.63 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "104px 24px", borderBottom: "1px solid #e4e4e7", background: "#f7f8f4" }}>
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#e8643c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            How we work
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: "0 0 48px" }}>
            From idea to live in <span style={{ color: "#e8643c" }}>4 phases.</span>
          </h2>
          <div className="proc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {PROCESS.map(s => (
              <div
                key={s.n}
                className="proc-step"
                style={{ borderTop: "2px solid #17171c", paddingTop: 12, opacity: 0, transition: "border-color 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e8643c"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#17171c"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#71717a", letterSpacing: "0.6px" }}>{s.n}</span>
                  <span style={{ fontSize: 11, color: "#e8643c", fontWeight: 600 }}>{s.time}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", marginTop: 24 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#71717a", marginTop: 8, lineHeight: 1.63 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "104px 24px", textAlign: "center" }}>
        <div style={{ width: "min(700px, calc(100% - 48px))", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.05, color: "#17171c", margin: 0 }}>
            Ready to work with us?
          </h2>
          <p style={{ fontSize: 17, color: "#71717a", marginTop: 16, lineHeight: 1.63 }}>
            Tell us what you need. We'll scope it, price it, and build it.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "13px 24px", background: "#17171c", color: "#fff",
              borderRadius: 9999, fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e8643c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#17171c"; }}
            >
              Start a project →
            </Link>
            <Link href="https://wa.me/919076269629" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "13px 24px", background: "transparent", color: "#17171c",
              border: "1px solid #e4e4e7", borderRadius: 9999, fontSize: 14, fontWeight: 500, textDecoration: "none",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#17171c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7"; }}
            >
              WhatsApp us
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 24, flexWrap: "wrap" }}>
            <a href="tel:+919076269629" style={{ fontSize: 13, color: "#71717a", textDecoration: "none" }}>📞 +91 9076269629</a>
            <span style={{ color: "#e4e4e7" }}>·</span>
            <a href="mailto:info@boonware.in" style={{ fontSize: 13, color: "#71717a", textDecoration: "none" }}>✉️ info@boonware.in</a>
            <span style={{ color: "#e4e4e7" }}>·</span>
            <a href="https://instagram.com/boonware_agency" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#71717a", textDecoration: "none" }}>Instagram</a>
            <span style={{ color: "#e4e4e7" }}>·</span>
            <a href="https://linkedin.com/company/boonware" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#71717a", textDecoration: "none" }}>LinkedIn</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media(max-width:850px) {
          [style*="grid-template-columns: 1fr 1fr 1fr"],[style*="repeat(3, 1fr)"]{grid-template-columns:1fr!important}
          [style*="repeat(4, 1fr)"]{grid-template-columns:1fr 1fr!important}
          [style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
        }
        @media(max-width:560px){
          [style*="repeat(4, 1fr)"]{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
