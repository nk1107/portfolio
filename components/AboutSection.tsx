"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPython, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiNodejsLine } from "react-icons/ri";
import { SiPrisma, SiMysql,SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { HoverEffect } from "./ui/card-hover-effect";

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
export default function AboutSection() {
  return (
    <motion.div
      id="about" // Add id for scrolling
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-6xl font-bold text-center mt-28 text-gray-900 dark:text-gray-100">
        About Me
      </h2>
      <div className="mt-12 text-lg leading-8 text-gray-700 dark:text-gray-300 space-y-24 text-center max-w-3xl">
        {/* Introduction */}
        <p>
          I am a Software Developer Engineer with a Bachelor of Technology in Computer Science from Netaji Subhas University of Technology (Delhi).
          My academic journey has provided me with a strong foundation in software development, algorithms,
          and modern technologies, enabling me to build efficient and impactful solutions.
        </p>

        {/* Tech Stacks */}
        <div className="mt-14">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
            My skills
          </h2>
          <HoverEffect items={techStacks} />
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Experience
        </h3>
        <p className="mt-4">
          I have hands-on experience working on diverse projects, including developing a
          Splitwise-like expense tracker, a password manager CLI app, and a Git workflow
          visualizer extension. Additionally, I recently completed a 2-month internship,
          where I contributed to enterprise-level codebases and honed my skills in team collaboration.
        </p>
      </div>

    </motion.div>
  );
}