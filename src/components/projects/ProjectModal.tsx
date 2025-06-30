
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye, Calendar, Users, Zap, Code, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  type: 'client' | 'devlaunch';
  liveLink?: string;
  githubLink?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  // Mock additional project details - in a real app, these would come from the project data
  const getProjectDetails = (project: Project) => ({
    overview: `${project.title} represents a cutting-edge solution that pushes the boundaries of modern web development. This project showcases innovative design patterns and robust functionality.`,
    features: [
      'Responsive design across all devices',
      'Advanced user interface components',
      'Real-time data synchronization',
      'Optimized performance and SEO',
      'Secure authentication system'
    ],
    highlights: [
      'Built with modern React patterns',
      'TypeScript for type safety',
      'Tailwind CSS for rapid styling',
      'Framer Motion animations'
    ],
    timeline: '3-4 weeks',
    teamSize: project.type === 'client' ? '2-3 developers' : '1 developer',
    challenges: 'Implemented complex state management and created seamless user experience with advanced animations.'
  });

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4 overflow-y-auto" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-5xl w-full glass-morphism overflow-hidden shadow-2xl my-8" 
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: `
                0 25px 80px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.2),
                0 0 60px rgba(6,182,212,0.2),
                0 0 80px rgba(139,92,246,0.1)
              `
            }}
            initial={{ y: 50, opacity: 0, scale: 0.95 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }} 
            exit={{ y: 50, opacity: 0, scale: 0.95 }} 
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Neon Border */}
            <motion.div 
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'transparent',
                border: '2px solid transparent',
                backgroundColor: 'transparent',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                backgroundSize: '300% 300%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Close Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-30 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-cyber-blue/50" 
              onClick={onClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>

            {/* Project Image */}
            <div className="relative w-full h-72 overflow-hidden rounded-t-2xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Project Type Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-cyan-500/80 to-purple-500/80 border border-cyan-400/50 text-white backdrop-blur-sm px-3 py-1.5 font-sora text-sm">
                  {project.type === 'client' ? 'Client Project' : 'DevLaunch Project'}
                </Badge>
              </div>

              {/* Holographic overlay */}
              <motion.div 
                className="absolute inset-0" 
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      rgba(0,245,255,0.1) 0%,
                      transparent 30%,
                      rgba(139,92,246,0.1) 70%,
                      transparent 100%
                    )
                  `
                }} 
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)", 
                    "linear-gradient(225deg, rgba(139,92,246,0.1) 0%, transparent 30%, rgba(0,245,255,0.1) 70%, transparent 100%)", 
                    "linear-gradient(135deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)"
                  ]
                }} 
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} 
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              {/* Title and Description */}
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white leading-tight glow-text font-orbitron">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed font-sora">
                  {project.description}
                </p>
              </div>

              {/* Project Overview */}
              <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-white/50">
                <h3 className="text-xl font-semibold text-cyan-300 font-orbitron mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed font-sora">
                  {getProjectDetails(project).overview}
                </p>
              </div>

              
              {/* Project Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-morphism p-4 rounded-xl border border-white/10 hover:border-white/50 text-center">
                  <Calendar className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-400 font-sora">Timeline</div>
                  <div className="text-white font-semibold font-orbitron">{getProjectDetails(project).timeline}</div>
                </div>
                <div className="glass-morphism p-4 rounded-xl border border-white/10 hover:border-white/50 text-center">
                  <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-400 font-sora">Team Size</div>
                  <div className="text-white font-semibold font-orbitron">{getProjectDetails(project).teamSize}</div>
                </div>
                <div className="glass-morphism p-4 rounded-xl border border-white/10 hover:border-white/50 text-center">
                  <Code className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-400 font-sora">Type</div>
                  <div className="text-white font-semibold font-orbitron capitalize">{project.type}</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-white/50">
                <h3 className="text-xl font-semibold text-cyan-300 font-orbitron mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {getProjectDetails(project).features.map((feature, index) => (
                    <li key={index} className="text-gray-300 font-sora flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
              </div>

              {/* Technical Highlights */}
              <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-white/50">
                <h3 className="text-xl font-semibold text-cyan-300 font-orbitron mb-4">
                  Technical Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getProjectDetails(project).highlights.map((highlight, index) => (
                    <div key={index} className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg p-3">
                      <span className="text-gray-300 font-sora text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-cyan-300 font-orbitron">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className="bg-primary/10 border border-primary/20 text-white hover:bg-primary/20 transition-all duration-300 px-3 py-1.5 font-sora"

                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-white/50">
                <h3 className="text-xl font-semibold text-cyan-300 font-orbitron mb-3">
                  Challenges & Solutions
                </h3>
                <p className="text-gray-300 leading-relaxed font-sora">
                  {getProjectDetails(project).challenges}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                {project.liveLink && (
                  <Button 
                  className="bg-primary/10 border border-primary/20 text-white hover:bg-primary/20 transition-all duration-300 px-3 py-1.5 font-sora"

                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 hover:border-cyber-purple/50  px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm font-sora flex-1 md:flex-none" 
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Ambient Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full" 
                  style={{
                    left: `${5 + Math.random() * 90}%`,
                    top: `${5 + Math.random() * 90}%`
                  }} 
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: [0, Math.random() * 60 - 30],
                    y: [0, Math.random() * 60 - 30]
                  }} 
                  transition={{
                    duration: 4 + Math.random() * 4,
                    delay: Math.random() * 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
