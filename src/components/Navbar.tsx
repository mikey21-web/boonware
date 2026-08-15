"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { QuickContactModal } from "./QuickContactModal";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setExpanded(y > 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Top bar */}
      <div
        style={{
          position: "fixed",
          top: scrolled ? 0 : 16,
          left: 0,
          right: 0,
          zIndex: 300,
          display: "flex",
          justifyContent: "center",
          padding: scrolled ? "0" : "0 24px",
          transition: "top 0.5s cubic-bezier(0.16,1,0.3,1), padding 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: expanded ? 0 : 9999,
            padding: expanded ? "0 clamp(16px,4vw,60px)" : "0 6px 0 16px",
            display: "flex",
            alignItems: "center",
            height: expanded ? 62 : 52,
            width: expanded ? "100%" : "min(780px, calc(100% - 0px))",
            boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
            borderBottom: expanded ? "1px solid rgba(0,0,0,0.06)" : "none",
            border: expanded ? "none" : "1px solid rgba(0,0,0,0.08)",
            transition: "border-radius 0.5s cubic-bezier(0.16,1,0.3,1), width 0.5s cubic-bezier(0.16,1,0.3,1), height 0.5s cubic-bezier(0.16,1,0.3,1), padding 0.5s cubic-bezier(0.16,1,0.3,1)",
            overflow: "hidden",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
            <img src="/assets/icon_logo-CTOVYnVL.png" alt="BoonWare" width={28} height={28} loading="eager" style={{ display: "block" }} />
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c" }}>BoonWare</span>
          </Link>

          {/* Desktop nav links */}
          <div className="bw-nav-links" style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 500, color: "rgba(0,0,0,0.5)", padding: "6px 12px", borderRadius: 9999, textDecoration: "none", transition: "color 0.2s, background 0.2s", whiteSpace: "nowrap" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "#17171c"; (e.target as HTMLElement).style.background = "rgba(0,0,0,0.04)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(0,0,0,0.5)"; (e.target as HTMLElement).style.background = "transparent"; }}>
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <button onClick={() => setModalOpen(true)} className="bw-cta-btn"
            style={{ background: "#e8643c", color: "#fff", padding: "0 16px", borderRadius: 9999, fontSize: 13, fontWeight: 600, height: 38, display: "inline-flex", alignItems: "center", marginLeft: 8, flexShrink: 0, border: "none", cursor: "pointer", transition: "background 0.2s", whiteSpace: "nowrap", fontFamily: "inherit" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#17171c"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#e8643c"; }}>
            Get Started →
          </button>

          {/* Hamburger — always pushed to far right on mobile */}
          <button onClick={() => setMenuOpen(v => !v)} className="bw-hamburger" aria-label="Menu"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "6px 8px", marginLeft: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", height: 2, borderRadius: 2, background: "#17171c",
                  transition: "transform 0.32s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease, width 0.3s ease",
                  transformOrigin: "center",
                  width: menuOpen && i === 1 ? "0%" : i === 2 && !menuOpen ? "70%" : "100%",
                  transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 290,
        background: "#17171c",
        display: "flex", flexDirection: "column",
        padding: "100px 32px 48px",
        fontFamily: "'Inter', sans-serif",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
        pointerEvents: menuOpen ? "auto" : "none",
      }} className="bw-mobile-overlay">
        {/* Nav links */}
        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              display: "block",
              fontSize: "clamp(32px, 8vw, 52px)",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              padding: "12px 0",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(40px)",
              transition: `opacity 0.4s ease ${i * 0.06 + 0.15}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06 + 0.15}s`,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e8643c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom area */}
        <div style={{
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.4s ease 0.45s, transform 0.4s ease 0.45s`,
        }}>
          <button onClick={() => { setMenuOpen(false); setModalOpen(true); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e8643c", color: "#fff", borderRadius: 9999, padding: "0 32px", height: 56, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "inherit", letterSpacing: "-0.3px", width: "100%", justifyContent: "center" }}>
            Get Started →
          </button>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 20, textAlign: "center" }}>
            info@boonware.in · +91 90762 69629
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .bw-nav-links { display: none !important; }
          .bw-cta-btn { display: none !important; }
          .bw-hamburger { display: flex !important; }
        }
        @media (min-width: 701px) {
          .bw-mobile-overlay { display: none !important; }
        }
      `}</style>

      <QuickContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
