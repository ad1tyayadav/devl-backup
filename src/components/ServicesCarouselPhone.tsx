import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesCarouselPhone = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const services = [
    {
      title: "AI-POWERED WEB APPS",
      subtitle: "Intelligent Applications That Learn & Adapt",
      description:
        "Transform your business with cutting-edge AI solutions that understand user behavior, predict outcomes, and continuously improve through machine learning algorithms.",
      techWords: [
        "GPT-4",
        "Neural Networks",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "MLOps",
      ],
      timeline: [
        {
          phase: "AI Strategy & Discovery",
          duration: "1-2 weeks",
          description:
            "Deep dive into your business needs and identify AI opportunities that drive real value",
          details:
            "We conduct comprehensive data audits, analyze your current workflows, identify bottlenecks, and map out AI integration points. Our team evaluates your data quality, volume, and structure to determine the most effective AI models for your specific use case.",
          deliverables: [
            "AI Readiness Assessment",
            "Data Architecture Review",
            "Custom AI Strategy Document",
            "ROI Projections",
          ],
        },
        {
          phase: "Model Architecture & Selection",
          duration: "2-3 weeks",
          description:
            "Design and select the optimal AI models tailored to your specific requirements",
          details:
            "From GPT models for natural language processing to custom neural networks for specialized tasks, we architect the perfect AI solution. We evaluate different model architectures, performance metrics, and computational requirements.",
          deliverables: [
            "Model Architecture Diagrams",
            "Performance Benchmarks",
            "Technology Stack Selection",
            "Scalability Plans",
          ],
        },
        {
          phase: "Development & Training",
          duration: "4-6 weeks",
          description:
            "Build, train, and fine-tune your custom AI solutions with precision",
          details:
            "Our expert team develops custom AI models, implements fine-tuning processes, and creates intelligent interfaces. We use advanced techniques like transfer learning, data augmentation, and hyperparameter optimization.",
          deliverables: [
            "Trained AI Models",
            "API Integration",
            "Custom Algorithms",
            "Testing Protocols",
          ],
        },
        {
          phase: "Integration & Optimization",
          duration: "2-3 weeks",
          description:
            "Seamlessly integrate AI capabilities into your existing systems",
          details:
            "We ensure smooth API integration, optimize performance for real-world usage, and implement comprehensive testing protocols. Our team handles data pipelines, model versioning, and continuous monitoring.",
          deliverables: [
            "Production Integration",
            "Performance Optimization",
            "Monitoring Dashboard",
            "Documentation",
          ],
        },
        {
          phase: "Deployment & Monitoring",
          duration: "1-2 weeks",
          description:
            "Launch your AI-powered application with continuous improvement systems",
          details:
            "Cloud deployment with auto-scaling, real-time monitoring, and continuous learning capabilities. We implement feedback loops for model improvement and provide ongoing support.",
          deliverables: [
            "Production Deployment",
            "Monitoring Systems",
            "Maintenance Plan",
            "Training Materials",
          ],
        },
      ],
    },
    {
      title: "3D INTERACTIVE EXPERIENCES",
      subtitle: "Immersive Digital Worlds That Captivate",
      description:
        "Create stunning 3D experiences that push the boundaries of web technology, from product visualizations to interactive virtual environments.",
      techWords: [
        "Three.js",
        "WebGL",
        "GLSL",
        "Blender",
        "3D Modeling",
        "WebXR",
        "Raytracing",
        "Shaders",
        "Animations",
        "Real-time Rendering",
      ],
      timeline: [
        {
          phase: "Creative Concept & Design",
          duration: "2-3 weeks",
          description:
            "Develop the creative vision and user experience for your 3D application",
          details:
            "We collaborate with you to create compelling 3D experiences, from initial wireframes to detailed storyboards. Our team designs user journeys, interaction patterns, and visual aesthetics that align with your brand.",
          deliverables: [
            "3D Concept Art",
            "User Journey Maps",
            "Interactive Prototypes",
            "Technical Specifications",
          ],
        },
        {
          phase: "3D Asset Creation",
          duration: "3-4 weeks",
          description: "Build high-quality 3D models, textures, and animations",
          details:
            "Our 3D artists create detailed models, realistic textures, and smooth animations using industry-standard tools. We optimize assets for web performance while maintaining visual quality.",
          deliverables: [
            "3D Models",
            "Texture Libraries",
            "Animation Sequences",
            "Asset Documentation",
          ],
        },
        {
          phase: "WebGL Development",
          duration: "4-5 weeks",
          description:
            "Implement cutting-edge 3D functionality using WebGL and Three.js",
          details:
            "We develop custom shaders, implement physics simulations, and create interactive 3D interfaces. Our team optimizes rendering performance and ensures cross-platform compatibility.",
          deliverables: [
            "Interactive 3D Scenes",
            "Custom Shaders",
            "Physics Integration",
            "Cross-platform Testing",
          ],
        },
        {
          phase: "Performance Optimization",
          duration: "1-2 weeks",
          description:
            "Ensure smooth performance across all devices and browsers",
          details:
            "We implement LOD systems, optimize draw calls, and ensure your 3D experience runs smoothly on mobile devices. Performance testing across different hardware configurations.",
          deliverables: [
            "Performance Benchmarks",
            "Mobile Optimization",
            "Browser Compatibility",
            "Loading Optimization",
          ],
        },
      ],
    },
    {
      title: "BLOCKCHAIN SOLUTIONS",
      subtitle: "Decentralized Applications for the Future",
      description:
        "Build secure, transparent, and decentralized applications using cutting-edge blockchain technology and smart contracts.",
      techWords: [
        "Solidity",
        "Web3",
        "Ethereum",
        "Smart Contracts",
        "DeFi",
        "NFTs",
        "IPFS",
        "MetaMask",
        "Polygon",
        "Hardhat",
      ],
      timeline: [
        {
          phase: "Blockchain Architecture",
          duration: "2-3 weeks",
          description: "Design robust decentralized system architecture",
          details:
            "We analyze your requirements and design the optimal blockchain architecture, selecting the right network, consensus mechanisms, and security protocols. Our team evaluates gas costs, scalability needs, and integration requirements.",
          deliverables: [
            "Architecture Diagrams",
            "Network Selection",
            "Security Protocols",
            "Cost Analysis",
          ],
        },
        {
          phase: "Smart Contract Development",
          duration: "3-4 weeks",
          description: "Build secure and efficient smart contracts",
          details:
            "Our blockchain developers write secure Solidity code, implement comprehensive testing, and conduct security audits. We optimize for gas efficiency and implement best practices for smart contract security.",
          deliverables: [
            "Smart Contracts",
            "Security Audits",
            "Gas Optimization",
            "Test Coverage Reports",
          ],
        },
        {
          phase: "DApp Frontend Development",
          duration: "3-4 weeks",
          description: "Create intuitive decentralized application interfaces",
          details:
            "We develop user-friendly Web3 interfaces, integrate wallet connections, and handle transaction flows. Our team ensures seamless interaction between users and smart contracts.",
          deliverables: [
            "Web3 Integration",
            "Wallet Connections",
            "Transaction Handling",
            "User Interface",
          ],
        },
        {
          phase: "Testing & Security",
          duration: "2-3 weeks",
          description: "Comprehensive testing and security validation",
          details:
            "Extensive testing on testnets, security audits, and vulnerability assessments. We simulate various attack scenarios and ensure your application is production-ready.",
          deliverables: [
            "Security Audit Report",
            "Testnet Deployment",
            "Vulnerability Assessment",
            "Bug Fixes",
          ],
        },
        {
          phase: "Mainnet Deployment",
          duration: "1-2 weeks",
          description: "Launch your decentralized application on the mainnet",
          details:
            "We handle mainnet deployment, monitor initial transactions, and provide ongoing support. Our team ensures smooth launch and helps with community onboarding.",
          deliverables: [
            "Mainnet Deployment",
            "Monitoring Setup",
            "Documentation",
            "Community Support",
          ],
        },
      ],
    },
    {
      title: "AR/VR DEVELOPMENT",
      subtitle: "Next-Generation Extended Reality",
      description:
        "Create immersive augmented and virtual reality experiences that blur the lines between digital and physical worlds.",
      techWords: [
        "WebXR",
        "Unity",
        "Unreal Engine",
        "ARCore",
        "ARKit",
        "Oculus",
        "Spatial Computing",
        "8th Wall",
        "A-Frame",
        "Hand Tracking",
      ],
      timeline: [
        {
          phase: "XR Experience Design",
          duration: "2-3 weeks",
          description: "Design immersive user experiences for AR/VR platforms",
          details:
            "We create compelling XR experiences by understanding spatial interactions, user comfort, and immersion principles. Our team designs for various XR platforms and devices.",
          deliverables: [
            "XR Storyboards",
            "Interaction Design",
            "User Testing Plans",
            "Platform Strategy",
          ],
        },
        {
          phase: "Platform Development",
          duration: "4-5 weeks",
          description: "Build for multiple XR platforms and devices",
          details:
            "Development for WebXR, mobile AR, VR headsets, and cross-platform compatibility. We optimize for different hardware capabilities and ensure consistent experiences.",
          deliverables: [
            "Multi-platform Apps",
            "Device Optimization",
            "Performance Testing",
            "Cross-platform SDKs",
          ],
        },
        {
          phase: "3D Content & Environments",
          duration: "3-4 weeks",
          description: "Create immersive 3D content and virtual environments",
          details:
            "Our team develops detailed 3D environments, character models, and spatial audio experiences. We focus on creating believable virtual worlds that enhance user engagement.",
          deliverables: [
            "3D Environments",
            "Character Models",
            "Spatial Audio",
            "Lighting Systems",
          ],
        },
        {
          phase: "Testing & Optimization",
          duration: "2-3 weeks",
          description: "Comprehensive testing across XR devices and platforms",
          details:
            "We conduct extensive device testing, user acceptance testing, and performance optimization. Our team ensures comfort, reduces motion sickness, and optimizes frame rates.",
          deliverables: [
            "Device Testing Reports",
            "Performance Optimization",
            "User Comfort Analysis",
            "Final Optimization",
          ],
        },
      ],
    },
  ];

  // Auto-advance services every 10 seconds
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
      setCurrentCard(0);
    }, 10000);

    return () => clearInterval(serviceInterval);
  }, [services.length]);

  // Auto-advance cards within current service every 4 seconds
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard(
        (prev) => (prev + 1) % services[currentService].timeline.length
      );
    }, 4000);

    return () => clearInterval(cardInterval);
  }, [currentService, services]);

  const currentServiceData = services[currentService];
  const currentTimelineData = currentServiceData.timeline[currentCard];

  return (
    <section id="services" className="block lg:hidden py-20 relative overflow-hidden min-h-screen">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Minimal Floating Tech Words */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {currentServiceData.techWords.slice(0, 6).map((word, index) => (
          <motion.div
            key={`${currentService}-${word}-${index}`}
            className="absolute text-white/5 font-mono font-medium select-none"
            style={{
              left: `${20 + ((index * 15) % 60)}%`,
              top: `${15 + ((index * 12) % 70)}%`,
              fontSize: `${10 + (index % 3) * 3}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.05, 0.03],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: index * 0.5,
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-[80vh]">
          {/* Service Header Section */}
          <div className="mb-8 pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  className="inline-block px-6 py-3 backdrop-blur-sm border border-white/10 rounded-full mb-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  <span className="text-white font-mono font-medium text-sm tracking-wide">
                    {currentServiceData.subtitle}
                  </span>
                </motion.div>

                <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-aquire text-white mb-6 tracking-tight">
                  {currentServiceData.title}
                </motion.h2>

                <motion.p
                  className="text-lg text-white font-sans max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {currentServiceData.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Main Timeline Card */}
          <div className="flex-1 flex items-center justify-center mb-8">
            <div className="relative max-w-5xl w-full  rounded">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentService}-${currentCard}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="relative backdrop-blur-xl border border-cyan-200 rounded-2xl p-8 md:p-10 shadow-xl overflow-hidden"
                    style={{
                      background: 'rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Subtle Border Accent */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                        padding: '1px',
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                      }}
                    />

                    {/* Progress Indicator */}
                    <div className="flex justify-center mb-8">
                      <div className="flex space-x-3">
                        {currentServiceData.timeline.map((_, index) => (
                          <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-1000 ${index === currentCard
                              ? 'w-16 bg-white/40'
                              : index < currentCard
                                ? 'w-8 bg-white/20'
                                : 'w-8 bg-white/10'
                              }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      {/* Phase Header */}
                      <motion.div
                        className="inline-flex items-center space-x-4 px-6 py-3 border border-white/10 rounded-full mb-6"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                        }}
                      >
                        <span className="text-white/70 font-mono font-medium text-sm tracking-wide">
                          PHASE {currentCard + 1}
                        </span>
                        <div className="w-px h-4 bg-white/20" />
                        <span className="text-white/60 font-sans text-sm">
                          {currentTimelineData.duration}
                        </span>
                      </motion.div>

                      {/* Phase Title */}
                      <motion.h3
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {currentTimelineData.phase}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-lg md:text-xl text-white font-sans mb-6 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {currentTimelineData.description}
                      </motion.p>

                      {/* Details */}
                      <motion.p
                        className="text-base text-white font-sans max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {currentTimelineData.details}
                      </motion.p>

                      {/* Deliverables Section */}
                      {/* <motion.div
                        className="backdrop-blur-lg border border-white/10 rounded-xl p-6 max-w-4xl mx-auto"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                      >
                        <h4 className="text-sm font-mono font-medium text-white mb-4 uppercase tracking-wide">
                          Key Deliverables
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {currentTimelineData.deliverables.map((deliverable, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3 p-3 rounded-lg border border-white/5"
                              style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                              }}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                              <span className="text-white font-sans text-sm">
                                {deliverable}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div> */}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Preview Section - Updated */}
        <div className="relative z-20 bg-transparent">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex overflow-x-auto md:overflow-x-visible flex-nowrap gap-4 px-4 md:flex-wrap md:justify-center max-w-6xl scrollbar-hide">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-700 flex-shrink-0 ${index === currentService
                    ? 'opacity-100 scale-100 border-white/20'
                    : 'opacity-60 hover:opacity-90 scale-95'
                    }`}
                  onClick={() => {
                    setCurrentService(index);
                    setCurrentCard(0);
                  }}
                  whileHover={{
                    scale: index === currentService ? 1.0 : 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="backdrop-blur-md border border-white/10 rounded-xl p-6 w-64 md:w-60 h-32 flex flex-col justify-between"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                    }}
                  >
                    <div className="relative z-10">
                      <h4 className="text-base font-mono font-medium text-white mb-2 truncate">
                        {service.title}
                      </h4>
                      <p className="text-sm text-white/80 mb-3 line-clamp-2">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      {service.timeline.map((_, cardIndex) => (
                        <div
                          key={cardIndex}
                          className={`h-1 flex-1 rounded-full ${index === currentService && cardIndex <= currentCard
                            ? 'bg-white/40'
                            : 'bg-white/10'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {services.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${index === currentService
                  ? 'bg-white/50 scale-125'
                  : 'bg-white/20 hover:bg-white/30'
                  }`}
                onClick={() => {
                  setCurrentService(index);
                  setCurrentCard(0);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Minimal floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-20 bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.3, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeOut',
          }}
        />
      ))}
    </section>
  );
};

export default ServicesCarouselPhone;