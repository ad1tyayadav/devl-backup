import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorSection = () => {
  const highlights = [{
    icon: Users,
    value: "10K+",
    label: "Active Users",
    color: "from-blue-400 to-purple-500"
  }, {
    icon: TrendingUp,
    value: "$50K+",
    label: "Monthly Revenue",
    color: "from-green-400 to-teal-500"
  }, {
    icon: Rocket,
    value: "500+",
    label: "MVPs Launched",
    color: "from-orange-400 to-red-500"
  }];
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyber-purple/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-cyber-blue/10 to-transparent rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-aquire text-white mb-6">
            Investor <span className="text-cyber-blue">Opportunity</span>
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-4xl mx-auto mb-8">
            Join us in revolutionizing startup creation. DevLaunch is transforming how entrepreneurs 
            build and launch their ideas with AI-powered no-code solutions that deliver results in minutes, not months.
          </p>
          <p className="text-lg text-cyber-blue font-sora max-w-3xl mx-auto">We're raising $100K to accelerate growth, expand our AI capabilities, and capture a significant share of the $12B no-code platform market.</p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.1 + 0.3
          }} className="glass-morphism p-6 text-center rounded-xl hover:scale-105 transition-transform duration-300">
                
                <h3 className="text-2xl font-bold text-white font-orbitron mb-2">{highlight.value}</h3>
                <p className="text-white/70 font-sora">{highlight.label}</p>
              </motion.div>;
        })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link to="/investor-deck">
            <motion.button 
              className="bg-white/5 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 backdrop-blur-md border border-white/10 rounded-xl text-lg px-12 py-6 inline-flex items-center space-x-3 text-white font-semibold transition-all duration-300 hover:border-cyber-blue hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] hover:bg-cyber-blue/10"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              <span>View Full Investor Deck</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
          <p className="text-white/60 font-sora mt-4 text-sm">
            Comprehensive overview of our vision, traction, and growth potential
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorSection;
