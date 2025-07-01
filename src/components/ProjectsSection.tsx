
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  title: "SEO Optimizer",
  description: "AI-powered SEO tool providing keyword insights, competitor analysis, and ranking optimization.",
  image: "/images/seotool.png",
  images: [
    "/images/seotool.png"
  ],
  tags: ["AI", "FastAPI", "PostgreSQL", "OpenAI", "Tailwind CSS"],
  featured: true,
  type: "devlaunch",
  liveLink: "https://seo-tool-rosy.vercel.app/",
  githubLink: ""
},
{
  id: 2,
  title: "Yorigin",
  description: "Track rankings, contests, and analytics across competitive programming platforms like Codeforces & LeetCode.",
  image: "/images/yorigin.png",
  images: [
    "/images/yorigin.png",
    "/images/yorigin2.png",
    "/images/yorigin3.png",
  ],
  tags: ["Next.js", "Firebase", "APIs", "PostgreSQL"],
  featured: true,
  type: "devlaunch",
  liveLink: "https://www.yorigin.in/",
  githubLink: ""
},
{
  id: 3,
  title: "CollegeSphere",
  description: "Predict top colleges based on JEE scores and preferences using AI & admission trend analysis.",
  image: "/images/college.png",
  images: [
    "/images/college2.png",
    "/images/college.png"
  ],
  tags: ["TensorFlow", "Django", "Python", "PostgreSQL", "Tailwind CSS"],
  featured: true,
  type: "devlaunch",
  liveLink: "https://collegesphere-algoaces-projects.vercel.app/",
  githubLink: ""
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
  githubLink: ""
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
  githubLink: ""
},
{
  id: 6,
  title: "Chiltel",
  description: "An advanced e-commerce platform that allows users to book services and purchase electronic appliances. It includes multiple panels for different roles such as Admin, Sub-admin, Partners, and Sellers. Users can browse products, book services, and track orders while sellers can manage inventory and process orders.",
  image: "https://www.chiltel.com/assets/2.webp",
  images: ["https://www.chiltel.com/assets/3.webp",
    "https://www.chiltel.com/assets/1.webp"
  ],
  tags: ["React", "Node.js", "Firebase"],
  featured: false,
  type: "client",
  liveLink: "https://www.chiltel.com",
  githubLink: ""
},
{
  id: 7,
  title: "MutaneX",
  description: "A revolutionary AI-driven precision medicine SaaS platform that provides personalized treatment recommendations using genetic profiling. It accelerates diagnosis and treatment plans by analyzing biological data and predicting genetic mutations without requiring genetic tests.",
  image: "/images/mutanex.png",
  images: ["/images/mutanex3.png", "/images/mutanex2.png"],
  tags: ["TensorFlow", "Django", "PostgreSQL", "Medical AI"],
  featured: true,
  type: "client",
  liveLink: "https://mutanex.com",
  githubLink: ""
},
{
  id: 8,
  title: "BuyOneGram",
  description: "An online grocery marketplace where users can buy products like wheat, rice, pulses, and more in precise quantities. The platform ensures transparency in pricing, high-quality sourcing, and seamless home delivery, making grocery shopping more convenient and efficient.",
  image: "https://i.ibb.co/wyrWSB3/Buy-One-Gram.png",
  images: ["https://i.ibb.co/wyrWSB3/Buy-One-Gram.png","https://i.ibb.co/mXdkbyc/ban2.webp",],
  tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
  featured: false,
  type: "client",
  liveLink: "https://shop.buyonegram.com/",
  githubLink: ""
},
{
  id: 9,
  title: "Easy2Trip",
  description: "A feature-rich travel booking platform similar to MakeMyTrip, offering flights, hotels, and holiday package bookings. It includes AI-based trip planning, price comparisons, and real-time travel alerts.",
  image: "/images/ez2trip.png",
  images: ["/images/ez2trip.png", "/images/ez2trip3.png", "/images/ez2trip2.png"],
  tags: ["Next.js", "Node.js", "Stripe", "Google Maps API"],
  featured: true,
  type: "client",
  liveLink: "https://booking-eta-navy.vercel.app/",
  githubLink: ""
},
{
  id: 10,
  title: "Drippit",
  description: "A hyper-personalized fashion shopping platform for Gen Z that enhances product discovery, engagement, and conversions. Features include AI-powered styling recommendations, social shopping with peer approvals, interactive product discovery, and gamified shopping experiences to increase user retention and conversion rates.",
  image: "/images/drippit.png",
  images: ["/images/drippit.png", "/images/drippit2.png", "/images/drippit3.png"],
  tags: ["React", "Node.js", "Firebase", "QR Code API"],
  featured: false,
  type: "client",
  liveLink: "https://drippit.in/",
  githubLink: ""
}
]

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
              <GlowBtn to={"/"} label='View All Project' />
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
