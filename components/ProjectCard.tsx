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
      className="group relative bg-glass border border-border rounded-xl overflow-hidden hover:border-brand-blue/50 transition-colors w-full"
    >
      <Link href={`/projects/${slug}`}>
        {/* Image Container */}
        <div className="relative aspect-16/10 overflow-hidden">
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
      <div className="p-4">
        <div className="flex gap-2 mb-3 flex-wrap">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-fg/10 text-fg/60 font-bold">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`}>
          <h3 className="text-lg font-bold mb-1 group-hover:text-brand-blue transition-colors text-fg line-clamp-1">{title}</h3>
        </Link>
        <p className="text-xs text-fg/50 mb-4 line-clamp-2 leading-relaxed h-8">{description}</p>
        
        <div className="flex items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-fg hover:text-brand-blue transition-colors"
          >
            Demo <ExternalLink className="w-3 h-3" />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-fg/50 hover:text-fg transition-colors"
            >
              Code <Github className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 border-2 border-brand-blue/0 group-hover:border-brand-blue/20 rounded-xl pointer-events-none transition-all" />
    </motion.div>
  );
};

export default ProjectCard;
