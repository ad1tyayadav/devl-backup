
import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalSrc: string;
  alt: string;
  className: string;
  onProcessed?: (processedSrc: string) => void;
}

const LogoProcessor: React.FC<LogoProcessorProps> = ({ 
  originalSrc, 
  alt, 
  className, 
  onProcessed 
}) => {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        // Fetch the original image
        const response = await fetch(originalSrc);
        const blob = await response.blob();
        
        // Load image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedSrc(processedUrl);
        
        if (onProcessed) {
          onProcessed(processedUrl);
        }
        
      } catch (err) {
        console.error('Error processing logo:', err);
        setError('Failed to process logo');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalSrc, onProcessed]);

  if (error) {
    return (
      <img
        src={originalSrc}
        alt={alt}
        className={className}
        draggable={false}
      />
    );
  }

  if (isProcessing || !processedSrc) {
    return (
      <div className={`${className} bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full animate-pulse`} />
    );
  }

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={className}
      draggable={false}
    />
  );
};

export default LogoProcessor;
