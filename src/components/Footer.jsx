"use client";

import React from "react";
import {
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/a.shukla23",
    hover: "hover:border-blue-500 hover:bg-blue-500/20",
  },
  {
    icon: <FaTwitter />,
    href: "https://x.com/im_archit_",
    hover: "hover:border-cyan-500 hover:bg-cyan-500/20",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/_archit_shukla",
    hover: "hover:border-pink-500 hover:bg-pink-500/20",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 mt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[10%] w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-20%] right-[10%] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-3 gap-12 mb-14">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">
              Archit Shukla<span className="gradient-text">.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-base">
              Software Developer focused on building scalable backend systems,
              modern web applications, and clean digital experiences using Java,
              React.js, Next.js, Node.js, and cloud technologies.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition duration-300 w-fit"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-300">arcs2326@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-300">+91 8840048523</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-300">Noida, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} Archit Shukla. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-2xl border border-white/10 bg-white/5 text-gray-300 flex items-center justify-center transition duration-300 ${social.hover}`}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Back To Top */}
          <a href="#home">
            <button className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300">
              Back to Top
              <FaArrowUp className="group-hover:-translate-y-1 transition duration-300" />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
