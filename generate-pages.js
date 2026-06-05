const fs = require('fs');
const path = require('path');

const services = [
  {
    slug: 'chiropractor-hyderabad',
    title: 'Top Chiropractor in Hyderabad | 100% Pain Relief',
    description: 'Looking for the best chiropractor in Hyderabad? Express Care Clinic offers expert, non-surgical chiropractic treatments for lasting pain relief.',
    h1: 'Best Chiropractor in Hyderabad for Holistic Pain Relief',
    intro: 'At Express Care Chiropractic & Wellness Support Centre in Tolichowki, Hyderabad, we provide world-class chiropractic care. Our non-surgical approach focuses on aligning the spine, relieving nerve pressure, and restoring your body’s natural healing ability. Whether you suffer from chronic back pain or a recent sports injury, our expert chiropractor, Dr. Nazeer Hussain, is here to help you live a pain-free life.',
    faqs: [
      { q: 'What does a chiropractor do?', a: 'A chiropractor diagnoses and treats musculoskeletal issues, primarily through manual spinal adjustments, to relieve pain and improve function without surgery.' },
      { q: 'Is chiropractic treatment safe?', a: 'Yes, when performed by a licensed professional, chiropractic care is widely recognized as one of the safest drug-free, non-invasive therapies available.' }
    ]
  },
  {
    slug: 'back-pain-treatment-hyderabad',
    title: 'Best Back Pain Treatment in Hyderabad | Express Care Clinic',
    description: 'Get permanent relief with the best back pain treatment in Hyderabad. We offer non-surgical spinal adjustments to cure lower and upper back pain.',
    h1: 'Advanced Back Pain Treatment in Hyderabad',
    intro: 'Back pain can severely limit your daily life. At Express Care Clinic, we specialize in identifying the root cause of your back pain—whether it’s poor posture, a herniated disc, or muscle strain. Our customized chiropractic adjustments provide immediate and long-lasting relief without the need for medication or invasive surgery.',
    faqs: [
      { q: 'How is back pain diagnosed?', a: 'We perform a comprehensive physical and neurological examination, and may use imaging like X-rays or MRIs if necessary to pinpoint the exact cause.' },
      { q: 'How many sessions do I need for back pain?', a: 'Many patients feel significant relief after the first session, though a complete treatment plan typically involves multiple sessions depending on severity.' }
    ]
  },
  {
    slug: 'neck-pain-treatment-hyderabad',
    title: 'Neck Pain Treatment in Hyderabad | Non-Surgical Relief',
    description: 'Suffering from cervical or neck pain? Visit Express Care Clinic in Hyderabad for expert neck pain treatment and spine adjustments.',
    h1: 'Effective Neck Pain & Cervical Treatment in Hyderabad',
    intro: 'Text neck, poor ergonomics, and whiplash are common causes of debilitating neck pain. Our specialized cervical adjustments restore proper joint mechanics, relieve muscle tension, and alleviate nerve irritation. Don’t let neck pain dictate your life; experience rapid relief with our holistic chiropractic care.',
    faqs: [
      { q: 'Can chiropractic care fix text neck?', a: 'Yes, specific adjustments and posture correction exercises are highly effective at reversing the effects of text neck and cervical strain.' },
      { q: 'Is it normal to hear a popping sound?', a: 'Yes, the popping sound is simply the release of gas bubbles from the joint fluid, a normal and safe part of the adjustment process.' }
    ]
  },
  {
    slug: 'sciatica-treatment-hyderabad',
    title: 'Sciatica Treatment in Hyderabad | Permanent Sciatic Nerve Relief',
    description: 'Looking for sciatica treatment in Hyderabad? Our expert chiropractic adjustments relieve sciatic nerve compression instantly.',
    h1: 'Non-Surgical Sciatica Treatment in Hyderabad',
    intro: 'Sciatica causes sharp, shooting pain down your leg. It’s often caused by a herniated disc or spinal misalignment compressing the sciatic nerve. Our targeted spinal adjustments relieve this pressure, providing fast, effective, and permanent relief from sciatic nerve pain without surgical intervention.',
    faqs: [
      { q: 'How long does sciatica take to heal?', a: 'With targeted chiropractic care, many patients experience a 50-80% reduction in pain within the first few weeks of treatment.' },
      { q: 'Can a slipped disc cause sciatica?', a: 'Yes, a herniated or slipped disc in the lower back is one of the most common causes of sciatic nerve compression.' }
    ]
  },
  {
    slug: 'frozen-shoulder-treatment-hyderabad',
    title: 'Frozen Shoulder Treatment in Hyderabad | Fast Recovery',
    description: 'Get back your mobility with expert frozen shoulder treatment in Hyderabad. Express Care Clinic offers advanced mobilization techniques.',
    h1: 'Expert Frozen Shoulder Treatment in Hyderabad',
    intro: 'Adhesive capsulitis, commonly known as frozen shoulder, causes severe stiffness and pain. Our multi-modal approach includes joint mobilization, soft tissue therapy, and chiropractic adjustments to break down scar tissue and restore your shoulder’s full range of motion quickly and safely.',
    faqs: [
      { q: 'What triggers a frozen shoulder?', a: 'It often occurs after an injury, surgery, or prolonged immobility, though it can also develop gradually without a specific cause.' },
      { q: 'Can chiropractic treat frozen shoulder?', a: 'Absolutely. We use specific mobilization techniques that target the shoulder capsule to improve mobility and decrease pain.' }
    ]
  },
  {
    slug: 'slipped-disc-treatment-hyderabad',
    title: 'Slipped Disc Treatment in Hyderabad | Herniated Disc Relief',
    description: 'Avoid surgery with our non-invasive slipped disc treatment in Hyderabad. Safe, effective chiropractic care for herniated discs.',
    h1: 'Non-Invasive Slipped Disc Treatment in Hyderabad',
    intro: 'A slipped or herniated disc can cause agonizing back and nerve pain. Before considering spine surgery, explore our conservative chiropractic care. We utilize spinal decompression techniques and gentle adjustments to relieve disc pressure, allowing the herniation to heal naturally and alleviating nerve pain.',
    faqs: [
      { q: 'Can a slipped disc heal without surgery?', a: 'Yes, the vast majority of herniated discs heal effectively with conservative therapies like chiropractic care and physical rehabilitation.' },
      { q: 'What are the symptoms of a slipped disc?', a: 'Symptoms include localized back pain, numbness, tingling, and sharp radiating pain down the arms or legs depending on the location.' }
    ]
  },
  {
    slug: 'posture-correction-hyderabad',
    title: 'Posture Correction in Hyderabad | Spine Alignment Expert',
    description: 'Fix your posture and prevent chronic pain with expert posture correction treatments in Hyderabad at Express Care Clinic.',
    h1: 'Advanced Posture Correction Services in Hyderabad',
    intro: 'Poor posture is the hidden culprit behind chronic back pain, neck stiffness, and frequent headaches. Our posture correction program combines spinal adjustments with targeted ergonomic advice and strengthening exercises to permanently fix your posture and protect your spine’s long-term health.',
    faqs: [
      { q: 'How long does it take to fix poor posture?', a: 'Noticeable improvements can be seen in a few weeks, but permanent structural correction usually requires a consistent plan over several months.' },
      { q: 'Does bad posture cause headaches?', a: 'Yes, forward head posture puts immense strain on neck muscles, which frequently leads to tension headaches and migraines.' }
    ]
  },
  {
    slug: 'sports-injury-treatment-hyderabad',
    title: 'Sports Injury Treatment in Hyderabad | Athletic Recovery',
    description: 'Recover faster with specialized sports injury treatment in Hyderabad. Chiropractic care for athletes and active individuals.',
    h1: 'Specialized Sports Injury Treatment in Hyderabad',
    intro: 'Whether you’re a professional athlete or a weekend warrior, sports injuries require specialized care to ensure a full and rapid recovery. We treat sprains, strains, tendonitis, and joint dysfunctions using sports chiropractic techniques, enabling you to return to your peak performance faster and stronger.',
    faqs: [
      { q: 'Do chiropractors treat muscle strains?', a: 'Yes, we use soft tissue therapies alongside joint adjustments to promote rapid healing of muscle strains and ligament sprains.' },
      { q: 'Can chiropractic improve athletic performance?', a: 'Absolutely. Proper spinal alignment improves nervous system function, biomechanics, and flexibility, which directly enhances athletic performance.' }
    ]
  },
  {
    slug: 'chiropractic-adjustment-hyderabad',
    title: 'Chiropractic Adjustment in Hyderabad | Spinal Alignment',
    description: 'Experience professional chiropractic adjustments in Hyderabad. Safe, precise spinal manipulations for overall wellness and pain relief.',
    h1: 'Professional Chiropractic Adjustments in Hyderabad',
    intro: 'A chiropractic adjustment is a highly precise procedure designed to correct spinal misalignments, known as subluxations. By restoring proper motion to the joints, we remove interference from the nervous system. This not only eliminates pain but enhances your body’s overall health, immunity, and vitality.',
    faqs: [
      { q: 'What is a subluxation?', a: 'A subluxation is a misalignment or restricted motion in a spinal joint that interferes with normal nerve function.' },
      { q: 'Is a chiropractic adjustment painful?', a: 'No, adjustments are generally painless and often provide immediate relief and a feeling of relaxation.' }
    ]
  }
];

const template = (service) => `import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "${service.title}",
  description: "${service.description}",
  alternates: {
    canonical: "https://www.chiropractornearme.in/${service.slug}",
  },
  openGraph: {
    title: "${service.title}",
    description: "${service.description}",
    url: "https://www.chiropractornearme.in/${service.slug}",
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
        "name": "${service.title}",
        "description": "${service.description}",
        "url": "https://www.chiropractornearme.in/${service.slug}",
        "about": {
          "@type": "MedicalCondition",
          "name": "${service.h1}"
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
            "name": "${service.h1}",
            "item": "https://www.chiropractornearme.in/${service.slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          ${service.faqs.map(faq => `{
            "@type": "Question",
            "name": "${faq.q}",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${faq.a}"
            }
          }`).join(',\n          ')}
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
            ${service.h1}
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
          <span className="text-slate-800 font-medium">${service.h1}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          
          {/* Main Article */}
          <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Understanding Your Treatment</h2>
            <div className="prose prose-lg prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed text-lg">${service.intro}</p>
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
                ${service.faqs.map(faq => `
                <div className="border-b border-slate-100 pb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">${faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">${faq.a}</p>
                </div>
                `).join('')}
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
                ${services.filter(s => s.slug !== service.slug).slice(0, 5).map(s => `
                <li>
                  <Link href="/${s.slug}" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
                    <ArrowRight size={16} className="text-accent" />
                    ${s.title.split('|')[0].trim()}
                  </Link>
                </li>
                `).join('')}
              </ul>
            </div>
          </aside>

        </div>
      </section>

      <Footer />
    </main>
  );
}
`;

const appDir = path.join(__dirname, 'src', 'app');

services.forEach(service => {
  const dirPath = path.join(appDir, service.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(service));
  console.log('Generated page for:', service.slug);
});
