"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { MOCK_PROJECTS } from "@/lib/project-data";
import Link from "next/link";

const FeaturedProjects = () => {
  return (
    <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic text-fg">Selected Work</h2>
          <p className="text-fg/50 max-w-md font-medium">
            A small collection of projects I've built that demonstrate my passion for high-performance frontend engineering.
          </p>
        </div>
        <Link href="/projects" className="text-brand-blue font-bold hover:underline transition-all">
          View all projects →
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
