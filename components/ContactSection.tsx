"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, Twitter, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter text-fg">
            Let's build something <br />
            <span className="text-brand-blue">remarkable</span> together.
          </h2>
          <p className="text-xl text-fg/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to take your product to the next level? Or just want to talk tech architecture? 
            My inbox is always open for interesting projects and collaborations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
                href="mailto:hello@bwt.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-fg text-bg px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl shadow-fg/10 transition-all"
            >
              <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Say Hello
            </motion.a>
            
            <div className="flex gap-4">
               <SocialIcon icon={<Twitter className="w-5 h-5" />} href="#" color="#1DA1F2" />
               <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="#" color="#0A66C2" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/20 blur-[100px] rounded-full -z-10" />
    </section>
  );
};

const SocialIcon = ({ icon, href, color }: { icon: React.ReactNode; href: string; color: string }) => (
  <motion.a
    href={href}
    whileHover={{ y: -5, backgroundColor: `${color}20`, borderColor: color }}
    className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/70 hover:text-white transition-all border border-white/5"
  >
    {icon}
  </motion.a>
);

export default ContactSection;
