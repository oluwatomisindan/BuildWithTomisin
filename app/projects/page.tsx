"use client";

import React from "react";
import { MOCK_PROJECTS } from "@/lib/project-data";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-bg selection:bg-brand-blue/30 overflow-x-hidden">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-fg/50 hover:text-brand-blue transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to home
          </Link>
          <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-fg">All projects</h1>
          <p className="text-xl text-fg/50 font-medium leading-relaxed max-w-2xl">
            A comprehensive look at the systems and solutions I've built. From complex management applications to elegant personal tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;
