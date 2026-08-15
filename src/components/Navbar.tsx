"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setExpanded(y > 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <>
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: scrolled ? 0 : 16,
          left: 0,
          right: 0,
          zIndex: 200,
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
            padding: expanded ? "0 clamp(20px,4vw,60px)" : "0 6px 0 20px",
            display: "flex",
            alignItems: "center",
            height: expanded ? 62 : 50,
            width: expanded ? "100%" : "min(780px, 100%)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
            borderBottom: expanded ? "1px solid rgba(0,0,0,0.06)" : "none",
            border: expanded ? "none" : "1px solid rgba(0,0,0,0.08)",
            transition:
              "border-radius 0.5s cubic-bezier(0.16,1,0.3,1), width 0.5s cubic-bezier(0.16,1,0.3,1), height 0.5s cubic-bezier(0.16,1,0.3,1), padding 0.5s cubic-bezier(0.16,1,0.3,1)",
            overflow: "hidden",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <img
              src="https://boonware.in/assets/icon_logo-CTOVYnVL.png"
              alt="BoonWare"
              width={28}
              height={28}
              style={{ display: "block", flexShrink: 0 }}
            />
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c" }}>
              BoonWare
            </span>
          </Link>

          {/* Primary nav links (shown when not expanded) */}
          {!expanded && (
            <div
              style={{
                display: "flex",
                gap: 4,
                marginLeft: "auto",
              }}
              className="bw-nav-links"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.5)",
                    padding: "6px 12px",
                    borderRadius: 9999,
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.color = "#17171c";
                    (e.target as HTMLElement).style.background = "rgba(0,0,0,0.04)";
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.color = "rgba(0,0,0,0.5)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {/* Expanded: secondary row */}
          {expanded && (
            <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.45)",
                    padding: "6px 11px",
                    borderRadius: 9999,
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.color = "#17171c";
                    (e.target as HTMLElement).style.background = "rgba(0,0,0,0.04)";
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.color = "rgba(0,0,0,0.45)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: "#e8643c",
              color: "#fff",
              padding: "0 16px",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 600,
              height: 38,
              display: "inline-flex",
              alignItems: "center",
              marginLeft: 8,
              flexShrink: 0,
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
            }}
            onMouseEnter={e => { (e.currentTarget).style.background = "#17171c"; }}
            onMouseLeave={e => { (e.currentTarget).style.background = "#e8643c"; }}
          >
            Get Started →
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              marginLeft: 8,
              flexShrink: 0,
            }}
            className="bw-hamburger"
            aria-label="Menu"
          >
            <div style={{ width: 20, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    height: 1.5,
                    background: "#17171c",
                    transition: "transform 0.3s ease, opacity 0.2s ease",
                    transformOrigin: "center",
                    transform:
                      menuOpen && i === 0
                        ? "rotate(45deg) translate(4.5px, 4.5px)"
                        : menuOpen && i === 2
                        ? "rotate(-45deg) translate(4.5px, -4.5px)"
                        : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: scrolled ? 62 : 74,
            left: 0,
            right: 0,
            zIndex: 199,
            background: "#fff",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            padding: "20px 24px 28px",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontSize: 20,
                fontWeight: 500,
                color: "#17171c",
                textDecoration: "none",
                padding: "13px 0",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                letterSpacing: "-0.3px",
              }}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); setModalOpen(true); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: 20,
              background: "#e8643c",
              color: "#fff",
              borderRadius: 9999,
              padding: "0 28px",
              height: 48,
              fontSize: 15,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Get Started →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .bw-nav-links { display: none !important; }
          .bw-hamburger { display: flex !important; }
        }
      `}</style>

      <QuickContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
