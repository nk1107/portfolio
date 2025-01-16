import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Herosection from "@/components/Herosection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="relative">
      {/* Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-40 bg-white/30 backdrop-blur-md z-10 pointer-events-none"></div>

      {/* Page Content */}
      <div className="relative z-20">
        <Herosection />
        <AboutSection />
        <ProjectSection />
        <ContactSection/>
      </div>
    </div>
  );
}
