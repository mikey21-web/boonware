"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#0b1f1a", fontFamily: "'Inter', sans-serif", borderTop: "1px solid rgba(0,137,123,0.2)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(48px,8vw,80px) clamp(24px,5vw,80px)" }}>
        {/* Top: logo + tagline */}
        <div style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#16a34a", letterSpacing: "-0.03em", marginBottom: 12 }}>BoonWare</div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", margin: 0, maxWidth: 340, lineHeight: 1.6 }}>
              Smarter Technology. Stronger Operation. Faster Growth.
            </p>

            {/* Contact + subscribe */}
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Contact us at</div>
              <a href="mailto:info@boonware.in" style={{ fontSize: 16, color: "#ffffff", textDecoration: "none", fontWeight: 500 }}>info@boonware.in</a>

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
            </div>
          </div>
          <a href="/contact" style={{
            textDecoration: "none", background: "#ffffff", color: "#010101",
            borderRadius: 9999, padding: "0 28px", height: 48,
            display: "inline-flex", alignItems: "center", fontSize: 14, fontWeight: 600,
            flexShrink: 0,
          }}>
            Start a project
          </a>
        </div>

        {/* Links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "32px 48px", marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Pages</div>
            {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Our Work", "/projects"], ["Products", "/bundles"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 15, textDecoration: "none", marginBottom: 12, transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Resources</div>
            {[["Blogs", "/blogs"], ["Terms & Conditions", "/terms-and-conditions"], ["Privacy Policy", "/privacy-policy"], ["Refund Policy", "/refund-policy"]].map(([l, href]) => (
              <Link key={l} href={href} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10, transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
            <a href="mailto:info@boonware.in" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>info@boonware.in</a>
            <a href="https://wa.me/919076269629" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>+91 90762 69629</a>
            <a href="https://wa.me/918291393581" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none" }}>+91 82913 93581</a>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Social</div>
            <a href="https://linkedin.com/company/boonware" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>LinkedIn</a>
            <a href="https://instagram.com/boonware_agency" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>Instagram</a>
            <a href="https://github.com/boonware-agency" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none" }}>GitHub</a>
          </div>
        </div>

        {/* Locations */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, marginBottom: 24 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0, lineHeight: 1.8 }}>
            India · UAE · US · UK · Saudi Arabia · Australia · Canada · Kuwait · Oman
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
