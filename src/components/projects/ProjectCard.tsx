import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
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

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer w-full">
      <CardContainer className="w-full">
        <CardBody
          className="
            relative group/card border bg-transparent rounded-xl
            p-3 sm:p-6
            w-full
            min-h-[320px] sm:min-h-[500px] lg:min-h-[540px]
            flex flex-col justify-between
            hover:shadow-xl transition-shadow
          "
        >
          {/* Title */}
          <CardItem
            translateZ="60"
            className="text-white text-base sm:text-lg md:text-xl font-bold font-long pointer-events-none"
          >
            {project.title}
          </CardItem>

          {/* Description */}
          <CardItem
            translateZ="40"
            as="p"
            className="text-neutral-300 text-xs sm:text-sm md:text-base mt-1 sm:mt-2 font-sora line-clamp-3 pointer-events-none"
          >
            {project.description}
          </CardItem>

          {/* Image */}
          <CardItem translateZ="100" className="mt-2 sm:mt-4 flex-grow pointer-events-none">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg group-hover/card:shadow-cyan-500/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </CardItem>

          {/* Tags */}
          <div className="mt-2 sm:mt-4 flex flex-wrap gap-1.5 pointer-events-none">
            {project.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                className="bg-gray-700/50 border border-gray-600 text-gray-300 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge className="bg-gray-700/50 border border-gray-600 text-gray-300 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* CTA */}
          <CardItem
            translateZ="20"
            className="text-cyan-400 text-xs sm:text-sm text-center mt-2 sm:mt-4 pointer-events-none"
          >
            <span className="hidden sm:inline">Click to explore details</span>
            <span className="sm:hidden">Tap to explore</span>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};