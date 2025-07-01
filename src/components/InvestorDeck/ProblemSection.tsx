import { useRef } from 'react'
import { motion } from "framer-motion"
import { Target, Clock, DollarSign, Zap } from 'lucide-react';

const ProblemSection = () => {
  const problemRef = useRef(null);

  const problemPoints = [
    { 
      icon: Target, 
      title: "Execution Crisis", 
      description: "80% of startups fail due to poor execution and lack of technical expertise",
      stat: "80%"
    },
    { 
      icon: Clock, 
      title: "Time Barriers", 
      description: "Months of development before any market validation or user feedback",
      stat: "6-12mo"
    },
    { 
      icon: DollarSign, 
      title: "Cost Overruns", 
      description: "High development costs prevent great ideas from ever seeing the light",
      stat: "$50K+"
    },
    { 
      icon: Zap, 
      title: "Technical Gaps", 
      description: "Technical barriers prevent brilliant business minds from launching",
      stat: "90%"
    }
  ];

  return (
    <section ref={problemRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
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
              THE PROBLEM
            </motion.span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {problemPoints.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120 
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800 group-hover:border-cyan-500/30 transition-all duration-500 h-full flex flex-col">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-2xl sm:text-3xl font-bold text-cyan-400/80 group-hover:text-pink-400 transition-colors duration-500">
                    {problem.stat}
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-br from-cyan-500 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-cyan-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        {problem.title}
                      </span>
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection;