"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const POSTS = [
  {
    title: "How to Choose the Best SEO Agency in Dubai?",
    excerpt: "What to look for, what to avoid, and the questions that separate a real SEO partner from an agency selling reports.",
    date: "August 10, 2026",
    tag: "SEO",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  },
  {
    title: "Should You Use a Website Builder or Hire a Developer?",
    excerpt: "Wix and Squarespace get you live in a weekend. Here is exactly where they stop working — and what it costs to fix later.",
    date: "August 4, 2026",
    tag: "Web Development",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
  },
  {
    title: "AI Agents vs Automation: What Your Business Actually Needs",
    excerpt: "Zapier follows rules. An AI agent makes decisions. Knowing which one your workflow needs saves months of wasted build time.",
    date: "July 28, 2026",
    tag: "AI & Automation",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
  },
  {
    title: "Why Your Landing Page Isn't Converting (And How to Fix It)",
    excerpt: "Six structural mistakes we find on almost every underperforming page, ranked by how much revenue they quietly cost.",
    date: "July 19, 2026",
    tag: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    title: "React Native or Native? Choosing Your Mobile Stack in 2026",
    excerpt: "One codebase halves your cost — until it doesn't. A practical breakdown of when cross-platform genuinely wins.",
    date: "July 11, 2026",
    tag: "App Development",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
  },
  {
    title: "The Real Cost of a Rebrand (Beyond the Logo)",
    excerpt: "A new logo is 10% of the work. Here is the full checklist most businesses discover halfway through the project.",
    date: "July 2, 2026",
    tag: "Graphic Design",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
  },
];

export default function BlogsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const cards = Array.from(gridRef.current?.querySelectorAll(".blog-card") ?? []);
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.55, delay: i * 0.06, ease: "power3.out" }
        );
      });
    };
    run();
  }, []);

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ── HEADER ── */}
      <div style={{
        padding: "clamp(96px, 16vw, 140px) 24px 64px",
        textAlign: "center",
        borderBottom: "1px solid #e4e4e7",
        background: "#f0f5f1",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "#ffffff", border: "1px solid #e4e4e7",
          borderRadius: 9999, padding: "5px 13px",
          fontSize: 12, fontWeight: 600, color: "#71717a",
          marginBottom: 28, fontFamily: "ui-monospace, monospace",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00897B", display: "inline-block" }} />
          Insights from the team
        </div>

        <h1 style={{
          fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 700,
          lineHeight: 1.04, letterSpacing: "-2.2px", color: "#17171c", margin: 0,
        }}>
          Blogs &amp; <span style={{ color: "#00897B" }}>Insights</span>
        </h1>
        <p style={{ fontSize: 17, color: "#71717a", maxWidth: 540, margin: "18px auto 0", lineHeight: 1.65 }}>
          Practical writing on web, apps, AI automation, design, and growth — from the people who build them.
        </p>
      </div>

      {/* ── GRID ── */}
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "56px auto 120px" }}>
        <div ref={gridRef} className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {POSTS.map(p => (
            <article
              key={p.title}
              className="blog-card"
              style={{
                border: "1px solid #e4e4e7", borderRadius: 10, overflow: "hidden",
                display: "flex", flexDirection: "column", background: "#fff",
                opacity: 0, cursor: "pointer",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s, border-color 0.25s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "#00897B";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
              }}
            >
              <div style={{
                width: "100%", aspectRatio: "16/10",
                backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center",
              }} />
              <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {p.tag}
                </span>
                <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", lineHeight: 1.3, margin: "10px 0 0" }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: 13.5, color: "#71717a", marginTop: 10, lineHeight: 1.68, flex: 1 }}>
                  {p.excerpt}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #f4f4f5" }}>
                  <span style={{ fontSize: 12, color: "#a1a1aa" }}>{p.date}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: "#00897B" }}>Read More →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />

      <style>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
