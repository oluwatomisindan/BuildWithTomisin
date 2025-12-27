"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-bg relative selection:bg-brand-blue/30">
      <BackgroundEffects />
      <Navbar />

      <div className="relative z-10">
        <section className="pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-8xl font-black mb-4 italic text-fg tracking-tighter uppercase">
              Let's <span className="text-brand-blue not-italic">Connect.</span>
            </h1>
            <p className="text-xl md:text-2xl text-fg/50 max-w-2xl mx-auto font-medium transition-colors">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </motion.div>

          <ContactSection />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default ContactPage;
