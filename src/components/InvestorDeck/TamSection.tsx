import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaFigma } from 'react-icons/fa';

const teamMembers = [
  { 
    name: "Akshat", 
    role: "CEO", 
    bio: "Ex-L&T Finance, Ex-Mercor", 
    avatar: "A",
    social: { linkedin: "#", github: "#",}
  },
  { 
    name: "Prabaha Das", 
    role: "CTO", 
    bio: "Ex-TheReturnJourney, AI/ML expert", 
    avatar: "P",
    social: { linkedin: "#", github: "#", }
  },
  { 
    name: "Priyanshu", 
    role: "Head of Design", 
    bio: "Design lead at top startups", 
    avatar: "Pr",
    social: { linkedin: "#", figma: "#" }
  },
  { 
    name: "Harshit", 
    role: "Lead Product Manager", 
    bio: "Ex-Facebook engineer, AI/ML expert", 
    avatar: "H",
    social: { linkedin: "#", github: "#"}
  },
  { 
    name: "Vikas", 
    role: "Tech Lead", 
    bio: "Design lead at top startups", 
    avatar: "V",
    social: { linkedin: "#", figma: "#" }
  },
  { 
    name: "Akarsh", 
    role: "Consultant", 
    bio: "Ex-Facebook engineer, AI/ML expert", 
    avatar: "Ak",
    social: { linkedin: "#", github: "#"}
  }
];

function TeamSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-5">
            OUR TEAM
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            World-class talent driving innovation and execution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 h-full border border-gray-700 group-hover:border-violet-500/30 transition-all duration-500">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 blur-md opacity-60 animate-pulse" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 flex items-center justify-center text-xl font-bold text-violet-400">
                      {member.avatar}
                    </div>
                  </div>
                  
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-violet-400 font-medium mb-3 text-sm">{member.role}</p>
                  
                  {/* Bio */}
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed max-w-xs">
                    {member.bio}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedinIn size={14} />
                      </a>
                    )}
                    
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                        aria-label={`${member.name} GitHub`}
                      >
                        <FaGithub size={14} />
                      </a>
                    )}
                    
                    {member.social.figma && (
                      <a 
                        href={member.social.figma} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                        aria-label={`${member.name} Figma`}
                      >
                        <FaFigma size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection;