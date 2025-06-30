import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
    currentX: 0,
    isPaused: false
  });
  const [isManualScrolling, setIsManualScrolling] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create seamless loop by duplicating projects 3 times
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

      controls.start({
        x: endX,
        transition: {
          duration: 30, // Fixed duration for consistent speed
          ease: "linear"
        }
      }).then(() => {
        if (!animationRef.current.isPaused && !isManualScrolling) {
          // Reset position to equivalent content
          const resetPosition = animationRef.current.currentX + singleSetWidth;
          animationRef.current.currentX = resetPosition - singleSetWidth;
          
          controls.set({ x: resetPosition - singleSetWidth });
          startAnimation();
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
    const newX = animationRef.current.currentX + 450;
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
    const minX = -(singleSetWidth * 2) + totalCardWidth;
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
    <div className="relative  py-16" ref={containerRef}>

      {/* Horizontal scrolling container */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.div 
          ref={scrollContainerRef} 
          className="flex gap-8 absolute left-0" 
          animate={controls}
          initial={{ x: 0 }}
          style={{
            width: `${duplicatedProjects.length * 420 + (duplicatedProjects.length - 1) * 32}px`
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