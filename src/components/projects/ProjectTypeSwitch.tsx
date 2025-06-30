import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="relative w-fit mx-auto mt-10 px-4 py-2 rounded border border-white/10 bg-black/30 backdrop-blur-md">
      {/* Switch Button Area */}
      <button
        onClick={() => onProjectTypeChange(isDev ? "client" : "devlaunch")}
        className="relative w-48 h-12 overflow-hidden rounded-full"
      >
        {/* Sliding Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={projectType}
              className="absolute inset-0 w-full h-full flex items-center justify-center gap-2"
              initial={{ x: isDev ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isDev ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {isDev ? (
                <>
                  <Brain className="h-5 w-5 text-purple-400" />
                  <span className="text-purple-300 font-mono font-medium">
                    DevLaunch AI
                  </span>
                </>
              ) : (
                <>
                  <span className="text-cyan-300 font-mono font-medium">
                    Client Projects
                  </span>
                  <Code className="h-5 w-5 text-cyan-400" />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
};
