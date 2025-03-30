import ScrollToTopButton from "@/components/scrollToTopButton";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Herosection from "@/components/Herosection";
import ProjectSection from "@/components/ProjectSection";
import Timeline from "@/components/ui/timeline";
import React from "react";
import AboutSectionMobile from "@/components/ui/AboutSectionMobile";

export default function Home() {
  return (
    <div className="relative">
      {/* Blur Overlay */}

      {/* Page Content */}
      <div className="relative z-20 flex flex-col space-y-16">
        <Herosection />

        {/* Show AboutSection on desktop (md and above) */}
        <div className="hidden md:block">
          <AboutSection />
        </div>

        {/* Show AboutSectionMobile on small screens (below md) */}
        <div className="block md:hidden">
          <AboutSectionMobile />
        </div>

        <Timeline />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
