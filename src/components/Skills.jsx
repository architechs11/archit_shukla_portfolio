"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaLinux,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiJsonwebtokens,
  SiAuth0,
  SiPython,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { MdApi } from "react-icons/md";

const skills = [
  {
    category: "Languages",
    items: [
      {
        name: "Java",
        icon: <FaJava className="text-5xl text-red-500" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-5xl text-yellow-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-5xl text-blue-500" />,
      },
      {
        name: "Python",
        icon: <SiPython className="text-5xl text-[#3776AB]" />,
      },
    ],
  },

  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        icon: <FaReact className="text-5xl text-cyan-400" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-5xl text-white" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-5xl text-teal-400" />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-5xl text-orange-500" />,
      },
      {
        name: "CSS3",
        icon: <SiCss3 className="text-5xl text-blue-400" />,
      },
    ],
  },

  {
    category: "Backend & APIs",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-5xl text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-5xl text-gray-300" />,
      },
      {
        name: "REST APIs",
        icon: <MdApi className="text-5xl text-red-400" />,
      },
      {
        name: "JWT Auth",
        icon: <SiJsonwebtokens className="text-5xl text-pink-500" />,
      },
      {
        name: "OAuth",
        icon: <SiAuth0 className="text-5xl text-orange-400" />,
      },
    ],
  },

  {
    category: "Database & Cloud",
    items: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-5xl text-blue-400" />,
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma className="text-5xl text-cyan-200" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-5xl text-blue-500" />,
      },
      {
        name: "AWS",
        icon: <FaAws className="text-5xl text-orange-400" />,
      },
    ],
  },

  {
    category: "Tools & Concepts",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-5xl text-orange-500" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-5xl text-orange-400" />,
      },
      {
        name: "Object-Oriented Programming",
        icon: <VscCode className="text-5xl text-gray-300" />,
      },
      {
        name: "DSA",
        icon: <VscCode className="text-5xl text-purple-400" />,
      },
      {
        name: "Linux",
        icon: <FaLinux className="text-5xl text-yellow-400" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A combination of modern frontend technologies, scalable backend
            development, cloud tools, and strong problem-solving skills.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />

                <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
                  {group.category}
                </h3>

                <div className="h-[1px] flex-1 bg-gradient-to-l from-blue-500/50 to-transparent" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                {group.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.25 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:border-purple-500/40 transition duration-500"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-5 transition duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>

                      <h4 className="text-sm sm:text-base font-medium text-gray-200 leading-relaxed">
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
