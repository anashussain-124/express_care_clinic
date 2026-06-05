"use client";

import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/1.webp"
          alt="Express Care Chiropractic Clinic Hyderabad - Real Patient Treatment Room and Holistic Wellness Environment"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20" />
      </div>

      {/* Animated Particles/Blobs (CSS based) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card-dark inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
        >
          <div className="flex gap-1 text-accent">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">4.6/5 Google Rating (87+ Reviews)</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 tracking-tight max-w-5xl text-glow"
        >
          Express Care Chiropractic & <span className="text-accent">Wellness Support</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mb-4 font-light"
        >
          <span className="font-semibold text-white">YOU DON'T HAVE TO LIVE IN PAIN.</span> Holistic Solutions for Back Pain, Spine Health, Sciatica & Wellness in Hyderabad.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-md md:text-lg text-accent-light font-medium max-w-2xl mb-10 flex items-center justify-center gap-2"
        >
          <ShieldCheck size={20} />
          100% PAIN RELIEF IN FIRST SESSION
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/917330933851"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] transform hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Book on WhatsApp
          </a>
          <a
            href="tel:+917330933851"
            className="flex items-center justify-center gap-2 glass-card-dark hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:-translate-y-1"
          >
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/60" size={24} />
        </motion.div>
      </motion.div>
      
      {/* Floating WhatsApp Button (Global) */}
      <a
        href="https://wa.me/917330933851"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </section>
  );
}
