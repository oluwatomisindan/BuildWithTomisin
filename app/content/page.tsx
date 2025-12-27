"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentGrid from "@/components/ContentGrid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ContentHubPage = () => {
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
          <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-fg tracking-tighter">Content Hub</h1>
          <p className="text-xl text-fg/50 max-w-2xl font-medium leading-relaxed">
            Exploring the intersection of code, architecture, and storytelling. 
            A curated collection of my latest videos, threads, and articles.
          </p>
        </motion.div>

        <ContentGrid />
      </section>

      <Footer />
    </main>
  );
};

export default ContentHubPage;
