import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

// Service data structure
import { services } from '@/data/servicesData';

const ServicesCarouselPC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const boxRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const beamFillRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<HTMLDivElement[]>([]);
  const beamContainerRef = useRef<HTMLDivElement>(null);

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [isInitialAnimation, setIsInitialAnimation] = useState(true);
  const [beamHeight, setBeamHeight] = useState(0);
  const [beamTop, setBeamTop] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentService = services[selectedServiceIndex];
  const phases = currentService.timeline;

  // Calculate beam position based on titles
  useLayoutEffect(() => {
    if (isMobile) return;
    if (titleRefs.current.length > 0 && beamContainerRef.current) {
      const firstTitle = titleRefs.current[0];
      const lastTitle = titleRefs.current[titleRefs.current.length - 1];

      if (firstTitle && lastTitle) {
        const containerRect = beamContainerRef.current.getBoundingClientRect();
        const firstRect = firstTitle.getBoundingClientRect();
        const lastRect = lastTitle.getBoundingClientRect();

        // Calculate beam start (center of first title)
        const startY = firstRect.top - containerRect.top + firstRect.height / 3;
        // Calculate beam end (center of last title)
        const endY = lastRect.top - containerRect.top + lastRect.height / 3;

        setBeamTop(startY);
        setBeamHeight(endY - startY);
      }
    }
  }, [selectedServiceIndex, currentPhaseIndex]);

  // Reset animation states when service changes
  useEffect(() => {
    setCurrentPhaseIndex(0);
    setIsInitialAnimation(true);
    setProgress(0);
    // Scroll to top when service changes
    window.scrollTo(0, 0);
  }, [selectedServiceIndex]);

  useEffect(() => {
    if (isMobile) return;

    if (!sectionRef.current || !boxRef.current || !beamRef.current || !orbRef.current) return;

    const ctx = gsap.context(() => {
      // Reset positions for new service
      gsap.set(boxRef.current, { x: 0 });
      gsap.set(titleRefs.current, { opacity: 0, y: 20 });
      gsap.set(orbRef.current, { top: 0 });
      gsap.set(beamFillRef.current, { height: 0 });

      // PHASE 1: Initial box move to right (smooth animation on first scroll)
      const initialTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'top+=100vh top',
          scrub: 1,
          pin: true,
          onEnter: () => setIsInitialAnimation(false),
          onLeaveBack: () => setIsInitialAnimation(true)
        }
      });

      // Box movement animation
      initialTimeline.to(boxRef.current, {
        x: '55%',
        duration: 3,
        ease: 'power2.out'
      });

      // Title reveal animation
      titleRefs.current.forEach((title, i) => {
        initialTimeline.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, i > 0 ? '-=0.3' : '0');
      });

      // PHASE 2: Timeline step navigation (discrete steps)
      const stepTriggers: ScrollTrigger[] = [];

      // Create a trigger for each phase
      phases.forEach((_, i) => {
        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `top+=${100 + i * 100}vh top`,
          end: `top+=${100 + (i + 1) * 100}vh top`,
          onEnter: () => {
            setCurrentPhaseIndex(i);
            // Update beam fill to current phase
            const fillPercentage = (i / (phases.length - 1)) * 100;
            gsap.to(beamFillRef.current, {
              height: `${fillPercentage}%`,
              duration: 0.5,
              ease: 'power2.out'
            });
            // Update orb position
            gsap.to(orbRef.current, {
              top: `${fillPercentage}%`,
              duration: 0.5,
              ease: 'power2.out'
            });
          },
          onEnterBack: () => {
            setCurrentPhaseIndex(i);
            // Update beam fill to current phase
            const fillPercentage = (i / (phases.length - 1)) * 100;
            gsap.to(beamFillRef.current, {
              height: `${fillPercentage}%`,
              // duration: 0.5,
              // ease: 'power2.out'
            });
            // Update orb position
            gsap.to(orbRef.current, {
              top: `${fillPercentage}%`,
              // duration: 0.5,
              // ease: 'power2.out'
            });
          }
        });
        stepTriggers.push(trigger);
      });


      // Beam appearance (fade in and slight upward move)
      initialTimeline.fromTo(beamRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.4');

      // Orb appearance
      initialTimeline.fromTo(orbRef.current, {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }, '-=0.5');

      initialTimeline.fromTo(beamFillRef.current, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.5');

      // Create master pin trigger for the timeline section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top+=100vh top',
        end: `top+=${100 + phases.length * 100 + 200}vh top`,
        pin: true,
        snap: {
          snapTo: 1 / (phases.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedServiceIndex, phases.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full right-10 overflow-hidden hidden lg:block"
      style={{ height: `${(phases.length + 1) * 20}vh` }}
    >
      {/* Service Selector */}
      <div className='relative top-40'>
        <div className="hidden sm:flex absolute top-10 left-1/2 transform -translate-x-1/2 z-30 gap-3">
          {services.map((s, index) => (
            <motion.button
              key={s.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
        px-5 py-2.5 rounded-md text-sm font-medium border transition-all duration-300
        ${index === selectedServiceIndex
                  ? 'text-black border-white text-white shadow-sm'
                  : 'bg-transparent text-white border-white/20 hover:border-white/40'
                }
      `}
              onClick={() => setSelectedServiceIndex(index)}
            >
              {s.title}
            </motion.button>
          ))}
        </div>

        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
          {/* Beam and Titles Container */}
          <div
            ref={beamContainerRef}
            className="absolute left-[5%] md:left-[16%] w-full h-full"
          >
            {/* Beam - Thin with Premium Glow */}
            <div
              ref={beamRef}
              className="absolute w-px h-full z-10"
              style={{ top: `${beamTop}px`, height: `${beamHeight}px` }}
            >
              <div className="w-full h-full relative">
                {/* Static beam background (unfilled) */}
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-700/50 transform -translate-x-1/2"></div>

                {/* Dynamic beam fill with enhanced shine */}
                <div
                  ref={beamFillRef}
                  className="absolute top-0 left-1/2 w-0.5 h-0 bg-gradient-to-b from-cyan-400 to-purple-600 transform -translate-x-1/2 
                  shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                ></div>

                {/* Orb with smooth movement */}
                <div
                  ref={orbRef}
                  className="absolute left-1/2 w-[29px] h-[29px] -translate-x-1/2 z-20"
                  style={{
                    top: 0,
                    transform: 'translateX(-50%)',
                    filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))'
                  }}
                >
                  <img
                    src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/input-star.png"
                    alt="orb"
                    width={29}
                    height={29}
                    className="object-contain relative -top-2 animate-pulse"
                  />
                </div>
              </div>
            </div>

            {/* Text Titles */}
            <div className="absolute left-[3%] md:left-[3%] top-0 w-full flex flex-col gap-8 md:gap-12 z-20 pt-[25vh]">
              {phases.map((step, i) => (
                <motion.div
                  key={i}
                  ref={el => titleRefs.current[i] = el!}
                  className={`text-xl md:text-2xl font-bold transition-all duration-300 ${i === currentPhaseIndex && !isInitialAnimation
                    ? 'text-cyan-300 scale-105'
                    : 'text-white/70'
                    }`}
                  style={{
                    opacity: i === 0 ? 1 : 0,
                    transform: i === 0 ? 'translateY(0)' : 'translateY(20px)'
                  }}
                  animate={i === currentPhaseIndex && !isInitialAnimation ? {
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                  } : {}}
                >
                  {step.phase}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Content Box */}
          <motion.div
            ref={boxRef}
            className="relative right-4 w-full max-w-md mt-8 md:max-w-2xl rounded-3xl backdrop-blur-lg shadow-2xl p-6 md:p-10 border border-cyan-500/30 transition-all duration-500 z-30 overflow-hidden group"
            whileHover={{ scale: 1.01 }}
          >
            {/* Shiny Beam */}
            {/* Top Beam */}
            <div className="absolute top-0 left-[-50%] w-[200%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[slidebeam_2s_linear_infinite]" />

            {/* Right Beam (vertical) */}
            <div className="absolute top-[-50%] right-0 h-[200%] w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-[slidebeam_2s_linear_infinite]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedServiceIndex}-${currentPhaseIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="text-cyan-300 text-sm opacity-80 font-mono">
                  {phases[currentPhaseIndex].duration}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {phases[currentPhaseIndex].phase}
                </h3>
                <p className="text-white/80 text-base md:text-lg">
                  {phases[currentPhaseIndex].description}
                </p>
                <p className="text-white/60 text-sm md:text-base">
                  {phases[currentPhaseIndex].details}
                </p>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  {phases[currentPhaseIndex].deliverables.map((d, idx) => (
                    <motion.li
                      key={idx}
                      className="text-sm md:text-base"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {d}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIgZmlsbD0iI2ZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-cyan-500/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarouselPC;