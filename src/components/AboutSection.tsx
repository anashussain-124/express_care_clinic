"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Activity, Heart, ShieldPlus } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image with floating effects */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/assets/2.webp"
                alt="Express Care Chiropractic & Wellness Support Centre Official Signage and Spine Anatomy Chart in Hyderabad Clinic"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating accent card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 glass-card bg-white/90 p-6 rounded-2xl w-64 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                  <Activity size={20} />
                </div>
                <h4 className="font-heading font-bold text-slate-800">Advanced Care</h4>
              </div>
              <p className="text-sm text-slate-600">State-of-the-art non-surgical spine treatments.</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6">
              <ShieldPlus size={16} />
              About Our Clinic
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Premium Holistic Wellness & <span className="text-primary">Chiropractic Care</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Express Care Chiropractic & Wellness Support, we believe in treating the root cause of your pain, not just the symptoms. Located in the heart of Toli Chowki, Hyderabad, we provide world-class, non-surgical pain relief solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-accent/20 text-accent p-2 rounded-lg">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Personalized Approach</h4>
                  <p className="text-sm text-slate-600">Tailored treatment plans for every patient.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 text-primary p-2 rounded-lg">
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Fast Relief</h4>
                  <p className="text-sm text-slate-600">80% feel better after just one session.</p>
                </div>
              </div>
            </div>
            
            <a href="#treatments" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Treatments
              <ArrowRight size={18} />
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
