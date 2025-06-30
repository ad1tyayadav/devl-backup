import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { Link } from 'react-router-dom';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  project: string;
}

const TestimonialSection: React.FC = () => {

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-r from-cyber-purple/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-l from-cyber-pink/10 to-transparent rounded-full filter blur-3xl" />
        {/* Floating particles */}
        {[...Array(20)].map((_, i: number) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-aquire text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 glow-text">
            Client Success Stories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Hear from the visionaries who trusted us to bring their digital dreams to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial: Testimonial, index: number) => {
            const clientUrl = `/client/${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <Link to={clientUrl} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative cursor-pointer"
                >
                  <div className="glass-morphism p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-cyber-blue/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden backdrop-blur-xl">

                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Floating orbs */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyber-blue/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyber-pink/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    {/* Quote icon with rotation */}
                    <motion.div
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-60 transition-all duration-300"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-blue" />
                    </motion.div>

                    {/* Stars with stagger animation */}
                    <div className="flex mb-4 sm:mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * i }}
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content with typing effect simulation */}
                    <motion.blockquote
                      className="text-white/90 font-sora text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      "{testimonial.content}"  
                    </motion.blockquote>

                    {/* Project tag with pulse effect */}
                    <motion.div
                      className="mb-4 sm:mb-6 relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="inline-block px-2 sm:px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-xs font-mono rounded-full border border-cyber-blue/30 group-hover:bg-cyber-blue/30 group-hover:border-cyber-blue/50 transition-all duration-300 relative overflow-hidden">
                        <span className="relative z-10">{testimonial.project}</span>
                        <div className="absolute inset-0 bg-cyber-blue/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                      </span>
                    </motion.div>

                    {/* Author section with enhanced animation */}
                    <div className="flex items-center mt-auto relative z-10">
                      <motion.div
                        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-cyber-blue/50 transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Rotating ring */}
                        <motion.div
                          className="absolute inset-0 border-2 border-transparent border-t-cyber-blue rounded-full opacity-0 group-hover:opacity-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>

                      <div className="ml-3 sm:ml-4">
                        <motion.div
                          className="text-white font-semibold font-sora text-sm sm:text-base group-hover:text-cyber-blue transition-colors duration-300"
                          whileHover={{ x: 2 }}
                        >
                          {testimonial.name}
                        </motion.div>
                        <motion.div
                          className="text-white/60 text-xs sm:text-sm font-sora"
                          whileHover={{ x: 2 }}
                        >
                          {testimonial.role}
                        </motion.div>
                        <motion.div
                          className="text-cyber-blue text-xs font-mono group-hover:text-cyber-pink transition-colors duration-300"
                          whileHover={{ x: 2 }}
                        >
                          {testimonial.company}
                        </motion.div>
                      </div>
                    </div>

                    {/* Enhanced corner accents with glow */}
                    <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-cyber-blue/0 group-hover:border-cyber-blue/80 rounded-tl-2xl transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,183,255,0.5)]" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-cyber-blue/0 group-hover:border-cyber-blue/80 rounded-br-2xl transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,183,255,0.5)]" />

                    {/* Scan line effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Additional social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="glass-morphism p-4 sm:p-6 rounded-xl border border-white/10 inline-block w-[75vw] sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-blue">50+</div>
                <div className="text-xs sm:text-sm font-sora">Projects Delivered</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/20 sm:block hidden" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-purple">98%</div>
                <div className="text-xs sm:text-sm font-sora">Client Satisfaction</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/20 sm:block hidden" />
              <div className="text-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-pink">24/7</div>
                  <div className="text-xs sm:text-sm font-sora">Support Available</div>
                </div>
              </div>
            </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;