"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X, MapPin } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
            EC
          </div>
          <div className="flex flex-col">
            <span className={clsx("font-heading font-bold text-lg leading-tight", isScrolled ? "text-slate-800" : "text-white")}>Express Care</span>
            <span className={clsx("text-xs tracking-wider uppercase font-medium", isScrolled ? "text-primary" : "text-accent")}>Chiropractic</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Treatments", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-accent",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+917330933851"
            className={clsx(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              isScrolled ? "text-primary hover:text-primary-dark" : "text-white hover:text-accent"
            )}
          >
            <Phone size={18} />
            +91 73309 33851
          </a>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={clsx("md:hidden p-2", isScrolled ? "text-slate-800" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 border-t border-slate-100"
        >
          <div className="flex flex-col p-4 gap-4">
            {["About", "Treatments", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 font-medium p-2 border-b border-slate-50"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+917330933851"
              className="flex items-center justify-center gap-2 bg-primary text-white p-3 rounded-xl font-semibold mt-2"
            >
              <Phone size={18} /> Call +91 73309 33851
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
