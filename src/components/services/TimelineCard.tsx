
import React from 'react';
import { motion } from 'framer-motion';
import { TimelinePhase } from '../../data/servicesData';

interface TimelineCardProps {
  phase: TimelinePhase;
  currentCard: number;
  totalCards: number;
  phaseIndex: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ phase, currentCard, totalCards, phaseIndex }) => {
  return (
    <motion.div 
      className="relative bg-black/20 backdrop-blur-2xl border-0 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.05))'
      }}
      whileHover={{ scale: 1.01, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated Rainbow Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, #ff0080, #00f5ff, #8b5cf6, #39ff14, #ff0080)',
          backgroundSize: '400% 400%',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Progress indicator */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-2">
          {Array.from({ length: totalCards }).map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-1000 ${
                index === currentCard
                  ? 'w-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
                  : index < currentCard
                  ? 'w-6 bg-gradient-to-r from-cyan-400 to-purple-400'
                  : 'w-6 bg-white/20'
              }`}
              animate={index === currentCard ? {
                boxShadow: [
                  '0 0 10px rgba(0, 245, 255, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.7)',
                  '0 0 10px rgba(0, 245, 255, 0.5)'
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <motion.div
          className="inline-flex items-center space-x-4 px-6 py-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/30 rounded-full mb-4"
          animate={{ 
            scale: [1, 1.02, 1],
            boxShadow: [
              '0 0 20px rgba(0, 245, 255, 0.3)',
              '0 0 30px rgba(139, 92, 246, 0.5)',
              '0 0 20px rgba(0, 245, 255, 0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-cyan-300 font-mono font-semibold text-sm tracking-wider">
            PHASE {phaseIndex + 1}
          </span>
          <div className="w-px h-4 bg-white/30" />
          <span className="text-purple-300 font-sans text-sm">
            {phase.duration}
          </span>
        </motion.div>

        <motion.h3 
          className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {phase.phase}
        </motion.h3>
        
        <motion.p 
          className="text-base md:text-lg text-white/80 font-sans mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {phase.description}
        </motion.p>
        
        <motion.p 
          className="text-sm text-white/60 font-sans max-w-3xl mx-auto leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {phase.details}
        </motion.p>

        {/* Deliverables Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h4 className="text-base font-mono font-semibold text-cyan-300 mb-3">Key Deliverables</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {phase.deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0" />
                <span className="text-white/80 font-sans text-sm">{deliverable}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-lg"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default TimelineCard;
