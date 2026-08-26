"use client";

export function WhatsAppFloat() {
  return (
    <>
      {/* Right side — WhatsApp */}
      <a
        href="https://wa.me/919076269629"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: 28,
          right: 24,
          zIndex: 500,
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s",
          textDecoration: "none",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.65)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.45)";
        }}
      >
        {/* Pulse ring */}
        <span style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "rgba(37,211,102,0.35)",
          animation: "float-pulse 2.2s ease-out infinite",
          pointerEvents: "none",
        }} />
        <svg width="34" height="34" viewBox="0 0 448 512" fill="#fff">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      {/* Left side — Email */}
      <a
        href="mailto:info@boonware.in"
        aria-label="Send an email"
        style={{
          position: "fixed",
          bottom: 28,
          left: 24,
          zIndex: 500,
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: "#EA4335",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(234,67,53,0.45)",
          transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s",
          textDecoration: "none",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(234,67,53,0.65)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(234,67,53,0.45)";
        }}
      >
        {/* Pulse ring */}
        <span style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "rgba(234,67,53,0.35)",
          animation: "float-pulse 2.2s ease-out infinite 0.5s",
          pointerEvents: "none",
        }} />
        <svg width="32" height="27" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope body */}
          <rect x="0.5" y="0.5" width="23" height="19" rx="1.5" fill="none" stroke="#fff" strokeWidth="1.4"/>
          {/* Flap V */}
          <polyline points="0.5,0.5 12,11 23.5,0.5" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
          {/* Bottom corners */}
          <line x1="0.5" y1="19.5" x2="8" y2="12" stroke="#fff" strokeWidth="1.4"/>
          <line x1="23.5" y1="19.5" x2="16" y2="12" stroke="#fff" strokeWidth="1.4"/>
        </svg>
      </a>

      <style>{`
        @keyframes float-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </>
  );
}

export default WhatsAppFloat;
