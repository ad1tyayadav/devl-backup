import React from 'react'

export const AnimatedGrid = () => {
    return (
        <div className="fixed inset-0 opacity-20 bg-transparent text-white overflow-x-hidden relative">
            <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
    );
};