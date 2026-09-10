"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaPython,
  FaCloud,
  FaDownload,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode size={22} />,
    title: "Backend Development",
    description:
      "Building reliable backend services and REST APIs using Node.js, Express.js, PostgreSQL, JWT authentication, and RBAC.",
  },
  {
    icon: <FaReact size={22} />,
    title: "Modern Web Development",
    description:
      "Developing responsive and maintainable applications using React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS.",
  },
  {
    icon: <FaPython size={22} />,
    title: "Automation Engineering",
    description:
      "Developing reliable browser automation and testing workflows using TypeScript, Python, and Playwright.",
  },
  {
    icon: <FaCloud size={22} />,
    title: "Cloud & DevOps",
    description:
      "Working with Docker and AWS while focusing on consistent development, deployment, performance, and application reliability.",
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
            <span className="gradient-text">
              Building Reliable Software
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Hi, I’m{" "}
            <span className="text-white font-semibold">Archit Shukla</span>, a
            Software Engineer with 1+ year of experience building scalable
            full-stack applications, backend services, and automation
            solutions.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            My experience spans TypeScript, JavaScript, Node.js, Express.js,
            React.js, Next.js, PostgreSQL, Python, and Playwright. I enjoy
            solving engineering problems, improving application reliability,
            and building maintainable software with modern development
            practices.
          </p>

          {/* Current Status */}
          <div className="glass rounded-3xl p-5 border border-white/10 mb-8">
            <div className="flex items-start gap-3">
              <div className="relative mt-1.5">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-40" />
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Currently working as a{" "}
                <span className="text-white font-medium">
                  Software Engineer
                </span>{" "}
                at{" "}
                <span className="text-white font-medium">
                  Crosslynx Technologies Service Pvt Ltd
                </span>{" "}
                in Noida, India.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1IiUWUCVCPMfIQ1xt-4F7EAvO9XaX6oYm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300">
                <FaDownload />
                View Resume
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