
import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles: React.FC = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#8b5cf6' : '#ff0080'
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.9, 0],
            y: [0, -200],
            x: [0, Math.sin(i) * 60]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;
