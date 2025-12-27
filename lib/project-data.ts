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
    slug: "ife-grand-resort-invoice",
    title: "IGR Invoice App",
    description: "A professional invoice generation and management system built for Ife Grand Resort.",
    fullDescription: "The IGR Invoice App is a streamlined tool designed to handle invoicing for resort services. It allows for quick generation of professional invoices with custom fields and automated calculations, ensuring efficiency in financial documentation.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/InvoiceApp.png",
    link: "https://ife-grand-resort.vercel.app",
    role: "Frontend Developer",
    timeline: "2024",
    features: [
      "Dynamic invoice generation",
      "Print-ready PDF exports",
      "Client and service management",
      "Responsive design for mobile use"
    ]
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management App",
    description: "A comprehensive solution for managing hotel operations, from bookings to staff assignments.",
    fullDescription: "Built with Next.js and Prisma, this hotel management application provides a robust platform for modern hospitality businesses. It leverages Supabase for real-time data and secure storage, offering features like room status tracking and guest management.",
    tags: ["Next.js", "Prisma", "Supabase", "Tailwind"],
    image: "/images/managementapp.png",
    link: "#",
    role: "Fullstack Developer",
    timeline: "Coming Soon",
    features: [
      "Real-time booking management",
      "Role-based access control for staff",
      "Automated reports and analytics",
      "Integrated payment processing"
    ]
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description: "My personal professional portfolio showcasing my skills, experience, and creative projects.",
    fullDescription: "This portfolio is a reflection of my journey as a developer. Built with clean HTML, CSS, and modern JavaScript, it focuses on performance and a minimalist aesthetic to highlight my work effectively.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/portfolio.png",
    link: "https://oluwatosina-portfolio.vercel.app/",
    role: "Sole Developer",
    timeline: "2024",
    features: [
      "Smooth scroll navigation",
      "Custom animation sequences",
      "Project showcase with filtering",
      "Optimized for SEO and speed"
    ]
  },
  {
    slug: "todo-list-app",
    title: "Modern Todo List",
    description: "A refined productivity tool for personal task management with a focus on simplicity.",
    fullDescription: "This Todo List app demonstrates how essential tools can be both functional and beautiful. It provides a seamless experience for tracking daily tasks, featuring a clean UI and persistent data storage.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/to-do_list.png",
    link: "https://to-do-list-two-theta-61.vercel.app/",
    role: "Frontend Developer",
    timeline: "2024",
    features: [
      "Category-based task sorting",
      "Drag-and-drop prioritization",
      "Dark mode support",
      "Local storage persistence"
    ]
  },
];
