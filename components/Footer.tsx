"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 bg-glass backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-fg">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-2">
            BWT<span className="text-brand-blue">.</span>
          </Link>
          <p className="text-fg/30 text-sm">© {new Date().getFullYear()} Build With Tomisin. All rights reserved.</p>
        </div>

        <div className="flex gap-8 text-sm font-bold text-fg/40">
            <Link href="/projects" className="hover:text-fg transition-colors uppercase tracking-widest">Work</Link>
           <Link href="/about" className="hover:text-fg transition-colors uppercase tracking-widest">About</Link>
           <Link href="/content" className="hover:text-fg transition-colors uppercase tracking-widest">Content</Link>
           <Link href="/contact" className="hover:text-fg transition-colors uppercase tracking-widest">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
           <a href="https://x.com/oluwatomi_sinnn" target="_blank" rel="noopener noreferrer" className="text-fg/40 hover:text-brand-blue transition-colors">
              <Twitter className="w-5 h-5" />
           </a>
           <a href="https://www.linkedin.com/in/oluwatosin-daniel-adegoke-105804267/" target="_blank" rel="noopener noreferrer" className="text-fg/40 hover:text-brand-blue transition-colors">
              <Linkedin className="w-5 h-5" />
           </a>
           <a href="https://www.youtube.com/@BuildwithTomisin" target="_blank" rel="noopener noreferrer" className="text-fg/40 hover:text-brand-blue transition-colors">
              <Youtube className="w-5 h-5" />
           </a>
           <a href="https://web.facebook.com/profile.php?id=61579939246490" target="_blank" rel="noopener noreferrer" className="text-fg/40 hover:text-brand-blue transition-colors">
              <Facebook className="w-5 h-5" />
           </a>
           <div className="w-px h-4 bg-border mx-2" />
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-fg/30 font-bold">Optimal</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
