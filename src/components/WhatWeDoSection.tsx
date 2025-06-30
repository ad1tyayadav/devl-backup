
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, Lightbulb, Target, Users, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';

const WhatWeDoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Idea Genesis",
      subtitle: "From Vision to Reality",
      description: "Transform innovative ideas into validated business concepts with comprehensive market research and strategic planning.",
      features: ["Market Validation", "Business Strategy", "Competitive Analysis"],
      gradient: "from-blue-600/10 via-cyan-500/5 to-blue-400/10",
      accentColor: "cyan-400",
      id: "idea-genesis"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Assembly", 
      subtitle: "Elite Crew Building",
      description: "Build world-class teams with talent acquisition expertise, ensuring perfect cultural fit and technical excellence.",
      features: ["Talent Acquisition", "Team Dynamics", "Culture Building"],
      gradient: "from-purple-600/10 via-pink-500/5 to-purple-400/10",
      accentColor: "purple-400",
      id: "team-assembly"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tech Launchpad",
      subtitle: "Advanced Systems", 
      description: "Architect cutting-edge technology infrastructure that scales from startup to enterprise with modern frameworks.",
      features: ["Cloud Architecture", "Scalable Tech", "DevOps Excellence"],
      gradient: "from-emerald-600/10 via-teal-500/5 to-emerald-400/10",
      accentColor: "emerald-400",
      id: "tech-launchpad"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission Control",
      subtitle: "Strategic Guidance",
      description: "Navigate complex challenges with expert mentorship and strategic guidance from industry veterans.",
      features: ["Strategic Planning", "Expert Mentorship", "Risk Management"],
      gradient: "from-orange-600/10 via-red-500/5 to-orange-400/10",
      accentColor: "orange-400",
      id: "mission-control"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth Engine",
      subtitle: "Scale & Success",
      description: "Achieve sustainable growth and market leadership through data-driven strategies and proven methodologies.",
      features: ["Growth Hacking", "Market Expansion", "Performance Analytics"],
      gradient: "from-pink-600/10 via-rose-500/5 to-pink-400/10",
      accentColor: "pink-400",
      id: "growth-engine"
    }
  ];

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (services.length - (isMobile ? 0 : 2)));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (services.length - (isMobile ? 0 : 2))) % (services.length - (isMobile ? 0 : 2)));
  };

  const getVisibleCards = () => {
    if (isMobile) {
      return [currentIndex];
    }
    return [currentIndex, currentIndex + 1, currentIndex + 2];
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle radial gradients for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What We Do
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transforming ambitious ideas into extraordinary digital experiences through cutting-edge technology and strategic innovation
          </motion.p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex justify-between items-center mb-8">
              <motion.button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                disabled={currentIndex >= services.length - 3}
                className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.button>
            </div>
          )}

          {/* Cards Grid */}
          <div className={`${isMobile ? 'flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 -mx-6' : 'grid grid-cols-3 gap-8'} pb-4`}>
            {getVisibleCards().map((cardIndex) => {
              if (cardIndex >= services.length) return null;
              
              const service = services[cardIndex];
              const isFlipped = flippedCards.has(cardIndex);
              
              return (
                <motion.div
                  key={cardIndex}
                  className={`relative ${isMobile ? 'min-w-[320px] snap-center mr-6 last:mr-0' : 'w-full'} h-[450px] cursor-pointer group`}
                  style={{ perspective: '1500px' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: cardIndex * 0.15 }}
                  onClick={() => handleCardFlip(cardIndex)}
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  {/* Card Container with 3D transform */}
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Face */}
                    <div 
                      className={`absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${service.accentColor}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Content */}
                      <div className="p-8 h-full flex flex-col justify-between relative z-10">
                        {/* Icon Container */}
                        <motion.div
                          className={`w-20 h-20 rounded-2xl bg-${service.accentColor}/10 border border-${service.accentColor}/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300`}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                        >
                          <div className={`text-${service.accentColor}`}>
                            {service.icon}
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                            {service.title}
                          </h3>
                          
                          <p className={`text-${service.accentColor} text-sm font-medium mb-6 opacity-80`}>
                            {service.subtitle}
                          </p>
                        </div>

                        {/* Bottom section */}
                        <div>
                          <motion.div
                            className="inline-flex items-center gap-3 text-white/50 text-sm font-medium group-hover:text-white/70 transition-colors duration-300"
                            whileHover={{ x: 8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span>Tap to explore</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </motion.div>
                        </div>

                        {/* Bottom accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${service.accentColor}/40 to-transparent`} />
                      </div>
                    </div>

                    {/* Back Face */}
                    <div 
                      className={`absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl`}
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${service.accentColor}/10 to-transparent`} />
                      
                      <div className="p-8 h-full flex flex-col relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {service.title}
                          </h3>
                          <div className={`w-16 h-0.5 bg-gradient-to-r from-${service.accentColor}/60 to-${service.accentColor}/20 mx-auto rounded-full`} />
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-base leading-relaxed mb-8 flex-1">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                          <h4 className={`text-${service.accentColor} font-semibold text-sm uppercase tracking-wider opacity-80`}>
                            Key Features
                          </h4>
                          {service.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-center gap-4"
                            >
                              <div className={`w-2 h-2 bg-${service.accentColor} rounded-full flex-shrink-0`} />
                              <span className="text-gray-400 text-sm font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Button
                          className={`w-full bg-${service.accentColor}/10 border border-${service.accentColor}/30 text-${service.accentColor} hover:bg-${service.accentColor}/20 hover:border-${service.accentColor}/50 transition-all duration-300 rounded-2xl py-4 text-sm font-semibold`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile indicators */}
          {isMobile && (
            <div className="flex justify-center mt-8 gap-2">
              {services.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
