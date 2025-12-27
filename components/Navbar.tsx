"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="glass rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-6 md:gap-12 max-w-4xl w-full justify-between shadow-2xl">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-fg">
          BWT<span className="text-brand-blue">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="/projects">Work</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/content">Content</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2 md:px-6 md:py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20 whitespace-nowrap">
            Let's Talk
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-sm font-medium text-fg/60 hover:text-fg transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
  </Link>
);

export default Navbar;
