import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/lable";
import { cn } from "../utils/cn";
import { Textarea } from "../components/ui/textArea";

export function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Get in <span className="premium-gradient-text">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 lg:p-12 space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Contact Information
              </h3>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
                  <IconMail size={24} />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest mb-1 opacity-70">
                    Email
                  </p>
                  <p className="text-[var(--text-primary)] font-medium">
                    bhaveshzalke.dev@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:bg-violet-500/10 group-hover:border-violet-500/50 transition-all duration-300">
                  <IconMapPin size={24} />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest mb-1 opacity-70">
                    Location
                  </p>
                  <p className="text-[var(--text-primary)] font-medium">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-6">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <SocialIcon
                  icon={IconBrandGithub}
                  href="https://github.com/Bhavesh-Zalke-1628"
                />
                <SocialIcon
                  icon={IconBrandLinkedin}
                  href="https://www.linkedin.com/in/bhavesh-zalke-1b2646255/"
                />
                <SocialIcon
                  icon={IconBrandInstagram}
                  href="https://www.instagram.com/bhaveshzalke_1628/"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <LabelInputContainer>
                  <Label
                    htmlFor="firstname"
                    className="text-[var(--text-secondary)] mb-1.5 ml-1"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    placeholder="Bhavesh"
                    type="text"
                    className="bg-[var(--text-primary)]/5 border-[var(--glass-border)] focus:ring-cyan-500/50 text-[var(--text-primary)] rounded-xl py-3 px-4"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label
                    htmlFor="lastname"
                    className="text-[var(--text-secondary)] mb-1.5 ml-1"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    placeholder="Zalke"
                    type="text"
                    className="bg-[var(--text-primary)]/5 border-[var(--glass-border)] focus:ring-cyan-500/50 text-[var(--text-primary)] rounded-xl py-3 px-4"
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label
                  htmlFor="email"
                  className="text-[var(--text-secondary)] mb-1.5 ml-1"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  placeholder="bhavesh@gmail.com"
                  type="email"
                  className="bg-[var(--text-primary)]/5 border-[var(--glass-border)] focus:ring-cyan-500/50 text-[var(--text-primary)] rounded-xl py-3 px-4"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label
                  htmlFor="message"
                  className="text-[var(--text-secondary)] mb-1.5 ml-1"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can I help you?"
                  rows={4}
                  className="bg-[var(--text-primary)]/5 border-[var(--glass-border)] focus:ring-cyan-500/50 text-[var(--text-primary)] rounded-xl py-3 px-4 min-h-[120px]"
                />
              </LabelInputContainer>

              <button
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-[var(--text-primary)] font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>{children}</div>
  );
};

const SocialIcon = ({ icon: Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-primary)]/10 hover:border-cyan-500/50 transition-all duration-300 group"
    >
      <Icon size={24} className="group-hover:scale-110 transition-transform" />
    </a>
  );
};
