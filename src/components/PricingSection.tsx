import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Blocks, Smartphone, Palette, Crown, ArrowRight } from 'lucide-react';
import { Code, Rocket, Cpu, BrainCircuit,} from "lucide-react"; 

const PricingSection = () => {
  // Generate random last 4 digits for each card
  const generateLastFour = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const services = [
    {
      title: "Basic Development",
      icon: Code,
      moreFeatures: [
        "E-commerce platforms",
        "CRM solutions",
        "Food delivery systems",
        "Landing page development",
        "Service apps (Chiltel)"
      ],
      price: "Starting from ₹89,999*",
      tag: "BASIC",
      lastFour: generateLastFour()
    },
    {
      title: "MVP Development",
      icon: Rocket,
      moreFeatures: [
        "Equity-based partnerships",
        "Rapid prototyping (Chiltel, Shaswat)",
        "Full-pack solutions (Easy2Trip)",
        "Energy sector MVPs (EnerzyFlow)",
        "Investor-ready products"
      ],
      price: "Equity-Based*",
      tag: "MVPs",
      lastFour: generateLastFour()
    },
    {
      title: "Scalable Solutions",
      icon: Cpu,
      moreFeatures: [
        "Platform development (MutaneX)",
        "Community apps (PujaPathSeva)",
        "Loyalty systems (Drippit)",
        "Enterprise suites (EnerzyFlow Main)",
        "Custom integrations"
      ],
      price: "Starting from ₹1,79,999*",
      tag: "INTERMEDIATE",
      lastFour: generateLastFour()
    },
    {
      title: "Advanced Tech",
      icon: BrainCircuit,
      moreFeatures: [
        "Blockchain wallets & bridges",
        "AI agents (BubAI)",
        "Web3 payment gateways",
        "Ecosystem projects (Prabaha)",
        "Devlaunch AI/SEO tools"
      ],
      price: "Starting from ₹3,49,999*",
      tag: "ADVANCED",
      lastFour: generateLastFour()
    }
  ];

  const handleActivate = () => {
    window.open("https://calendly.com/akshat2k24/new-meeting", "_blank");
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-700/10 to-transparent rounded-full filter blur-3xl" />

        {/* Starfield */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-aquire text-white mb-6 glow-text">
            Premium Service Cards
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Exclusive access to elite digital solutions
          </p>
        </motion.div>

        {/* Premium Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[22rem] [perspective:1000px]"
              >
                {/* Card Container with Flip Effect */}
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">

                  {/* Front of Card - American Express Style */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_100px_rgba(255,255,255,0.05)_inset,0_0_200px_rgba(255,255,255,0.02)_inset] border-2 border-gray-600/30 group-hover:shadow-[0_35px_70px_rgba(0,0,0,0.9),0_0_120px_rgba(255,255,255,0.08)_inset] transition-all duration-500">

                    {/* Premium metallic texture */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='30' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 2L10 12l10 10 10-10-10-10zM0 22l10-10 10 10-10 10-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Card Header */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <Crown className="text-amber-400" size={28} />
                        <div className="text-white font-bold text-lg tracking-wider">DevLaunch EXPRESS</div>
                      </div>
                    </div>

                    {/* Service Icon */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_30px_rgba(255,255,255,0.1)_inset,0_2px_4px_rgba(255,255,255,0.2)_inset] border border-amber-300/20">
                        <IconComponent size={28} className="text-gray-800 drop-shadow-sm" />
                      </div>
                    </div>

                    {/* Card Number - Showing only last 4 digits */}
                    <div className="absolute top-44 left-6 right-6">
                      <div className="text-gray-200 font-mono text-xl tracking-[0.3em] mb-2 font-medium drop-shadow-lg text-center"
                        style={{
                          textShadow: '0 2px 4px rgba(0,0,0,0.7), 0 0 10px rgba(255,255,255,0.1)'
                        }}>
                        XXXX XXXX XXXX {service.lastFour}
                      </div>
                    </div>

                    {/* Service Tag */}
                    <div className="absolute bottom-12 left-6 right-6">
                      <div className="flex justify-between items-center">
                        <div className="text-amber-400 font-bold text-lg tracking-wider">{service.tag}</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 rounded-md flex items-center justify-center shadow-[0_6px_15px_rgba(0,0,0,0.4),0_0_15px_rgba(255,255,255,0.15)_inset] border border-gray-300/30">
                            <div className="w-6 h-4 bg-gradient-to-br from-gray-100 to-gray-300 rounded shadow-[0_2px_4px_rgba(0,0,0,0.3)_inset]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-6 right-6">
                      <div className="text-xs text-gray-400 font-mono uppercase tracking-wider flex items-center">
                        Hover to Explore <ArrowRight className="ml-1" size={14} />
                      </div>
                    </div>

                    {/* Premium corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-amber-400/60 rounded-tl-3xl" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-amber-400/60 rounded-tr-3xl" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-amber-400/60 rounded-bl-3xl" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-amber-400/60 rounded-br-3xl" />
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl overflow-hidden shadow-[0_35px_70px_rgba(0,0,0,0.9),0_0_120px_rgba(255,255,255,0.08)_inset] border-2 border-gray-600/30">

                    {/* Black strip at the top */}
                    <div className="h-12 bg-black w-full mt-4" />

                    {/* Extended Features */}
                    <div className="px-8 pt-4">
                      <div className="space-y-3 font-bold max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-400/30 scrollbar-track-gray-800/50">
                        {service.moreFeatures.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="text-gray-300 text-sm flex items-center"
                          >
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0 shadow-lg" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Card Footer */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                      <div className="text-transparent bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text font-bold text-xl">
                        {service.price}
                      </div>

                      <motion.button
                        onClick={handleActivate}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 text-black font-bold text-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_30px_rgba(255,255,255,0.1)_inset] border border-amber-300/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_40px_rgba(255,255,255,0.15)_inset] transition-all duration-300 flex items-center"
                      >
                        ACTIVATE <ArrowRight className="ml-2" size={16} />
                      </motion.button>
                    </div>

                    {/* Premium corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-amber-400/60 rounded-tl-3xl" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-amber-400/60 rounded-tr-3xl" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-amber-400/60 rounded-bl-3xl" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-amber-400/60 rounded-br-3xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;  