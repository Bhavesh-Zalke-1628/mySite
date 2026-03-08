import React from "react";
import { StunningProjectCard } from "../Component/StunningProjectCard";
import projectImg1 from "../assets/image1.png";
import projectImg2 from "../assets/image2.png";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "LMS - Course Management",
    description:
      "A comprehensive Learning Management System for course delivery and progress tracking. Built with MERN stack for scalability.",
    link: "https://lms-front-end-roan.vercel.app/",
    img: projectImg1,
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
  },

  {
    title: "Lumina - Social Media App",
    description:
      "A comprehensive Social Media App for course delivery and progress tracking. Built with MERN stack for scalability.",
    link: "https://chat-front-end-nine.vercel.app",
    img: projectImg2,
    tags: ["React", "Socket.io", "Node.js", "Express", "Cloudinary"],
  },
];

const Project = () => {
  return (
    <section id="projects" className="pt-10 pb-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
          Featured <span className="premium-gradient-text">Projects</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
          A selection of my recent works where I solve complex problems and
          create intuitive digital experiences.
        </p>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {projectData.map((pr, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StunningProjectCard pr={pr} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
