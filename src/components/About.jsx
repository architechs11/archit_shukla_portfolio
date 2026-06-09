"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaJava, FaReact, FaBrain, FaDownload } from "react-icons/fa";

const highlights = [
  {
    icon: <FaJava size={22} />,
    title: "Java Development",
    description:
      "Strong foundation in Java, OOP concepts, backend logic, and scalable application development.",
  },
  {
    icon: <FaReact size={22} />,
    title: "Modern Web Stack",
    description:
      "Building responsive and interactive applications using React.js, Next.js, Node.js, and Tailwind CSS.",
  },
  {
    icon: <FaBrain size={22} />,
    title: "AI & Innovation",
    description:
      "Exploring Generative AI and intelligent systems to solve real-world challenges.",
  },
  {
    icon: <FaCode size={22} />,
    title: "Problem Solving",
    description:
      "Passionate about DSA, optimization, clean architecture, and writing maintainable code.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-medium mb-4">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Passionate About{" "}
            <span className="gradient-text">Building Modern Software</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Hi, I’m{" "}
            <span className="text-white font-semibold">Archit Shukla</span>, a
            Software Developer focused on creating scalable, responsive, and
            user-centric applications using modern technologies.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I specialize in Java, React.js, Next.js, Node.js, and full-stack
            development while continuously exploring AI-driven solutions, system
            design, and performance optimization.
          </p>

          {/* Current Status */}
          <div className="glass rounded-3xl p-5 border border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

              <p className="text-sm text-gray-300">
                Currently working as a{" "}
                <span className="text-white font-medium">
                  Software Developer
                </span>{" "}
                at{" "}
                <span className="text-white font-medium">
                  Arvius Software Pvt Ltd
                </span>{" "}
                in Noida, India
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1Z0RnaJMdCXmnIXte_HZvLuMgyrCKckzg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300">
                <FaDownload />
                Download Resume
              </button>
            </a>

            <a href="#contact">
              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition duration-300">
                Let’s Connect
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl p-[1px]"
            >
              {/* Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-blue-500/60 opacity-60 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative h-full rounded-3xl bg-[#111111]/90 backdrop-blur-xl p-6 border border-white/10 group-hover:border-white/20 transition duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
