import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconHeart,
} from "@tabler/icons-react";
import Magnetic from "./Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: IconBrandGithub,
      href: "https://github.com/Bhavesh-Zalke-1628",
      label: "GitHub",
    },
    {
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/bhavesh-zalke-1b2646255/",
      label: "LinkedIn",
    },
    {
      icon: IconBrandInstagram,
      href: "https://www.instagram.com/bhaveshzalke_1628/",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-20 border-t border-[var(--glass-border)] bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
                B
              </div>
              <span className="text-2xl font-bold tracking-tighter text-[var(--text-primary)]">
                Bhavesh<span className="text-cyan-500">.</span>
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
              Crafting premium digital experiences through clean code and modern
              design.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <Magnetic key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] text-[var(--text-primary)] hover:text-cyan-500 transition-all"
                  >
                    <social.icon size={22} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[var(--text-primary)]">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-cyan-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Peek */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[var(--text-primary)]">
              Get in Touch
            </h4>
            <div className="space-y-3 text-[var(--text-secondary)]">
              <p>Pune, Maharashtra</p>
              <p className="hover:text-cyan-500 transition-colors">
                zalkebhavesh@gmail.com
              </p>
              <div className="pt-4">
                <Magnetic>
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold text-sm inline-block shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    Start a Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--text-secondary)] text-sm">
            © {currentYear} Bhavesh Zalke. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[var(--text-secondary)] text-sm">
            Designed with{" "}
            <IconHeart size={16} className="text-red-500 animate-pulse" /> using
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
