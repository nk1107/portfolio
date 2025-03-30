"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPython, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiNodejsLine } from "react-icons/ri";
import { SiPrisma, SiMysql, SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { HoverEffect } from "./card-hover-effect";


type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

const TimeLineContent: TimelineEntry[] = [
  {
    title: "Fintechstico Hackathon Winner",
    content: (
      <p>
        Winner of Fintechstico hackathon organized by FES Society of NSUT
      </p>
    )
  },
  {
    title: "Glitch Hackathon Winner",
    content: (
      <p>
        Winner of productivity track in Glitch hackathon organized by GDSC Shiv Nadar University.
      </p>
    )
  },
  {
    title: "Software Developer Intern",
    content: (
      <p>
        Winner of productivity track in Glitch hackathon organized by GDSC Shiv Nadar University.
      </p>
    )
  },
]

const techStacks = [
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "Node.js", icon: <RiNodejsLine /> },
  { title: "Next.js", icon: <RiNextjsFill /> },
  { title: "Docker", icon: <FaDocker /> },
  { title: "Golang", icon: <FaGolang /> },
  { title: "MySQL", icon: <SiMysql /> },
  { title: "C++", icon: <TbBrandCpp /> },
  { title: "Python", icon: <FaPython /> },
  { title: "GraphQL", icon: <GrGraphQl /> },
];
export default function AboutSectionMobile() {
  console.log("AboutSection");
  return (
    <div
      id="about" // Add id for scrolling
      className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24"
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true, amount: 0.5 }}
    //   transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 dark:text-gray-100">
        About Me
      </h2>
      <div className="mt-8 sm:mt-12 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 space-y-12 sm:space-y-24 text-center max-w-3xl">
        {/* Introduction */}
        <p>
          I am a Software Developer Engineer with a Bachelor of Technology in Computer Science from Netaji Subhas University of Technology (Delhi).
          My academic journey has provided me with a strong foundation in software development, algorithms,
          and modern technologies, enabling me to build efficient and impactful solutions.
        </p>

        {/* Tech Stacks */}
        <div className="mt-10 sm:mt-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
            My skills
          </h2>
          <HoverEffect items={techStacks} />
        </div>
        
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
            My Experience
          </h2>
          
        </div>
      </div>
    </div>
  );
}
