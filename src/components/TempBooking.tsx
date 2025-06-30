import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';
import { motion } from 'framer-motion'

const TempBooking: React.FC = () => {
    return (
        <section id="booking" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center glass-morphism p-8 rounded-2xl shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                    <h2 className="text-3xl font-aquire text-white mb-4">Book Your Consultation</h2>
                    <p className="text-gray-300 mb-6">
                        Schedule a call with our team to discuss your project. Our new booking system is coming soon!
                    </p>
                    <Link to="https://calendly.com/akshat2k24/new-meeting">
                        <motion.button
                            className="bg-white/5 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 backdrop-blur-md border border-white/10 rounded-xl text-lg px-12 py-6 inline-flex items-center space-x-3 text-white font-semibold transition-all duration-300 hover:border-cyber-blue hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] hover:bg-cyber-blue/10"
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                        >
                            <span>Book your call now!</span>
                            <Video className="w-5 h-5 mr-2" />
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyber-blue/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/5 to-transparent rounded-full blur-3xl" />
        </section>
    );
};

export default TempBooking;