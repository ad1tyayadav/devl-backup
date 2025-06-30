
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ProjectModal } from './projects/ProjectModal';
import { ProjectCarousel } from './projects/ProjectCarousel';
import { ProjectTypeSwitch } from './projects/ProjectTypeSwitch';
import GlowBtn from './ui/GlowBtn';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  featured: boolean;
  type: 'client' | 'devlaunch';
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Job Search Platform",
    description: "Revolutionizing job searching with AI to match candidates with ideal opportunities.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
     images: [
      "https://images.pexels.com/photos/31452622/pexels-photo-31452622.jpeg",
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/16741732/pexels-photo-16741732.jpeg"
    ],
    tags: ["AI", "React", "Node.js", "Machine Learning"],
    featured: true,
    type: 'client',
    liveLink: "https://example.com/jobsearch",
    githubLink: "https://github.com/example/jobsearch"
  },
  {
    id: 2,
    title: "Decentralized Finance (DeFi) App",
    description: "A secure and transparent DeFi application built on blockchain technology.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/31452622/pexels-photo-31452622.jpeg",
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/16741732/pexels-photo-16741732.jpeg"
    ],
    tags: ["Blockchain", "DeFi", "Solidity", "Web3"],
    featured: true,
    type: 'devlaunch',
    liveLink: "https://example.com/defi",
    githubLink: "https://github.com/example/defi"
  },
  {
    id: 3,
    title: "Sustainable Energy Management",
    description: "Optimizing energy consumption using IoT and data analytics for a sustainable future.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/31452622/pexels-photo-31452622.jpeg",
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/16741732/pexels-photo-16741732.jpeg"
    ],
    tags: ["IoT", "Data Analytics", "Python", "Sustainability"],
    featured: false,
    type: 'client',
    liveLink: "https://example.com/energy",
    githubLink: "https://github.com/example/energy"
  },
  {
    id: 4,
    title: "AI-Driven Healthcare Diagnostics",
    description: "Improving healthcare outcomes with AI-powered diagnostic tools.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/31452622/pexels-photo-31452622.jpeg",
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/16741732/pexels-photo-16741732.jpeg"
    ],
    tags: ["AI", "Healthcare", "Machine Learning", "Python"],
    featured: false,
    type: 'devlaunch',
    liveLink: "https://example.com/healthcare",
    githubLink: "https://github.com/example/healthcare"
  },
  {
    id: 5,
    title: "Smart City Traffic Management",
    description: "Reducing traffic congestion and improving urban mobility with intelligent systems.",
    image: "https://images.unsplash.com/photo-1662947190722-5d272f82a526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZ2xlJTIwbG9nbyUyMGltYWdlfGVufDB8fDB8fHww",
    images: [
      "https://images.pexels.com/photos/31452622/pexels-photo-31452622.jpeg",
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/16741732/pexels-photo-16741732.jpeg"
    ],
    tags: ["Smart City", "IoT", "Data Analytics", "C++"],
    featured: false,
    type: 'client',
    liveLink: "https://example.com/traffic",
    githubLink: "https://github.com/example/traffic"
  },
  {
    id: 6,
    title: "Personalized Education Platform",
    description: "Enhancing learning experiences with personalized education paths.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/31452622/pexels-photo-31452622.jpeg",
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/16741732/pexels-photo-16741732.jpeg"
    ],
    tags: ["Education", "AI", "React", "Node.js"],
    featured: false,
    type: 'devlaunch',
    liveLink: "https://example.com/education",
    githubLink: "https://github.com/example/education"
  }
];

const ProjectsSection: React.FC = () => {
  const [projectType, setProjectType] = useState<'client' | 'devlaunch'>('client');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const getFilteredProjects = () => {
    return projectsData.filter(project => project.type === projectType);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          background: `radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)`
        }} />
        
        <div className="absolute inset-0 opacity-10" style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(0,245,255,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(139,92,246,0.05) 0%, transparent 50%)
          `
        }} />

        {[...Array(100)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute rounded-full bg-white" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.8 ? '2px' : '1px',
              height: Math.random() > 0.8 ? '2px' : '1px'
            }} 
            animate={{
              opacity: [0.1, 0.8, 0.1]
            }} 
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }} 
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title and description */}
        <div className="acontainer mx-auto text-center mb-16">
          <motion.h2 
            className="font-aquire text-4xl md:text-6xl text-white mb-6 glow-text" 
            initial={{
              opacity: 0,
              y: 50
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.8
            }} 
            viewport={{
              once: true
            }}
          >
            Mission Control: Projects
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg font-sora" 
            initial={{
              opacity: 0,
              y: 30
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.8,
              delay: 0.2
            }} 
            viewport={{
              once: true
            }}
          >
            Navigate through our space-age portfolio of innovative digital solutions
          </motion.p>
        </div>

        {/* Project Type Switch */}
        <ProjectTypeSwitch 
          projectType={projectType}
          onProjectTypeChange={setProjectType}
        />
        
        {/* Horizontally Scrolling Projects */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={projectType} 
              initial={{
                opacity: 0,
                y: 50
              }} 
              animate={{
                opacity: 1,
                y: 0
              }} 
              exit={{
                opacity: 0,
                y: -50
              }} 
              transition={{
                duration: 0.6
              }}
            >
              <ProjectCarousel
                projects={getFilteredProjects()}
                onProjectClick={openModal}
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
<div className="container relative top-6 mx-auto px-4 text-center cursor-pointer">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="relative group inline-block">
      <GlowBtn to={""} label='Just Hover ME :)' />
    </div>
  </motion.div>
</div>

      </div>
      
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
