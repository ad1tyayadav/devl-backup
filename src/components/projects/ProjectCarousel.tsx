import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  type: "client" | "devlaunch";
  liveLink?: string;
  githubLink?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export interface ProjectCarouselHandle {
  handleCloseModal: () => void;
}

const ProjectCarousel = forwardRef<ProjectCarouselHandle, ProjectCarouselProps>(
  ({ projects, onProjectClick }, ref) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [maxIndex, setMaxIndex] = useState(0);

    // Responsive card width
    const cardWidth = isMobile ? 300 : 420;
    const gap = 32;
    const cardStep = cardWidth + gap;

    useImperativeHandle(ref, () => ({
      handleCloseModal: () => {
        setIsModalOpen(false);
      },
    }));

    // Mobile check
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    // Calculate maxIndex for navigation limits
    useEffect(() => {
      const updateMaxIndex = () => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const visibleCards = Math.floor(containerWidth / cardStep);
        const max = Math.max(0, projects.length - visibleCards);
        setMaxIndex(max);
        if (currentIndex > max) setCurrentIndex(max);
      };

      updateMaxIndex();
      window.addEventListener("resize", updateMaxIndex);
      return () => window.removeEventListener("resize", updateMaxIndex);
    }, [projects.length, cardStep, currentIndex]);

    useEffect(() => {
      const newX = -currentIndex * cardStep;
      controls.start({
        x: newX,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }, [currentIndex, controls, cardStep]);

    const handleProjectClick = (project: Project) => {
      setIsModalOpen(true);
      onProjectClick(project);
    };

    const handleDragStart = (
      e: MouseEvent | TouchEvent | PointerEvent
    ): void => {
      if (isMobile) {
        setIsDragging(true);
        setStartX(
          "touches" in e
            ? e.touches[0].clientX
            : "clientX" in e
            ? e.clientX
            : 0
        );
      }
    };

    const handleDragEnd = (
      e: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ): void => {
      if (!isMobile || !isDragging) return;

      setIsDragging(false);
      const endX =
        "touches" in e
          ? e.changedTouches[0].clientX
          : "clientX" in e
          ? e.clientX
          : 0;
      const diff = startX - endX;

      // Only allow swipe if it would stay within bounds
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < maxIndex) {
          scrollRight();
        } else if (diff < 0 && currentIndex > 0) {
          scrollLeft();
        }
      }
    };

    const scrollLeft = () => {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const scrollRight = () => {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= maxIndex;

    // Calculate dynamic drag constraints
    const getDragConstraints = () => {
      if (maxIndex === 0) return { left: 0, right: 0 };
      
      return {
        left: -maxIndex * cardStep,
        right: 0,
      };
    };

    return (
      <div className="relative py-16" ref={containerRef}>
        {/* Navigation Buttons (only for non-mobile) */}
        {!isMobile && (
          <div className="absolute top-1/2 left-4 right-4 flex justify-between z-10 pointer-events-none sm:pointer-events-auto">
            <button
              onClick={scrollLeft}
              disabled={isAtStart}
              className={`bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-2 shadow-lg transition-all ${
                isAtStart ? "opacity-40 cursor-not-allowed" : ""
              }`}
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={isAtEnd}
              className={`bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-2 shadow-lg transition-all ${
                isAtEnd ? "opacity-40 cursor-not-allowed" : ""
              }`}
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Scrolling Cards */}
        <div className="relative h-[80vh] w-full overflow-hidden">
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-8 px-4 sm:px-0"
            animate={controls}
            initial={{ x: 0 }}
            drag={isMobile ? "x" : false}
            dragConstraints={getDragConstraints()} // Dynamic constraints
            dragElastic={0.05} // Reduced elastic effect
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{
              width: `${
                projects.length * cardWidth + (projects.length - 1) * gap
              }px`,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${project.type}-${index}`}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
                isActive={index === currentIndex}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
);

export default ProjectCarousel;