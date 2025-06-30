import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from '@/data/projectData';
import ThreeBackground from '../ThreeBackground';
import GlowBtn from '../ui/GlowBtn';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset image index and errors when project changes
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
    console.error(`Image failed to load: ${project.images?.[index]}`);
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
            className="relative max-w-4xl w-full max-h-[90vh] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              boxShadow: `
                0 32px 64px rgba(0,0,0,0.5),
                inset 0 1px 0 rgba(255,255,255,0.1)
              `
            }}
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
              className="absolute top-4 right-4 md:top-6 md:right-6 z-30 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/20" 
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Image Carousel */}
            <div className="relative w-full h-52 sm:h-64 md:h-80 bg-gradient-to-br from-slate-900/30 to-slate-800/30">
              {hasImages ? (
                <>
                  <div className="relative w-full h-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute inset-0"
                      >
                        {!currentImageHasError ? (
                          <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(currentImageIndex)}
                            onLoad={() => handleImageLoad(currentImageIndex)}
                            loading="eager"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 flex items-center justify-center">
                            <div className="text-center space-y-2">
                              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/10"></div>
                              </div>
                              <div className="text-white/50 text-sm">Image unavailable</div>
                              <div className="text-white/30 text-xs">Failed to load image {currentImageIndex + 1}</div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Navigation Arrows */}
                  {hasMultipleImages && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-black/20 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-200"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-black/20 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-200"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                      </Button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex 
                              ? 'bg-white shadow-lg scale-125' 
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Image Counter */}
                  {hasMultipleImages && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/30 backdrop-blur-md rounded-full px-2 py-0.5 text-white/80 text-xs md:text-sm">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900/30 to-slate-800/30 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/10"></div>
                    </div>
                    <div className="text-white/50 text-sm">{project.title}</div>
                    <div className="text-white/30 text-xs">Preview not available</div>
                  </div>
                </div>
              )}

              {/* Project Type Badge */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4">
                <Badge className="bg-black/30 backdrop-blur-md border border-white/20 text-white/90 px-2 py-1 text-xs font-medium">
                  {project.type === 'client' ? 'Client Work' : 'Personal Project'}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 overflow-y-auto">
              {/* Header */}
              <div className="space-y-2 md:space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                  {project.title}
                </h2>
                {project.description && (
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Tech Stack */}
              {project.tags && Array.isArray(project.tags) && project.tags.length > 0 && (
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-wider">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        className="bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-200 px-2 py-0.5 md:px-3 md:py-1 text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              {(project.featured || project.type) && (
                <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                  {project.featured && (
                    <span className="text-yellow-400 font-medium">★ Featured</span>
                  )}
                  {project.type && (
                    <span className="text-white/60 capitalize">{project.type} Project</span>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2 md:pt-4">
                {project.liveLink && (
                  <GlowBtn
                    to={project.liveLink}
                    label='View Live'
                    size='small' 
                  />
                )}
              </div>
            </div>

            {/* Subtle gradient overlay */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background: `
                  radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%)
                `
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};