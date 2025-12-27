"use client";

import React from "react";
import Link from "next/link";

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

        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] uppercase tracking-widest text-fg/30 font-bold">System Status: Optimal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
