import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, DollarSign, Rocket, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProblemSection from '@/components/InvestorDeck/ProblemSection';
import SolutionSection from '@/components/InvestorDeck/SolutionSection';
import BusinessModel from '@/components/InvestorDeck/BusinessModel';
import TractionSection from '@/components/InvestorDeck/TractionSection';
import RoadmapSection from '@/components/InvestorDeck/RoadmapSection';
import TeamSection from '@/components/InvestorDeck/TamSection';
import { AnimatedGrid } from '@/components/ui/AnimatedGrid';
import { FloatingParticles } from '@/components/ui/FloatingParticles';

const InvestorDeck = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // Smooth scroll behavior with CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);


  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden relative" style={{ scrollBehavior: 'smooth' }}>
    <FloatingParticles />
    <AnimatedGrid />
      
      {/* Back Button */}
      <Link to={'/'}
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button className="group flex items-center space-x-2 bg-black/20 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium text-sm">Back to Home</span>
        </button>
      </Link>

      <div ref={containerRef} className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-8 tracking-tight leading-none"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              DEVLAUNCH
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 tracking-[0.2em]">
                INNOVATE • DEVELOP • LAUNCH
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center space-y-3 text-gray-400">
              <span className="text-xs sm:text-sm font-light tracking-wider">SCROLL TO EXPLORE</span>
              <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center">
                <motion.div 
                  className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section with Roadmap Effect */}
        <SolutionSection />

        {/* Business Model Section */}
        <BusinessModel />

        {/* Traction Section */}
        <TractionSection />

        {/* Team Section */}
        <TeamSection />
        

        {/* Roadmap Section */}
        <RoadmapSection />

        {/* Final CTA Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-5xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-8"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                LET'S BUILD THE FUTURE
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Join us in revolutionizing how startups are born and scale globally
              </motion.p>

              <motion.div
                className="space-y-6 sm:space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <Link to={'https://calendly.com/akshat2k24/new-meeting?month=2025-07'}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-white font-bold text-base sm:text-lg overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10">Schedule Meeting</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                      initial={{ x: "100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  </Link>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 sm:px-12 py-3 sm:py-4 rounded-full border border-white/20 text-white font-bold text-base sm:text-lg hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-xl w-full sm:w-auto"
                  >
                    Download Deck
                  </motion.button>
                </div>

                {/* Investment Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Investment Opportunity: $100K for 8%
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3 sm:mb-4">Use of Funds</h4>
                      <div className="space-y-3">
                        {[
                          { label: "Product Development & AI", percent: "40%", color: "bg-cyan-500" },
                          { label: "Marketing & Acquisition", percent: "30%", color: "bg-purple-500" },
                          { label: "Team Expansion", percent: "20%", color: "bg-pink-500" },
                          { label: "Operations & Infrastructure", percent: "10%", color: "bg-emerald-500" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center">
                              <div className={`w-3 h-3 ${item.color} rounded-full mr-3 flex-shrink-0`} />
                              <span className="text-gray-300 text-sm">{item.label}</span>
                            </div>
                            <span className="text-white font-semibold text-sm">{item.percent}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3 sm:mb-4">Projected Milestones</h4>
                      <div className="space-y-3">
                        {[
                          { milestone: "100K users by end of 2025", icon: Users },
                          { milestone: "$500K ARR by Q4 2025", icon: DollarSign },
                          { milestone: "Break-even by Q2 2026", icon: TrendingUp },
                          { milestone: "Exit opportunity in 3-5 years", icon: Rocket }
                        ].map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                              className="flex items-center"
                            >
                              <IconComponent size={16} className="text-cyan-400 mr-3 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{item.milestone}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestorDeck;