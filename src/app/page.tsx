import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Stats from "@/components/Stats";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

// Lazy load below-fold components
const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const ServiceBundles = dynamic(() => import("@/components/ServiceBundles").then(m => ({ default: m.ServiceBundles })));
const MoneyAngles = dynamic(() => import("@/components/MoneyAngles").then(m => ({ default: m.MoneyAngles })));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const TrustedBrands = dynamic(() => import("@/components/TrustedBrands").then(m => ({ default: m.TrustedBrands })));
const ContactSection = dynamic(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat").then(m => ({ default: m.WhatsAppFloat })));

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

        {/* Trusted brands: animated logo marquee */}
        <BrandsMarquee />

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
