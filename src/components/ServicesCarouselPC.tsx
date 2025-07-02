import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Button as MovingBorderButton } from './ui/moving-border';

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
    // Scroll to top when service changes
    window.scrollTo(0, 0);
  }, [selectedServiceIndex]);

  useEffect(() => {
    if (isMobile) return;

    if (!sectionRef.current || !boxRef.current || !beamRef.current || !orbRef.current) return;

    const ctx = gsap.context(() => {
      // Reset positions for new service
      gsap.set(boxRef.current, { x: '0%', opacity: 0 });
      gsap.set(titleRefs.current, { opacity: 0, x: 100 }); // Start from right
      gsap.set(orbRef.current, { top: 0, opacity: 0, scale: 0.8 });
      gsap.set(beamRef.current, { opacity: 0, y: 30 });
      gsap.set(beamFillRef.current, { height: 0, opacity: 0 });

      // PHASE 1: Initial animations
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

      // Box animation - center to right with fast-to-slow motion
      initialTimeline.to(boxRef.current, {
        x: '55%',
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
      });

      // Title reveal animation - slide in from right to left
      titleRefs.current.forEach((title, i) => {
        initialTimeline.to(title, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.2  // Staggered delay
        }, i > 0 ? '-=0.3' : '0');
      });

      // Beam appearance (fade in and slight upward move)
      initialTimeline.to(beamRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.4');

      // Orb appearance
      initialTimeline.to(orbRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }, '-=0.5');

      initialTimeline.to(beamFillRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.5');

      // PHASE 2: Timeline step navigation
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
            });
            // Update orb position
            gsap.to(orbRef.current, {
              top: `${fillPercentage}%`,
            });
          }
        });
        stepTriggers.push(trigger);
      });

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
      id="services"
      ref={sectionRef}
      className="relative w-full right-10 overflow-hidden hidden lg:block"
      style={{ height: `${(phases.length + 1) * 20}vh` }}
    >
      {/* Service Selector */}
      <div className='relative top-40'>
        <div className="hidden sm:flex absolute top-10 left-1/2 transform -translate-x-1/2 z-30 gap-3 h-10">
          {services.map((s, index) => (
            <div key={s.title} className="h-10">
              {index === selectedServiceIndex ? (
                // Active button with moving border
                <MovingBorderButton
                  borderRadius="0.375rem"
                  className="font-medium bg-slate-900 text-white"
                  borderClassName="bg-[radial-gradient(#0ea5e9_40%,transparent_60%)]"
                  duration={3000}
                  onClick={() => setSelectedServiceIndex(index)}
                >
                  {s.title}
                </MovingBorderButton>
              ) : (
                // Inactive button
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 rounded-md text-sm font-medium border border-white/20 bg-transparent hover:border-white/40 text-white h-16"
                  onClick={() => setSelectedServiceIndex(index)}
                >
                  {s.title}
                </motion.button>
              )}
            </div>
          ))}
        </div>

        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
          {/* Beam and Titles Container */}
          <div
            ref={beamContainerRef}
            className="absolute left-[5%] md:left-[16%] w-full h-full"
          >
            {/* Custom Beam with Glowing Orb */}
            <div
              ref={beamRef}
              className="absolute w-[2px] h-full z-10"
              style={{ top: `${beamTop}px`, height: `${beamHeight}px` }}
            >
              <div className="w-full h-full relative overflow-visible">
                {/* Beam background with soft mask */}
                <div
                  className="absolute top-0 left-1/2 w-[2px] h-full transform -translate-x-1/2 
                  bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                  from-transparent via-neutral-300 dark:via-neutral-700 to-transparent
                  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                ></div>

                {/* Beam fill animation */}
                <motion.div
                  ref={beamFillRef}
                  className="absolute top-0 left-1/2 w-[2px] h-full transform -translate-x-1/2 
                  bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
                  style={{
                    opacity: 1,
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.6)',
                  }}
                />

                {/* Animated glowing orb */}
                <motion.div
                  ref={orbRef}
                  className="absolute -left-3 -top-10 w-6 h-6 rounded-full transform -translate-x-1/2 z-20"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.8))',
                  }}
                />
                <motion.img
                  src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/input-star.png"
                  alt="orb"
                  className="w-full h-full object-contain"
                  animate={{
                    scale: [1, 1.15, 1],
                    y: [0, -4, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut',
                    },
                  }}
                />
              </div>
            </div>

            {/* Text Titles with right-to-left animation */}
            <div className="absolute left-[3%] md:left-[3%] top-0 w-full flex flex-col gap-6 md:gap-8 z-20 pt-[25vh]">
              {phases.map((step, i) => (
                <motion.div
                  key={i}
                  ref={el => { if (el) titleRefs.current[i] = el }}
                  className="relative"
                  initial={{ opacity: 0, x: 100 }} // Start from right
                  animate={{
                    opacity: i <= currentPhaseIndex ? 1 : 0.5,
                    x: 0, // Animate to left
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.1
                    }
                  }}
                >
                  {/* Active indicator bar */}
                  {i === currentPhaseIndex && (
                    <motion.div
                      className="absolute -left-5 top-1/2 h-0.5 w-4 bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: 16 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}

                  <motion.div
                    className={`text-xl md:text-2xl font-medium transition-all duration-500 ${i === currentPhaseIndex
                      ? 'text-white'
                      : 'text-white/50'
                      }`}
                    whileHover={{
                      x: i === currentPhaseIndex ? 0 : 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.phase}
                  </motion.div>
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
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg4NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIgZmlsbD0iI2ZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-cyan-500/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarouselPC;