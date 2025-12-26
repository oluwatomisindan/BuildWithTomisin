"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradients */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/10 blur-[120px] rounded-full opacity-50"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-brand-teal/5 blur-[150px] rounded-full opacity-40"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark opacity-80" />
      
      {/* Noise Texture (Overlayed in Root but reinforced here) */}
      <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay" />
    </div>
  );
};

export default BackgroundEffects;
