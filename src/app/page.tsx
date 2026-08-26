import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Stats from "@/components/Stats";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const DigitalPartner = dynamic(() => import("@/components/DigitalPartner").then(m => ({ default: m.DigitalPartner })));
const FiveSteps = dynamic(() => import("@/components/FiveSteps").then(m => ({ default: m.FiveSteps })));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const BlogsInsights = dynamic(() => import("@/components/BlogsInsights").then(m => ({ default: m.BlogsInsights })));
const FAQ = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const ContactSection = dynamic(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat").then(m => ({ default: m.WhatsAppFloat })));

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#ffffff" }}>
      <SmoothScroll />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Stats />
        <BrandsMarquee />
        <WhyChoose />
        <DigitalPartner />
        <FiveSteps />
        <Testimonials />
        <BlogsInsights />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
