"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ background: "#e8f5f0", fontFamily: "'Inter', sans-serif", borderTop: "1px solid rgba(0,137,123,0.2)" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "clamp(32px, 4vw, 56px) clamp(24px, 5vw, 64px)" }}>

        {/* Top 3-column grid: Left, Middle, Right */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gap: "0 64px",
          marginBottom: 40,
          alignItems: "flex-start",
        }}>

          {/* Left Section: BoonWare branding, contact, subscribe, socials */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Image src="/assets/icon_logo-CTOVYnVL.png" alt="BoonWare" width={40} height={40} style={{ display: "block" }} />
              <span style={{ fontSize: 32, fontWeight: 800, color: "#17171c", letterSpacing: "-0.03em" }}>BoonWare</span>
            </div>

            <div style={{ fontSize: 16, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Contact us at</div>
            <a href="mailto:info@boonware.in" style={{ fontSize: 24, color: "#17171c", textDecoration: "none", fontWeight: 600, display: "inline-block", marginBottom: 20 }}>info@boonware.in</a>

            <form action="mailto:info@boonware.in" method="post" style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
              <input
                type="email" name="email" required placeholder="Enter your email address"
                style={{
                  flex: 1, minWidth: 200, height: 48, padding: "0 18px",
                  background: "#ffffff", border: "1px solid #c4c4c4",
                  borderRadius: 9999, color: "#17171c", fontSize: 18,
                  fontFamily: "inherit", outline: "none", transition: "border-color 0.2s",
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "#00897B"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#c4c4c4"; }}
              />
              <button type="submit" style={{
                height: 48, padding: "0 24px", borderRadius: 9999,
                background: "#00897B", color: "#fff", border: "none",
                fontSize: 18, fontWeight: 600, cursor: "pointer",
                fontFamily: "inherit", transition: "background 0.2s", flexShrink: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#16a34a"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#00897B"; }}
              >Subscribe</button>
            </form>

            <div>
              <div style={{ fontSize: 16, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>Follow us</div>
              <div style={{ display: "flex", gap: 20 }}>
                {[["LinkedIn", "https://linkedin.com/company/boonware"], ["Instagram", "https://instagram.com/boonware_agency"], ["GitHub", "https://github.com/boonware-agency"]].map(([name, href]) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#333", fontSize: 22, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#333")}
                  >{name}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div>
            <div style={{ fontSize: 18, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>Links</div>
            {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Our Work", "/projects"], ["Products", "/products"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "#333", fontSize: 24, fontWeight: 500, textDecoration: "none", marginBottom: 14, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#333")}
              >{l}</Link>
            ))}
          </div>

          {/* Right Section: More Resources */}
          <div>
            <div style={{ fontSize: 18, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>More Resources</div>
            {[["Blogs", "/blogs"], ["Terms & Conditions", "/terms-and-conditions"], ["Privacy Policy", "/privacy-policy"], ["Refund Policy", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "#333", fontSize: 24, fontWeight: 500, textDecoration: "none", marginBottom: 14, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#333")}
              >{l}</Link>
            ))}
          </div>
        </div>

        {/* Location Divider */}
        <div style={{ borderTop: "1px solid rgba(0,137,123,0.2)", paddingTop: 20, marginBottom: 16 }}>
          <p style={{ fontSize: 16, color: "#71717a", margin: 0, fontWeight: 500 }}>
            Location: India | UAE | US | UK | Saudi Arabia | Australia | Canada | Kuwait | Oman
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 16, color: "#71717a", fontWeight: 500 }}>© 2025 BoonWare. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Privacy Policy", "/privacy-policy"], ["Terms", "/terms-and-conditions"], ["Refund", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ fontSize: 16, color: "#71717a", textDecoration: "none", fontWeight: 500 }}>{l}</Link>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 40px 0 !important; }
          }
        `}</style>
      </div>
    </footer>
  );
}
export default Footer;

