import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import InvestorSection from "../components/InvestorSection";
import TestimonialSection from "../components/TestimonialSection";
import ProjectsSection from "../components/ProjectsSection";
import PricingSection from "../components/PricingSection";
import ThreeBackground from "../components/ThreeBackground";
import {motion} from "framer-motion"
import TempBooking from "@/components/TempBooking";
import ServicesCarouselPhone from "../components/ServicesCarouselPhone";
import ServicesCarouselPC from "@/components/ServicesCarouselPC";

let lastScrollY = 0;

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, lastScrollY);

    return () => {
      lastScrollY = window.scrollY; 
    };
  }, []);

    const FloatingParticles = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    );
  };

  // Animated background grid
  const AnimatedGrid = () => {
    return (
      <div className="fixed inset-0 opacity-20 bg-transparent text-white overflow-x-hidden relative">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    );
  };

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
