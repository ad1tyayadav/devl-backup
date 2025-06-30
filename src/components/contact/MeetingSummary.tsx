
import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { User } from 'lucide-react';

interface MeetingSummaryProps {
  selectedDate: Date;
  selectedTime: string;
}

const MeetingSummary = ({ selectedDate, selectedTime }: MeetingSummaryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-morphism p-4 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue/60 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all duration-300"
    >
      <h4 className="text-white font-semibold mb-2 flex items-center">
        <User className="w-4 h-4 mr-2" />
        Meeting Summary
      </h4>
      <p className="text-white/80 text-sm">
        <strong>Date:</strong> {format(selectedDate, 'PPP')}<br />
        <strong>Time:</strong> {selectedTime}<br />
        <strong>Duration:</strong> 30 minutes<br />
        <strong>Platform:</strong> Google Meet (link will be sent via email)
      </p>
    </motion.div>
  );
};

export default MeetingSummary;
