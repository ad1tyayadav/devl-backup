
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BookingData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface BookingFormProps {
  bookingData: BookingData;
  onInputChange: (field: string, value: string) => void;
}

const BookingForm = ({ bookingData, onInputChange }: BookingFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label className="text-white font-sora">Name *</Label>
          <Input
            placeholder="Your full name"
            value={bookingData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue transition-all duration-300 hover:border-cyber-blue/50"
            required
          />
        </div>

        <div>
          <Label className="text-white font-sora">Email *</Label>
          <Input
            type="email"
            placeholder="your.email@example.com"
            value={bookingData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue transition-all duration-300 hover:border-cyber-blue/50"
            required
          />
        </div>

        <div>
          <Label className="text-white font-sora">Project Type</Label>
          <Select value={bookingData.projectType} onValueChange={(value) => onInputChange('projectType', value)}>
            <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-cyber-blue transition-all duration-300 hover:border-cyber-blue/50">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-dark-space border-white/20">
              <SelectItem value="web-app" className="text-white">Web Application</SelectItem>
              <SelectItem value="mobile-app" className="text-white">Mobile App</SelectItem>
              <SelectItem value="3d-experience" className="text-white">3D Experience</SelectItem>
              <SelectItem value="ai-solution" className="text-white">AI Solution</SelectItem>
              <SelectItem value="blockchain" className="text-white">Blockchain</SelectItem>
              <SelectItem value="other" className="text-white">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-white font-sora">Message</Label>
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            value={bookingData.message}
            onChange={(e) => onInputChange('message', e.target.value)}
            className="flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 resize-none transition-all duration-300 hover:border-cyber-blue/50"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BookingForm;
