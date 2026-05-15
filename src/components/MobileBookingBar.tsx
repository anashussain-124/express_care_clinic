"use client";

import { MessageCircle, Phone, Calendar } from "lucide-react";

export default function MobileBookingBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-40 pb-safe">
      <div className="flex items-center justify-around p-3">
        <a href="tel:+917330933851" className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors">
          <Phone size={20} />
          <span className="text-[10px] font-medium">Call</span>
        </a>
        
        <a href="https://wa.me/917330933851" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#25D366] transition-colors">
          <MessageCircle size={20} />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        
        <a href="#contact" className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md">
          <Calendar size={16} />
          Book Now
        </a>
      </div>
    </div>
  );
}
