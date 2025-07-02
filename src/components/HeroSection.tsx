import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/TakemeBtn';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Memoized words array to prevent unnecessary re-renders
  const words = useMemo(() => ['Innovate', 'Develop', 'Launch'], []);
  
  // Optimized mouse movement handler with useCallback
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Track mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Cycle through words every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  // Memoized animation variants
  const letterVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    }),
    hover: {
      y: -8,
      scale: 1.1,
      color: "#00f5ff",
      textShadow: "0 0 20px rgba(0, 245, 255, 0.8)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    }
  }), []);

  const cursorVariants = useMemo(() => ({
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

  const wordVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { 
        duration: 0.4,
        ease: "easeIn"
      } 
    }
  }), []);

  const devLaunchLetters = useMemo(() => "DevLaunch".split(""), []);

  return (
    <section 
      id='home' 
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        `}
      </style>

      {/* Enhanced cursor-following glow effect */}
      <motion.div 
        className="fixed pointer-events-none z-0"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, rgba(139, 92, 246, 0.1) 25%, rgba(255, 0, 128, 0.08) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 lg:space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* DevLaunch Typography - Fixed responsive sizing */}
          <div className="w-full max-w-4xl">
            <motion.h1 
              className="text-2xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-white flex justify-center items-center"
              style={{ 
                fontFamily: "'Orbitron', monospace",
                lineHeight: "1.1"
              }}
            >
              {devLaunchLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="font-mars inline-block cursor-pointer"
                  style={{
                    textShadow: "0 0 20px rgba(0, 245, 255, 0.5)",
                    filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                variants={cursorVariants}
                animate="blink"
                className="inline-block w-1 bg-cyan-500 ml-2"
                style={{
                  height: 'clamp(2rem, 8vw, 6rem)'
                }}
              />
            </motion.h1>
          </div>

          {/* Animated Words - Fixed height and positioning */}
          <div className="h-12 sm:h-16 lg:h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentWordIndex}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 tracking-wide font-long"
              >
                {words[currentWordIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Button - Properly centered */}
          <motion.div
            className="flex justify-center items-center pt-4 sm:pt-6 lg:pt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2, 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <Button />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default HeroSection;