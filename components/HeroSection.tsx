"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative pt-32 lg:pt-48 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-teal/10 blur-[100px] rounded-full -z-10" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center order-2 lg:order-1">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-glass mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-bold text-fg/50 uppercase tracking-widest">Available for new projects</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-fg italic"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal not-italic">Digital Systems</span> <br className="hidden md:block" />
              & Tech Content
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-fg/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
            >
              I&apos;m <span className="text-fg font-black">Oluwatomisin</span>. 
              Bridging the gap between robust software engineering and engaging digital storytelling.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/projects" className="group bg-fg text-bg px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-brand-blue hover:text-white transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                View Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/content" className="glass text-fg px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-glass-hover-bg transition-all hover:-translate-y-1 active:scale-95">
                Content Hub
                <Play className="w-5 h-5 fill-current" />
              </Link>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            variants={imageVariants}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] group">
              {/* Animated Rings */}
              <div className="absolute inset-0 border-2 border-brand-blue/20 rounded-[2.5rem] rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-700" />
              <div className="absolute inset-0 border-2 border-brand-teal/20 rounded-[2.5rem] -rotate-3 scale-105 group-hover:-rotate-6 transition-transform duration-700" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-4xl overflow-hidden border border-white/10 shadow-2xl z-10">
                <Image
                  src="/images/tomisin.jpeg"
                  alt="Tomisin - Software Engineer & Content Creator"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Float Tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass px-6 py-3 rounded-2xl z-20 shadow-xl hidden md:block"
              >
                <p className="text-sm font-black italic text-fg">Software Engineer</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 glass px-6 py-3 rounded-2xl z-20 shadow-xl hidden md:block"
              >
                <p className="text-sm font-black italic text-brand-blue">Content Creator</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
