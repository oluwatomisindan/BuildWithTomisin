"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { MOCK_PROJECTS } from "@/lib/project-data";
import Link from "next/link";

const FeaturedProjects = () => {
  // Triple the projects to ensure seamless infinite loop
  const projects = [...MOCK_PROJECTS, ...MOCK_PROJECTS, ...MOCK_PROJECTS];
  
  return (
    <section id="work" className="py-20 overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 italic text-fg">Selected Work</h2>
            <p className="text-fg/50 max-w-md font-medium">
              A collection of projects demonstrating my passion for high-performance frontend engineering and UI excellence.
            </p>
          </div>
          <Link href="/projects" className="text-brand-blue font-bold hover:underline transition-all">
            View all projects →
          </Link>
        </motion.div>
      </div>

      <div className="relative group/carousel">
        <motion.div 
          className="flex gap-6 w-max px-6"
          animate={{ x: [0, -1400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{ transition: { duration: 60 } }} // Slow down on hover
        >
          {projects.map((project, index) => (
            <div key={`${project.slug}-${index}`} className="w-[300px] md:w-[350px] shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-bg to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default FeaturedProjects;
