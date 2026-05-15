"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, GraduationCap, Stethoscope, Globe } from "lucide-react";

export default function DoctorSection() {
  const features = [
    { icon: Stethoscope, text: "Non-Surgical Treatments" },
    { icon: CheckCircle2, text: "Holistic Wellness" },
    { icon: GraduationCap, text: "Personalized Care" },
    { icon: Globe, text: "International Patients" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/3.webp"
                alt="Dr. Nazeer Hussain - Lead Chiropractor at Express Care Hyderabad specializing in non-surgical spine treatment"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Overlay Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl">
                <p className="text-white font-bold text-lg">Dr. Nazeer Hussain</p>
                <p className="text-accent text-sm font-medium">Lead Chiropractor</p>
              </div>
            </div>
          </motion.div>

          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4 leading-tight">
              Meet the Expert <br/>
              <span className="text-primary">Healing Your Pain</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Nazeer Hussain is a highly trusted specialist in chiropractic care, dedicated to providing non-invasive, holistic treatments that yield long-lasting results.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                  >
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <Icon size={24} />
                    </div>
                    <span className="font-semibold text-slate-800">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
            
            <a href="https://wa.me/917330933851" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg transform hover:-translate-y-1">
              Consult Dr. Nazeer
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
