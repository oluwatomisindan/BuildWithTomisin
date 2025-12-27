// Trigger re-compilation
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg relative">
      <ScrollProgress />
      <BackgroundEffects />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <BentoGrid />
        <Services />
        <FeaturedProjects />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
