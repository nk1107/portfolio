"use client";
import { motion } from "framer-motion";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import { div } from "framer-motion/client";
import { FocusCards } from "./ui/focus-cards";

export default function ProjectSection() {
  const cards = data.map(item => ({
    title: item.title,
    techstack: item.techStack,
    githubLink: item.relevantLinks.filter(link => link.includes("github.com")),
  }));
  return (
    <motion.div
      id="projects" // Add id for scrolling
      className="min-h-screen  bg-gray-200 dark:bg-gray-900 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-6xl font-bold text-center mt-20 mb-16">
        My Projects
      </div>
      <FocusCards cards={cards}/>

    </motion.div>
  );
}
interface DummyContentProps {
  description: string;
  TechStack : string[]
  relevantLinks: string[]
}

export const DummyContent = ({description,TechStack,relevantLinks}:DummyContentProps) => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          {description}
        </p>

      </div>

      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto flex">
          {TechStack.map((tech)=>{
            return (
              <p
                key={tech} 
                className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
                {tech}
              </p>
            )
          })}
        </div>

      </div>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto flex">
          {relevantLinks.map((link)=>{
            return (
              <p
                key={link} 
                className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
                {link}
              </p>
            )
          })}
        </div>

      </div>
      {/* {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>

          </div>
        );
      })} */}
    </>
  );
};

const data = [
  {
    id: 1,
    src: null,
    category: "Artificial Intelligence",
    description: "Aegis is a privacy-focused, framework-agnostic bot detection service designed to easily integrate into websites. It offers a collection of tools, including Aegis-Core, a simple npm package for passive tracking; Aegis-Engine, a self-hostable Python microservice for machine learning inference; and Aegis-India, a fully hosted plug-and-play solution.",
    title: "Aegis",
    techStack: ["Python", "TypeScript", "prisma", "Supabase","NextJs"],
    relevantLinks: ["https://aegis-india.vercel.app/","https://github.com/nk1107/AegisIndia"],
  },
  {
    id: 2,
    src: null,
    category: "Productivity",
    description: "SocialCalc is a feature-rich platform designed to offer all essential spreadsheet functionalities in an intuitive and collaborative environment. Users can edit cells, merge cells, resize cells, and apply formulas for efficient data management and analysis. It supports sharing spreadsheets with other users, with the flexibility to assign either view-only or edit access. ",
    title: "SocialCalc",
    techStack: ["NextJs", "TypeScript", "prisma", "Supabase","FortuneSheet"],
    relevantLinks: ["https://github.com/nk1107/social_calc",],
  },
  {
    id: 3,
    src: null,
    category: "Product",
    description: "A lightweight and efficient command-line to-do application built in Go. It allows users to effortlessly manage tasks with features like adding, listing, and deleting tasks, all from the terminal. Designed for simplicity and productivity, it's perfect for personal task management.",
    title: "Personal CLI todo",
    techStack: ["Golang", "Cobra CLI", "Bolt DB"],
    relevantLinks: ["https://github.com/nk1107/Personal-CLI-Todo-app"],
  },
  {
    id: 3,
    src: null,
    category: "Product",
    description: "A lightweight and efficient command-line to-do application built in Go. It allows users to effortlessly manage tasks with features like adding, listing, and deleting tasks, all from the terminal. Designed for simplicity and productivity, it's perfect for personal task management.",
    title: "Tetris",
    techStack: ["C++", "Raylib"],
    relevantLinks: ["https://github.com/nk1107/Tetris-Game"],
  },

];

