
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, Target, Zap, Video } from 'lucide-react';

const BookingBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-8 space-y-4"
    >
      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
        <Target className="w-5 h-5 mr-2 text-cyber-blue" />
        Why Schedule a Meeting?
      </h4>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">Personalized Discussion</span>
            <p className="text-white/70 text-sm">Get tailored solutions based on your specific project needs and requirements.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Zap className="w-5 h-5 text-cyber-purple mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">Faster Project Kickoff</span>
            <p className="text-white/70 text-sm">Skip lengthy email chains and get instant clarifications for quicker project initiation.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MessageSquare className="w-5 h-5 text-cyber-pink mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">Real-time Q&A</span>
            <p className="text-white/70 text-sm">Ask questions, see demos, and get immediate feedback on your ideas.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Video className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-white font-medium">No Commitment Required</span>
            <p className="text-white/70 text-sm">Free consultation to explore possibilities without any obligations.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingBenefits;
