"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const POSTS = [
  {
    title: "How to Choose the Best SEO Agency in Dubai?",
    date: "August 10, 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    href: "/blogs",
  },
  {
    title: "Should You Use a Website Builder or Hire a Developer",
    date: "August 4, 2026",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    href: "/blogs",
  },
];

export function BlogsInsights() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ref.current?.querySelectorAll(".bi-card") ?? [],
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    };
    run();
  }, []);

  return (
    <section ref={ref} style={{ background: "#f0f5f1", borderBottom: "1px solid #e4e4e7", padding: "88px 0", fontFamily: "'Inter', sans-serif" }}>
      <div className="bi-wrap" style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto", display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: 48, alignItems: "center" }}>
        {/* Left: heading */}
        <div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.1, color: "#17171c", margin: 0 }}>
            Blogs &amp; <span style={{ color: "#00897B" }}>Insights</span>
          </h2>
          <Link href="/blogs" style={{
            display: "inline-flex", alignItems: "center", gap: 6, marginTop: 24,
            background: "#00897B", color: "#fff", borderRadius: 8,
            padding: "12px 28px", fontSize: 14, fontWeight: 600, textDecoration: "none",
            transition: "background 0.22s, transform 0.22s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#17171c"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#00897B"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Read More
          </Link>
        </div>

        {/* Right: cards */}
        <div className="bi-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {POSTS.map(p => (
            <Link
              key={p.title}
              href={p.href}
              className="bi-card"
              style={{
                position: "relative", display: "block", borderRadius: 10, overflow: "hidden",
                aspectRatio: "4/3", textDecoration: "none", opacity: 0,
                backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 18px 40px rgba(0,0,0,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }} />
              <div style={{ position: "absolute", left: 20, right: 20, bottom: 18 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.35, margin: 0 }}>
                  {p.title}
                </h3>
                <div style={{ width: 44, height: 2, background: "#00897B", margin: "12px 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{p.date}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .bi-wrap { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .bi-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default BlogsInsights;
