"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Youtube, MapPin, Cpu, Layout, Smartphone, Globe } from "lucide-react";

const BentoGrid = () => {
  const techStack = [
    { name: "React", icon: <Layout className="w-6 h-6" /> },
    { name: "Next.js", icon: <Globe className="w-6 h-6" /> },
    { name: "Flutter", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Swift", icon: <Cpu className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Tile 1: About Me (Large) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 glass rounded-3xl p-10 flex flex-col justify-end group overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layout className="w-40 h-40 text-brand-blue" />
          </div>
          <h3 className="text-3xl font-bold mb-4 relative z-10 text-fg">Software Architect & Content Creator</h3>
          <p className="text-fg/60 leading-relaxed relative z-10">
            I specialize in building high-performance web and mobile applications using modern technologies. 
            When I'm not coding, I'm sharing my journey with 50k+ developers online.
          </p>
        </motion.div>

        {/* Tile 2: Tech Stack Marquee (Medium/Wide) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center overflow-hidden"
        >
          <h4 className="text-sm uppercase tracking-widest text-fg/40 mb-6 px-2">Tech Stack</h4>
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-fg/5 border border-border text-fg">
                {tech.icon}
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tile 3: Location (Small) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center group text-fg"
        >
          <div className="p-4 rounded-full bg-brand-blue/20 mb-4 group-hover:scale-110 transition-transform">
            <MapPin className="w-8 h-8 text-brand-blue" />
          </div>
          <h4 className="font-bold">Based in Lagos</h4>
          <p className="text-fg/40 text-sm">Working Remotely Worldwide</p>
        </motion.div>

        {/* Tile 4: Social Stats (Small) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="glass rounded-3xl p-8 flex flex-col justify-between text-fg"
        >
          <div className="flex justify-between items-start mb-4">
             <Twitter className="w-6 h-6 text-[#1DA1F2]" />
             <span className="text-xs font-bold text-fg/40">12k+</span>
          </div>
          <div className="flex justify-between items-end">
             <Youtube className="w-6 h-6 text-[#FF0000]" />
             <span className="text-xs font-bold text-fg/40">45k+</span>
          </div>
          <div className="mt-4 pt-4 border-t border-border text-center">
             <span className="text-xs uppercase tracking-widest text-fg/40">Followers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
