import React from "react";
import SkillComponent from "../Component/SkillComponent";
import { motion } from "framer-motion";
import {
  GitOriginal,
  DockerOriginal,
  VscodeOriginal,
  PostmanPlain,
  ViteOriginal,
  NpmOriginalWordmark,
  GithubOriginal,
  KubernetesOriginal,
} from "devicons-react";
import { Sparkles } from "lucide-react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const Skill = () => {
  const techStack = [
    {
      name: "Git",
      category: "Version Control",
      description:
        "Expertise in branching, merging, and collaborative workflows.",
      icon: <GitOriginal size={32} />,
    },
    {
      name: "Docker",
      category: "DevOps",
      description:
        "Containerizing applications for consistent deployment environments.",
      icon: <DockerOriginal size={32} />,
    },
    {
      name: "Kubernetes",
      category: "Container Orchestration",
      description:
        "Orchestrating containerized applications for scalable deployment.",
      icon: <KubernetesOriginal size={32} />,
    },
    {
      name: "VS Code",
      category: "IDE",
      description: "Primary development environment with custom workflows.",
      icon: <VscodeOriginal size={32} />,
    },
    {
      name: "Antigravity",
      category: "AI Code Assistant",
      description:
        "Next-generation AI-powered pair programming and automation.",
      icon: <Sparkles size={32} className="text-cyan-500" />,
    },
    {
      name: "Postman",
      category: "API Testing",
      description: "Streamlining API development and automated testing.",
      icon: <PostmanPlain size={32} />,
    },
    {
      name: "Vite",
      category: "Build Tool",
      description: "Blazing fast frontend tooling for modern projects.",
      icon: <ViteOriginal size={32} />,
    },
    {
      name: "NPM",
      category: "Package Manager",
      description: "Efficient dependency management and script automation.",
      icon: <NpmOriginalWordmark size={32} />,
    },
    {
      name: "GitHub",
      category: "Collaboration",
      description: "Hosting and managing code with CI/CD integrations.",
      icon: <GithubOriginal size={32} />,
    },
  ];

  return (
    <section id="skills" className="pt-10 pb-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Technical <span className="premium-gradient-text">Proficiency</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            Diverse toolkit focused on modern web standards, performance
            optimization, and scalable architecture.
          </p>
        </motion.div>

        <SkillComponent />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold text-center mb-10 text-[var(--text-secondary)] uppercase tracking-[0.2em]">
            Tools & Ecosystem
          </h3>
          <InfiniteMovingCards items={techStack} speed="slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
