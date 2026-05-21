"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-15%] left-[20%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Intro */}
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-medium mb-5">
            Software Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hello, I'm <span className="gradient-text">Archit Shukla</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
            I design and build scalable digital experiences using Node.js,
            Next.js, and modern full-stack technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects">
              <button className="group flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300">
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
            </a>

            <a href="#contact">
              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition duration-300">
                Contact Me
              </button>
            </a>
          </div>

          {/* Social Links */}
          {/* <div className="flex items-center gap-5">
            <a
              href="https://github.com/architechs11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-purple-500 hover:border-purple-500 transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/architechs11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div> */}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Main Glass Card */}
          <div className="relative w-[420px] h-[420px] rounded-[40px] glass border border-white/10 overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />

            {/* Inner Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[3px] mb-8">
                <div className="w-full h-full rounded-full bg-[#0f0f12] flex items-center justify-center text-5xl font-bold text-white">
                  <img
                    src="/personal.png"
                    alt="Archit Shukla"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-3">
                Full-Stack Developer
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Building modern, scalable, and performance-focused applications
                with clean UI/UX and efficient backend systems.
              </p>
            </div>
          </div>

          {/* Floating Blur Circles */}
          <div className="absolute top-10 right-0 w-28 h-28 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />

          <div className="absolute bottom-10 left-0 w-28 h-28 bg-blue-500/30 blur-3xl rounded-full animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
