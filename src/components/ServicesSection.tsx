
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      title: 'AI-Powered Web Apps',
      shortDescription: 'Intelligent applications that learn and adapt to user behavior.',
      fullDescription: 'Build cutting-edge web applications powered by machine learning algorithms that understand and adapt to your users\' needs. Our AI solutions include natural language processing, predictive analytics, and adaptive user interfaces that evolve with usage patterns.',
      icon: '🤖',
      features: ['Machine Learning Integration', 'Adaptive User Interfaces', 'Predictive Analytics', 'Natural Language Processing'],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      size: 'large' // Takes up 2 columns
    },
    {
      title: '3D Interactive Experiences',
      shortDescription: 'Immersive 3D interfaces and visualizations.',
      fullDescription: 'Create stunning 3D web experiences that captivate users with interactive visualizations, WebGL integration, and real-time rendering. Perfect for product showcases, virtual tours, and immersive storytelling.',
      icon: '🎮',
      features: ['WebGL Integration', 'Real-time Rendering', 'Interactive Animations', 'Cross-platform Support'],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      size: 'medium'
    },
    {
      title: 'Blockchain Solutions',
      shortDescription: 'Secure, decentralized applications and smart contracts.',
      fullDescription: 'Develop robust blockchain applications with smart contracts, DeFi protocols, and secure wallet integrations. We specialize in creating trustless systems that redefine digital transactions and ownership.',
      icon: '⛓️',
      features: ['Smart Contract Development', 'DeFi Protocols', 'NFT Marketplaces', 'Wallet Integration'],
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      size: 'medium'
    },
    {
      title: 'AR/VR Development',
      shortDescription: 'Next-generation augmented and virtual reality experiences.',
      fullDescription: 'Push the boundaries of reality with immersive AR/VR applications. From WebXR experiences to mobile AR apps, we create digital experiences that blur the line between virtual and physical worlds.',
      icon: '🥽',
      features: ['Immersive Experiences', 'Cross-platform VR', 'AR Mobile Apps', 'WebXR Development'],
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      size: 'tall' // Takes up 2 rows
    },
    {
      title: 'Cloud Architecture',
      shortDescription: 'Scalable, resilient cloud infrastructure solutions.',
      fullDescription: 'Design and implement cloud-native architectures that scale automatically with your business needs. Our solutions include microservices, containerization, and DevOps integration for maximum reliability and performance.',
      icon: '☁️',
      features: ['Auto-scaling Solutions', 'Microservices Architecture', 'DevOps Integration', 'Security by Design'],
      color: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'border-indigo-500/30',
      size: 'medium'
    },
    {
      title: 'IoT Integration',
      shortDescription: 'Smart device ecosystems and connectivity.',
      fullDescription: 'Connect the physical world to your digital infrastructure with comprehensive IoT solutions. We handle device management, real-time data processing, edge computing, and secure connectivity protocols.',
      icon: '📡',
      features: ['Device Management', 'Real-time Data Processing', 'Edge Computing', 'Secure Connectivity'],
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30',
      size: 'medium'
    }
  ];

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getGridClasses = (size: string, index: number) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-orbitron font-bold text-white glow-text mb-6"
            animate={{
              textShadow: [
                '0 0 10px rgba(0, 245, 255, 0.5)',
                '0 0 20px rgba(0, 245, 255, 0.8)',
                '0 0 10px rgba(0, 245, 255, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Services
          </motion.h2>
          <p className="text-lg text-white/80 font-sora max-w-2xl mx-auto">
            Discover our cutting-edge solutions designed to transform your digital presence
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative cursor-pointer group
                ${getGridClasses(service.size, index)}
                ${expandedCard === index ? 'z-20' : 'z-10'}
              `}
              onClick={() => handleCardClick(index)}
            >
              <motion.div
                className={`
                  h-full w-full bg-white/5 backdrop-blur-xl border ${service.borderColor} 
                  rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300
                  hover:bg-white/10 hover:border-opacity-50
                  ${expandedCard === index ? 'ring-2 ring-cyan-400/30 scale-[1.02]' : ''}
                  relative overflow-hidden
                `}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                layout
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300"
                    >
                      <span className="text-3xl">{service.icon}</span>
                    </motion.div>
                    
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 group-hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  {/* Title and Description */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-white/70 font-sora text-sm md:text-base leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300 flex-1">
                      {service.shortDescription}
                    </p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="pt-4 border-t border-white/10"
                          >
                            <p className="text-white/80 font-sora text-sm leading-relaxed mb-6">
                              {service.fullDescription}
                            </p>

                            <div className="space-y-3 mb-6">
                              <h4 className="text-white font-orbitron font-semibold text-sm mb-3">
                                Key Features:
                              </h4>
                              {service.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                  className="flex items-center space-x-3"
                                >
                                  <div className="w-4 h-4 bg-cyan-400/20 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400/30">
                                    <Check size={10} className="text-cyan-400" />
                                  </div>
                                  <span className="text-white/80 text-xs font-sora">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>

                            <motion.button
                              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl text-cyan-300 font-sora text-sm font-medium hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Learn More →
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [0, -20, -40],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
