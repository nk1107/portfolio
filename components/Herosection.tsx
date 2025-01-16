"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
          // initial={{ opacity: 0, x: -100 }} // Start from left with 0 opacity
          // animate={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
          // transition={{ duration: 1, delay: 0.2 }} // Delay for smoother animation
        >
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Hey, I'm Nishant
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome to my portfolio! I'm a passionate web developer dedicated
            to creating innovative and user-friendly websites. With a focus on
            clean code and responsive design, I strive to deliver seamless
            digital experiences. Explore my projects and feel free to reach out
            for collaborations!
          </p>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center overflow-hidden"
          // initial={{ opacity: 0, x: 100 }} // Start from right with 0 opacity
          // animate={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
          // transition={{ duration: 1, delay: 0.4 }} // Delay for smoother animation
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
