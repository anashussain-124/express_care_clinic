import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import DoctorSection from "@/components/DoctorSection";
import AdvancedTreatmentsSection from "@/components/AdvancedTreatmentsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <DoctorSection />
      <AdvancedTreatmentsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <MobileBookingBar />
    </main>
  );
}
