import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Chiropractic Adjustment in Hyderabad | Spinal Alignment",
  description: "Experience professional chiropractic adjustments in Hyderabad. Safe, precise spinal manipulations for overall wellness and pain relief.",
  alternates: {
    canonical: "https://www.chiropractornearme.in/chiropractic-adjustment-hyderabad",
  },
  openGraph: {
    title: "Chiropractic Adjustment in Hyderabad | Spinal Alignment",
    description: "Experience professional chiropractic adjustments in Hyderabad. Safe, precise spinal manipulations for overall wellness and pain relief.",
    url: "https://www.chiropractornearme.in/chiropractic-adjustment-hyderabad",
    siteName: "Express Care Chiropractic & Wellness Support Centre",
    locale: "en_IN",
    type: "website",
  }
};

export default function ServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Chiropractic Adjustment in Hyderabad | Spinal Alignment",
        "description": "Experience professional chiropractic adjustments in Hyderabad. Safe, precise spinal manipulations for overall wellness and pain relief.",
        "url": "https://www.chiropractornearme.in/chiropractic-adjustment-hyderabad",
        "about": {
          "@type": "MedicalCondition",
          "name": "Professional Chiropractic Adjustments in Hyderabad"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.chiropractornearme.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Professional Chiropractic Adjustments in Hyderabad",
            "item": "https://www.chiropractornearme.in/chiropractic-adjustment-hyderabad"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a subluxation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A subluxation is a misalignment or restricted motion in a spinal joint that interferes with normal nerve function."
            }
          },
          {
            "@type": "Question",
            "name": "Is a chiropractic adjustment painful?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, adjustments are generally painless and often provide immediate relief and a feeling of relaxation."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-slate-50">
      <Navbar />
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('/assets/1.webp')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-white">100% PAIN RELIEF IN FIRST SESSION</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Professional Chiropractic Adjustments in Hyderabad
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            YOU DON'T HAVE TO LIVE IN PAIN. Experience advanced, non-surgical relief in Hyderabad.
          </p>
          <a href="https://wa.me/917330933851" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] transform hover:-translate-y-1">
            Book Appointment on WhatsApp
          </a>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-800 font-medium">Professional Chiropractic Adjustments in Hyderabad</span>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          
          {/* Main Article */}
          <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Understanding Your Treatment</h2>
            <div className="prose prose-lg prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed text-lg">A chiropractic adjustment is a highly precise procedure designed to correct spinal misalignments, known as subluxations. By restoring proper motion to the joints, we remove interference from the nervous system. This not only eliminates pain but enhances your body’s overall health, immunity, and vitality.</p>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Why Choose Express Care Clinic?</h3>
            <ul className="space-y-4 mb-10">
              {['Non-surgical, drug-free approach', 'Personalized treatment plans by Dr. Nazeer Hussain', 'State-of-the-art clinic in Tolichowki, Hyderabad', 'Proven track record of immediate pain relief'].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* FAQs */}
            <div className="mt-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                
                <div className="border-b border-slate-100 pb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">What is a subluxation?</h3>
                  <p className="text-slate-600 leading-relaxed">A subluxation is a misalignment or restricted motion in a spinal joint that interferes with normal nerve function.</p>
                </div>
                
                <div className="border-b border-slate-100 pb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Is a chiropractic adjustment painful?</h3>
                  <p className="text-slate-600 leading-relaxed">No, adjustments are generally painless and often provide immediate relief and a feeling of relaxation.</p>
                </div>
                
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* CTA Box */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">Ready to heal?</h3>
              <p className="text-slate-300 mb-6 relative z-10">Stop letting pain hold you back. Schedule your consultation with Dr. Nazeer Hussain today.</p>
              <a href="tel:+917330933851" className="flex items-center justify-center gap-2 bg-white text-slate-900 w-full py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors relative z-10 mb-4">
                <Phone size={20} /> Call +91 73309 33851
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm mt-6 relative z-10">
                <MapPin size={18} className="flex-shrink-0 text-primary" />
                <span>SS Function Hall Lane, Meraj Colony, Tolichowki, Hyd - 08</span>
              </div>
            </div>

            {/* Internal Links Silo */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Other Specialized Treatments</h3>
              <ul className="space-y-3">
                
                <li>
                  <Link href="/chiropractor-hyderabad" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
                    <ArrowRight size={16} className="text-accent" />
                    Top Chiropractor in Hyderabad
                  </Link>
                </li>
                
                <li>
                  <Link href="/back-pain-treatment-hyderabad" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
                    <ArrowRight size={16} className="text-accent" />
                    Best Back Pain Treatment in Hyderabad
                  </Link>
                </li>
                
                <li>
                  <Link href="/neck-pain-treatment-hyderabad" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
                    <ArrowRight size={16} className="text-accent" />
                    Neck Pain Treatment in Hyderabad
                  </Link>
                </li>
                
                <li>
                  <Link href="/sciatica-treatment-hyderabad" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
                    <ArrowRight size={16} className="text-accent" />
                    Sciatica Treatment in Hyderabad
                  </Link>
                </li>
                
                <li>
                  <Link href="/frozen-shoulder-treatment-hyderabad" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
                    <ArrowRight size={16} className="text-accent" />
                    Frozen Shoulder Treatment in Hyderabad
                  </Link>
                </li>
                
              </ul>
            </div>
          </aside>

        </div>
      </section>

      <Footer />
    </main>
  );
}
