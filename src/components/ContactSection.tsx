"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Live <span className="text-accent">Pain-Free?</span>
              </h2>
              <p className="text-slate-300 mb-10">
                Book your appointment today and take the first step towards a healthier, active life.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-400 mb-1">Call Us</h3>
                    <a href="tel:+917330933851" className="text-xl font-bold hover:text-accent transition-colors">+91 73309 33851</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-400 mb-1">Location</h3>
                    <p className="text-lg font-medium leading-relaxed max-w-sm">
                      4-61/98, Miraj Colony Rd, Salarjung Colony, Miraj Colony, Toli Chowki, Hyderabad, Telangana 500008
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-accent">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-400 mb-1">Working Hours</h3>
                    <p className="text-lg font-medium">Open Daily</p>
                    <p className="text-sm text-slate-300">Closes at 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917330933851"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-4 rounded-full font-bold transition-colors w-full sm:w-auto"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-auto relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5871.518465642044!2d78.41520093985257!3d17.401765678502862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96dd48d69a03%3A0x36b47d418ae3f0da!2s461%2C%20Miraj%20Colony%20Rd%2C%20Salarjung%20Colony%2C%20Miraj%20Colony%2C%20Toli%20Chowki%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1778853029135!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
