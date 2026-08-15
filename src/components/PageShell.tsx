import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      <SmoothScroll />
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
