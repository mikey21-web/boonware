"use client";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function QuickContactModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) { setSent(false); setName(""); setPhone(""); }
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi BoonWare! I'm ${name}. My number is ${phone}. Please get back to me.`);
    window.open(`https://wa.me/919390739090?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 16px",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: "#fff", borderRadius: 16, padding: "36px 32px",
        width: "100%", maxWidth: 420,
        boxShadow: "0 32px 80px rgba(0,0,0,0.2)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16,
          background: "none", border: "none", cursor: "pointer",
          color: "#71717a", fontSize: 20, lineHeight: 1,
          padding: 4,
        }}>✕</button>

        {!sent ? (
          <>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#e8643c", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Quick inquiry
            </span>
            <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.6px", color: "#17171c", margin: "10px 0 6px" }}>
              We&apos;ll call you back.
            </h2>
            <p style={{ fontSize: 14, color: "#71717a", margin: "0 0 24px", lineHeight: 1.6 }}>
              Leave your name and number — we&apos;ll reach out within a few hours.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input
                required
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  width: "100%", padding: "13px 14px", borderRadius: 10,
                  border: "1.5px solid #e4e4e7", fontSize: 14,
                  outline: "none", fontFamily: "inherit",
                  background: "#f7f8f4", color: "#17171c",
                  boxSizing: "border-box",
                }}
                onFocus={e => (e.target.style.borderColor = "#17171c")}
                onBlur={e => (e.target.style.borderColor = "#e4e4e7")}
              />
              <input
                required
                type="tel"
                placeholder="Phone / WhatsApp number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{
                  width: "100%", padding: "13px 14px", borderRadius: 10,
                  border: "1.5px solid #e4e4e7", fontSize: 14,
                  outline: "none", fontFamily: "inherit",
                  background: "#f7f8f4", color: "#17171c",
                  boxSizing: "border-box",
                }}
                onFocus={e => (e.target.style.borderColor = "#17171c")}
                onBlur={e => (e.target.style.borderColor = "#e4e4e7")}
              />
              <button type="submit" style={{
                background: "#17171c", color: "#fff",
                border: "none", borderRadius: 10,
                padding: "14px 24px", fontSize: 15, fontWeight: 600,
                cursor: "pointer", marginTop: 4,
                transition: "background 0.2s",
                fontFamily: "inherit",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#e8643c")}
                onMouseLeave={e => (e.currentTarget.style.background = "#17171c")}
              >
                Send via WhatsApp →
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48 }}>✅</div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#17171c", margin: "16px 0 8px" }}>
              Message sent!
            </h2>
            <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.6 }}>
              We&apos;ll call you at <strong>{phone}</strong> soon.
            </p>
            <button onClick={onClose} style={{
              marginTop: 20, background: "#17171c", color: "#fff",
              border: "none", borderRadius: 9999, padding: "11px 24px",
              fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
            }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
