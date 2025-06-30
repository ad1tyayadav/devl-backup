
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';

interface BookingCalendarProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

const BookingCalendar = ({ selectedDate, onSelectDate }: BookingCalendarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div>
        <Label className="text-white font-sora text-lg mb-6 block">
          <CalendarIcon className="w-5 h-5 inline mr-2" />
          Select Date
        </Label>
        <div className="relative group flex justify-center">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Main calendar container */}
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:border-cyber-blue/40 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(0,245,255,0.3)]">
            {/* Inner glow ring */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={(date) => date < new Date()}
              className="relative z-10 enhanced-calendar mx-auto [&_.rdp-table]:mx-auto [&_.rdp-month]:space-y-6"
            />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute w-1 h-1 bg-cyan-400/60 rounded-full" 
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`
                }} 
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: [0, Math.random() * 40 - 20],
                  y: [0, Math.random() * 40 - 20]
                }} 
                transition={{
                  duration: 4 + Math.random() * 3,
                  delay: Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCalendar;
