"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, UserCheck, Clock } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary rounded-full filter blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent rounded-full filter blur-[100px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-accent">Express Care</span>
          </h2>
          <p className="text-lg text-slate-400">
            We combine expert knowledge with a patient-first approach to deliver unmatched holistic healthcare.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Large Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-slate-800 transition-colors group"
          >
            <div className="w-14 h-14 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">First Session Results</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Over 80% of our patients experience significant pain relief right from their very first visit. We prioritize rapid, effective treatment.
            </p>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary/20 backdrop-blur-sm border border-primary/30 p-8 rounded-3xl hover:bg-primary/30 transition-colors group"
          >
            <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Non-Surgical</h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              Safe, holistic methods to heal your spine without invasive surgery or heavy medications.
            </p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-slate-800 transition-colors group"
          >
            <div className="w-14 h-14 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UserCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Doctor</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Care provided by highly qualified and experienced professionals dedicated to your recovery.
            </p>
          </motion.div>

          {/* Large Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-slate-800 transition-colors group flex flex-col justify-end relative overflow-hidden"
          >
            <div className="absolute right-0 bottom-0 opacity-10">
              <Clock size={180} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Flexible Timings</h3>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Open daily until 11 PM to accommodate your busy schedule. We ensure you get the care you need when you need it.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
