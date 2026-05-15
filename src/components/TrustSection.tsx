"use client";

import { motion } from "framer-motion";
import { Star, Users, CheckCircle, Award } from "lucide-react";

const stats = [
  { id: 1, name: 'Google Rating', value: '4.6/5', icon: Star, desc: 'Highly Rated' },
  { id: 2, name: 'Happy Patients', value: '87+', icon: Users, desc: 'Verified Reviews' },
  { id: 3, name: 'First Session Relief', value: '80%', icon: CheckCircle, desc: 'Instant Results' },
  { id: 4, name: 'Top Rated', value: '#1', icon: Award, desc: 'in Toli Chowki' },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-slate-50 relative -mt-6 rounded-t-3xl z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-800 mb-1">{stat.value}</h3>
                <p className="text-sm font-semibold text-primary mb-1">{stat.name}</p>
                <p className="text-xs text-slate-500">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
