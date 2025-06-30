
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, startOfDay, isSameDay } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock, Video, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !bookingData.name || !bookingData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a date and time.",
        variant: "destructive",
      });
      return;
    }

    // Generate Google Meet link (in a real app, this would be done on the backend)
    const meetingId = Math.random().toString(36).substring(2, 15);
    const googleMeetLink = `https://meet.google.com/${meetingId}`;
    
    console.log('Booking submitted:', {
      ...bookingData,
      date: selectedDate,
      time: selectedTime,
      meetLink: googleMeetLink
    });

    toast({
      title: "Meeting Scheduled!",
      description: `Your Google Meet is scheduled for ${format(selectedDate, 'PPP')} at ${selectedTime}. Check your email for the meeting link.`,
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setBookingData({ name: '', email: '', projectType: '', message: '' });
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="cyber-button text-lg py-4 px-8">
            <Video className="w-5 h-5 mr-2" />
            Schedule Google Meet
          </Button>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="glass-morphism max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron text-white glow-text">
            Schedule Your Project Discussion
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Calendar Section */}
          <div className="space-y-6">
            <div>
              <Label className="text-white font-sora text-lg mb-4 block">
                <CalendarIcon className="w-5 h-5 inline mr-2" />
                Select Date
              </Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < startOfDay(new Date())}
                className="rounded-lg border border-white/20 bg-white/5 p-3 pointer-events-auto"
              />
            </div>

            {selectedDate && (
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
                      className={`h-12 ${
                        selectedTime === time 
                          ? 'bg-cyber-blue text-white' 
                          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Booking Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label className="text-white font-sora">Name *</Label>
                <Input
                  placeholder="Your full name"
                  value={bookingData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                  required
                />
              </div>

              <div>
                <Label className="text-white font-sora">Email *</Label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={bookingData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                  required
                />
              </div>

              <div>
                <Label className="text-white font-sora">Project Type</Label>
                <Select value={bookingData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-cyber-blue">
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
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 resize-none"
                />
              </div>
            </div>

            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-morphism p-4 rounded-lg border border-cyber-blue/30"
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
            )}

            <Button
              type="submit"
              className="w-full cyber-button h-12 text-lg font-semibold"
              disabled={!selectedDate || !selectedTime || !bookingData.name || !bookingData.email}
            >
              <Video className="w-5 h-5 mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingCalendar;