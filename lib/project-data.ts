export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  role: string;
  timeline: string;
  features: string[];
}

export const MOCK_PROJECTS: Project[] = [
  {
    slug: "lagos-fintech-dashboard",
    title: "Lagos Fintech Dashboard",
    description: "A comprehensive financial management system for Nigerian startups, featuring real-time transaction tracking and automated tax reports.",
    fullDescription: "The Lagos Fintech Dashboard is a state-of-the-art financial management platform tailored for the unique needs of the Nigerian startup ecosystem. It bridges the gap between complex financial data and actionable insights, providing founders with a clear picture of their burn rate, revenue, and compliance status in real-time.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/demo1",
    github: "https://github.com/example/project1",
    role: "Lead Frontend Engineer",
    timeline: "3 Months (Q3 2024)",
    features: [
      "Real-time transaction monitoring with WebSocket integration",
      "Automated tax calculation and report generation compliant with FIRS standards",
      "Multi-currency support with real-time exchange rate updates",
      "Interactive data visualizations powered by Recharts"
    ]
  },
  {
    slug: "e-learning-hub",
    title: "E-Learning Hub",
    description: "An interactive platform for tech students in Lagos to learn software architecture, with built-in sandbox and community forums.",
    fullDescription: "E-Learning Hub is an educational platform designed to empower the next generation of software architects in Nigeria. It goes beyond static content, offering a hands-on learning experience through integrated coding sandboxes and collaborative forum features.",
    tags: ["React", "Typescript", "Node.js"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/demo2",
    role: "Fullstack Developer",
    timeline: "5 Months (2024)",
    features: [
      "Integrated code editor with real-time feedback",
      "Progressive Web App (PWA) capabilities for offline learning",
      "Community discussion boards with Markdown support",
      "Gamified learning paths with certificates of completion"
    ]
  },
  {
    slug: "bwt-content-engine",
    title: "BWT Content Engine",
    description: "The proprietary tool used to orchestrate content across YouTube and Twitter, featuring automated schedule optimization.",
    fullDescription: "BWT Content Engine is the backbone of Build With Tomisin's digital presence. It automates the complex task of multi-platform content distribution, using AI-driven insights to determine the optimal posting times and formats for maximum engagement.",
    tags: ["Next.js", "API Route", "AI"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "https://example.com/demo3",
    github: "https://github.com/example/project3",
    role: "System Architect / Developer",
    timeline: "2 Months (Ongoing)",
    features: [
      "AI-powered content scheduling and optimization",
      "Cross-platform API integration for Twitter and YouTube",
      "Internal analytics dashboard for tracking content performance",
      "Automated video processing and thumbnail generation"
    ]
  },
];
