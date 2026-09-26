"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { QuickContactModal } from "./QuickContactModal";

const SERVICE_ITEMS = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/app-development", label: "App Development" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/graphic-design", label: "Graphic Design" },
  { href: "/services/video-editing", label: "Video Editing" },
  { href: "/services/production-shooting", label: "Production Shooting" },
  { href: "/services/automation-ai-agents", label: "Automation / AI Agents" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/projects", label: "Our Work" },
  { href: "/blogs", label: "Blogs" },
  { href: "/products", label: "Products" },
];

const WA_HREF = `https://wa.me/919076269629`;

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path d="M23.472 8.516A10.3 10.3 0 0 0 16.02 5.5C10.756 5.5 6.48 9.774 6.478 15.04c0 1.688.44 3.335 1.278 4.787L6.4 26.5l6.822-1.79a10.35 10.35 0 0 0 4.793 1.221h.004c5.262 0 9.538-4.274 9.54-9.541a9.49 9.49 0 0 0-3.087-6.874Zm-7.452 14.68h-.003a8.593 8.593 0 0 1-4.38-1.198l-.314-.186-3.254.853.869-3.172-.204-.325a8.578 8.578 0 0 1-1.317-4.587c.002-4.74 3.86-8.597 8.606-8.597a8.55 8.55 0 0 1 6.087 2.524 8.543 8.543 0 0 1 2.517 6.079c-.002 4.741-3.86 8.6-8.607 8.6Zm4.72-6.438c-.26-.13-1.534-.757-1.772-.844-.237-.087-.41-.13-.582.13-.173.26-.669.844-.82 1.017-.15.173-.302.195-.562.065-.26-.13-1.097-.404-2.09-1.29-.773-.688-1.295-1.538-1.447-1.798-.152-.26-.016-.4.114-.53.117-.116.26-.302.39-.454.13-.15.173-.26.26-.433.087-.173.043-.325-.022-.454-.065-.13-.582-1.404-.797-1.921-.21-.504-.424-.436-.582-.444l-.497-.008a.952.952 0 0 0-.691.325c-.237.26-.908.887-.908 2.162s.93 2.508 1.06 2.681c.13.173 1.83 2.796 4.435 3.92.62.268 1.104.428 1.481.548.622.198 1.189.17 1.637.103.499-.075 1.534-.627 1.75-1.232.217-.606.217-1.125.152-1.233-.065-.108-.238-.173-.498-.302Z" fill="#fff" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); // initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: 16, left: 0, right: 0, zIndex: 300, display: "flex", justifyContent: "center", padding: "0 16px" }}>
        <div style={{
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 9999,
          padding: scrolled ? "0 12px 0 24px" : "0 8px 0 20px",
          display: "flex",
          alignItems: "center",
          height: 60,
          width: scrolled ? "min(1240px, 96%)" : "min(760px, 92%)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.12)" : "0 4px 20px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.08)",
          transition: "width 0.45s cubic-bezier(0.16, 1, 0.3, 1), padding 0.45s ease, box-shadow 0.45s ease, background 0.45s ease",
          overflow: "visible",
          fontFamily: "'Inter', sans-serif",
          gap: 4,
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
            <img src="/assets/icon_logo-CTOVYnVL.png" alt="BoonWare" width={36} height={36} loading="eager" style={{ display: "block" }} />
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.4px", color: "#16a34a" }}>BoonWare</span>
          </Link>

          {/* Desktop nav links */}
          <div className="bw-nav-links" style={{ display: "flex", flex: 1, justifyContent: "space-evenly", alignItems: "center", margin: "0 16px" }}>
            {NAV_LINKS.map(({ href, label, dropdown }) =>
              dropdown ? (
                <div key={href} ref={dropdownRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setServicesOpen(v => !v)}
                    style={{ fontSize: 13, fontWeight: 500, color: servicesOpen ? "#17171c" : "rgba(0,0,0,0.5)", padding: "6px 12px", borderRadius: 9999, background: servicesOpen ? "rgba(0,0,0,0.04)" : "transparent", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "inherit", transition: "color 0.2s, background 0.2s", whiteSpace: "nowrap" }}
                    onMouseEnter={e => { if (!servicesOpen) { e.currentTarget.style.color = "#17171c"; e.currentTarget.style.background = "rgba(0,0,0,0.04)"; } }}
                    onMouseLeave={e => { if (!servicesOpen) { e.currentTarget.style.color = "rgba(0,0,0,0.5)"; e.currentTarget.style.background = "transparent"; } }}>
                    {label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "#fff", borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.13)", border: "1px solid rgba(0,0,0,0.07)", padding: "6px", minWidth: 210, zIndex: 400 }}>
                      {SERVICE_ITEMS.map(item => (
                        <Link key={item.href} href={item.href} onClick={() => setServicesOpen(false)}
                          style={{ display: "block", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 500, color: "#17171c", textDecoration: "none", transition: "background 0.15s" }}
                          onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={href} href={href}
                  style={{ fontSize: 13, fontWeight: 500, color: "rgba(0,0,0,0.5)", padding: "6px 12px", borderRadius: 9999, textDecoration: "none", transition: "color 0.2s, background 0.2s", whiteSpace: "nowrap" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = "#17171c"; (e.target as HTMLElement).style.background = "rgba(0,0,0,0.04)"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(0,0,0,0.5)"; (e.target as HTMLElement).style.background = "transparent"; }}>
                  {label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <button onClick={() => setModalOpen(true)} className="bw-cta-btn"
            style={{ background: "#e8643c", color: "#fff", padding: "0 16px", borderRadius: 9999, fontSize: 13, fontWeight: 600, height: 38, display: "inline-flex", alignItems: "center", flexShrink: 0, border: "none", cursor: "pointer", transition: "background 0.2s", whiteSpace: "nowrap", fontFamily: "inherit" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#17171c"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#e8643c"; }}>
            Get Started →
          </button>

          {/* Hamburger */}
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
        overflowY: "auto",
      }} className="bw-mobile-overlay">
        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map(({ href, label, dropdown }, i) =>
            dropdown ? (
              <div key={href}>
                <button onClick={() => setMobileServicesOpen(v => !v)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    width: "100%", background: "none", border: "none", cursor: "pointer",
                    fontSize: "clamp(32px, 8vw, 52px)", fontWeight: 700, color: "#fff",
                    padding: "12px 0", letterSpacing: "-1px", lineHeight: 1.15,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                    transition: `opacity 0.4s ease ${i * 0.06 + 0.15}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06 + 0.15}s`,
                    fontFamily: "inherit",
                  }}>
                  {label}
                  <svg width="18" height="18" viewBox="0 0 10 10" fill="none" style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s", flexShrink: 0 }}>
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                    {SERVICE_ITEMS.map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                        style={{ display: "block", padding: "8px 0", fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.65)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                        onMouseEnter={e => { e.currentTarget.style.color = "#25D366"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                display: "block",
                fontSize: "clamp(32px, 8vw, 52px)",
                fontWeight: 700, color: "#fff", textDecoration: "none",
                padding: "12px 0", letterSpacing: "-1px", lineHeight: 1.15,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                transition: `opacity 0.4s ease ${i * 0.06 + 0.15}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06 + 0.15}s`,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00897B"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}>
                {label}
              </Link>
            )
          )}
        </nav>

        <div style={{
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.4s ease 0.45s, transform 0.4s ease 0.45s`,
        }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", borderRadius: 9999, padding: "0 24px", height: 56, fontSize: 16, fontWeight: 700, textDecoration: "none", flex: 1, justifyContent: "center" }}>
              <WhatsAppIcon />
              WhatsApp
            </a>
            <button onClick={() => { setMenuOpen(false); setModalOpen(true); }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e8643c", color: "#fff", borderRadius: 9999, padding: "0 24px", height: 56, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "inherit", flex: 1, justifyContent: "center" }}>
              Get Started →
            </button>
          </div>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 8, textAlign: "center" }}>
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
