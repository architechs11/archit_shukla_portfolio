"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const contactLinks = [
  {
    name: "Email",
    icon: <FaEnvelope size={24} />,
    value: "architechs11@gmail.com",
    link: "mailto:architechs11@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    value: "linkedin.com/in/architechs11",
    link: "https://linkedin.com/in/architechs11",
    gradient: "from-blue-600 to-sky-500",
  },
  // {
  //   name: "GitHub",
  //   icon: <FaGithub size={24} />,
  //   value: "github.com/archit",
  //   link: "https://github.com",
  //   gradient: "from-gray-300 to-gray-500",
  // },
  // {
  //   name: "Instagram",
  //   icon: <FaInstagram size={24} />,
  //   value: "@archit.dev",
  //   link: "https://instagram.com",
  //   gradient: "from-pink-500 to-purple-500",
  // },
];

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 font-medium mb-3 tracking-widest uppercase">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Let’s Build <span className="gradient-text">Something Amazing</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I’m currently open to Software Development roles, freelance
            opportunities, collaborations, and innovative projects involving
            Full-Stack Development, Java, React.js, and modern web technologies.
          </p>

          {/* Availability Card */}
          <div className="mt-8 glass rounded-3xl p-5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <p className="text-sm text-gray-300">
                Available for full-time opportunities & freelance projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTACT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {contactLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl p-[1px]"
            >
              {/* Border Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70 group-hover:opacity-100 transition duration-500`}
              />

              {/* Card */}
              <div className="relative h-full bg-[#111111]/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 group-hover:border-white/20 transition duration-500">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg mb-5`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-400 break-all text-sm">{item.value}</p>

                <div className="mt-5 text-sm text-purple-400 group-hover:translate-x-1 transition duration-300">
                  Connect →
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
