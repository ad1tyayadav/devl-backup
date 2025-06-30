// projectData.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; // Carousel images
  tags: string[];
  featured: boolean;
  type: 'client' | 'devlaunch';
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Job Search Platform",
    description: "Revolutionizing job searching with AI to match candidates with ideal opportunities.",
    images: [
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/31452622/pexels-photo-31452622.jpeg"
    ],
    tags: ["AI", "React", "Node.js", "Machine Learning"],
    featured: true,
    type: 'client',
    liveLink: "https://tmkoc",
    githubLink: "https://github.com/example/jobsearch"
  },
  {
    id: 2,
    title: "Decentralized Finance (DeFi) App",
    description: "A secure and transparent DeFi application built on blockchain technology.",
    images: [
      "https://plus.unsplash.com/premium_photo-1676618539993-defb0cb1447d?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1621961452383-00d7e33a2aa3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1616587893888-6f421c0cf3eb?w=600&h=400&fit=crop"
    ],
    tags: ["Blockchain", "DeFi", "Solidity", "Web3"],
    featured: true,
    type: 'devlaunch',
    liveLink: "https://example.com/defi",
    githubLink: "https://github.com/example/defi"
  },
  {
    id: 3,
    title: "Sustainable Energy Management",
    description: "Optimizing energy consumption using IoT and data analytics for a sustainable future.",
    images: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520446266421-9b1877d1d6e1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527751179831-1810d28a1384?w=600&h=400&fit=crop"
    ],
    tags: ["IoT", "Data Analytics", "Python", "Sustainability"],
    featured: false,
    type: 'client',
    liveLink: "https://example.com/energy",
    githubLink: "https://github.com/example/energy"
  },
  {
    id: 4,
    title: "AI-Driven Healthcare Diagnostics",
    description: "Improving healthcare outcomes with AI-powered diagnostic tools.",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1603357466608-4cece25e7c37?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1603882658167-1ec0edac0a0b?w=600&h=400&fit=crop"
    ],
    tags: ["AI", "Healthcare", "Machine Learning", "Python"],
    featured: false,
    type: 'devlaunch',
    liveLink: "https://example.com/healthcare",
    githubLink: "https://github.com/example/healthcare"
  },
  {
    id: 5,
    title: "Smart City Traffic Management",
    description: "Reducing traffic congestion and improving urban mobility with intelligent systems.",
    images: [
      "https://images.unsplash.com/photo-1662947190722-5d272f82a526?w=600&fit=crop",
      "https://images.unsplash.com/photo-1602368981607-c45004eb8533?w=600&fit=crop",
      "https://images.unsplash.com/photo-1573496778015-cf61b2c51d4b?w=600&fit=crop"
    ],
    tags: ["Smart City", "IoT", "Data Analytics", "C++"],
    featured: false,
    type: 'client',
    liveLink: "https://example.com/traffic",
    githubLink: "https://github.com/example/traffic"
  },
  {
    id: 6,
    title: "Personalized Education Platform",
    description: "Enhancing learning experiences with personalized education paths.",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&fit=crop",
      "https://images.unsplash.com/photo-1612036789046-9b458e1aa3a5?w=600&fit=crop",
      "https://images.unsplash.com/photo-1531496730074-83b638c0a893?w=600&fit=crop"
    ],
    tags: ["Education", "AI", "React", "Node.js"],
    featured: false,
    type: 'devlaunch',
    liveLink: "https://example.com/education",
    githubLink: "https://github.com/example/education"
  }
];
