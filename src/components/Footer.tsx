"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#050505", fontFamily: "'Inter', sans-serif", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(48px,8vw,80px) clamp(24px,5vw,80px)" }}>
        {/* Top: logo + tagline */}
        <div style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: 12 }}>BoonWare</div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", margin: 0, maxWidth: 340, lineHeight: 1.6 }}>
              Technology that pays for itself. Fixed price, source code yours.
            </p>
          </div>
          <a href="https://wa.me/919390739090" style={{
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
            {["Services","Projects","Contact","About"].map(l => (
              <Link key={l} href={`/${l.toLowerCase()}`} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 15, textDecoration: "none", marginBottom: 12, transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
            <a href="mailto:team@boonware.in" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>team@boonware.in</a>
            <a href="https://wa.me/919390739090" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>+91 93907 39090</a>
            <a href="https://wa.me/918291393581" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none" }}>+91 82913 93581</a>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Location</div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
              Mumbai, India<br />
              Dubai · UK · US · Australia
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Social</div>
            <a href="https://linkedin.com/company/boonware" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>LinkedIn</a>
            <a href="https://instagram.com/boonware_agency" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>Instagram</a>
            <a href="https://github.com/boonware-agency" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none" }}>GitHub</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>© 2025 BoonWare. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy-policy" style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
