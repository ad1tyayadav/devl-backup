  export const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Solutions',
      company: 'TechFlow Solutions',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'DevLaunch transformed our vision into reality with their AI-powered solutions. The team\'s expertise in cutting-edge technologies is unmatched.',
      rating: 5,
      project: 'AI-Powered Analytics Platform',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'BlockChain Innovations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Their blockchain expertise helped us launch our DeFi platform ahead of schedule. Professional, innovative, and results-driven.',
      rating: 5,
      project: 'DeFi Trading Platform',
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'FutureTech Studios',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The 3D interactive experience they created exceeded our expectations. Our user engagement increased by 300% after launch.',
      rating: 5,
      project: '3D Product Configurator',
    },
  ];

  interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  project: string;
}

// Extended client data based on your testimonials
export const getExtendedClientData = (client: Testimonial) => {
  const extensions: Record<string, any> = {
    'Sarah Chen': {
      location: 'San Francisco, CA',
      projectDate: 'March 2024',
      projectDuration: '4 months',
      projectBudget: '$150K - $300K',
      industry: 'AI & Machine Learning',
      teamSize: '25+ developers',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      achievements: [
        'Reduced data processing time by 70%',
        'Increased prediction accuracy to 94%',
        'Scaled to handle 1M+ daily requests'
      ],
      testimonialExtended: 'Working with DevLaunch was a game-changer for our company. Their deep understanding of AI and machine learning, combined with their technical expertise, helped us build a platform that not only met our requirements but exceeded our wildest expectations.',
      projectDescription: 'A comprehensive AI-powered analytics platform that processes massive datasets in real-time, providing actionable insights for enterprise clients through advanced machine learning algorithms.'
    },
    'Marcus Rodriguez': {
      location: 'Miami, FL',
      projectDate: 'January 2024',
      projectDuration: '6 months',
      projectBudget: '$200K - $500K',
      industry: 'Blockchain & DeFi',
      teamSize: '15+ developers',
      technologies: ['Solidity', 'React', 'Node.js', 'Web3', 'MongoDB'],
      achievements: [
        'Launched with $50M+ TVL in first month',
        '99.9% uptime since launch',
        '10,000+ active users daily'
      ],
      testimonialExtended: 'DevLaunch didn\'t just build our platform; they built our future. Their blockchain expertise and attention to security details gave us the confidence to launch in a competitive market.',
      projectDescription: 'A sophisticated DeFi trading platform featuring automated market making, yield farming, and cross-chain compatibility, designed for both retail and institutional investors.'
    },
    'Emily Watson': {
      location: 'Austin, TX',
      projectDate: 'February 2024',
      projectDuration: '3 months',
      projectBudget: '$75K - $150K',
      industry: 'AR/VR & Interactive Media',
      teamSize: '8+ developers',
      technologies: ['Three.js', 'React', 'WebGL', 'Blender', 'Node.js'],
      achievements: [
        '300% increase in user engagement',
        'Reduced product returns by 45%',
        'Featured in TechCrunch and Wired'
      ],
      testimonialExtended: 'The 3D configurator completely transformed how our customers interact with our products. The level of detail and smooth performance across devices was beyond what we imagined possible.',
      projectDescription: 'An immersive 3D product configurator allowing customers to customize products in real-time with photorealistic rendering and AR preview capabilities.'
    }
  };

  return extensions[client.name] || {};
};