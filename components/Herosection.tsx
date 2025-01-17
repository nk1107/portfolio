"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLinkedin,FaGithub  } from "react-icons/fa";
import { SiLeetcode,SiCodeforces } from "react-icons/si";

export default function Herosection() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY); // Update scroll offset
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, []);

  // Calculate opacity based on scroll position (fade out as scroll increases)
  const opacity = Math.max(1 - scrollOffset / 500, 0); // Fade out gradually as you scroll down

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 lg:p-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Left Section: Description */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left ml-10 overflow-hidden"
        >
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Hey, I'm Nishant
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Welcome to my portfolio! I'm a passionate web developer dedicated
            to creating innovative and user-friendly websites. With a focus on
            clean code and responsive design, I strive to deliver seamless
            digital experiences. Explore my projects and feel free to reach out
            for collaborations!
          </p>

          {/* Resume Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://drive.google.com/file/d/13VlyvlhJrwqd6jbhKy--D9QP3Pa10x7n/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative inline-block px-6 py-3 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 hover:text-black group overflow-hidden">
                <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10">My Resume</span>
              </div>
            </a>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="https://leetcode.com/u/nk1107/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                <SiLeetcode size={24} />
              </a>
              <a
                href="https://codeforces.com/profile/nish1107"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                <SiCodeforces size={24} />
              </a>
              <a
                href="https://github.com/nk1107"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nishant-kumar-7ba12b228/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center overflow-hidden"
        >
          <Image
            src="/portfolio.jpg" // Replace with your image path
            alt="Hero Image"
            priority={true}
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
