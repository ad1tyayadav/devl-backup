
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingTechWordsProps {
  techWords: string[];
  currentService: number;
}

const FloatingTechWords: React.FC<FloatingTechWordsProps> = ({ techWords, currentService }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techWords.map((word, index) => (
        <motion.div
          key={`${currentService}-${word}-${index}`}
          className="absolute text-white/10 font-mono font-bold select-none"
          style={{
            left: `${15 + (index * 12) % 70}%`,
            top: `${10 + (index * 8) % 80}%`,
            fontSize: `${12 + (index % 4) * 4}px`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 0.3, 0.1],
            scale: [0.5, 1.2, 1],
            rotate: [0, 360, 180],
            x: [0, Math.sin(index) * 20, 0],
            y: [0, Math.cos(index) * 15, 0]
          }}
          transition={{
            duration: 8 + (index % 3) * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTechWords;
