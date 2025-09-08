
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ToolsSection from "@/components/ToolsSection";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import StructuredContent from "@/components/StructuredContent";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add intersection observer for all elements with reveal class
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    // Observe all elements with reveal class
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ToolsSection />
      <Screenshots />
      <Testimonials />
      <FAQ />
      <StructuredContent />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
