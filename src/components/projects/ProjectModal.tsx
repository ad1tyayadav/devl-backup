import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from '@/data/projectData';
import ThreeBackground from '../ThreeBackground';
import GlowBtn from '../ui/GlowBtn';
import { useHeader } from '@/context/HeaderContext';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  const { setIsHeaderVisible } = useHeader();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsHeaderVisible(false);
    } else {
      document.body.style.overflow = 'unset';
      setIsHeaderVisible(true);
    }

    return () => {
      document.body.style.overflow = 'unset';
      setIsHeaderVisible(true);
    };
  }, [isOpen, setIsHeaderVisible]);

  useEffect(() => {
    setCurrentImageIndex(0);
    setImageLoadErrors(new Set());
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleImageError = (index: number) => {
    setImageLoadErrors(prev => new Set(prev).add(index));
  };

  const handleImageLoad = (index: number) => {
    setImageLoadErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const hasImages = project.images && Array.isArray(project.images) && project.images.length > 0;
  const hasMultipleImages = hasImages && project.images.length > 1;
  const currentImageHasError = imageLoadErrors.has(currentImageIndex);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-xl flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <ThreeBackground />
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-30 text-white/60 hover:text-white hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Image Section */}
            <div className="relative h-[60vh] sm:h-[55vh] md:h-[60vh] bg-black/20">
              {hasImages ? (
                <>
                  <div className="relative w-full h-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        {!currentImageHasError ? (
                          <img
                            src={project.images[currentImageIndex]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(currentImageIndex)}
                            onLoad={() => handleImageLoad(currentImageIndex)}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900/40 to-slate-800/40">
                            <div className="text-white/60 text-sm">Image failed to load</div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Gradient overlay & text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2 text-white">
                      <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                      {project.description && (
                        <p className="text-sm md:text-base text-white/80 max-w-2xl">{project.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Navigation */}
                  {hasMultipleImages && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white bg-black/20 rounded-full border border-white/10 hover:border-white/20"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white bg-black/20 rounded-full border border-white/10 hover:border-white/20"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}

                  {/* Indicators */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentImageIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white'
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black/30 text-white/60">
                  No image available
                </div>
              )}

              {/* Badge on top-left */}
              <div className="absolute top-3 left-3 z-20">
                <Badge className="bg-black/30 backdrop-blur-sm border border-white/20 text-white/90 px-2 py-1 text-xs font-medium">
                  {project.type === 'client' ? 'Client Work' : 'Personal Project'}
                </Badge>
              </div>
            </div>

            {/* Bottom Content */}
           <div className="relative px-3 py-4 sm:px-4 sm:py-5 space-y-3 sm:space-y-4 max-h-[230px] sm:max-h-[250px] overflow-hidden">
  {/* Responsive positioning for View Live button */}
  {project?.liveLink && (
    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
      <GlowBtn 
        to={project.liveLink} 
        label="View Live" 
        size="small" 
        newTab 
        className="text-xs sm:text-sm px-3 py-1.5 sm:px-4"
      />
    </div>
  )}

  {/* Tech Stack - responsive padding to avoid button overlap */}
  {project?.tags?.length > 0 && (
    <div className="space-y-1 pr-16 sm:pr-20"> 
      <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">
        Technology Stack
      </h3>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {project.tags.map((tag, index) => (
          <Badge
            key={index}
            className="bg-white/5 border border-white/10 text-white/80 px-2 py-0.5 sm:px-3 sm:py-1 text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )}

  {/* Type & Featured label - responsive spacing */}
  {(project?.featured || project?.type) && (
    <div className="text-xs text-white/60 flex items-center gap-2 sm:gap-3 pr-16 sm:pr-20">
      {project?.featured && (
        <span className="text-yellow-400 font-medium flex items-center">
          <Star className="w-3 h-3 mr-1 fill-yellow-400" />
          Featured
        </span>
      )}
      {project?.type && <span className="capitalize">{project.type} Project</span>}
    </div>
  )}
  
  {/* Fallback if project data isn't available */}
  {!project && (
    <div className="text-center p-4 text-white/60">
      <p>Project data not available</p>
    </div>
  )}
</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
