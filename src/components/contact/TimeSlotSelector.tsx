
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Clock } from 'lucide-react';

interface TimeSlotSelectorProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  onSelectTime: (time: string) => void;
}

const TimeSlotSelector = ({ selectedDate, selectedTime, onSelectTime }: TimeSlotSelectorProps) => {
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  if (!selectedDate) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <Label className="text-white font-sora text-lg block">
        <Clock className="w-5 h-5 inline mr-2" />
        Available Times
      </Label>
      <div className="grid grid-cols-2 gap-2">
        {timeSlots.map((time) => (
          <Button
            key={time}
            type="button"
            variant={selectedTime === time ? "default" : "outline"}
            className={`h-12 transition-all duration-300 hover:scale-105 ${
              selectedTime === time 
                ? 'bg-cyber-blue text-white shadow-[0_0_20px_rgba(0,245,255,0.5)] border-cyber-blue' 
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-cyber-blue/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]'
            }`}
            onClick={() => onSelectTime(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default TimeSlotSelector;
