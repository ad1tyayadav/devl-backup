import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, CheckCircle, Zap, Target, Rocket } from 'lucide-react';

const SolutionSection = () => {
  const timelineData = [
    {
      id: '01',
      title: 'Ideate & Strategy',
      description: 'Brainstorm innovative solutions and develop comprehensive strategic frameworks to guide the project direction with precision and creativity.',
      duration: '1-2 weeks',
      icon: Target,
      color: 'from-cyber-blue to-blue-500',
      glowColor: 'rgba(59, 130, 246, 0.4)'
    },
    {
      id: '02',
      title: 'Design & Planning',
      description: 'Create detailed wireframes, prototypes, and technical specifications for seamless development execution and optimal user experience.',
      duration: '2-3 weeks',
      icon: Zap,
      color: 'from-cyber-purple to-purple-500',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      id: '03',
      title: 'Development',
      description: 'Build robust, scalable solutions using modern technologies and best practices for optimal performance and reliability.',
      duration: '4-6 weeks',
      icon: Rocket,
      color: 'from-cyber-pink to-pink-500',
      glowColor: 'rgba(236, 72, 153, 0.4)'
    },
    {
      id: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across all platforms and devices to ensure flawless user experience and bug-free performance.',
      duration: '1-2 weeks',
      icon: CheckCircle,
      color: 'from-cyan-400 to-teal-500',
      glowColor: 'rgba(34, 211, 238, 0.4)'
    },
    {
      id: '05',
      title: 'Launch & Deploy',
      description: 'Strategic deployment with monitoring systems and post-launch optimization for maximum impact and continuous improvement.',
      duration: '1 week',
      icon: Zap,
      color: 'from-green-400 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.4)'
    }
  ];

  const topCards = timelineData.slice(0, 3);
  const bottomCards = timelineData.slice(3, 5);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    })
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const TimelineCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: '-50px' });
    const IconComponent = item.icon;

    return (
      <motion.div
        ref={cardRef}
        className="w-full max-w-sm mx-auto"
        variants={cardVariants}
        initial="hidden"
        animate={cardInView ? 'visible' : 'hidden'}
        custom={index}
      >
        <motion.div 
          className="bg-transparent border border-white rounded-2xl p-8 shadow-2xl min-h-[320px] flex flex-col justify-between backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
          }}
          whileHover={{
            scale: 1.05,
            borderColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: `0 20px 40px ${item.glowColor}`,
            transition: { duration: 0.3 }
          }}
        >
          {/* Header with Icon and Step Number */}
          <div className="flex items-start justify-between mb-6">
        
            <motion.div 
              className="bg-white/10 relative sm:left-56 text-white border border-white/20 text-sm font-medium px-3 py-2 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
            >
              Step {item.id}
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <motion.h3 
              className="text-2xl font-bold text-white mb-4 leading-tight font-long glow-text"
              whileHover={{ 
                textShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              {item.title}
            </motion.h3>
            
            <motion.p 
              className="text-white/80 text-base leading-relaxed mb-4"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {item.description}
            </motion.p>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{item.duration}</span>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-sora relative overflow-hidden py-12 lg:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyber-purple/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-12 sm:mb-20"
>
  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
    <motion.span
      className="bg-gradient-to-r from-emerald-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      THE SOLUTION
    </motion.span>
  </h2>
  <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-400 via-indigo-500 to-fuchsia-500 mx-auto rounded-full" />
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            A streamlined approach to delivering exceptional results through proven methodologies
          </motion.p>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden" ref={containerRef}>
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative">
                <TimelineCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block" ref={containerRef}>
          <div className="relative">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-3 gap-12 xl:gap-16 mb-16">
              {topCards.map((item, index) => (
                <div key={item.id} className="relative">
                  <TimelineCard item={item} index={index} />
                  
                  {/* Connecting line from card to timeline */}
                  <motion.div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b ${item.color} rounded-full shadow-lg`}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  />
                </div>
              ))}
            </div>

            {/* Central Timeline */}
            <div className="relative my-16">
              {/* Main timeline line */}
              <motion.div
                className="w-full h-2 bg-gradient-to-r from-cyber-blue via-cyber-purple via-cyber-pink via-cyan-400 to-green-400 rounded-full shadow-lg"
                style={{ 
                  boxShadow: '0 0 30px rgba(96, 165, 250, 0.4)'
                }}
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              />
            </div>

            {/* Bottom Row - 2 Cards (Centered) */}
            <div className="mt-16">
              <div className="flex justify-center gap-16 xl:gap-20">
                {bottomCards.map((item, index) => (
                  <div key={item.id} className="relative w-full max-w-sm">
                    {/* Connecting line from timeline to card */}
                    <motion.div
                      className={`absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-t ${item.color} rounded-full shadow-lg`}
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                    />
                    
                    <TimelineCard item={item} index={index + 3} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;