"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FAQ_SECTIONS = [
  {
    category: "Website Development",
    items: [
      {
        q: "How long does it take to design and develop a custom website?",
        a: "A typical custom website project takes between 2 to 6 weeks, depending on complexity, page count, and custom functionalities. Simple high-converting landing pages take 1–2 weeks, while complex dynamic web apps and multi-tier e-commerce platforms take 4–8 weeks.",
      },
      {
        q: "Will I own the source code and design assets after launch?",
        a: "Yes, 100%. Upon project completion and final deployment, we hand over full source code ownership, design files (Figma), database access, and intellectual property rights with zero recurring lock-in fees.",
      },
      {
        q: "Are your websites mobile-responsive and optimized for search engines (SEO)?",
        a: "Every website we engineer is built mobile-first, passes Google Core Web Vitals with sub-2-second load speeds, and includes clean on-page technical SEO, structured schema markup, and responsive cross-browser rendering.",
      },
      {
        q: "What tech stack does BoonWare specialize in for web development?",
        a: "We build using modern, scalable frameworks tailored to your needs — including React, Next.js, Vue, Node.js, Python/Django, WordPress, Webflow, Shopify, and headless CMS architectures paired with PostgreSQL, MongoDB, or MySQL.",
      },
      {
        q: "Do you provide post-launch maintenance, security, and updates?",
        a: "Yes. We provide comprehensive post-launch support packages covering security patches, regular server backups, uptime monitoring, performance tuning, and continuous feature additions.",
      },
    ],
  },
  {
    category: "App Development",
    items: [
      {
        q: "What is the typical project timeline to build an app from scratch?",
        a: "A Minimum Viable Product (MVP) or core utility app typically takes 4 to 8 weeks. Complex, multi-sided platforms (such as on-demand marketplaces, fintech apps, or real-time social networks with custom backend logic) generally take 8 to 16 weeks. Every project starts with a detailed milestone roadmap before development begins.",
      },
      {
        q: "How are project pricing and billing milestones structured?",
        a: "We work on a fixed-scope, fixed-price model for defined projects, as well as dedicated sprint-based models for evolving products. Payments are divided across clear milestone deliverables: Kickoff & Architecture Discovery → UI/UX Design & Prototype Approval → Core Development (Alpha Build) → QA Testing & Beta Build → Final Deployment & Asset Handover.",
      },
      {
        q: "Do you sign a Non-Disclosure Agreement (NDA) before discussing project details?",
        a: "Yes, absolutely. We sign a mutual NDA before initial discovery calls to ensure your proprietary product ideas, business logic, and trade secrets remain 100% confidential and legally protected.",
      },
      {
        q: "How do we track progress and communicate during the build?",
        a: "You get direct access to your dedicated project manager and engineering team via a private Slack/WhatsApp channel, along with weekly live sprint demos and transparent task tracking on Jira/ClickUp. You can test live developmental builds directly on your phone throughout the process.",
      },
      {
        q: "What happens if we want to change or add features mid-project?",
        a: "We follow an agile development framework. If new requirements emerge, we assess the impact on timelines and budget, provide a transparent Change Request (CR) document, and either integrate it into the current sprint or schedule it for Phase 2/V2 release without derailing the launch schedule.",
      },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      {
        q: "What is the practical difference between standard automation and an autonomous AI agent?",
        a: "Standard automation (e.g., Zapier/Make) follows rigid 'if-this-then-that' rules for static data routing. An autonomous AI agent uses Large Language Models (LLMs) to reason, make contextual decisions, understand natural language, extract unstructured data, and execute multi-step workflows dynamically without human intervention.",
      },
      {
        q: "Is our proprietary business data secure when training custom AI models?",
        a: "Yes. We build enterprise-grade Retrieval-Augmented Generation (RAG) architectures with dedicated, private vector databases. Your company data, client conversations, and internal documents are never exposed to public AI training datasets or third-party leaks.",
      },
      {
        q: "Can your AI agents integrate directly into our CRM and existing tools?",
        a: "Yes. Our AI systems connect seamlessly with your existing tech stack — including WhatsApp, Slack, custom websites, HubSpot, Salesforce, Zoho, Google Workspace, ERPs, and custom SQL/NoSQL databases via webhooks and REST APIs.",
      },
      {
        q: "Can Voice AI agents handle incoming customer service phone calls naturally?",
        a: "Yes. Our Voice AI receptionists operate with sub-500ms conversational latency, understand accents and interruptions, look up live customer records, answer technical questions, and book/reschedule calendar appointments over live telephony systems.",
      },
      {
        q: "How quickly can a custom AI workflow or agent be deployed?",
        a: "A targeted AI agent (such as a 24/7 customer support bot or lead qualification agent) can be blueprinted, trained, tested, and deployed in production within 1 to 2 weeks. Complex multi-agent enterprise pipelines typically take 3 to 5 weeks.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e4e4e7" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 0", textAlign: "left", fontFamily: "inherit", gap: 16,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: "#17171c", lineHeight: 1.4 }}>{q}</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(45deg)" : "none" }}>
          <path d="M12 5v14M5 12h14" stroke="#00897B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 300 : 0, transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
        <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#17171c", padding: "clamp(120px,16vw,180px) clamp(20px,5vw,80px) clamp(60px,8vw,100px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#00897B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>FAQ</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 20px", maxWidth: 700 }}>
            Frequently Asked<br />
            <span style={{ color: "#00897B" }}>Questions</span>
          </h1>
          <p style={{ fontSize: "clamp(15px,1.6vw,18px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
            Everything you need to know before starting a project with BoonWare.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section style={{ padding: "clamp(60px,8vw,100px) clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {FAQ_SECTIONS.map(section => (
            <div key={section.category} style={{ marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
                <div style={{ width: 4, height: 28, background: "#00897B", borderRadius: 2, flexShrink: 0 }} />
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, color: "#17171c", letterSpacing: "-0.03em", margin: 0 }}>
                  {section.category}
                </h2>
              </div>
              <div style={{ borderTop: "1px solid #e4e4e7" }}>
                {section.items.map(item => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div style={{ background: "#f7f8f4", border: "1px solid #e4e4e7", borderRadius: 20, padding: "40px 36px", textAlign: "center", marginTop: 40 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 700, color: "#17171c", letterSpacing: "-0.03em", margin: "0 0 12px" }}>
              Still have questions?
            </h3>
            <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.7, margin: "0 0 24px" }}>
              Talk to us directly — we reply within a few hours.
            </p>
            <a href="https://wa.me/919076269629" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00897B", color: "#fff", borderRadius: 9999, padding: "13px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
