// components/GlowBtn.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sizeClasses = {
  small: "px-4 py-2 text-sm sm:text-base",
  medium: "px-8 py-5 sm:px-10 sm:py-6 text-lg sm:text-xl",
  large: "px-12 py-6 sm:px-14 sm:py-7 text-xl sm:text-2xl"
};

const GlowBtn = ({ to, label = "Click Here", className = "", size = "medium" }) => {
  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <Link 
      to={to} 
      onClick={() => setTimeout(() => window.scrollTo(0, 0), 10)}
      className={`block max-w-max ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative group inline-block"
      >
        {/* Subtle background glow */}
        <div className="absolute -inset-1 bg-gray-400 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>

        <motion.button
          className={`relative bg-gray-900 text-white rounded-xl font-mono inline-flex items-center border-2 border-gray-400/50 group-hover:border-gray-400 transition-all duration-300 ${sizeClass}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="mr-3">{label}</span>

          {/* Magical Arrow Animation */}
          <div className="relative flex items-center">
            <span className="text-white text-2xl group-hover:opacity-0 transition-opacity duration-300">›</span>
            <span className="text-white text-2xl opacity-0 group-hover:opacity-100 absolute left-0 transition-opacity duration-300">→</span>
          </div>
        </motion.button>

        {/* Outer glow ring */}
        <div className="absolute -inset-4 rounded-xl border border-gray-400/50 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-500"></div>
      </motion.div>
    </Link>
  );
};

export default GlowBtn;
