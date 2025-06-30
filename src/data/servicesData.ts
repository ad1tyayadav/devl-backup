export interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
  details: string;
  deliverables: string[];
}

export interface Service {
  title: string;
  subtitle: string;
  description: string;
  techWords: string[];
  timeline: TimelinePhase[];
}

export const services: Service[] = [
  {
    title: 'AI-POWERED WEB APPS',
    subtitle: 'Intelligent Applications That Learn & Adapt',
    description: 'Transform your business with cutting-edge AI solutions that understand user behavior, predict outcomes, and continuously improve through machine learning algorithms.',
    techWords: ['GPT-4', 'Neural Networks', 'TensorFlow', 'PyTorch', 'OpenAI', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps'],
    timeline: [
      {
        phase: 'AI Strategy & Discovery',
        duration: '1-2 weeks',
        description: 'Deep dive into your business needs and identify AI opportunities that drive real value',
        details: 'We conduct comprehensive data audits, analyze your current workflows, identify bottlenecks, and map out AI integration points. Our team evaluates your data quality, volume, and structure to determine the most effective AI models for your specific use case.',
        deliverables: ['AI Readiness Assessment', 'Data Architecture Review', 'Custom AI Strategy Document', 'ROI Projections']
      },
      {
        phase: 'Model Architecture & Selection',
        duration: '2-3 weeks',
        description: 'Design and select the optimal AI models tailored to your specific requirements',
        details: 'From GPT models for natural language processing to custom neural networks for specialized tasks, we architect the perfect AI solution. We evaluate different model architectures, performance metrics, and computational requirements.',
        deliverables: ['Model Architecture Diagrams', 'Performance Benchmarks', 'Technology Stack Selection', 'Scalability Plans']
      },
      {
        phase: 'Development & Training',
        duration: '4-6 weeks',
        description: 'Build, train, and fine-tune your custom AI solutions with precision',
        details: 'Our expert team develops custom AI models, implements fine-tuning processes, and creates intelligent interfaces. We use advanced techniques like transfer learning, data augmentation, and hyperparameter optimization.',
        deliverables: ['Trained AI Models', 'API Integration', 'Custom Algorithms', 'Testing Protocols']
      },
      {
        phase: 'Integration & Optimization',
        duration: '7-9 weeks',
        description: 'Seamlessly integrate AI capabilities into your existing systems',
        details: 'We ensure smooth API integration, optimize performance for real-world usage, and implement comprehensive testing protocols. Our team handles data pipelines, model versioning, and continuous monitoring.',
        deliverables: ['Production Integration', 'Performance Optimization', 'Monitoring Dashboard', 'Documentation']
      },
      {
        phase: 'Deployment & Monitoring',
        duration: '10-12 weeks',
        description: 'Launch your AI-powered application with continuous improvement systems',
        details: 'Cloud deployment with auto-scaling, real-time monitoring, and continuous learning capabilities. We implement feedback loops for model improvement and provide ongoing support.',
        deliverables: ['Production Deployment', 'Monitoring Systems', 'Maintenance Plan', 'Training Materials']
      }
    ]
  },
  {
    title: '3D INTERACTIVE EXPERIENCES',
    subtitle: 'Immersive Digital Worlds That Captivate',
    description: 'Create stunning 3D experiences that push the boundaries of web technology, from product visualizations to interactive virtual environments.',
    techWords: ['Three.js', 'WebGL', 'GLSL', 'Blender', '3D Modeling', 'WebXR', 'Raytracing', 'Shaders', 'Animations', 'Real-time Rendering'],
    timeline: [
      {
        phase: 'Creative Concept & Design',
        duration: '2-3 weeks',
        description: 'Develop the creative vision and user experience for your 3D application',
        details: 'We collaborate with you to create compelling 3D experiences, from initial wireframes to detailed storyboards. Our team designs user journeys, interaction patterns, and visual aesthetics that align with your brand.',
        deliverables: ['3D Concept Art', 'User Journey Maps', 'Interactive Prototypes', 'Technical Specifications']
      },
      {
        phase: '3D Asset Creation',
        duration: '3-4 weeks',
        description: 'Build high-quality 3D models, textures, and animations',
        details: 'Our 3D artists create detailed models, realistic textures, and smooth animations using industry-standard tools. We optimize assets for web performance while maintaining visual quality.',
        deliverables: ['3D Models', 'Texture Libraries', 'Animation Sequences', 'Asset Documentation']
      },
      {
        phase: 'WebGL Development',
        duration: '4-5 weeks',
        description: 'Implement cutting-edge 3D functionality using WebGL and Three.js',
        details: 'We develop custom shaders, implement physics simulations, and create interactive 3D interfaces. Our team optimizes rendering performance and ensures cross-platform compatibility.',
        deliverables: ['Interactive 3D Scenes', 'Custom Shaders', 'Physics Integration', 'Cross-platform Testing']
      },
      {
        phase: 'Performance Optimization',
        duration: '1-2 weeks',
        description: 'Ensure smooth performance across all devices and browsers',
        details: 'We implement LOD systems, optimize draw calls, and ensure your 3D experience runs smoothly on mobile devices. Performance testing across different hardware configurations.',
        deliverables: ['Performance Benchmarks', 'Mobile Optimization', 'Browser Compatibility', 'Loading Optimization']
      },
      {
        phase: 'Deployment & Support',
        duration: '1-2 weeks',
        description: 'Launch your 3D experience with ongoing support and updates',
        details: 'We deploy your 3D application to production, set up monitoring for performance, and provide documentation for future updates. Our team ensures seamless launch and user adoption.',
        deliverables: ['ProductionofaDeployment', 'Monitoring Setup', 'Documentation', 'Maintenance Plan']
      }
    ]
  },
  {
    title: 'BLOCKCHAIN SOLUTIONS',
    subtitle: 'Decentralized Applications for the Future',
    description: 'Build secure, transparent, and decentralized applications using cutting-edge blockchain technology and smart contracts.',
    techWords: ['Solidity', 'Web3', ' Ethereum', 'Smart Contracts', 'DeFi', 'NFTs', 'IPFS', 'MetaMask', 'Polygon', 'Hardhat'],
    timeline: [
      {
        phase: 'Blockchain Architecture',
        duration: '2-3 weeks',
        description: 'Design robust decentralized system architecture',
        details: 'We analyze your requirements and design the optimal blockchain architecture, selecting the right network, consensus mechanisms, and security protocols. Our team evaluates gas costs, scalability needs, and integration requirements.',
        deliverables: ['Architecture Diagrams', 'Network Selection', 'Security Protocols', 'Cost Analysis']
      },
      {
        phase: 'Smart Contract Development',
        duration: '3-4 weeks',
        description: 'Build secure and efficient smart contracts',
        details: 'Our blockchain developers write secure Solidity code, implement comprehensive testing, and conduct security audits. We optimize for gas efficiency and implement best practices for smart contract security.',
        deliverables: ['Smart Contracts', 'Security Audits', 'Gas Optimization', 'Test Coverage Reports']
      },
      {
        phase: 'DApp Frontend Development',
        duration: '3-4 weeks',
        description: 'Create intuitive decentralized application interfaces',
        details: 'We develop user-friendly Web3 interfaces, integrate wallet connections, and handle transaction flows. Our team ensures seamless interaction between users and smart contracts.',
        deliverables: ['Web3 Integration', 'Wallet Connections', 'Transaction Handling', 'User Interface']
      },
      {
        phase: 'Testing & Security',
        duration: '2-3 weeks',
        description: 'Comprehensive testing and security validation',
        details: 'Extensive testing on testnets, security audits, and vulnerability assessments. We simulate various attack scenarios and ensure your application is production-ready.',
        deliverables: ['Security Audit Report', 'Testnet Deployment', 'Vulnerability Assessment', 'Bug Fixes']
      },
      {
        phase: 'Mainnet Deployment & Monitoring',
        duration: '1-2 weeks',
        description: 'Launch your decentralized application with continuous monitoring',
        details: 'We handle mainnet deployment, set up monitoring for transactions and performance, and provide ongoing support. Our team ensures a smooth launch and supports community onboarding.',
        deliverables: ['Mainnet Deployment', 'Monitoring Systems', 'Documentation', 'Support Plan']
      }
    ]
  },
  {
    title: 'AR/VR DEVELOPMENT',
    subtitle: 'Next-Generation Extended Reality',
    description: 'Create immersive augmented and virtual reality experiences that blur the lines between digital and physical worlds.',
    techWords: ['WebXR', 'Unity', 'Unreal Engine', 'ARCore', 'ARKit', 'Oculus', 'Spatial Computing', '8th Wall', 'A-Frame', 'Hand Tracking'],
    timeline: [
      {
        phase: 'XR Experience Design',
        duration: '2-3 weeks',
        description: 'Design immersive user experiences for AR/VR platforms',
        details: 'We create compelling XR experiences by understanding spatial interactions, user comfort, and immersion principles. Our team designs for various XR platforms and devices.',
        deliverables: ['XR Storyboards', 'Interaction Design', 'User Testing Plans', 'Platform Strategy']
      },
      {
        phase: 'Platform Development',
        duration: '4-5 weeks',
        description: 'Build for multiple XR platforms and devices',
        details: 'Development for WebXR, mobile AR, VR headsets, and cross-platform compatibility. We optimize for different hardware capabilities and ensure consistent experiences.',
        deliverables: ['Multi-platform Apps', 'Device Optimization', 'Performance Testing', 'Cross-platform SDKs']
      },
      {
        phase: '3D Content & Environments',
        duration: '3-4 weeks',
        description: 'Create immersive 3D content and virtual environments',
        details: 'Our team develops detailed 3D environments, character models, and spatial audio experiences. We focus on creating believable virtual worlds that enhance user engagement.',
        deliverables: ['3D Environments', 'Character Models', 'Spatial Audio', 'Lighting Systems']
      },
      {
        phase: 'Testing & Optimization',
        duration: '2-3 weeks',
        description: 'Comprehensive testing across XR devices and platforms',
        details: 'We conduct extensive device testing, user acceptance testing, and performance optimization. Our team ensures comfort, reduces motion sickness, and optimizes frame rates.',
        deliverables: ['Device Testing Reports', 'Performance Optimization', 'User Comfort Analysis', 'Final Optimization']
      },
      {
        phase: 'Deployment & Support',
        duration: '1-2 weeks',
        description: 'Launch your XR application with ongoing maintenance',
        details: 'We deploy your AR/VR application, set up monitoring for performance and user engagement, and provide comprehensive documentation. Our team ensures a smooth launch and user adoption.',
        deliverables: ['Production Deployment', 'Monitoring Setup', 'Documentation', 'Support Plan']
      }
    ]
  }
];