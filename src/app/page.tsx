import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";

import ProgramsSection from "@/components/sections/ProgramsSection";
import GallerySection from "@/components/sections/GallerySection";
import DonationSection from "@/components/sections/DonationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { SectionWrapper } from "@/components/animations/MotionWrapper";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <SectionWrapper><HeroSection /></SectionWrapper>
        <SectionWrapper><AboutSection /></SectionWrapper>
        <SectionWrapper><TeamSection /></SectionWrapper>

        <SectionWrapper><ProgramsSection /></SectionWrapper>
        <SectionWrapper><GallerySection /></SectionWrapper>
        <SectionWrapper><DonationSection /></SectionWrapper>
        <SectionWrapper><TestimonialsSection /></SectionWrapper>
        <SectionWrapper><ContactSection /></SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
