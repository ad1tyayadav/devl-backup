import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        left: mousePosition.x - (window.innerWidth < 640 ? 150 : 300),
        top: mousePosition.y - (window.innerWidth < 640 ? 150 : 300),
        width: window.innerWidth < 640 ? 300 : 600,
        height: window.innerWidth < 640 ? 300 : 600,
        background:
          'radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, rgba(139, 92, 246, 0.15) 25%, rgba(255, 0, 128, 0.1) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
};

export default CursorGlow;
