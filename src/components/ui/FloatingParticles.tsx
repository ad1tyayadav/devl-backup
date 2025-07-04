import React from 'react'
import { motion } from 'framer-motion';

export const FloatingParticles = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                    animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </div>
    );
};