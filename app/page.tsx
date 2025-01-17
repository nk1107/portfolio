import ScrollToTopButton from "@/components/scrollToTopButton";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Herosection from "@/components/Herosection";
import ProjectSection from "@/components/ProjectSection";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { div } from "framer-motion/client";
import Image from "next/image";

type TimelineEntry = {
  title: React.ReactNode;
  content: React.ReactNode;
  imageSrc?: string;
};

const TimeLineContent: TimelineEntry[] = [
  {
    title: (
      <div>Fintechstico Hackathon Winner</div>
    ),
    content: (
      <p>
        Winner of Fintechstico hackathon organized by FES Society of NSUT
      </p>
    )
  },
  {
    title: (
      <div>glitch hackathon winner</div>
    ),
    content: (
      <p>
        Winner of productivity track in Glitch hackathon organized by GDSC Shiv Nadar University.
      </p>
    )
  },
  {
    title: (
      <div className="flex items-center space-x-16">
        Software Developer Intern Twilio 2024
        <Image alt="twilio" src="/twilio.png" width={100} height={100}/>
      </div>
    ),
    content: (
      <p>
        Winner of productivity track in Glitch hackathon organized by GDSC Shiv Nadar University.
      </p>
    ),
    imageSrc: "/twilio.png"
  
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-40 bg-white/30 backdrop-blur-md z-10 pointer-events-none"></div>

      {/* Page Content */}
      <div className="relative z-20">
        <Herosection />
        <AboutSection />
        <Timeline data={TimeLineContent} />
        <ProjectSection />
        <ContactSection />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
