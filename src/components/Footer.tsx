"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ background: "#0b1f1a", fontFamily: "'Inter', sans-serif", borderTop: "1px solid rgba(0,137,123,0.2)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(48px,8vw,80px) clamp(24px,5vw,80px)" }}>
        {/* Top grid: left col + links */}
        <div className="footer-top-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "40px 64px", marginBottom: 56, alignItems: "flex-start" }}>

          {/* Left: logo + contact + subscribe + social */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Image src="/assets/icon_logo-CTOVYnVL.png" alt="BoonWare" width={44} height={44} style={{ display: "block" }} />
              <span style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em" }}>BoonWare</span>
            </div>

            {/* Contact */}
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Contact us at</div>
            <a href="mailto:info@boonware.in" style={{ fontSize: 16, color: "#ffffff", textDecoration: "none", fontWeight: 500 }}>info@boonware.in</a>

            {/* Subscribe */}
            <form
              action="mailto:info@boonware.in"
              method="post"
              style={{ display: "flex", gap: 8, marginTop: 16, maxWidth: 360, flexWrap: "wrap" }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                style={{
                  flex: 1, minWidth: 180, height: 44, padding: "0 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 9999, color: "#fff", fontSize: 14,
                  fontFamily: "inherit", outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "#00897B"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
              />
              <button type="submit" style={{
                height: 44, padding: "0 24px", borderRadius: 9999,
                background: "#00897B", color: "#fff", border: "none",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                fontFamily: "inherit", transition: "background 0.2s", flexShrink: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#16a34a"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#00897B"; }}
              >
                Subscribe
              </button>
            </form>

            {/* Social links */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Follow us</div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  ["LinkedIn", "https://linkedin.com/company/boonware"],
                  ["Instagram", "https://instagram.com/boonware_agency"],
                  ["GitHub", "https://github.com/boonware-agency"],
                ].map(([name, href]) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >{name}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Links column */}
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Links</div>
            {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Our Work", "/projects"], ["Products", "/products"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 15, textDecoration: "none", marginBottom: 12, transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{l}</Link>
            ))}
          </div>

          {/* More Resources column */}
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>More Resources</div>
            {[["Blogs", "/blogs"], ["Terms & Conditions", "/terms-and-conditions"], ["Privacy Policy", "/privacy-policy"], ["Refund Policy", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 12, transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{l}</Link>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, marginBottom: 24 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0, lineHeight: 1.8 }}>
            Location: India | UAE | US | UK | Saudi Arabia | Australia | Canada | Kuwait | Oman
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>© 2025 BoonWare. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy-policy" style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Terms</Link>
            <Link href="/refund-policy" style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Refund</Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .footer-top-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* BOONWARE watermark */}
        <div style={{
          marginTop: 48,
          fontSize: "clamp(48px, 10vw, 120px)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "2px #16a34a",
          userSelect: "none",
          lineHeight: 1,
          overflow: "hidden",
        }}>
          BOONWARE
        </div>
      </div>
    </footer>
  );
}
export default Footer;
