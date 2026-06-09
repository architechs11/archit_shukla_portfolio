"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#0f0f12]/70 backdrop-blur-2xl border-b border-white/10 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group">
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Archit Shukla
              <span className="gradient-text">.</span>
            </h1>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition duration-300 group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Socials */}
            <a
              href="https://www.geeksforgeeks.org/user/architechs11/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 hover:border-green-500 hover:bg-green-500/20 transition duration-300"
            >
              <SiGeeksforgeeks size={18} />
            </a>
            <a
              href="https://leetcode.com/architechs11/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500/20 transition duration-300"
            >
              <SiLeetcode size={18} />
            </a>
            <a
              href="https://github.com/architechs11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition duration-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/architechs11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 transition duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1Z0RnaJMdCXmnIXte_HZvLuMgyrCKckzg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ml-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition duration-300 shadow-lg">
                Resume
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[88px] left-4 right-4 z-40 lg:hidden"
          >
            <div className="rounded-3xl border border-white/10 bg-[#111111]/90 backdrop-blur-2xl p-6 shadow-2xl">
              {/* Links */}
              <div className="flex flex-col gap-5">
                {navLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white text-lg transition duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-[1px] bg-white/10" />

              {/* Socials */}
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://www.geeksforgeeks.org/user/architechs11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 hover:border-green-500 hover:bg-green-500/20 transition duration-300"
                >
                  <SiGeeksforgeeks size={18} />
                </a>
                <a
                  href="https://leetcode.com/architechs11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500/20 transition duration-300"
                >
                  <SiLeetcode size={18} />
                </a>
                <a
                  href="https://github.com/architechs11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500 transition duration-300"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/architechs11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1Z0RnaJMdCXmnIXte_HZvLuMgyrCKckzg/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg">
                  Download Resume
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
