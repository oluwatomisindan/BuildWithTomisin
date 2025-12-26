"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  description: string;
}

const ProjectCard = ({ slug, title, tags, image, link, github, description }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-glass border border-border rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-colors"
    >
      <Link href={`/projects/${slug}`}>
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-fg/10 text-fg/60 font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors text-fg">{title}</h3>
        </Link>
        <p className="text-sm text-fg/50 mb-6 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="flex items-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-fg hover:text-brand-blue transition-colors"
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-fg/50 hover:text-fg transition-colors"
            >
              Code <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 border-2 border-brand-blue/0 group-hover:border-brand-blue/20 rounded-2xl pointer-events-none transition-all" />
    </motion.div>
  );
};

export default ProjectCard;
