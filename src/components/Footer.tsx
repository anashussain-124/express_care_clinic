import { MapPin, Phone, MessageCircle, Mail, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
                EC
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">Express Care</span>
                <span className="text-xs tracking-wider uppercase font-medium text-primary">Chiropractic & Wellness Support Centre</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Premium non-surgical chiropractic and holistic wellness solutions in Hyderabad. Experience true healing and pain relief.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Visit our website" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Send us an email" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-bold mb-6 font-heading tracking-wide text-lg">Quick Links</h2>
            <ul className="space-y-3">
              {['Home', 'About Clinic', 'Treatments', 'Patient Stories', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h2 className="text-white font-bold mb-6 font-heading tracking-wide text-lg">Top Treatments</h2>
            <ul className="space-y-3">
              <li>
                <a href="/back-pain-treatment-hyderabad" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Back Pain Treatment
                </a>
              </li>
              <li>
                <a href="/neck-pain-treatment-hyderabad" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Neck Pain Treatment
                </a>
              </li>
              <li>
                <a href="/sciatica-treatment-hyderabad" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Sciatica Relief
                </a>
              </li>
              <li>
                <a href="/slipped-disc-treatment-hyderabad" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Slipped Disc Care
                </a>
              </li>
              <li>
                <a href="/chiropractic-adjustment-hyderabad" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Chiropractic Adjustment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white font-bold mb-6 font-heading tracking-wide text-lg">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-slate-400">SS Function Hall Lane, Meraj Colony, Tolichowki, Hyd - 08.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:+917330933851" className="text-sm text-slate-400 hover:text-white">+91 73309 33851</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-primary flex-shrink-0" size={18} />
                <a href="https://wa.me/917330933851" className="text-sm text-slate-400 hover:text-white">WhatsApp Us</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Express Care Chiropractic & Wellness Support. All rights reserved.
          </p>
          <a href="#" className="text-xs text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
