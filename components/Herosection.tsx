"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Herosection() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollOffset / 500, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden px-4 sm:px-6 lg:px-16">
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Left Section: Description */}
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Hey, I'm Nishant
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Welcome to my portfolio! I'm a passionate web developer dedicated to creating innovative and user-friendly websites. With a focus on clean code and responsive design, I strive to deliver seamless digital experiences. Explore my projects and feel free to reach out for collaborations!
          </p>

          {/* Resume Button and Social Icons */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://drive.google.com/file/d/1pmtjswjifpUyO1-TQQXOm-KDVOD-9h9D/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-6 py-3 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 hover:text-black group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10">My Resume</span>
            </a>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="https://leetcode.com/u/nk1107/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <SiLeetcode size={24} />
              </a>
              <a href="https://codeforces.com/profile/nish1107" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <SiCodeforces size={24} />
              </a>
              <a href="https://github.com/nk1107" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nishant-kumar-7ba12b228/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src="/portfolio.jpg"
            alt="Hero Image"
            priority={true}
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}