import ScrollToTopButton from "@/components/scrollToTopButton";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Herosection from "@/components/Herosection";
import ProjectSection from "@/components/ProjectSection";
import Timeline from "@/components/ui/timeline";
import React from "react";
import { div } from "framer-motion/client";
import Image from "next/image";



export default function Home() {
  return (
    <div className="relative">
      {/* Blur Overlay */}

      {/* Page Content */}
      <div className="relative z-20 flex flex-col space-y-16">
        <Herosection />
        <AboutSection />
        <Timeline />
        <ProjectSection />
        <ContactSection />
      </div>

      
    </div>
  );
}
