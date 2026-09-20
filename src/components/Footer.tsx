"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ background: "#e8f5f0", fontFamily: "'Inter', sans-serif", borderTop: "1px solid rgba(0,137,123,0.2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(40px,6vw,72px) clamp(24px,5vw,60px)" }}>

        {/* Top grid */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "320px 140px 200px",
          gap: "0 60px",
          marginBottom: 48,
          alignItems: "flex-start",
        }}>

          {/* Left: logo + contact + subscribe + social */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Image src="/assets/icon_logo-CTOVYnVL.png" alt="BoonWare" width={38} height={38} style={{ display: "block" }} />
              <span style={{ fontSize: 22, fontWeight: 700, color: "#17171c", letterSpacing: "-0.03em" }}>BoonWare</span>
            </div>

            <div style={{ fontSize: 10, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Contact us at</div>
            <a href="mailto:info@boonware.in" style={{ fontSize: 15, color: "#17171c", textDecoration: "none", fontWeight: 500 }}>info@boonware.in</a>

            <form action="mailto:info@boonware.in" method="post" style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              <input
                type="email" name="email" required placeholder="Enter your email address"
                style={{
                  flex: 1, minWidth: 160, height: 40, padding: "0 14px",
                  background: "#ffffff", border: "1px solid #d1d5db",
                  borderRadius: 9999, color: "#17171c", fontSize: 13,
                  fontFamily: "inherit", outline: "none", transition: "border-color 0.2s",
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "#00897B"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#d1d5db"; }}
              />
              <button type="submit" style={{
                height: 40, padding: "0 18px", borderRadius: 9999,
                background: "#00897B", color: "#fff", border: "none",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                fontFamily: "inherit", transition: "background 0.2s", flexShrink: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#16a34a"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#00897B"; }}
              >Subscribe</button>
            </form>

            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 10, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Follow us</div>
              <div style={{ display: "flex", gap: 14 }}>
                {[["LinkedIn", "https://linkedin.com/company/boonware"], ["Instagram", "https://instagram.com/boonware_agency"], ["GitHub", "https://github.com/boonware-agency"]].map(([name, href]) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#555", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#555")}
                  >{name}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 10, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Links</div>
            {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Our Work", "/projects"], ["Products", "/products"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#444")}
              >{l}</Link>
            ))}
          </div>

          {/* More Resources */}
          <div>
            <div style={{ fontSize: 10, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>More Resources</div>
            {[["Blogs", "/blogs"], ["Terms & Conditions", "/terms-and-conditions"], ["Privacy Policy", "/privacy-policy"], ["Refund Policy", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#444")}
              >{l}</Link>
            ))}
          </div>
        </div>

        {/* Divider + location */}
        <div style={{ borderTop: "1px solid rgba(0,137,123,0.2)", paddingTop: 20, marginBottom: 16 }}>
          <p style={{ fontSize: 12, color: "#71717a", margin: 0 }}>
            Location: India | UAE | US | UK | Saudi Arabia | Australia | Canada | Kuwait | Oman
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontSize: 12, color: "#71717a" }}>© 2025 BoonWare. All rights reserved.</span>
          <div style={{ display: "flex", gap: 16 }}>
            {[["Privacy Policy", "/privacy-policy"], ["Terms", "/terms-and-conditions"], ["Refund", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ fontSize: 12, color: "#71717a", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
        </div>

        {/* BOONWARE watermark */}
        <div style={{
          marginTop: 40,
          fontSize: "clamp(48px, 10vw, 110px)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "2px #00897B",
          userSelect: "none",
          lineHeight: 1,
          textAlign: "center",
          overflow: "hidden",
        }}>
          BOONWARE
        </div>

        <style>{`
          @media (max-width: 720px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 32px 0 !important; }
          }
        `}</style>
      </div>
    </footer>
  );
}
export default Footer;
