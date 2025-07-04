import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, MapPin, Calendar, ExternalLink, Award, Zap, Users } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { getExtendedClientData } from '@/data/testimonials';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { AnimatedGrid } from '@/components/ui/AnimatedGrid';

const ClientPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  
  const client = testimonials.find((t: Testimonial) =>
    t.name.toLowerCase().replace(/\s+/g, '-') === name
);


useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  if (!client) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Client not found</h1>
          <Link to="/" className="text-cyber-blue hover:text-cyber-pink transition-colors">
            <FloatingParticles />
            <AnimatedGrid />
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const extendedData = getExtendedClientData(client);

  return (
    <div className="min-h-screen bg-transparent text-white font-sora relative overflow-hidden">
     <AnimatedGrid/>
     <FloatingParticles/>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-cyber-blue transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="relative inline-block">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src={client.image}
                alt={client.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyber-blue/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl sm:text-5xl font-bold font-long mb-2 glow-text"
            >
              {client.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl text-cyber-blue mb-2"
            >
              {client.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-white/80"
            >
              {client.company}
            </motion.p>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center gap-1 mt-4"
            >
              {[...Array(client.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="rounded-2xl p-8 mb-8 border border-white"
          >
            <h2 className="text-2xl font-bold font-long mb-6 text-center">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-cyber-blue mx-auto mb-2" />
                <p className="text-sm text-white/60">Completed</p>
                <p className="font-semibold">{extendedData.projectDate}</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-cyber-purple mx-auto mb-2" />
                <p className="text-sm text-white/60">Duration</p>
                <p className="font-semibold">{extendedData.projectDuration}</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyber-pink mx-auto mb-2" />
                <p className="text-sm text-white/60">Team Size</p>
                <p className="font-semibold">{extendedData.teamSize}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-white/60">Location</p>
                <p className="font-semibold">{extendedData.location}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="rounded-2xl p-8 border border-white"
            >
              <h3 className="text-xl font-bold font-long mb-4 text-cyber-blue">Client Testimonial</h3>
              <blockquote className="text-lg leading-relaxed mb-4 italic">
                "{extendedData.testimonialExtended || client.content}"
              </blockquote>
              <div className="border-l-4 border-cyber-blue pl-4">
                <p className="text-sm text-white/80 mb-2">Original Review:</p>
                <p className="text-white/90">"{client.content}"</p>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="rounded-2xl p-8 border border-white"
            >
              <h3 className="text-xl font-bold font-long mb-4 text-cyber-purple">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyber-blue mb-2">Project Name</h4>
                  <p className="text-white/90">{client.project}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyber-blue mb-2">Industry</h4>
                  <p className="text-white/90">{extendedData.industry}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyber-blue mb-2">Budget Range</h4>
                  <p className="text-white/90">{extendedData.projectBudget}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyber-blue mb-2">Description</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{extendedData.projectDescription}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="rounded-2xl p-8 mt-8 border border-white"
          >
            <h3 className="text-xl font-bold font-long mb-6 text-center">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {extendedData.technologies?.map((tech: string, index: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                  className="px-4 py-2 bg-transparen text-cyber-blue rounded-full border border-cyber-blue/30 text-sm font-mono hover:bg-cyber-blue/30 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="rounded-2xl p-8 mt-8 border border-white"
          >
            <h3 className="text-xl font-bold font-long mb-6 text-center flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" />
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {extendedData.achievements?.map((achievement: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 + index * 0.2 }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 border border-white"
                >
                  <p className="text-white/90">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-bold font-long mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/80 mb-6">Let's bring your vision to life with cutting-edge technology</p>
            <Link
              to="https://calendly.com/akshat2k24/new-meeting"
              className="inline-flex items-center gap-2 px-8 py-3 border-white rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 group"
            >
              Start Your Project
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;