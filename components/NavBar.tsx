"use client";
import React from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center bg-[#111827] gap-x-14 px-10 py-3"
      initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and move up slightly
      animate={{ opacity: 1, y: 0 }} // Fade in and move to the original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Adjust duration and easing
    >
      {["About", "Projects", "Contact Me"].map((item) => (
        <div
          key={item}
          onClick={() => handleScroll(item.toLowerCase().replace(" ", "-"))} // Scroll to section
          className="relative group px-4 py-2 text-white font-medium hover:cursor-pointer"
        >
          {/* Text */}
          <span className="z-10 relative group-hover:text-black transition-colors duration-300 ease-in-out">
            {item}
          </span>

          {/* Background Effect */}
          <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        </div>
      ))}
    </motion.div>
  );
}
