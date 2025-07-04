import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import InvestorSection from "../components/InvestorSection";
import TestimonialSection from "../components/TestimonialSection";
import ProjectsSection from "../components/ProjectsSection";
import PricingSection from "../components/PricingSection";
import TempBooking from "@/components/TempBooking";
import ServicesCarouselPhone from "../components/ServicesCarouselPhone";
import ServicesCarouselPC from "@/components/ServicesCarouselPC";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";

let lastScrollY = 0;

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, lastScrollY);

    return () => {
      lastScrollY = window.scrollY;
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-space relative">
      <FloatingParticles />
      <AnimatedGrid />
      <Navigation />
      <div className="relative z-10">
        <HeroSection />
        <ServicesCarouselPC />
        <ServicesCarouselPhone />
        <ProjectsSection />
        <TestimonialSection />
        <PricingSection />
        <div className="relative">
          <InvestorSection />
        </div>
        <TempBooking />
      </div>
    </div>
  );
};

export default Index;
