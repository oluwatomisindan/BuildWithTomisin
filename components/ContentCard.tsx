"use client";

import React from "react";
import { motion } from "framer-motion";
import { Youtube, Twitter, FileText, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ContentItem } from "@/lib/content-data";

const ICON_MAP = {
  YouTube: <Youtube className="w-4 h-4 text-red-500" />,
  Twitter: <Twitter className="w-4 h-4 text-blue-400" />,
  Article: <FileText className="w-4 h-4 text-green-400" />,
  All: null,
};

const ContentCard = ({ item }: { item: ContentItem }) => {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-glass border border-border rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-all flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white z-10">
          {ICON_MAP[item.type]}
          <span>{item.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2 flex-wrap">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-fg/10 text-fg/60 font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[10px] font-bold text-fg/30 uppercase tracking-widest">{item.date}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors text-fg line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-sm text-fg/50 mb-6 line-clamp-3 leading-relaxed grow">
          {item.description}
        </p>
        
        <div className="flex items-center gap-2 text-sm font-bold text-fg group-hover:text-brand-blue transition-colors mt-auto">
          Read/Watch More <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 border-2 border-brand-blue/0 group-hover:border-brand-blue/20 rounded-2xl pointer-events-none transition-all" />
    </motion.a>
  );
};

export default ContentCard;
