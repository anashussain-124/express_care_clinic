"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Bone,
  Waves,
  HeartPulse,
  Brain,
  Zap,
  Wind,
  Flame,
  PersonStanding,
  Stethoscope,
  Droplets,
  CircleDot,
  X,
  CalendarCheck,
} from "lucide-react";

/* ─────────────────────────────────────
   Data
───────────────────────────────────── */
interface Condition {
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  imgUrl: string;
  longDesc: string;
}

const conditions: Condition[] = [
  {
    title: "Back Pain",
    shortDesc: "Targeted spinal adjustments to alleviate lower and upper back pain.",
    icon: Activity,
    imgUrl: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Back pain is one of the most common musculoskeletal complaints worldwide, affecting people of all ages and lifestyles. It can range from a dull, constant ache to a sudden, sharp sensation that makes movement difficult. Common causes include poor posture, muscle strain, herniated discs, or degenerative spinal changes. Chiropractic care addresses the root cause by performing targeted spinal adjustments that restore proper vertebral alignment and relieve pressure on nerves and soft tissues. Complementary therapies such as soft-tissue massage, rehabilitative exercises, and postural counselling are integrated to accelerate recovery. With a personalised treatment plan, most patients experience significant pain relief and improved mobility within a few sessions.",
  },
  {
    title: "Neck Pain",
    shortDesc: "Gentle alignment for stiffness and chronic neck discomfort.",
    icon: PersonStanding,
    imgUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Neck pain and stiffness are increasingly prevalent due to prolonged screen time, poor ergonomics, and stress-related muscle tension. Left untreated, chronic neck discomfort can lead to headaches, shoulder tightness, and even radiating arm pain. Our chiropractors perform gentle cervical manipulation and mobilisation techniques to restore normal joint movement and reduce muscular spasm. Soft-tissue therapies including trigger-point release and myofascial decompression complement the adjustments by addressing surrounding musculature. Patients also receive guidance on ergonomic corrections and therapeutic stretches to sustain the improvements achieved during clinic visits, helping prevent recurrence.",
  },
  {
    title: "Sciatica",
    shortDesc: "Relieve nerve pressure causing radiating pain down the legs.",
    icon: Zap,
    imgUrl: "https://images.unsplash.com/photo-1616279969862-cf7a78a15ed5?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Sciatica is characterised by sharp, burning, or shooting pain that travels along the sciatic nerve — from the lower back through the buttock and down one or both legs. It is most commonly caused by a herniated disc, bone spur, or spinal stenosis compressing the nerve root. Chiropractic spinal decompression and targeted lumbar adjustments reduce the mechanical pressure responsible for nerve irritation, providing relief without surgery or opioid medication. Soft-tissue work around the piriformis and gluteal muscles further releases nerve entrapment at secondary sites. Most patients notice a progressive reduction in leg pain and improved walking tolerance, with long-term results supported by core-strengthening rehabilitation.",
  },
  {
    title: "Disc Bulge",
    shortDesc: "Non-surgical decompression for herniated or bulging discs.",
    icon: Bone,
    imgUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "A disc bulge or herniation occurs when the soft inner nucleus of an intervertebral disc pushes outward through a weakened annulus, potentially pressing on adjacent spinal nerves. Symptoms range from localised back pain to radiating pain, numbness, or weakness in the limbs. Non-surgical spinal decompression therapy — delivered with precision on a specialised traction table — gently distracts the vertebrae to create negative intradiscal pressure, encouraging the disc to retract toward its normal position. Chiropractic adjustments restore vertebral alignment and improve biomechanics around the affected segment. Combined with therapeutic exercise and lifestyle modifications, this approach achieves lasting relief for the majority of patients.",
  },
  {
    title: "Frozen Shoulder",
    shortDesc: "Restore mobility and reduce pain in the shoulder joint.",
    icon: HeartPulse,
    imgUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Frozen shoulder, clinically known as adhesive capsulitis, involves progressive stiffening and painful restriction of the glenohumeral joint due to inflammation and thickening of the joint capsule. It commonly develops after an injury, surgery, or prolonged immobility, and can severely limit overhead and rotational movements. Chiropractic care employs joint mobilisation and manipulation techniques to stretch the contracted capsule and restore functional range of motion. Instrument-assisted soft-tissue mobilisation (IASTM) and therapeutic ultrasound are used to break down adhesions and stimulate tissue remodelling. A structured home-exercise programme accelerates recovery and prevents the fibrotic process from recurring.",
  },
  {
    title: "Scoliosis",
    shortDesc: "Management and structural alignment for spinal curvature.",
    icon: Waves,
    imgUrl: "https://images.unsplash.com/photo-1530026454774-5c4bde7ee131?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Scoliosis is an abnormal lateral curvature of the spine, most often diagnosed during adolescence but also occurring in adults due to degenerative changes. Mild to moderate curves can cause muscle imbalances, postural distortion, back pain, and in severe cases, compromise breathing. Chiropractic management focuses on halting curve progression, reducing compensatory muscle tension, and improving overall spinal biomechanics through specific adjusting techniques and postural retraining. Mirror-image exercises and customised orthotics address the three-dimensional nature of the deformity. While chiropractic care does not surgically straighten the spine, consistent treatment can meaningfully improve function, reduce pain, and support quality of life.",
  },
  {
    title: "Sinus Issues",
    shortDesc: "Chiropractic adjustments to promote proper sinus drainage.",
    icon: Wind,
    imgUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Chronic sinus congestion and recurrent sinusitis often have an overlooked neurological component: tension in the upper cervical spine and cranial sutures can impair lymphatic drainage and nerve signalling to the sinus cavities. Gentle chiropractic adjustments to the cervical vertebrae and cranial bones help restore proper nerve tone and facilitate drainage of the frontal, ethmoid, and maxillary sinuses. Patients frequently report reduced frequency of sinus infections, clearer nasal passages, and lessened headache pressure following a course of treatment. This holistic approach complements, rather than replaces, conventional ENT management and is particularly valuable for patients seeking to reduce dependence on decongestants and antibiotics.",
  },
  {
    title: "Asthma",
    shortDesc: "Nervous system optimisation to support respiratory health.",
    icon: Flame,
    imgUrl: "https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "While chiropractic care is not a cure for asthma, emerging evidence supports its role as a valuable adjunct in managing respiratory conditions. Misalignments in the thoracic spine (mid-back) can create neurological interference that increases bronchial hyperreactivity and reduces the efficiency of the respiratory muscles. Thoracic spinal adjustments aim to restore normal nerve supply to the lungs and diaphragm, potentially reducing the frequency and severity of asthma attacks. Improved spinal mobility also allows for greater thoracic expansion, supporting deeper, more efficient breathing. Patients report complementary benefits such as reduced reliance on rescue inhalers and improved exercise tolerance when chiropractic is incorporated into a comprehensive respiratory management plan.",
  },
  {
    title: "Knee & Hip Pain",
    shortDesc: "Joint mobilisation for lower extremity pain relief.",
    icon: CircleDot,
    imgUrl: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Knee and hip pain frequently stem from biomechanical dysfunction higher in the kinetic chain — pelvic imbalance, sacroiliac joint restriction, or altered gait patterns can place excessive stress on the lower extremity joints. Chiropractic evaluation identifies these upstream contributing factors and addresses them through adjustments and soft-tissue therapies. Direct mobilisation of the knee or hip joint is performed where indicated to reduce intra-articular inflammation and restore normal joint mechanics. Rehabilitative exercises targeting the gluteal and quadriceps musculature provide dynamic stabilisation, reducing load on the cartilage and ligaments. This integrated approach benefits patients with osteoarthritis, IT band syndrome, bursitis, and post-surgical stiffness alike.",
  },
  {
    title: "Migraine",
    shortDesc: "Reduce frequency and severity of headaches and migraines.",
    icon: Brain,
    imgUrl: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Migraines are debilitating neurological events characterised by intense, often one-sided headache, nausea, and sensitivity to light and sound. Suboccipital muscle tension, restricted upper cervical joints, and altered trigeminal nerve signalling are key peripheral triggers frequently managed through chiropractic care. Cervical adjustments and soft-tissue release of the suboccipital region reduce the sensitisation of pain pathways, helping lower both the frequency and intensity of migraine episodes. Lifestyle factors — including hydration, screen time, sleep posture, and stress — are addressed holistically to minimise trigger exposure. Clinical studies show that patients receiving regular chiropractic care often reduce their reliance on prescription migraine medications over time.",
  },
  {
    title: "Ulcerative Colitis",
    shortDesc: "Holistic nervous system support for digestive conditions.",
    icon: Droplets,
    imgUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Ulcerative colitis is a chronic inflammatory bowel condition causing abdominal pain, diarrhoea, and fatigue. The autonomic nervous system — particularly the vagus nerve — plays a critical role in regulating gut motility, immune response, and mucosal integrity. Chiropractic adjustments to the thoracic and lumbar spine aim to reduce interference in the autonomic nerve supply to the gastrointestinal tract, potentially modulating the inflammatory cascade. While chiropractic is not a standalone treatment for IBD, it can be a meaningful complementary therapy that reduces pain, improves nervous system tone, and supports overall wellbeing alongside medical management. Patients often report improved digestive comfort, reduced stress, and better sleep quality.",
  },
  {
    title: "Gangrene Mgt",
    shortDesc: "Supportive holistic care to improve circulation and wellness.",
    icon: Stethoscope,
    imgUrl: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Supportive chiropractic and holistic care plays an adjunctive role in the broader management of peripheral vascular disease and conditions affecting tissue perfusion, including post-debridement care in gangrene management. Impairments in the lumbar and sacral spine can interfere with sympathetic nerve pathways governing blood vessel tone in the lower extremities. Gentle chiropractic techniques aim to improve autonomic nervous system balance, promoting vasodilation and enhanced microcirculation to compromised tissues. Nutritional counselling, lymphatic drainage massage, and stress management strategies are integrated to support the body's natural healing capacity. This supportive holistic approach is always implemented in close collaboration with the patient's medical team to ensure comprehensive, coordinated care.",
  },
];

/* ─────────────────────────────────────
   Modal — portalled to document.body
   FIX: AnimatePresence wraps the portal
   call-site (not inside createPortal)
   to comply with Framer Motion v12.
───────────────────────────────────── */
interface ModalProps {
  condition: Condition | null;
  onClose: () => void;
}

function ConditionModal({ condition, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  // SSR guard — portal only works on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard close + body scroll lock
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!condition) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [condition, handleKeyDown]);

  if (!mounted) return null;

  // ── CRITICAL FIX ──────────────────────────────────────────────────────────
  // In Framer Motion v12, AnimatePresence MUST wrap at the call-site.
  // Putting AnimatePresence *inside* createPortal's first argument causes the
  // exit animations (and sometimes the enter) to silently fail.
  // The portal renders the backdrop + panel into document.body so that
  // `overflow-x-hidden` on <main> cannot create a clipping containing block.
  // ──────────────────────────────────────────────────────────────────────────
  const modalContent = condition ? (
    <>
      {/* ── Backdrop ── */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
        style={{ zIndex: 99998 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Panel container ── */}
      <motion.div
        key="panel-wrap"
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 28 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 99999, pointerEvents: "none" }}
      >
        {/* The panel itself re-enables pointer events */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-condition-title"
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          style={{ pointerEvents: "auto" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={condition.imgUrl}
              alt={condition.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
            <h2
              id="modal-condition-title"
              className="absolute bottom-5 left-6 right-16 text-2xl sm:text-3xl font-heading font-bold text-white drop-shadow-lg leading-tight"
            >
              {condition.title}
            </h2>
          </div>

          {/* Close ✕ */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#0d7a6e] focus:ring-offset-1"
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          {/* Body */}
          <div className="p-6 sm:p-8">
            <div className="w-12 h-1 bg-[#0d7a6e] rounded-full mb-5" />
            <p className="text-slate-600 leading-relaxed text-[15px]">
              {condition.longDesc}
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2.5 bg-[#0d7a6e] hover:bg-[#0a6259] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0d7a6e] focus:ring-offset-2"
              style={{ textDecoration: "none" }}
            >
              <CalendarCheck size={18} />
              Book Appointment
            </a>
          </div>
        </div>
      </motion.div>
    </>
  ) : null;

  return createPortal(
    <AnimatePresence mode="wait">{modalContent}</AnimatePresence>,
    document.body
  );
}

/* ─────────────────────────────────────
   Card
   FIX: motion.button with whileHover/
   whileTap suppresses onClick in FM v12
   + React 19. Use motion.div for the
   entrance animation; plain <button>
   handles click. Hover effects are pure
   CSS — zero risk of gesture conflicts.
───────────────────────────────────── */
interface CardProps {
  condition: Condition;
  index: number;
  onClick: () => void;
}

function ConditionCard({ condition, index, onClick }: CardProps) {
  const Icon = condition.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.07, ease: "easeOut" }}
      /* No whileHover / whileTap here — leave clicking to the native button */
    >
      <button
        type="button"
        onClick={onClick}
        className="
          group relative text-left w-full h-full
          bg-white rounded-2xl border border-slate-100 p-6
          shadow-sm cursor-pointer
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-[#0d7a6e]/20
          focus:outline-none focus:ring-2 focus:ring-[#0d7a6e] focus:ring-offset-2
          active:scale-[0.98]
          overflow-hidden
        "
        aria-label={`Learn more about ${condition.title}`}
      >
        {/* Hover shimmer */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0d7a6e]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <span className="relative block z-10">
          {/* Icon box */}
          <span className="
            w-12 h-12 mb-5 flex items-center justify-center rounded-xl
            bg-[#f0faf9] text-[#0d7a6e]
            group-hover:bg-[#0d7a6e] group-hover:text-white
            transition-all duration-300
            shadow-sm group-hover:shadow-[0_0_16px_rgba(13,122,110,0.35)]
            block
          ">
            <Icon size={22} strokeWidth={1.75} />
          </span>

          {/* Title */}
          <span className="block text-[15px] font-bold text-slate-800 group-hover:text-[#0d7a6e] mb-1.5 transition-colors duration-200 font-heading">
            {condition.title}
          </span>

          {/* Short description */}
          <span className="block text-[13px] text-slate-500 leading-relaxed line-clamp-2">
            {condition.shortDesc}
          </span>

          {/* Learn more hint */}
          <span className="mt-3 flex items-center gap-1 text-[12px] font-semibold text-[#0d7a6e] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Learn more →
          </span>
        </span>
      </button>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   Section
───────────────────────────────────── */
export default function AdvancedTreatmentsSection() {
  const [activeCondition, setActiveCondition] = useState<Condition | null>(null);

  return (
    <>
      {/*
        FIX: removed `overflow-hidden` from the section.
        `overflow-hidden` on a positioned ancestor creates a clipping
        containing block that breaks CSS transforms on child cards at the edges.
        The decorative blobs are constrained via `pointer-events-none` instead.
      */}
      <section id="treatments" className="py-24 bg-[#f8f9fa] relative">
        {/* Decorative blobs — clipped with clip-path so they don't extend layout */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#0d7a6e]/5 blur-3xl pointer-events-none select-none"
          style={{ clipPath: "inset(0)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-[#0d7a6e]/4 blur-3xl pointer-events-none select-none"
          style={{ clipPath: "inset(0)" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Heading block */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#0d7a6e] bg-[#0d7a6e]/10 px-4 py-1.5 rounded-full mb-5">
              What We Treat
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4 leading-tight">
              Advanced{" "}
              <span className="text-[#0d7a6e] relative inline-block">
                Treatments
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 Q100 0 200 6"
                    stroke="#0d7a6e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-500 leading-relaxed">
              We offer comprehensive, non-surgical solutions for a wide range of conditions,
              focusing on your complete well-being.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {conditions.map((condition, index) => (
              <ConditionCard
                key={condition.title}
                condition={condition}
                index={index}
                onClick={() => setActiveCondition(condition)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Modal — AnimatePresence lives here (call-site), portal renders to document.body */}
      <ConditionModal
        condition={activeCondition}
        onClose={() => setActiveCondition(null)}
      />
    </>
  );
}
