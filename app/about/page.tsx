"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  Link as LinkIcon, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  Zap, 
  Terminal,
  Database,
  Cloud,
  ChevronRight,
  Users,
  Monitor
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const skills = [
    { name: "Frontend Development", icon: <Layout className="w-5 h-5" />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend Systems", icon: <Database className="w-5 h-5" />, items: ["Node.js", "PostgreSQL", "Prisma", "REST APIs"] },
    { name: "Mobile Development", icon: <Smartphone className="w-5 h-5" />, items: ["React Native"] },
    { name: "Human Resources", icon: <Users className="w-5 h-5" />, items: ["Management", "Strategy", "Recruitment"] },
    { name: "IT Operations", icon: <Monitor className="w-5 h-5" />, items: ["Networking", "Winbox", "System Admin"] },
  ];

  const experience = [
    {
      company: "Ife Grand Resort",
      role: "Human Resource",
      period: "2025 - Present",
      description: "Based in Ile-Ife, Osun State Nigeria. Managing human capital and organizational strategy."
    },
    {
      company: "Freelance",
      role: "Mobile Developer",
      period: "2025",
      description: "Specializing in building cross-platform mobile applications with React Native."
    },
    {
      company: "Freelance",
      role: "Front End Developer",
      period: "2022",
      description: "Building modern, responsive web interfaces using React and modern CSS."
    },
    {
      company: "Freelance",
      role: "Front End Developer",
      period: "2020",
      description: "Started the journey with core web technologies: HTML, CSS and JavaScript."
    }
  ];

  return (
    <main className="min-h-screen bg-bg relative selection:bg-brand-blue/30">
      <BackgroundEffects />
      <Navbar />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-fg tracking-tighter">
                Behind the <span className="text-brand-blue not-italic">Code.</span>
              </h1>
              <p className="text-xl md:text-2xl text-fg/60 max-w-3xl font-medium leading-relaxed">
                I'm a Software Engineer and Content Creator dedicated to building 
                elegant solutions and sharing knowledge with the global tech community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-border group">
                  <Image
                    src="/images/tomisin.jpeg"
                    alt="Tomisin - Software Engineer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-2xl font-black text-brand-blue">5+ Years</p>
                  <p className="text-sm font-bold text-fg/40 uppercase tracking-widest">Experience</p>
                </div>
              </motion.div>

              {/* Bio Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-fg">My Journey</h2>
                <div className="space-y-6 text-fg/60 text-lg leading-relaxed">
                  <p>
                    Started as a self-taught developer with a passion for logic and design, 
                    I've spent the last 5 years mastering the art of software craftsmanship. 
                    My work is driven by a simple philosophy: "Build systems that last, and documentation that teaches."
                  </p>
                  <p>
                    Beyond the IDE, I'm a firm believer in the power of community. 
                    I share my learnings through various platforms, reaching over 50k developers 
                    worldwide with insights on system architecture, mobile development, and tech career growth.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-fg/5 border border-border">
                    <Zap className="w-4 h-4 text-brand-blue" />
                    <span className="text-sm font-bold uppercase tracking-widest text-fg/60">Fast Learner</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-fg/5 border border-border">
                    <Terminal className="w-4 h-4 text-brand-teal" />
                    <span className="text-sm font-bold uppercase tracking-widest text-fg/60">Problem Solver</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-glass/50 backdrop-blur-sm border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight text-fg italic">Core Expertise</h2>
              <p className="text-fg/40 font-medium">Tools and technologies I use to bring ideas to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl group hover:-translate-y-1 transition-all"
                >
                  <div className="p-3 rounded-2xl bg-brand-blue/10 w-fit mb-6 text-brand-blue group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-fg">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-xs font-bold text-fg/40 uppercase tracking-widest px-2 py-1 rounded-md bg-fg/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-16 tracking-tight text-fg italic text-center">Work History</h2>
            
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-brand-blue ring-4 ring-brand-blue/20" />
                    <div className="w-0.5 flex-1 bg-border group-last:hidden mt-4" />
                  </div>
                  <div className="pb-12">
                    <span className="text-sm font-bold text-brand-blue uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-2xl font-black text-fg mt-2">{exp.role}</h3>
                    <p className="text-lg font-bold text-fg/40 mb-4">{exp.company}</p>
                    <p className="text-fg/60 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] -z-10" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-fg">Let's build something <br /> amazing together.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/projects" 
                className="group bg-fg text-bg px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-brand-blue hover:text-white transition-all shadow-2xl"
              >
                View My Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="mailto:hello@buildwithtomisin.com" 
                className="glass text-fg px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-glass-hover-bg transition-all"
              >
                Get In Touch
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default AboutPage;
