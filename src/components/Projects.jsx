"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiJsonwebtokens,
} from "react-icons/si";

const projects = [
  {
    title: "HR360Sync – Human Resource Management Platform",
    category: "Professional Experience",
    description:
      "A scalable enterprise-grade HRMS platform built during my role as a Software Developer at Arvius Software Pvt. Ltd. Focused on backend architecture, authentication systems, API optimization, and responsive frontend development.",

    achievements: [
      "Developed RESTful APIs using Node.js & Express.js",
      "Implemented JWT Authentication & centralized error handling",
      "Optimized PostgreSQL queries improving response time by 25–30%",
      "Containerized services using Docker",
      "Built responsive UI with Next.js & Tailwind CSS",
      "Implemented debounce & throttling for optimized searching",
    ],

    technologies: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-400" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-blue-500" />,
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens className="text-orange-500" />,
      },
    ],

    gradient: "from-purple-600 to-blue-600",
  },

  {
    title: "REC Papers – Research Paper Repository",
    category: "Full-Stack Project",
    description:
      "A modern platform for uploading, browsing, and managing research papers and academic reports with secure authentication and optimized search functionality.",

    achievements: [
      "Implemented role-based authentication & authorization",
      "Designed optimized PostgreSQL schema with indexing",
      "Built REST APIs for paper & metadata management",
      "Responsive UI using React, TypeScript & Tailwind CSS",
      "Search & filtering system for fast document discovery",
    ],

    technologies: [
      {
        name: "React",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-400" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],

    github: "https://github.com/alpha-Gautam/rec_papers",
    live: "https://rec-papers.vercel.app/",
    gradient: "from-pink-600 to-purple-600",
  },

  {
    title: "Billing Dashboard System",
    category: "Professional Experience",
    description:
      "A backend-focused billing and authentication platform designed for handling AWS billing workflows, secure APIs, and scalable business logic integration.",

    achievements: [
      "Developed secure authentication workflows",
      "Integrated backend business logic with frontend systems",
      "Designed API endpoints for billing management",
      "Worked with scalable database operations",
    ],

    technologies: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-400" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "AWS",
        icon: <FaAws className="text-orange-400" />,
      },
      // {
      //   name: "Prisma",
      //   icon: <SiPrisma className="text-cyan-200" />,
      // },
    ],

    gradient: "from-blue-600 to-cyan-600",
  },

  {
    title: "Enhanced Notepad Application",
    category: "Java Desktop Application",
    description:
      "A feature-rich desktop application built using Core Java, Swing, and AWT with enhanced text-editing capabilities and improved usability.",

    achievements: [
      "Built using Java Swing & AWT",
      "Implemented file handling operations",
      "Enhanced editor UI and usability",
      "Focused on OOP principles & modular architecture",
    ],

    technologies: [
      {
        name: "Java",
        icon: <div className="text-red-500 text-xl font-bold">☕</div>,
      },
    ],

    github: "https://github.com/architechs11/Notepad",
    gradient: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of professional work, scalable backend systems,
            full-stack applications, and modern development projects.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/40 transition duration-500"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${project.gradient} blur-3xl`}
              />

              {/* Card Content */}
              <div className="relative z-10 p-8">
                {/* Top */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-7">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-8">
                  {project.achievements.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300"
                    >
                      {tech.icon}
                      {tech.name}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition duration-300">
                        <FaGithub />
                        Source Code
                      </button>
                    </a>
                  )} */}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* <button
                        className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:scale-105 transition duration-300`}
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </button> */}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
