import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import { ServiceBundles } from "@/components/ServiceBundles";
import { MoneyAngles } from "@/components/MoneyAngles";
import { Testimonials } from "@/components/Testimonials";
import { TrustedBrands } from "@/components/TrustedBrands";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#ffffff" }}>
      <SmoothScroll />
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero: 3-line GSAP clip animation */}
        <Hero />

        {/* Proof bar: animated counters */}
        <Stats />

        {/* Discovery: 4 goal cards → solution reveal */}
        <WhyChoose />

        {/* Bundles: 3 white cards → services page */}
        <ServiceBundles />

        {/* Work teaser: 3 project cards (dark) → /projects */}
        <MoneyAngles />

        {/* Testimonial: single centered quote */}
        <Testimonials />

        {/* Process: 5 steps */}
        <TrustedBrands />

        {/* CTA dark section */}
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
