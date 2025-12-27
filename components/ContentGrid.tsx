"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_CONTENT, ContentCategory } from "@/lib/content-data";
import ContentCard from "./ContentCard";

const CATEGORIES: ContentCategory[] = ["All", "YouTube", "Twitter", "Article"];

const ContentGrid = () => {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>("All");

  const filteredContent = MOCK_CONTENT.filter(
    (item) => activeCategory === "All" || item.type === activeCategory
  );

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all relative overflow-hidden group ${
              activeCategory === category
                ? "text-white"
                : "text-fg/40 hover:text-fg/60 glass"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-brand-blue"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredContent.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ContentCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl text-fg/40 font-medium italic">No content found in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default ContentGrid;
