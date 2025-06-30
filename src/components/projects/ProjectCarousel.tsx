
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

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

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  onProjectClick,
  isHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const animationRef = useRef<{ currentX: number; isPaused: boolean }>({
    currentX: 200,
    isPaused: false
  });
  const [isManualScrolling, setIsManualScrolling] = React.useState(false);

  // Create seamless loop by duplicating projects multiple times
  const duplicatedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const startAnimation = () => {
      if (animationRef.current.isPaused || isManualScrolling || duplicatedProjects.length === 0) return;
      
      const cardWidth = 420;
      const gap = 32;
      const totalCardWidth = cardWidth + gap;
      const singleSetWidth = projects.length * totalCardWidth;

      const startX = animationRef.current.currentX;
      const endX = startX - singleSetWidth;

      const distance = Math.abs(startX - endX);
      const duration = distance / singleSetWidth * 30;

      controls.start({
        x: endX,
        transition: {
          duration,
          ease: "linear"
        }
      }).then(() => {
        if (!animationRef.current.isPaused && !isManualScrolling) {
          animationRef.current.currentX = startX;
          controls.set({ x: startX });
          setTimeout(() => {
            if (!animationRef.current.isPaused && !isManualScrolling) {
              startAnimation();
            }
          }, 0);
        }
      });
    };

    if (!isHovered && !isManualScrolling && duplicatedProjects.length > 0) {
      animationRef.current.isPaused = false;
      startAnimation();
    } else {
      animationRef.current.isPaused = true;
      controls.stop();
    }
  }, [isHovered, isManualScrolling, controls, duplicatedProjects.length, projects.length]);

  const handleMouseEnter = () => {
    const element = scrollContainerRef.current;
    if (element) {
      const transform = window.getComputedStyle(element).transform;
      if (transform && transform !== 'none') {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const values = matrix[1].split(',').map(parseFloat);
          animationRef.current.currentX = values[4] || animationRef.current.currentX;
        }
      }
    }
    onMouseEnter();
  };

  const scrollLeft = () => {
    setIsManualScrolling(true);
    const newX = Math.min(animationRef.current.currentX + 450, 200);
    animationRef.current.currentX = newX;
    controls.start({
      x: newX,
      transition: { duration: 0.5, ease: "easeOut" }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 1000);
    });
  };

  const scrollRight = () => {
    setIsManualScrolling(true);
    const cardWidth = 420;
    const gap = 32;
    const totalCardWidth = cardWidth + gap;
    const singleSetWidth = projects.length * totalCardWidth;
    const minX = -(singleSetWidth * 2);
    const newX = Math.max(animationRef.current.currentX - 450, minX);
    animationRef.current.currentX = newX;
    controls.start({
      x: newX,
      transition: { duration: 0.5, ease: "easeOut" }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 1000);
    });
  };

  return (
    <div className="relative px-16 py-16">
      {/* Navigation Buttons */}
      <motion.button 
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg" 
        onClick={scrollLeft} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button 
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg" 
        onClick={scrollRight} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Horizontal scrolling container with extra space for hover effects */}
      <div className="relative h-[500px] w-full" style={{ overflow: 'visible' }}>
        <motion.div 
          ref={scrollContainerRef} 
          className="flex gap-8 absolute left-0" 
          animate={controls} 
          style={{
            width: `${duplicatedProjects.length * 420 + duplicatedProjects.length * 32 + 420}px`
          }} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={onMouseLeave}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${project.type}-${index}`}
              project={project}
              index={index}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
