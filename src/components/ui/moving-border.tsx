import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "0.375rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px]",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%" />
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl px-5 py-2.5",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  duration = 3000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const progress = useMotionValue<number>(0);
  const initialized = useRef(false);
  const retryTimeout = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const initializeAnimation = () => {
    if (!pathRef.current) return false;
    
    try {
      const length = pathRef.current.getTotalLength();
      if (length > 0) {
        initialized.current = true;
        return true;
      }
    } catch (e) {
      // Fail silently
    }
    
    return false;
  };

  useEffect(() => {
    // Try to initialize immediately
    if (initializeAnimation()) return;

    // Set up observers for mobile devices
    const resizeObserver = new ResizeObserver(() => {
      if (!initialized.current) {
        initializeAnimation();
      }
    });

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !initialized.current) {
        initializeAnimation();
      }
    }, { threshold: 0.1 });

    if (pathRef.current) {
      resizeObserver.observe(pathRef.current);
      intersectionObserver.observe(pathRef.current);
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (retryTimeout.current) clearTimeout(retryTimeout.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  useAnimationFrame((time) => {
    if (!initialized.current || !pathRef.current) return;
    
    try {
      const length = pathRef.current.getTotalLength();
      if (length <= 0) return;

      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    } catch (e) {
      // Fail silently
    }
  });

  const x = useTransform(progress, (val) => {
    if (!pathRef.current) return 0;
    try {
      return pathRef.current.getPointAtLength(val).x;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (val) => {
    if (!pathRef.current) return 0;
    try {
      return pathRef.current.getPointAtLength(val).y;
    } catch {
      return 0;
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          pathLength="1"
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
          opacity: initialized.current ? 1 : 0,
        }}
      >
        <div
          className={cn(
            "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]"
          )}
        />
      </motion.div>
    </>
  );
};