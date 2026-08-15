"use client";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafActive = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      if (!rafActive.current) {
        rafActive.current = true;
        // Snap ring to cursor on first move to avoid sliding in from (0,0)
        ring.current = { x: e.clientX, y: e.clientY };
        setVisible(true);
        raf = requestAnimationFrame(animate);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => { if (rafActive.current) setVisible(true); };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 8, height: 8, borderRadius: "50%",
          background: "#010101", pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 40, height: 40, borderRadius: "50%",
          border: "1px solid rgba(1,1,1,0.3)",
          pointerEvents: "none", zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
