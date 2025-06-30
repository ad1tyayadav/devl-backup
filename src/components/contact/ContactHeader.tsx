
import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6">
        Schedule Your Project Discussion
      </h2>
      <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto mb-8">
        Ready to transform your vision into a cutting-edge digital reality? 
        Book a personalized consultation to discuss your project and explore the possibilities.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
