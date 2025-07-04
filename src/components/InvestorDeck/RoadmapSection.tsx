import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

const milestones = [
  { quarter: "Sep 2024", achievement: "Started as Tech Agency, onboarded first client B1G", completed: true },
  { quarter: "Oct 2024", achievement: "Completed projects: Chiltel, Easy2Trip; team expanded to 7", completed: true },
  { quarter: "Nov 2024", achievement: "Launched Yorigin.in SaaS, onboarded EnerzyFlow, SamAI", completed: true },
  { quarter: "Dec 2024", achievement: "Acted as in-team devs for SamAI, began equity model", completed: true },
  { quarter: "Jan 2025", achievement: "Team expanded to 12, added Sales & Marketing dept", completed: true },
  { quarter: "Feb 2025", achievement: "SamAI funded 15L for 6%, EnerzyFlow valued at 55L", completed: true },
  { quarter: "Mar 2025", achievement: "MutaneX joined Antler, chance for $100K at 8%", completed: true },
  { quarter: "Apr 2025", achievement: "Completed 10 projects, 4 SaaS products", completed: true },
  { quarter: "Q3 2025", achievement: "Working with 2 startups, aiming for funding", completed: false }
];

function RoadmapSection() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      setTimelineHeight(rect.height);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              ROADMAP
            </motion.span>
          </h2>
          <motion.div
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mt-6">
            Our journey from startup to success - tracking milestones and achievements
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Desktop Timeline with Accurate Scroll */}
          {!isMobile && (
            <div
              style={{ height: timelineHeight + "px" }}
              className="absolute left-6 md:left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"
              />
            </div>
          )}

          {/* Mobile Simple Timeline */}
          {isMobile && (
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            />
          )}

          <div className="space-y-8 md:space-y-16 lg:space-y-20">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: isMobile ? index * 0.1 : 0,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className="flex justify-start pt-4 md:pt-10"
              >
                {/* Timeline Node - Sticky on Desktop */}
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: isMobile ? index * 0.1 + 0.2 : 0.2,
                      type: "spring",
                      bounce: 0.5
                    }}
                    viewport={{ once: true }}
                    className={`h-10 absolute left-0 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border-2 transition-all duration-300 ${milestone.completed
                        ? 'border-cyan-400 shadow-lg shadow-cyan-500/30'
                        : 'border-gray-600'
                      }`}
                  >
                    <div className={`h-4 w-4 rounded-full transition-all duration-300 ${milestone.completed
                        ? 'bg-gradient-to-br from-cyan-400 to-purple-500'
                        : 'bg-gray-700'
                      }`}>
                      {milestone.completed && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4, type: "spring" }}
                          className="flex items-center justify-center w-full h-full"
                        >
                          <CheckCircle size={12} className="text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Pulse effect for completed milestones */}
                    {milestone.completed && !isMobile && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 opacity-20"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      />
                    )}
                  </motion.div>

                  {/* Quarter Title - Hidden on mobile, shown on desktop */}
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-4xl font-bold text-gray-500 dark:text-gray-400">
                    {milestone.quarter}
                  </h3>
                </div>

                {/* Content */}
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  {/* Quarter Title - Shown on mobile */}
                  <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-cyan-400">
                    {milestone.quarter}
                  </h3>

                  {/* Achievement Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`group relative p-6 rounded-xl border transition-all duration-500 backdrop-blur-sm ${milestone.completed
                        ? 'bg-gray-900/80 border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20'
                        : 'bg-gray-900/40 border-gray-700/50 hover:border-purple-500/50'
                      }`}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r transition-all duration-500 ${milestone.completed
                          ? 'from-cyan-500/5 to-purple-500/5'
                          : 'from-gray-700/5 to-gray-800/5'
                        }`} />
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${milestone.completed
                            ? 'text-gray-300 group-hover:text-white'
                            : 'text-gray-400 group-hover:text-gray-300'
                          }`}>
                          {milestone.achievement}
                        </p>
                      </div>
                      <div className={`flex-shrink-0 transition-colors duration-300 ${milestone.completed
                          ? 'text-cyan-400'
                          : 'text-purple-500'
                        }`}>
                        {milestone.completed ?
                          <CheckCircle size={20} className="sm:w-6 sm:h-6" /> :
                          <Calendar size={20} className="sm:w-6 sm:h-6" />
                        }
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;