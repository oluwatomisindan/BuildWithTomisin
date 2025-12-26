"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Monitor, Smartphone, Youtube } from "lucide-react";

const SERVICES = [
  {
    title: "Web Architecture",
    description: "Building resilient, performant web applications using Next.js and high-level design patterns.",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    title: "Mobile Development",
    description: "Creating native and cross-platform experiences with Flutter and Swift that feel seamless.",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: "Software Engineering",
    description: "Expertise in full-stack development, API design, and system optimization for scale.",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "Content Creation",
    description: "Educational videos and technical tutorials that empower the next generation of developers.",
    icon: <Youtube className="w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl hover:bg-glass-hover-bg transition-all group"
          >
            <div className="text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-fg">{service.title}</h3>
            <p className="text-fg/40 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
