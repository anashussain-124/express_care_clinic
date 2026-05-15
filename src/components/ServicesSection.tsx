"use client";

import { motion } from "framer-motion";
import { Activity, Bone, Waves, HeartPulse, Brain, Zap, Syringe, Wind, AlertTriangle } from "lucide-react";

const services = [
  { title: "Back Pain", icon: Activity, desc: "Targeted spinal adjustments to alleviate lower and upper back pain." },
  { title: "Neck Pain", icon: Activity, desc: "Gentle alignment for stiffness and chronic neck discomfort." },
  { title: "Sciatica", icon: Zap, desc: "Relieve nerve pressure causing radiating pain down the legs." },
  { title: "Disc Bulge", icon: Bone, desc: "Non-surgical decompression for herniated or bulging discs." },
  { title: "Frozen Shoulder", icon: HeartPulse, desc: "Restore mobility and reduce pain in the shoulder joint." },
  { title: "Scoliosis", icon: Waves, desc: "Management and structural alignment for spinal curvature." },
  { title: "Sinus Issues", icon: Wind, desc: "Chiropractic adjustments to promote proper sinus drainage." },
  { title: "Asthma", icon: Wind, desc: "Nervous system optimization to support respiratory health." },
  { title: "Knee & Hip Pain", icon: Activity, desc: "Joint mobilization for lower extremity pain relief." },
  { title: "Migraine", icon: Brain, desc: "Reduce frequency and severity of headaches and migraines." },
  { title: "Ulcerative Colitis", icon: AlertTriangle, desc: "Holistic nervous system support for digestive conditions." },
  { title: "Gangrene Mgt", icon: Syringe, desc: "Supportive holistic care to improve circulation and wellness." },
];

export default function ServicesSection() {
  return (
    <section id="treatments" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Advanced <span className="text-primary">Treatments</span>
          </h2>
          <p className="text-lg text-slate-600">
            We offer comprehensive, non-surgical solutions for a wide range of conditions, focusing on your complete well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-50 group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center text-primary mb-6 transition-colors duration-300 shadow-sm">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
