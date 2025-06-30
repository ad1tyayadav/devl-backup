import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';
import { motion } from 'framer-motion'
import GlowBtn from './ui/GlowBtn';

const TempBooking: React.FC = () => {
    return (
        <section id="booking" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center glass-morphism p-8 rounded-2xl shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                    <h2 className="text-3xl font-aquire text-white mb-4">Book Your Consultation</h2>
                    <p className="text-gray-300 mb-6">
                        Schedule a call with our team to discuss your project. Our new booking system is coming soon!
                    </p>
                    <a 
                      href="https://calendly.com/akshat2k24/new-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mx-auto max-w-max"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group inline-block"
                      >

                        <GlowBtn to={'https://calendly.com/akshat2k24/new-meeting'} label='Book Your Call!' />
                      </motion.div>
                    </a>

                </div>
            </div>
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyber-blue/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/5 to-transparent rounded-full blur-3xl" />
        </section>
    );
};

export default TempBooking;