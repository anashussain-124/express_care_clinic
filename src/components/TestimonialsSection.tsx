"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import clsx from "clsx";

const reviews = [
  {
    name: "JUST KUNDAN",
    text: "Experienced chiropractor in Tolichowki, he is one of the best. He relieved my sciatic nerve pain in one session.",
  },
  {
    name: "Zaheer Hussain",
    text: "Frozen shoulder and neck pain since 1 year. Consulted many doctors but there was no relief. After only one session there is complete relief in pain.",
  },
  {
    name: "Abdul Wajid",
    text: "Express Care Chiropractic & Wellness Support offers excellent care with a professional and friendly doctor. The personalized treatment approach truly helped my recovery.",
  },
  {
    name: "Seb M",
    text: "This is the best chiropractor we have been to. Severe shoulder and neck pain improved noticeably after treatment.",
  },
  {
    name: "Manoa Eric",
    text: "Presented lower back pain and had only one session and felt significant difference.",
  },
  {
    name: "Vijayalakshmi Throvagunta",
    text: "After chiropractic treatment, I felt the difference and relief from pain due to L4 bulging.",
  },
  {
    name: "Amarvathi Lavanya",
    text: "Excellent treatment and receiving of patient, quick and safe pain relief.",
  }
];

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-6">
            <Star size={16} fill="currentColor" />
            4.6 Google Rating
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Real Patient <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Read what our patients have to say about their recovery journey.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Carousel */}
      <div 
        className="relative w-full flex overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex gap-6 px-4"
          style={{ width: "max-content" }}
        >
          {/* Duplicate array for seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex-shrink-0 relative overflow-hidden group-hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-6 right-6 text-slate-100 rotate-180" size={60} />
              <div className="flex gap-1 text-accent mb-4 relative z-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 relative z-10 italic">"{review.text}"</p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{review.name}</h3>
                  <p className="text-xs text-slate-500">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
