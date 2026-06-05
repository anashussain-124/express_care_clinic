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
    longDesc: "Back pain is one of the most common musculoskeletal complaints worldwide, affecting people of all ages and lifestyles. It can range from a dull, constant ache to a sudden, sharp sensation that makes movement difficult. Chiropractic care addresses the root cause by performing targeted spinal adjustments that restore proper vertebral alignment and relieve pressure on nerves and soft tissues."
  },
  {
    title: "Neck Pain",
    shortDesc: "Gentle alignment for stiffness and chronic neck discomfort.",
    icon: PersonStanding,
    imgUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    longDesc: "Neck pain and stiffness are increasingly prevalent due to prolonged screen time, poor ergonomics, and stress-related muscle tension. Left untreated, chronic neck discomfort can lead to headaches, shoulder tightness, and even radiating arm pain. Our chiropractors perform gentle cervical manipulation and mobilisation techniques to restore normal joint movement and reduce muscular spasm."
  },
  {
    title: "Sciatica",
    shortDesc: "Relieve nerve pressure causing radiating pain down the legs.",
    icon: Zap,
    imgUrl: "https://images.unsplash.com/photo-1616279969862-cf7a78a15ed5?auto=format&fit=crop&w=800&q=80",
    longDesc: "Sciatica is characterised by sharp, burning, or shooting pain that travels along the sciatic nerve — from the lower back through the buttock and down one or both legs. Chiropractic spinal decompression and targeted lumbar adjustments reduce the mechanical pressure responsible for nerve irritation, providing relief without surgery or opioid medication."
  },
  {
    title: "Disc Bulge",
    shortDesc: "Non-surgical decompression for herniated or bulging discs.",
    icon: Bone,
    imgUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    longDesc: "A disc bulge or herniation occurs when the soft inner nucleus of an intervertebral disc pushes outward through a weakened annulus, potentially pressing on adjacent spinal nerves. Non-surgical spinal decompression therapy gently distracts the vertebrae to create negative intradiscal pressure, encouraging the disc to retract toward its normal position."
  },
  {
    title: "Frozen Shoulder",
    shortDesc: "Restore mobility and reduce pain in the shoulder joint.",
    icon: HeartPulse,
    imgUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    longDesc: "Frozen shoulder, clinically known as adhesive capsulitis, involves progressive stiffening and painful restriction of the glenohumeral joint due to inflammation and thickening of the joint capsule. Chiropractic care employs joint mobilisation and manipulation techniques to stretch the contracted capsule and restore functional range of motion."
  },
  {
    title: "Scoliosis",
    shortDesc: "Management and structural alignment for spinal curvature.",
    icon: Waves,
    imgUrl: "https://images.unsplash.com/photo-1530026454774-5c4bde7ee131?auto=format&fit=crop&w=800&q=80",
    longDesc: "Scoliosis is an abnormal lateral curvature of the spine. Chiropractic management focuses on halting curve progression, reducing compensatory muscle tension, and improving overall spinal biomechanics through specific adjusting techniques and postural retraining to support quality of life."
  },
  {
    title: "Sinus Issues",
    shortDesc: "Chiropractic adjustments to promote proper sinus drainage.",
    icon: Wind,
    imgUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    longDesc: "Chronic sinus congestion and recurrent sinusitis often have an overlooked neurological component. Gentle chiropractic adjustments to the cervical vertebrae and cranial bones help restore proper nerve tone and facilitate drainage of the frontal, ethmoid, and maxillary sinuses."
  },
  {
    title: "Asthma",
    shortDesc: "Nervous system optimisation to support respiratory health.",
    icon: Flame,
    imgUrl: "https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=800&q=80",
    longDesc: "Misalignments in the thoracic spine can create neurological interference that affects the respiratory system. Thoracic spinal adjustments aim to restore normal nerve supply to the lungs and diaphragm, potentially reducing the frequency of asthma attacks and supporting deeper breathing."
  },
  {
    title: "Knee & Hip Pain",
    shortDesc: "Joint mobilisation for lower extremity pain relief.",
    icon: CircleDot,
    imgUrl: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=800&q=80",
    longDesc: "Knee and hip pain frequently stem from biomechanical dysfunction higher in the kinetic chain. Direct mobilisation of the knee or hip joint is performed where indicated to reduce intra-articular inflammation, restore normal joint mechanics, and alleviate load on the cartilage."
  },
  {
    title: "Migraine",
    shortDesc: "Reduce frequency and severity of headaches and migraines.",
    icon: Brain,
    imgUrl: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=800&q=80",
    longDesc: "Suboccipital muscle tension and restricted upper cervical joints are key peripheral triggers for migraines. Cervical adjustments and soft-tissue release reduce the sensitisation of pain pathways, helping lower both the frequency and intensity of migraine episodes."
  },
  {
    title: "Ulcerative Colitis",
    shortDesc: "Holistic nervous system support for digestive conditions.",
    icon: Droplets,
    imgUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    longDesc: "The autonomic nervous system plays a critical role in regulating gut motility and immune response. Chiropractic adjustments to the thoracic and lumbar spine aim to reduce interference in the nerve supply to the gastrointestinal tract, serving as a complementary therapy that reduces pain and improves nervous system tone."
  },
  {
    title: "Gangrene Management",
    shortDesc: "Supportive holistic care to improve circulation and wellness.",
    icon: Stethoscope,
    imgUrl: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80",
    longDesc: "Impairments in the spine can interfere with sympathetic nerve pathways governing blood vessel tone. Gentle chiropractic techniques aim to improve autonomic nervous system balance, promoting vasodilation and enhanced microcirculation to compromised tissues as a supportive adjunct therapy."
  },
  {
    title: "Hernia",
    shortDesc: "Therapeutic care supporting structural recovery.",
    icon: Activity,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "A hernia involves tissue protruding through a weak spot in the abdominal muscle wall. While surgery is often required, holistic care and specialized postural adjustments can help reduce core pressure, support surrounding musculature, and optimize recovery during rehabilitation."
  },
  {
    title: "Kidney Stones",
    shortDesc: "Holistic strategies to aid natural passing and pain management.",
    icon: Droplets,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "Kidney stones can cause severe lower back and flank pain. Chiropractic adjustments targeting the lower thoracic and lumbar spine help optimize nerve supply to the renal system, promoting better organ function and providing natural pain relief while the stone passes."
  },
  {
    title: "Gallbladder Stones",
    shortDesc: "Comprehensive support to improve digestive function and wellness.",
    icon: CircleDot,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "Gallstones form when bile hardens in the gallbladder, often causing sharp right-sided pain. Enhancing the nerve communication between the spine and the digestive organs through precise adjustments can help support better biliary function and reduce associated referred back pain."
  },
  {
    title: "Knee Treatment",
    shortDesc: "Advanced therapies for chronic knee pain and mobility issues.",
    icon: Bone,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "Knee issues often result from tracking problems, arthritis, or ligament strain. We utilize targeted joint mobilization, soft tissue therapy, and corrective exercises to restore proper alignment, reduce inflammation, and significantly improve range of motion in the knee."
  },
  {
    title: "Arthritis",
    shortDesc: "Joint care focused on reducing inflammation and restoring movement.",
    icon: Activity,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "Arthritis leads to chronic joint stiffness, swelling, and reduced mobility. Gentle chiropractic adjustments combined with customized mobility exercises help keep joints fluid, minimize progressive degeneration, and provide safe, drug-free pain management for arthritic patients."
  },
  {
    title: "Liver Diseases",
    shortDesc: "Holistic health approaches aimed at optimizing organ function.",
    icon: Stethoscope,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "The liver depends on a robust nerve supply from the mid-back to function optimally. Correcting spinal subluxations in the thoracic region improves neurological communication to the hepatic system, supporting the liver's natural detoxification and regenerative processes."
  },
  {
    title: "Jaw Adjustment",
    shortDesc: "Targeted TMJ treatments to resolve jaw pain and clicking.",
    icon: Brain,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "Temporomandibular joint (TMJ) disorders cause jaw pain, clicking, and tension headaches. Specialized chiropractic techniques adjust the jaw alignment, release surrounding muscle tension, and correct related upper-cervical spine issues to restore normal, pain-free chewing and speaking."
  },
  {
    title: "Piles (Hemorrhoids)",
    shortDesc: "Non-invasive holistic support to relieve pelvic pressure.",
    icon: Droplets,
    imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    longDesc: "Piles are swollen veins in the lower rectum often exacerbated by increased pelvic pressure and poor blood flow. Adjusting the sacrum and pelvis can improve the structural alignment and nerve function in the pelvic region, promoting better vascular tone and reducing discomfort."
  }
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
