"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import { sendEmail } from "@/app/actions/email-actions";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ success?: boolean; error?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const response = await sendEmail(formData);

    setIsSubmitting(false);
    setResult(response);

    if (response.success) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter text-fg">
            Let's build something <br />
            <span className="text-brand-blue">remarkable</span> together.
          </h2>
          <p className="text-xl text-fg/50 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to take your product to the next level? Or just want to talk tech architecture? 
            My inbox is always open for interesting projects and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-fg/40 ml-4">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-fg/3 border border-border focus:border-brand-blue outline-hidden px-6 py-4 rounded-2xl text-fg transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-fg/40 ml-4">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-fg/3 border border-border focus:border-brand-blue outline-hidden px-6 py-4 rounded-2xl text-fg transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-fg/40 ml-4">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-fg/3 border border-border focus:border-brand-blue outline-hidden px-6 py-4 rounded-2xl text-fg transition-all resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
              <div className="flex flex-wrap gap-4 order-2 md:order-1 justify-center md:justify-start">
                 <SocialIcon icon={<Twitter className="w-5 h-5" />} href="https://x.com/oluwatomi_sinnn" color="#1DA1F2" />
                 <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/oluwatosin-daniel-adegoke-105804267/" color="#0A66C2" />
                 <SocialIcon icon={<Youtube className="w-5 h-5" />} href="https://www.youtube.com/@BuildwithTomisin" color="#FF0000" />
                 <SocialIcon icon={<Facebook className="w-5 h-5" />} href="https://web.facebook.com/profile.php?id=61579939246490" color="#1877F2" />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full md:w-auto bg-fg text-bg px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all shadow-2xl hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group order-1 md:order-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-2xl text-center text-sm font-bold ${
                  result.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}
              >
                {result.success ? 'Message sent successfully! I will get back to you soon.' : result.error}
              </motion.div>
            )}
          </form>
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
