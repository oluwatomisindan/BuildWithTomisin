"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { MOCK_PROJECTS } from "@/lib/project-data";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ChevronRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  
  const projectIndex = MOCK_PROJECTS.findIndex(p => p.slug === slug);
  const project = MOCK_PROJECTS[projectIndex];
  
  const nextProject = MOCK_PROJECTS[(projectIndex + 1) % MOCK_PROJECTS.length];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg text-fg">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4 italic">Project Not Found</h1>
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-brand-blue font-bold hover:underline mx-auto"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg selection:bg-brand-blue/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold text-fg/50 hover:text-brand-blue transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex gap-2 mb-6 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-fg/5 text-fg/60 font-bold border border-fg/10">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 italic text-fg leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl text-fg/60 font-medium leading-relaxed max-w-xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mt-12">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-fg text-bg rounded-xl font-bold flex items-center gap-2 hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1"
              >
                Launch Project <ExternalLink className="w-4 h-4" />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-glass border border-border text-fg rounded-xl font-bold flex items-center gap-2 hover:border-brand-blue/50 transition-all transform hover:-translate-y-1"
                >
                  View Code <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-brand-dark/20" />
          </motion.div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-20 px-6 border-t border-border bg-fg/2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black mb-6 italic text-fg">Overview</h2>
            <p className="text-lg text-fg/70 leading-relaxed font-medium">
              {project.fullDescription}
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-fg mb-4 flex items-center gap-2">
                <User className="w-3 h-3" /> Role
              </h3>
              <p className="font-bold text-fg/80">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-fg mb-4 flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Timeline
              </h3>
              <p className="font-bold text-fg/80">{project.timeline}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-fg mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-bold text-fg/60">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-16 italic text-fg text-center lg:text-left">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-glass border border-border rounded-2xl flex gap-6 group hover:border-brand-blue/30 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue font-black italic">
                0{index + 1}
              </div>
              <div>
                <p className="text-fg/80 font-bold leading-relaxed">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-40 px-6 border-t border-border group">
        <Link href={`/projects/${nextProject.slug}`} className="block max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-xs uppercase tracking-[0.4em] font-black text-fg/40 mb-8 block">Next Project</span>
            <h2 className="text-5xl md:text-8xl font-black italic text-fg group-hover:text-brand-blue transition-colors mb-12 flex items-center gap-4">
              {nextProject.title} <ChevronRight className="w-12 h-12 md:w-20 md:h-20 transition-transform group-hover:translate-x-4" />
            </h2>
            <div className="w-full max-w-3xl aspect-21/9 relative rounded-2xl overflow-hidden opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
               <Image src={nextProject.image} alt={nextProject.title} fill className="object-cover" />
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectPage;
