import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Search } from 'lucide-react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { Link } from 'react-router-dom';
import { AnimatedGrid } from '@/components/ui/AnimatedGrid';
import { FloatingParticles } from '@/components/ui/FloatingParticles';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Real projects data
  const projectsData = [
    {
      id: 1,
      title: "SEO Optimizer",
      description: "AI-powered SEO tool providing keyword insights, competitor analysis, and ranking optimization.",
      image: "/images/seotool.png",
      images: ["/images/seotool.png"],
      tags: ["AI", "FastAPI", "PostgreSQL", "OpenAI", "Tailwind CSS"],
      featured: true,
      type: "devlaunch",
      liveLink: "https://seo-tool-rosy.vercel.app/",
      githubLink: "",
      category: "ai",
      year: "2024",
      status: "completed"
    },
    {
      id: 2,
      title: "Yorigin",
      description: "Track rankings, contests, and analytics across competitive programming platforms like Codeforces & LeetCode.",
      image: "/images/yorigin.png",
      images: ["/images/yorigin.png", "/images/yorigin2.png", "/images/yorigin3.png"],
      tags: ["Next.js", "Firebase", "APIs", "PostgreSQL"],
      featured: true,
      type: "devlaunch",
      liveLink: "https://www.yorigin.in/",
      githubLink: "",
      category: "web",
      year: "2024",
      status: "completed"
    },
    {
      id: 3,
      title: "CollegeSphere",
      description: "Predict top colleges based on JEE scores and preferences using AI & admission trend analysis.",
      image: "/images/college.png",
      images: ["/images/college2.png", "/images/college.png"],
      tags: ["TensorFlow", "Django", "Python", "PostgreSQL", "Tailwind CSS"],
      featured: true,
      type: "devlaunch",
      liveLink: "https://collegesphere-algoaces-projects.vercel.app/",
      githubLink: "",
      category: "ai",
      year: "2024",
      status: "completed"
    },
    {
      id: 4,
      title: "FundingMatch",
      description: "Coming soon: AI-driven platform to connect startups with ideal investors based on funding stage and domain.",
      image: "https://images.pexels.com/photos/7414050/pexels-photo-7414050.jpeg",
      images: ["https://images.pexels.com/photos/7414050/pexels-photo-7414050.jpeg"],
      tags: ["Next.js", "Node.js", "AI"],
      featured: false,
      type: "devlaunch",
      liveLink: "",
      githubLink: "",
      category: "ai",
      year: "2024",
      status: "in-progress"
    },
    {
      id: 5,
      title: "PujaPathSeva",
      description: "Experience divine rituals live, book priests online, and personalize pujas through this spiritual platform.",
      image: "https://www.pujapathseva.com/lovable-uploads/42198a91-6931-4d7e-8fdd-76693b94db9a.png",
      images: [
        "https://www.pujapathseva.com/lovable-uploads/6b3c3fe3-1584-4238-8ee9-22b9404757b4.png",
        "https://www.pujapathseva.com/lovable-uploads/22d6c435-2db7-4a06-94b9-3aded2eb0da3.png",
        "https://www.pujapathseva.com/lovable-uploads/42198a91-6931-4d7e-8fdd-76693b94db9a.png"
      ],
      tags: ["AI", "React", "Node.js", "MongoDB"],
      featured: true,
      type: "client",
      liveLink: "http://www.pujapathseva.com",
      githubLink: "",
      category: "web",
      year: "2024",
      status: "completed"
    },
    {
      id: 6,
      title: "Chiltel",
      description: "An advanced e-commerce platform that allows users to book services and purchase electronic appliances. It includes multiple panels for different roles such as Admin, Sub-admin, Partners, and Sellers.",
      image: "https://www.chiltel.com/assets/2.webp",
      images: ["https://www.chiltel.com/assets/3.webp", "https://www.chiltel.com/assets/1.webp"],
      tags: ["React", "Node.js", "Firebase"],
      featured: false,
      type: "client",
      liveLink: "https://www.chiltel.com",
      githubLink: "",
      category: "web",
      year: "2024",
      status: "completed"
    },
    {
      id: 7,
      title: "MutaneX",
      description: "A revolutionary AI-driven precision medicine SaaS platform that provides personalized treatment recommendations using genetic profiling.",
      image: "/images/mutanex.png",
      images: ["/images/mutanex3.png", "/images/mutanex2.png"],
      tags: ["TensorFlow", "Django", "PostgreSQL", "Medical AI"],
      featured: true,
      type: "client",
      liveLink: "https://mutanex.com",
      githubLink: "",
      category: "ai",
      year: "2024",
      status: "completed"
    },
    {
      id: 8,
      title: "BuyOneGram",
      description: "An online grocery marketplace where users can buy products like wheat, rice, pulses, and more in precise quantities.",
      image: "https://i.ibb.co/wyrWSB3/Buy-One-Gram.png",
      images: ["https://i.ibb.co/wyrWSB3/Buy-One-Gram.png", "https://i.ibb.co/mXdkbyc/ban2.webp"],
      tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
      featured: false,
      type: "client",
      liveLink: "https://shop.buyonegram.com/",
      githubLink: "",
      category: "web",
      year: "2024",
      status: "completed"
    },
    {
      id: 9,
      title: "Easy2Trip",
      description: "A feature-rich travel booking platform similar to MakeMyTrip, offering flights, hotels, and holiday package bookings.",
      image: "/images/ez2trip.png",
      images: ["/images/ez2trip.png", "/images/ez2trip3.png", "/images/ez2trip2.png"],
      tags: ["Next.js", "Node.js", "Stripe", "Google Maps API"],
      featured: true,
      type: "client",
      liveLink: "https://booking-eta-navy.vercel.app/",
      githubLink: "",
      category: "web",
      year: "2024",
      status: "completed"
    },
    {
      id: 10,
      title: "Drippit",
      description: "A hyper-personalized fashion shopping platform for Gen Z that enhances product discovery, engagement, and conversions.",
      image: "/images/drippit.png",
      images: ["/images/drippit.png", "/images/drippit2.png", "/images/drippit3.png"],
      tags: ["React", "Node.js", "Firebase", "QR Code API"],
      featured: false,
      type: "client",
      liveLink: "https://drippit.in/",
      githubLink: "",
      category: "web",
      year: "2024",
      status: "completed"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'featured', label: 'Featured', count: projectsData.filter(p => p.featured).length },
    { id: 'client', label: 'Client Work', count: projectsData.filter(p => p.type === 'client').length },
    { id: 'devlaunch', label: 'Dev Launch', count: projectsData.filter(p => p.type === 'devlaunch').length },
    { id: 'ai', label: 'AI & ML', count: projectsData.filter(p => p.category === 'ai').length },
    { id: 'web', label: 'Web Apps', count: projectsData.filter(p => p.category === 'web').length }
  ];

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'featured' && project.featured) ||
                         (filter === 'client' && project.type === 'client') ||
                         (filter === 'devlaunch' && project.type === 'devlaunch') ||
                         (filter === 'ai' && project.category === 'ai') ||
                         (filter === 'web' && project.category === 'web');
    
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedGrid />
      <FloatingParticles />

      <div className="relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-4 sm:p-6 lg:p-8"
        >
          <Link to={'/'} className="inline-flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Explore our portfolio of innovative solutions spanning AI, web development, and cutting-edge technologies
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-end w-full lg:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                      filter === category.id
                        ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                        : 'bg-white/5 text-white/70 border border-white/20 hover:bg-white/10'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-white/60 text-lg mb-4">No projects found matching your criteria</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-400/30 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16 sm:mt-20 px-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative technology solutions
            </p>
            <a
              href="https://calendly.com/akshat2k24/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 group text-sm sm:text-base"
            >
              Start Your Project
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default ProjectsPage;