
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../data/servicesData';

interface ServicePreviewCardsProps {
  services: Service[];
  currentService: number;
  currentCard: number;
  onServiceSelect: (index: number) => void;
}

const ServicePreviewCards: React.FC<ServicePreviewCardsProps> = ({
  services,
  currentService,
  currentCard,
  onServiceSelect
}) => {
  return (
    <motion.div 
      className="flex relative -top-10 justify-center mt-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <div className="flex space-x-4 max-w-5xl overflow-hidden">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative cursor-pointer transition-all duration-700 ${
              index === currentService
                ? 'opacity-100 scale-100 ring-2 ring-cyan-400/40'
                : 'opacity-70 hover:opacity-100 scale-90 hover:scale-95'
            }`}
            onClick={() => onServiceSelect(index)}
            whileHover={{ y: -6, rotateY: 6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-xl p-4 w-48">
              <h4 className="text-sm font-mono font-semibold text-white mb-2 truncate">
                {service.title}
              </h4>
              <p className="text-xs text-white/60 mb-3 line-clamp-2">
                {service.subtitle}
              </p>
              <div className="flex space-x-1">
                {service.timeline.map((_, cardIndex) => (
                  <div
                    key={cardIndex}
                    className={`h-1.5 flex-1 rounded-full ${
                      index === currentService && cardIndex <= currentCard
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicePreviewCards;
