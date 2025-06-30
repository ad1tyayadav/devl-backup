
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Video } from 'lucide-react';
import { format } from 'date-fns';
import ContactHeader from './contact/ContactHeader';
import BookingCalendar from './contact/BookingCalendar';
import TimeSlotSelector from './contact/TimeSlotSelector';
import BookingBenefits from './contact/BookingBenefits';
import BookingForm from './contact/BookingForm';
import MeetingSummary from './contact/MeetingSummary';
import ContactDetails from './contact/ContactDetails';

const ContactSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();

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
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ContactHeader />

        <div className="max-w-6xl mx-auto glass-morphism p-8 rounded-2xl">
          <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <div className="space-y-6">
              <BookingCalendar 
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />

              <TimeSlotSelector
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
              />

              <BookingBenefits />
            </div>

            {/* Booking Form */}
            <div className="space-y-6">
              <BookingForm 
                bookingData={bookingData}
                onInputChange={handleInputChange}
              />

              {selectedDate && selectedTime && (
                <MeetingSummary 
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              )}

              <Button
                type="submit"
                className="w-full cyber-button h-12 text-lg font-semibold hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300"
                disabled={!selectedDate || !selectedTime || !bookingData.name || !bookingData.email}
              >
                <Video className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Button>

              <ContactDetails />
            </div>
          </form>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyber-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/5 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default ContactSection;
