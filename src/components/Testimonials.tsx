"use client";
import { useEffect, useState } from "react";

// Temporary sample slides are explicitly labeled until client text is supplied.
const QUOTES: { text: string; author: string; role: string; source?: string }[] = [{
  text: "The BoonWare team brought clarity, creativity, and technical excellence to the table.",
  author: "Feroz",
  role: "Founder, Bombay Design",
  source: "https://boonware.in/",
}, {
  text: "We needed a website our team could update without calling a developer every time. The handover was straightforward, and we can now handle the everyday changes ourselves.",
  author: "Sample review 1",
  role: "Website development",
}, {
  text: "The best part was knowing what was happening each week. We got clear updates, could give feedback early, and had time to check everything before launch.",
  author: "Sample review 2",
  role: "Project delivery",
}, {
  text: "We used to spend a lot of time following up on the same enquiries. The new workflow keeps them in one place and makes it easier for our team to respond.",
  author: "Sample review 3",
  role: "Workflow automation",
}, {
  text: "Our old site was awkward to use on a phone. The new layout is much clearer, and customers can find the products and information they need without asking us.",
  author: "Sample review 4",
  role: "E-commerce design",
}, {
  text: "We had a few changes after launch, and the team helped us work through them. It was reassuring to have someone explain the options in plain language.",
  author: "Sample review 5",
  role: "Post-launch support",
}];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const multiple = QUOTES.length > 1;
  const running = multiple && !paused && !hovered && !focused && !reducedMotion;
  const quote = QUOTES[index];
  const move = (step: number) => setIndex(current => (current + step + QUOTES.length) % QUOTES.length);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % QUOTES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [running, index]);

  return (
    <section aria-labelledby="testimonials-heading" style={{ padding: "56px 0", borderTop: "1px solid #e4e4e7", background: "#fff" }}>
      <div style={{ width: "min(640px, calc(100% - 40px))", margin: "0 auto" }}>
        <h2 id="testimonials-heading" style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 700, color: "#17171c", textAlign: "center", margin: "0 0 24px" }}>Testimonials</h2>
        <div className="testimonial-card" role="region" aria-label="Client reviews" aria-roledescription={multiple ? "carousel" : undefined}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
          onKeyDown={event => { if (multiple && (event.key === "ArrowLeft" || event.key === "ArrowRight")) { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }}
          style={{ padding: "28px", border: "1px solid #e4e4e7", borderRadius: 16, background: "#f7f8f4" }}>
          <div aria-live={running ? "off" : "polite"} aria-atomic="true">
            <blockquote key={quote.author} style={{ margin: 0 }}>
              <p className="testimonial-text" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.55, color: "#17171c", margin: 0, minHeight: "4.65em", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>&ldquo;{quote.text}&rdquo;</p>
              <footer style={{ marginTop: 20, fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ display: "block", color: "#17171c", fontSize: 14 }}>{quote.author}</strong>
                <span style={{ color: "#62626b" }}>{quote.role}</span>
              </footer>
            </blockquote>
            <div style={{ marginTop: 10, minHeight: 20, fontSize: 12, color: "#006c61" }}>
              {quote.source ? <a href={quote.source} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Read original review ↗</a> : <span>Sample text · awaiting client testimonial</span>}
            </div>
          </div>
          {multiple && <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 4, marginTop: 16 }}>
            <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)}>←</button>
            {QUOTES.map((item, i) => <button key={item.author} type="button" aria-label={`Show testimonial ${i + 1} from ${item.author}`} aria-current={i === index ? "true" : undefined} onClick={() => setIndex(i)}><span style={{ display: "block", width: 8, height: 8, borderRadius: "50%", background: i === index ? "#00897B" : "#d4d4d8" }} /></button>)}
            <button type="button" aria-label="Next testimonial" onClick={() => move(1)}>→</button>
            <button type="button" aria-label={paused ? "Play testimonials" : "Pause testimonials"} onClick={() => setPaused(value => !value)}>{paused ? "▶" : "Ⅱ"}</button>
          </div>}
        </div>
      </div>
      <style>{`
        .testimonial-card button { width:44px; height:44px; display:grid; place-items:center; border:1px solid #d4d4d8; border-radius:50%; background:#fff; color:#17171c; cursor:pointer; }
        .testimonial-card button:hover { border-color:#00897B; }
        .testimonial-card button:focus-visible, .testimonial-card a:focus-visible { outline:2px solid #00897B; outline-offset:3px; }
        @media(max-width:560px) { .testimonial-card { padding:24px!important; } .testimonial-text { font-size:18px!important; } }
      `}</style>
    </section>
  );
}
