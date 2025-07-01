import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
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
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500">
            <motion.div
              className="absolute inset-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    bounce: 0.5
                  }}
                  viewport={{ once: true }}
                  className={`relative z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0 mt-1.5 ${
                    milestone.completed 
                      ? 'bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30' 
                      : 'bg-gray-700 border border-gray-600'
                  }`}
                >
                  {milestone.completed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <CheckCircle size={14} className="text-white" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="ml-6 sm:ml-8 flex-1"
                >
                  <div className={`group relative bg-gray-900 p-5 sm:p-6 rounded-xl border transition-all duration-500 h-full ${
                    milestone.completed 
                      ? 'border-cyan-500/30 hover:border-cyan-500/60' 
                      : 'border-gray-700 hover:border-purple-500/50'
                  }`}>
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
                        milestone.completed 
                          ? 'from-cyan-500/10 to-purple-500/10' 
                          : 'from-gray-700/10 to-gray-800/10'
                      }`} />
                      <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900 opacity-70" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className={`text-base sm:text-lg font-bold mb-2 transition-colors duration-300 ${
                          milestone.completed 
                            ? 'text-cyan-400 group-hover:text-cyan-300' 
                            : 'text-gray-400 group-hover:text-gray-300'
                        }`}>
                          {milestone.quarter}
                        </h3>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                          {milestone.achievement}
                        </p>
                      </div>
                      <div className={`mt-3 sm:mt-0 flex-shrink-0 ${milestone.completed ? 'text-cyan-400' : 'text-gray-500'}`}>
                        {milestone.completed ? 
                          <CheckCircle size={20} className="sm:w-6 sm:h-6" /> : 
                          <Calendar size={20} className="sm:w-6 sm:h-6 text-purple-500" />
                        }
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection