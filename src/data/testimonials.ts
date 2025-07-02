export const testimonials = [
  {
    name: "Mahendra Saran",
    role: "Founder & CEO",
    company: "BuyOneGram",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "DevLaunch helped us deliver a dynamic B2B and B2G platform that serves wholesalers, customers, and government buyers. The SpinTheWheel...",
    rating: 5,
    project: "BuyOneGram",
    location: "Jaipur, India",
    projectDate: "April 2025",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    achievements: [
      "Integrated gamified shopping experience with SpinTheWheel",
      "Enabled seamless B2B and government procurement flows",
      "Increased buyer engagement by 60%",
    ],
  },
  {
    name: "Saiful Khan",
    role: "Founder & CEO",
    company: "MutaneX",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Working with DevLaunch made a complex B2B healthcare platform feel easy. Their experience with healthcare systems ensured a smooth, compliant launch.",
    rating: 5,
    project: "MutaneX",
    location: "Ahmedabad, India",
    projectDate: "February 25, 2025",
    technologies: ["React", "Express.js", "MySQL", "AWS"],
    achievements: [
      "Connected 100+ labs and doctors within first month",
      "Enabled HIPAA-compliant data sharing",
      "Streamlined test ordering and reporting workflows",
    ],
  },
  {
    name: "Sanjay Raut",
    role: "Founder & CEO",
    company: "Chiltel",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Our vision for Chiltel was to create a scalable, modern B2B appliance platform—and DevLaunch delivered exactly that. Their work helped us stand out in a traditional market.",
    rating: 5,
    project: "Chiltel",
    location: "Kolkata, India",
    projectDate: "February 2025",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    achievements: [
      "Launched multi-tier pricing for wholesalers and customers",
      "Enabled real-time inventory syncing",
      "Improved product discovery with advanced filters",
    ],
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
    "Mahendra Saran": {
      location: "Jaipur, India",
      projectDate: "April 2025",
      projectDuration: "1 month",
      projectBudget: "$25K - $50K",
      industry: "E-commerce & Government",
      teamSize: "5 developers",
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      achievements: [
        "Integrated gamified shopping experience with SpinTheWheel",
        "Enabled seamless B2B and government procurement flows",
        "Increased buyer engagement by 60%",
      ],
      testimonialExtended:
        "DevLaunch helped us deliver a dynamic B2B and B2G platform that serves wholesalers, customers, and government buyers. The SpinTheWheel feature added a unique twist that boosted user interaction.",
      projectDescription:
        "A B2B and B2G e-commerce platform with gamification features like SpinTheWheel to engage customers while providing scalable solutions for wholesalers and government procurement.",
    },
    "Saiful Khan": {
      location: "Ahmedabad, India",
      projectDate: "February 25, 2025",
      projectDuration: "2 months",
      projectBudget: "$30K - $60K",
      industry: "Healthcare & B2B",
      teamSize: "3 developers",
      technologies: ["React", "Express.js", "MySQL", "AWS"],
      achievements: [
        "Connected 100+ labs and doctors within first month",
        "Enabled HIPAA-compliant data sharing",
        "Streamlined test ordering and reporting workflows",
      ],
      testimonialExtended:
        "Working with DevLaunch made a complex B2B healthcare platform feel easy. Their experience with healthcare systems ensured a smooth, compliant launch.",
      projectDescription:
        "A B2B platform for labs and doctors to securely collaborate, manage test orders, share reports, and streamline lab operations with a user-friendly interface.",
    },
    "Sanjay Raut": {
      location: "Kolkata, India",
      projectDate: "February 2025",
      projectDuration: "2 months",
      projectBudget: "$35K - $70K",
      industry: "Retail & Wholesale Appliances",
      teamSize: "5 developers",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      achievements: [
        "Launched multi-tier pricing for wholesalers and customers",
        "Enabled real-time inventory syncing",
        "Improved product discovery with advanced filters",
      ],
      testimonialExtended:
        "Our vision for Chiltel was to create a scalable, modern B2B appliance platform—and DevLaunch delivered exactly that. Their work helped us stand out in a traditional market.",
      projectDescription:
        "A B2B platform for selling cooling appliances tailored for wholesalers and individual customers with features like tiered pricing, smart filtering, and real-time stock management.",
    },
  };
  return extensions[client.name] || {};
};
