
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../data/servicesData';

interface ServiceHeaderProps {
  service: Service;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ service }) => {
  return (
    <div className="text-center mb-6">
      <motion.div
        className="inline-block px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-4"
        animate={{ 
          boxShadow: [
            '0 0 20px rgba(0, 245, 255, 0.2)',
            '0 0 40px rgba(139, 92, 246, 0.4)',
            '0 0 20px rgba(0, 245, 255, 0.2)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-cyan-300 font-mono font-medium text-base tracking-wider">
          {service.subtitle}
        </span>
      </motion.div>

      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white mb-4 tracking-tight"
        animate={{
          textShadow: [
            '0 0 20px rgba(0, 245, 255, 0.3)',
            '0 0 40px rgba(0, 245, 255, 0.6)',
            '0 0 20px rgba(0, 245, 255, 0.3)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {service.title}
      </motion.h2>
      <motion.p 
        className="text-base text-white/70 font-sans max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {service.description}
      </motion.p>
    </div>
  );
};

export default ServiceHeader;
