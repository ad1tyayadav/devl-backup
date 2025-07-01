import React, { useRef } from 'react'
import { motion } from 'framer-motion'; 

function SolutionSection() {

    const solutionRef = useRef(null)

     const solutionSteps = [
    { 
      step: "01", 
      title: "Ideate", 
      description: "Transform your vision into actionable plans",
      color: "from-cyan-500 to-blue-600"
    },
    { 
      step: "02", 
      title: "Build", 
      description: "Rapid MVP development with cutting-edge tools",
      color: "from-purple-500 to-indigo-600"
    },
    { 
      step: "03", 
      title: "Launch", 
      description: "Deploy to market in record time",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      step: "04", 
      title: "Validate", 
      description: "Gather real user feedback and insights",
      color: "from-rose-500 to-pink-600"
    },
    { 
      step: "05", 
      title: "Scale", 
      description: "Iterate and grow based on data",
      color: "from-amber-500 to-orange-600"
    }
  ];


  return (
    <section ref={solutionRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-20"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-4 sm:mb-6">
                OUR SOLUTION
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto rounded-full mb-6 sm:mb-8" />
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                DevLaunch empowers entrepreneurs to transform ideas into reality with unprecedented speed and precision
              </p>
            </motion.div>

            {/* Roadmap Style Solution */}
            <div className="relative">
              {/* Connecting Line - Hidden on mobile, visible on lg+ */}
              <div className="absolute left-1/2 top-20 bottom-20 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-500 transform -translate-x-1/2 hidden lg:block">
                <motion.div
                  className="absolute inset-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-500"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "top" }}
                />
              </div>

              <div className="space-y-16 sm:space-y-24 lg:space-y-40">
                {solutionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.3,
                      type: "spring",
                      stiffness: 80
                    }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-6 sm:gap-8 lg:gap-16`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 max-w-lg w-full">
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 2 : -2 }}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700`} />
                        
                        <div className="relative bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500">
                          <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-2xl text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {step.step}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Node - Hidden on mobile */}
                    <div className="relative z-10 hidden lg:block">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.3 + 0.5,
                          type: "spring",
                          bounce: 0.6
                        }}
                        viewport={{ once: true }}
                        className={`w-6 h-6 bg-gradient-to-br ${step.color} rounded-full border-4 border-black shadow-lg shadow-cyan-500/25`}
                      />
                    </div>

                    {/* Visual Element */}
                    <div className="flex-1 max-w-lg flex justify-center w-full">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.3 + 0.2,
                        }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center text-white text-3xl sm:text-6xl font-bold shadow-2xl`}>
                          {step.step}
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-50 animate-pulse`} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}

export default SolutionSection