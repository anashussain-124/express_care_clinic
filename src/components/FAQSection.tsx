"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is chiropractic care?",
    answer: "Chiropractic care is a non-surgical, holistic approach to healing that focuses on diagnosing and treating neuromuscular disorders, primarily through manual adjustment and manipulation of the spine.",
  },
  {
    question: "Is chiropractic treatment safe?",
    answer: "Yes, when performed by a licensed and trained professional like Dr. Nazeer Hussain, chiropractic care is widely recognized as one of the safest drug-free, non-invasive therapies available for neuromusculoskeletal complaints.",
  },
  {
    question: "Do treatments hurt?",
    answer: "Chiropractic adjustments rarely cause discomfort. In fact, many patients report immediate pain relief following an adjustment. You may experience mild soreness later, similar to what you feel after a good workout.",
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions depends on your specific condition and its severity. Many patients feel 80% better after their very first session. A personalized treatment plan will be discussed during your consultation.",
  },
  {
    question: "Do you treat conditions other than back pain?",
    answer: "Absolutely. We treat a wide range of conditions including sciatica, neck pain, frozen shoulder, migraines, posture issues, and joint problems using holistic wellness approaches.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
            <HelpCircle size={16} />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to some of the most common questions about our treatments and clinic.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-bold text-slate-800 pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
