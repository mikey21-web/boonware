"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ background: "#e8f5f0", fontFamily: "'Inter', sans-serif", borderTop: "1px solid rgba(0,137,123,0.2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(28px, 3.5vw, 48px) clamp(20px, 3.5vw, 48px)" }}>

        {/* Top 3-column layout: Left corner (BoonWare), Centre (Links), Right corner (More Resources) */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0 24px",
          marginBottom: 32,
          alignItems: "flex-start",
        }}>

          {/* Left Corner: BoonWare branding, subscribe, socials */}
          <div style={{ justifySelf: "start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Image src="/assets/icon_logo-CTOVYnVL.png" alt="BoonWare" width={32} height={32} style={{ display: "block" }} />
              <span style={{ fontSize: 24, fontWeight: 800, color: "#17171c", letterSpacing: "-0.03em" }}>BoonWare</span>
            </div>

            <form action="mailto:info@boonware.in" method="post" style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <input
                type="email" name="email" required placeholder="Enter your email address"
                style={{
                  flex: 1, minWidth: 160, height: 38, padding: "0 14px",
                  background: "#ffffff", border: "1px solid #c4c4c4",
                  borderRadius: 9999, color: "#17171c", fontSize: 14,
                  fontFamily: "inherit", outline: "none", transition: "border-color 0.2s",
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "#00897B"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#c4c4c4"; }}
              />
              <button type="submit" style={{
                height: 38, padding: "0 18px", borderRadius: 9999,
                background: "#00897B", color: "#fff", border: "none",
                fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "inherit", transition: "background 0.2s", flexShrink: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#16a34a"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#00897B"; }}
              >Subscribe</button>
            </form>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>Contact Us</div>
              <a href="mailto:info@boonware.in" style={{ fontSize: 15, color: "#17171c", fontWeight: 600, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#17171c")}
              >info@boonware.in</a>
            </div>

            <div>
              <div style={{ fontSize: 13, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Follow us</div>
              <div style={{ display: "flex", gap: 16 }}>
                {[["LinkedIn", "https://linkedin.com/company/boonware"], ["Instagram", "https://instagram.com/boonware_agency"], ["GitHub", "https://github.com/boonware-agency"]].map(([name, href]) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#333", fontSize: 15, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#333")}
                  >{name}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Centre: Links */}
          <div style={{ justifySelf: "center" }}>
            <div style={{ fontSize: 14, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Links</div>
            {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Our Work", "/projects"], ["Products", "/products"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "#333", fontSize: 15, fontWeight: 500, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#333")}
              >{l}</Link>
            ))}
          </div>

          {/* Right Corner: More Resources */}
          <div style={{ justifySelf: "end" }}>
            <div style={{ fontSize: 14, color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>More Resources</div>
            {[["Blogs", "/blogs"], ["Terms & Conditions", "/terms-and-conditions"], ["Privacy Policy", "/privacy-policy"], ["Refund Policy", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "#333", fontSize: 15, fontWeight: 500, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00897B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#333")}
              >{l}</Link>
            ))}
          </div>
        </div>

        {/* Location Divider */}
        <div style={{ borderTop: "1px solid rgba(0,137,123,0.2)", paddingTop: 16, marginBottom: 14 }}>
          <p style={{ fontSize: 13, color: "#71717a", margin: 0, fontWeight: 500 }}>
            Location: India | UAE | US | UK | Saudi Arabia | Australia | Canada | Kuwait | Oman
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "#71717a", fontWeight: 500 }}>© 2025 BoonWare. All rights reserved.</span>
          <div style={{ display: "flex", gap: 18 }}>
            {[["Privacy Policy", "/privacy-policy"], ["Terms", "/terms-and-conditions"], ["Refund", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ fontSize: 13, color: "#71717a", textDecoration: "none", fontWeight: 500 }}>{l}</Link>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 32px 0 !important; }
          }
        `}</style>
      </div>
    </footer>
  );
}
export default Footer;


