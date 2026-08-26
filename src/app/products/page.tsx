"use client";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "AI Calling Agent",
    tagline: "Human-sounding voice AI that qualifies leads, books appointments, and follows up — 24/7.",
    category: "AI & Automation",
    badge: "Live",
    href: "/ai-calling-agent",
    bullets: ["Outbound & inbound call handling", "Lead qualification & booking", "Multi-language (English, Hindi, Arabic)", "CRM & WhatsApp integration"],
  },
  {
    name: "WhatsApp Bot Builder",
    tagline: "No-code WhatsApp automation flows for lead capture, FAQ handling, and appointment booking.",
    category: "Automation",
    badge: "Coming Soon",
    href: "#",
    bullets: ["Drag-and-drop flow builder", "Instant auto-replies 24/7", "CRM sync after each conversation", "Multi-agent handoff support"],
  },
  {
    name: "BoonSEO",
    tagline: "AI-powered SEO audit and content planning tool built for growing businesses.",
    category: "Digital Marketing",
    badge: "Coming Soon",
    href: "#",
    bullets: ["Automated technical SEO audits", "Keyword gap & opportunity finder", "AI content brief generation", "Rank tracking dashboard"],
  },
  {
    name: "BoonAnalytics",
    tagline: "Unified analytics dashboard pulling data from Google Ads, Meta, and your website in one view.",
    category: "Analytics",
    badge: "Coming Soon",
    href: "#",
    bullets: ["Cross-channel performance view", "ROI & ROAS attribution", "Automated weekly reports", "WhatsApp delivery of insights"],
  },
];

export default function ProductsPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#17171c", padding: "clamp(120px,16vw,180px) clamp(20px,5vw,80px) clamp(60px,8vw,100px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#00897B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>Products</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 20px", maxWidth: 760 }}>
            Tools built by BoonWare.<br />
            <span style={{ color: "#00897B" }}>Ready to deploy.</span>
          </h1>
          <p style={{ fontSize: "clamp(15px,1.6vw,18px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
            Standalone products and platforms we've built in-house — available for your business right now.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ padding: "clamp(60px,8vw,100px) clamp(20px,5vw,80px)", background: "#f7f8f4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 24 }}>
          {PRODUCTS.map(p => (
            <div key={p.name} style={{ background: "#ffffff", border: "1px solid #e4e4e7", borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 0, transition: "box-shadow 0.25s, transform 0.25s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#00897B", textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.category}</span>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 9999,
                  background: p.badge === "Live" ? "rgba(0,137,123,0.1)" : "rgba(0,0,0,0.06)",
                  color: p.badge === "Live" ? "#00897B" : "#71717a",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>{p.badge}</span>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#17171c", letterSpacing: "-0.03em", margin: "0 0 10px" }}>{p.name}</h2>
              <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.7, margin: "0 0 24px", flex: 1 }}>{p.tagline}</p>
              <ul style={{ margin: "0 0 28px", padding: 0, listStyle: "none" }}>
                {p.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#17171c", lineHeight: 1.55, marginBottom: 6 }}>
                    <span style={{ color: "#00897B", flexShrink: 0 }}>→</span>{b}
                  </li>
                ))}
              </ul>
              {p.href !== "#" ? (
                <Link href={p.href} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#00897B", color: "#fff", borderRadius: 9999, padding: "12px 24px", fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >Learn More →</Link>
              ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f4f5", color: "#71717a", borderRadius: 9999, padding: "12px 24px", fontSize: 14, fontWeight: 600 }}>Coming Soon</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(60px,8vw,100px) clamp(20px,5vw,80px)", background: "#ffffff", borderTop: "1px solid #e4e4e7", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, color: "#17171c", letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 16px" }}>
            Want a custom product built?
          </h2>
          <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.7, margin: "0 0 32px" }}>
            We build internal tools, SaaS platforms, and custom software for businesses. Tell us what you need.
          </p>
          <a href="https://wa.me/919076269629" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00897B", color: "#fff", borderRadius: 9999, padding: "14px 32px", fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          >Talk to us on WhatsApp →</a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
