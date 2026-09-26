"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Project = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  cat: "websites" | "ai" | "graphics" | "mobile";
  techs: string[];
  demo?: string;
};

const PROJECTS: Project[] = [
  // ── WEBSITES ──
  { img: "/assets/pokhrajjewellers-Dlp82dqa.png", alt: "Pokhraj Jewellers", title: "Pokhraj Jewellers", desc: "A premium Shopify jewellery store designed for luxury branding, seamless shopping experience, and high conversion rates.", cat: "websites", techs: ["Shopify", "Liquid", "HTML/CSS/JS"], demo: "https://pokhrajjewellers.com/" },
  { img: "/assets/thumbnailAlhayat-CrkJDk6X.jpeg", alt: "Al Hayat Constructions", title: "Al Hayat Constructions", desc: "Corporate website for a growing construction company with improved inquiries and SEO.", cat: "websites", techs: ["React.js", "Node.js", "Firebase", "Netlify"], demo: "https://construction-site-indol.vercel.app/" },
  { img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", alt: "FirstLight Events", title: "FirstLight Events", desc: "Vibrant event website that brought in qualified leads and reflected their unique brand identity.", cat: "websites", techs: ["React.js", "Tailwind CSS", "EmailJS"], demo: "https://event-website-zeta.vercel.app/" },
  { img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80", alt: "Gilded Plate Restaurant", title: "Gilded Plate Restaurant", desc: "Responsive, modern restaurant website template with booking and food-first UI.", cat: "websites", techs: ["React.js", "Firebase", "Framer Motion"], demo: "https://resturant-website-coral.vercel.app/" },
  { img: "/assets/bombay_design_banner_og-CxLx1u4Y.png", alt: "Bombay Design", title: "Bombay Design", desc: "A premium, elegant, and interactive custom website designed for Bombay Design Studio.", cat: "websites", techs: ["React.js", "Framer Motion", "Netlify"] },
  { img: "/assets/sleepyowl-B4qif9Ju.png", alt: "Sleepy Owl Coffee", title: "Sleepy Owl Coffee", desc: "High-performance WordPress content platform optimized for storytelling, SEO, and smooth publishing.", cat: "websites", techs: ["WordPress", "Elementor", "Yoast SEO"] },
  { img: "/assets/funZilla-BFcFiqqw.png", alt: "Funzilla Party Arena", title: "Funzilla Party Arena", desc: "A vibrant booking-enabled WordPress site for an indoor entertainment brand with WooCommerce integration.", cat: "websites", techs: ["WordPress", "WooCommerce", "Elementor"] },
  { img: "/assets/jalanjalan_shopify-a6FbaDYS.png", alt: "Jalan Jalan Yuk!", title: "Jalan Jalan Yuk!", desc: "Clean, SEO-optimized WordPress site for Indonesian travel packages, built for speed and multilingual support.", cat: "websites", techs: ["WordPress", "Elementor", "ACF Pro"] },
  { img: "/assets/deviant_ink-iCuO2bDw.png", alt: "Deviant Ink Tattoo Studio", title: "Deviant Ink Tattoo Studio", desc: "An edgy, dark-themed WordPress site featuring tattoo portfolios, appointment bookings, and an immersive UI.", cat: "websites", techs: ["WordPress", "Elementor", "WPForms"] },
  { img: "/assets/caos_clothing-BEU-SZnE.png", alt: "Caos Clothing", title: "Caos Clothing", desc: "A premium fashion Shopify store designed for minimalism, fast checkout, and strong brand presence.", cat: "websites", techs: ["Shopify", "Liquid", "CSS/JS"] },
  { img: "/assets/urbethh-dZuu2hDe.png", alt: "Urbethh", title: "Urbethh", desc: "Luxury lifestyle Shopify website with a clean design, optimized collections, and high retention UX.", cat: "websites", techs: ["Shopify", "Liquid", "Shopify Analytics"] },
  { img: "/assets/three_monkeys-BgnVp2Wm.png", alt: "Shop Three Monkeys", title: "Shop Three Monkeys", desc: "A colorful, youthful Shopify redesign for a fashion brand targeting Gen-Z shoppers with dynamic layouts.", cat: "websites", techs: ["Shopify", "Liquid", "JS Animations"] },
  { img: "/assets/vision_book_publisher-DrS2YoT7.png", alt: "Vision Books Publisher", title: "Vision Books Publisher", desc: "A clean and functional Shopify store for online book sales with structured categories and optimized pages.", cat: "websites", techs: ["Shopify", "Liquid", "Shopify Admin API"] },
  { img: "/assets/sg_college-ycO7Bemb.png", alt: "SG College of Education", title: "SG College of Education", desc: "Institutional WordPress site built with Elementor and ACF to manage notices, admissions, and departments.", cat: "websites", techs: ["WordPress", "Elementor", "ACF"] },
  { img: "/assets/lo_foods-CPUAvu8t.png", alt: "LO Foods", title: "LO Foods", desc: "A clean, health-focused Shopify website for nutritious food products, optimized for conversions and subscriptions.", cat: "websites", techs: ["Shopify", "Liquid", "HTML/CSS/JS"] },
  { img: "/assets/copper_clothing-B9aQ-OHB.png", alt: "Copper Clothing", title: "Copper Clothing", desc: "Premium Shopify store for a UK-based apparel brand with SEO optimization, analytics, and high conversion UX.", cat: "websites", techs: ["Shopify", "Liquid", "GA4"] },
  { img: "/assets/quantraz-D--QeJDL.png", alt: "Quantraz Electronics", title: "Quantraz Electronics", desc: "Multi-region Shopify store for electronics with fast checkout, modern design, and internationalization setup.", cat: "websites", techs: ["Shopify", "Liquid", "Google Analytics"] },
  { img: "/assets/abrazo-BQRcFAYM.png", alt: "Abrazo", title: "Abrazo", desc: "A modern, fashion-forward Shopify store with bold visuals and seamless mobile checkout.", cat: "websites", techs: ["Shopify", "Liquid", "CSS/JS"] },
  { img: "/assets/rashmishree_creation-BEc4wvo0.png", alt: "Rashmi Shree Creation", title: "Rashmi Shree Creation", desc: "An ethnic fashion Shopify store featuring dynamic product listings and real-time inventory synchronization.", cat: "websites", techs: ["Shopify", "Liquid", "Shopify Admin API"] },
  { img: "/assets/querated-Bruz9LV-.png", alt: "Querated", title: "Querated", desc: "A premium home décor Shopify website built with SEO best practices, smooth UX, and lifestyle branding focus.", cat: "websites", techs: ["Shopify", "Liquid", "SEO Tools"] },

  // ── AI & AUTOMATION ──
  { img: "https://img.youtube.com/vi/Qi4V7wDKCr4/maxresdefault.jpg", alt: "AI Calling Agent", title: "AI Calling Agent", desc: "An AI-powered voice assistant for customer recovery, follow-ups, and client communication — fully autonomous.", cat: "ai", techs: ["Python", "RASA", "Twilio"], demo: "https://youtube.com/shorts/Qi4V7wDKCr4?feature=share" },
  { img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80", alt: "AI Calling Assistant for Clinics", title: "AI Calling Assistant for Clinics", desc: "An AI-powered voice agent capable of handling real-time client interactions and follow-ups naturally.", cat: "ai", techs: ["Python", "OpenAI", "Twilio"] },
  { img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80", alt: "Customer Chatbot", title: "Customer Chatbot", desc: "Custom-trained chatbot for e-commerce platforms to handle FAQs and lead capture automatically.", cat: "ai", techs: ["Node.js", "Dialogflow", "React.js"] },

  // ── GRAPHICS & BRANDING ──
  { img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4bd94f219843049.67b88e500e396.png", alt: "Jewellery Brand Identity", title: "Jewellery Brand Identity & Packaging", desc: "A luxury jewellery brand identity blending elegance and minimalism through fine typography and refined packaging.", cat: "graphics", techs: ["Illustrator", "Photoshop", "Figma"] },
  { img: "/assets/drinking_branding-CzKQPBLP.jpg", alt: "Luxury Beverage Branding", title: "Luxury Beverage Branding & Packaging", desc: "Premium branding for a luxury vodka brand — minimalism, elegance, and global appeal with metallic finishes.", cat: "graphics", techs: ["Illustrator", "Photoshop", "Figma"] },
  { img: "/assets/motion_graphics-D995Ikkq.png", alt: "DonutHaven Motion Graphics", title: "DonutHaven Motion Graphics", desc: "Kinetic typography and colorful animations bringing DonutHaven's playful brand identity to life.", cat: "graphics", techs: ["After Effects", "Illustrator", "Premiere Pro"] },
  { img: "/assets/logo_design-K2_Xl-pQ.jpg", alt: "Oakfield Logo Design", title: "Oakfield Logo Design & Branding", desc: "Logo and identity for Oakfield — natural tones, minimalist marks, and modern typography.", cat: "graphics", techs: ["Illustrator", "Figma", "Photoshop"] },
  { img: "/assets/Poster_design_1-DK-twxiR.jpeg", alt: "Flourish Poster Series", title: "Flourish Poster Series", desc: "A visually expressive poster collection exploring identity, art, and motivation through mixed-media design.", cat: "graphics", techs: ["Photoshop", "Figma", "Canva"] },
  { img: "/assets/Poster_design_2-dupTx-zC.jpeg", alt: "Sanctuary Poster Art", title: "Sanctuary Poster Art", desc: "Conceptual art poster representing tranquility, creativity, and introspection in surreal space-inspired visuals.", cat: "graphics", techs: ["Photoshop", "Illustrator"] },
  { img: "/assets/Poster_design_3-BQIq4xpm.jpeg", alt: "Motivational Posters", title: "Motivational Posters Collection", desc: "Bold motivational poster campaign combining typography, photography, and powerful emotional themes.", cat: "graphics", techs: ["Photoshop", "Canva", "Figma"] },
  { img: "/assets/Poster_design_4-DPjUVY_F.jpeg", alt: "Go The Extra Mile", title: "Go The Extra Mile Poster", desc: "Motivational poster emphasizing effort and growth through bold typography and impactful visuals.", cat: "graphics", techs: ["Photoshop", "Illustrator"] },
  { img: "/assets/Poster_design_5-CU7bDr6-.jpeg", alt: "Stay Strong Poster", title: "Stay Strong Poster", desc: "Designed to inspire perseverance using expressive text and warm tones.", cat: "graphics", techs: ["Photoshop", "Figma"] },
  { img: "/assets/Poster_design_6-B9oFaQVm.jpeg", alt: "Look Into The Future", title: "Look Into The Future Poster", desc: "Futuristic poster blending color contrast and neon tones to symbolize innovation and ambition.", cat: "graphics", techs: ["Photoshop", "Illustrator"] },
  { img: "/assets/Poster_design_7-C1lAlKoW.jpeg", alt: "Speed & Direction Poster", title: "Speed & Direction Poster", desc: "Motion blur and perspective text expressing speed, control, and clarity.", cat: "graphics", techs: ["Photoshop", "Figma"] },
  { img: "/assets/Poster_design_8-Cj3br1MP.jpeg", alt: "Authentic You Poster", title: "Authentic You Poster", desc: "Minimalist composition celebrating individuality through strong contrast and type distortion.", cat: "graphics", techs: ["Photoshop", "Figma"] },
  { img: "/assets/social_media_post_advert-BEs-XCif.jpg", alt: "Social Media Ad Campaign", title: "Social Media Ad Campaign", desc: "Creative ad design series for online engagement — bold colors with clean composition.", cat: "graphics", techs: ["Canva", "Figma", "Illustrator"] },

  // ── MOBILE APPS ──
  { img: "/assets/DocPlixForDentist-C0TKbwSW.png", alt: "RxDental by DocPlix", title: "RxDental by DocPlix", desc: "Smart dental practice app for managing appointments, prescriptions, and patient records seamlessly.", cat: "mobile", techs: ["Flutter", "Firebase", "Node.js"] },
  { img: "/assets/DocPlixRX-2AbwLUUx.png", alt: "DocPlix GP App", title: "DocPlix GP App", desc: "Digital companion for general practitioners to manage patients, prescriptions, and analytics.", cat: "mobile", techs: ["Flutter", "Firebase", "Node.js"] },
  { img: "/assets/plixcast-Ck1f1ZxH.png", alt: "PlixCast Patient App", title: "PlixCast — Patient App", desc: "Patient-focused app for viewing prescriptions, booking consultations, and doctor chat.", cat: "mobile", techs: ["Flutter", "Firebase Messaging", "Node.js"] },
  { img: "/assets/DocPlix-BXV8qokV.png", alt: "SVBP DocPlix Enterprise", title: "SVBP — DocPlix Enterprise", desc: "Enterprise-grade mobile platform for SVBP Hospital to manage doctors, departments, and appointments.", cat: "mobile", techs: ["Flutter", "Firebase", "Node.js"] },
];

const FILTERS = [
  { id: "all",      label: "All" },
  { id: "websites", label: "Website" },
  { id: "mobile",   label: "Mobile App" },
] as const;

const CAT_LABELS: Record<string, string> = {
  websites: "Website",
  ai: "AI / Automation",
  graphics: "Design",
  mobile: "Mobile App",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [modal, setModal] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default;
      const cards = Array.from(gridRef.current?.querySelectorAll(".proj-card") ?? []);
      // Alternating y:40 and y:60 for visual rhythm
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: i % 2 === 0 ? 40 : 60 },
          { opacity: 1, y: 0, duration: 0.55, delay: i * 0.04, ease: "power3.out" }
        );
      });
    };
    run();
  }, [filter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <div style={{
        padding: "clamp(96px, 16vw, 140px) 24px 64px",
        textAlign: "center",
        borderBottom: "1px solid #e4e4e7",
        background: "#ffffff",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "#f4f4f5", border: "1px solid #e4e4e7",
          borderRadius: 9999, padding: "5px 13px",
          fontSize: 12, fontWeight: 600, color: "#71717a",
          marginBottom: 28, fontFamily: "ui-monospace, monospace",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#00897B",
            display: "inline-block", animation: "blink 2s ease-in-out infinite",
          }} />
          265+ projects delivered
        </div>

        <h1 style={{
          fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 700,
          lineHeight: 1.02, letterSpacing: "-2.2px", color: "#17171c",
          margin: 0,
        }}>
          Our work speaks{" "}
          <span style={{ color: "#00897B" }}>for itself.</span>
        </h1>
        <p style={{
          fontSize: 17, color: "#71717a",
          maxWidth: 520, margin: "18px auto 0", lineHeight: 1.63,
        }}>
          Websites, AI systems, mobile apps, automation pipelines, and brand identities — built for businesses across India and beyond.
        </p>
      </div>

      {/* ── GRID ── */}
      <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "48px auto 120px" }}>
        <div ref={gridRef} className="bw-proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {visible.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="proj-card"
              onClick={() => setModal(p)}
              style={{
                background: "#ffffff",
                border: "1px solid #e4e4e7",
                overflow: "hidden", cursor: "pointer",
                display: "flex", flexDirection: "column",
                opacity: 0,
                willChange: "transform",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.25s, box-shadow 0.35s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.borderColor = "#17171c";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ width: "100%", aspectRatio: "16/10", overflow: "hidden", position: "relative", background: "#f4f4f5" }}>
                <Image
                  src={p.img} alt={p.alt} fill
                  style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
                  unoptimized
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                />
              </div>
              <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "1.1px", textTransform: "uppercase", marginBottom: 8 }}>
                  {CAT_LABELS[p.cat]}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.4px", color: "#17171c", lineHeight: 1.2, margin: 0 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13, color: "#71717a", marginTop: 6, lineHeight: 1.6, flex: 1 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 12 }}>
                  {p.techs.map(t => (
                    <span key={t} style={{ fontSize: 11, fontWeight: 500, border: "1px solid #e4e4e7", padding: "3px 9px", color: "#71717a" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 12, fontSize: 12, fontWeight: 600, color: "#00897B" }}>
                  {p.demo ? "View live demo →" : "View project →"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{
        background: "#17171c", color: "#fff",
        padding: "80px 24px", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1px", margin: 0 }}>
          Your project next?
        </h2>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", marginTop: 24,
          padding: "14px 32px", background: "#00897B", color: "#fff",
          borderRadius: 9999, fontSize: 15, fontWeight: 600, textDecoration: "none",
          transition: "transform 0.2s, background 0.2s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
        >
          Start a project →
        </Link>
      </div>

      {/* ── MODAL ── */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 500,
            background: "rgba(0,0,0,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, backdropFilter: "blur(8px)",
            animation: "fade-in 0.25s ease",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#ffffff",
              border: "1px solid #e4e4e7",
              width: "min(720px, 100%)",
              maxHeight: "90vh", overflowY: "auto",
              position: "relative",
              animation: "slide-up 0.35s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
            }}
          >
            <button
              onClick={() => setModal(null)}
              style={{
                position: "absolute", top: 16, right: 16,
                width: 36, height: 36, borderRadius: "50%",
                background: "#f4f4f5", color: "#71717a",
                border: "none", fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e4e4e7"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f4f4f5"; }}
            >✕</button>

            <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", position: "relative", background: "#f4f4f5" }}>
              <Image src={modal.img} alt={modal.alt} fill style={{ objectFit: "cover" }} unoptimized />
            </div>

            <div style={{ padding: 32 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#00897B", letterSpacing: "1.1px", textTransform: "uppercase", marginBottom: 10 }}>
                {CAT_LABELS[modal.cat]}
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, letterSpacing: "-0.6px", color: "#17171c", margin: 0 }}>
                {modal.title}
              </h2>
              <p style={{ color: "#71717a", fontSize: 15, lineHeight: 1.7, marginTop: 14 }}>
                {modal.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
                {modal.techs.map(t => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 500, border: "1px solid #e4e4e7", padding: "5px 12px", color: "#71717a" }}>
                    {t}
                  </span>
                ))}
              </div>
              {modal.demo ? (
                <Link href={modal.demo} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24,
                  padding: "13px 22px", background: "#00897B", color: "#fff",
                  borderRadius: 9999, fontSize: 14, fontWeight: 600, textDecoration: "none",
                  transition: "background 0.2s, transform 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#d05528"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#00897B"; }}
                >
                  View Live Demo →
                </Link>
              ) : (
                <div style={{ display: "inline-flex", alignItems: "center", marginTop: 24, padding: "13px 22px", background: "#f4f4f5", color: "#71717a", borderRadius: 9999, fontSize: 14, fontWeight: 500 }}>
                  Demo available on request
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes fade-in { from{opacity:0} to{opacity:1} }
        @keyframes slide-up { from{transform:translateY(28px) scale(0.97)} to{transform:translateY(0) scale(1)} }
        @media(max-width:850px){ .proj-grid-inner{grid-template-columns:1fr 1fr!important} }
        @media(max-width:560px){ .proj-grid-inner{grid-template-columns:1fr!important} }
      `}</style>
    </div>
  );
}
