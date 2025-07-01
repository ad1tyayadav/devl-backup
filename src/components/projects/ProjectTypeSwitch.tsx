import React from "react";
import { motion } from "framer-motion";
import { Code, Brain } from "lucide-react";

interface ProjectTypeSwitchProps {
  projectType: "client" | "devlaunch";
  onProjectTypeChange: (type: "client" | "devlaunch") => void;
}

export const ProjectTypeSwitch: React.FC<ProjectTypeSwitchProps> = ({
  projectType,
  onProjectTypeChange,
}) => {
  const isDev = projectType === "devlaunch";

  return (
    <div className="relative w-fit mx-auto mt-10 rounded-full overflow-hidden">
      {/* Gradient border */}
      <div className="p-[1px] rounded bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg">
        <div className="relative flex w-56 h-11 rounded-full bg-gray-900/90 backdrop-blur-sm">
          {/* Client Option */}
          <button
            onClick={() => onProjectTypeChange("client")}
            className={`flex-1 flex items-center justify-center gap-2 z-10 transition-all ${
              !isDev 
                ? "text-white" 
                : "text-white/40 hover:text-white/60"
            }`}
          >
            <Code className={`h-4 w-4 transition-transform ${!isDev ? "" : "scale-90"}`} />
            <span className="text-sm font-medium">Client</span>
          </button>

          {/* DevLaunch Option */}
          <button
            onClick={() => onProjectTypeChange("devlaunch")}
            className={`flex-1 flex items-center justify-center gap-2 z-10 transition-all ${
              isDev 
                ? "text-white" 
                : "text-white/40 hover:text-white/60"
            }`}
          >
            <Brain className={`h-4 w-4 transition-transform ${isDev ? "" : "scale-90"}`} />
            <span className="text-sm font-medium">DevLaunch</span>
          </button>

          {/* Active Indicator */}
          <motion.div
            className="absolute inset-0 w-1/2 rounded bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
            animate={{
              left: isDev ? "50%" : "0%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Highlight effect */}
            <div className="absolute inset-0 rounded border border-white/10" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded" />
          </motion.div>
          
          {/* Divider */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-px h-6 bg-white/10 z-20" />
          </div>
        </div>
      </div>
    </div>
  );
};