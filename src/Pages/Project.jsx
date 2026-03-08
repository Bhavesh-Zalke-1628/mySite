import React from "react";
import { ThreeDCardDemo } from "../Component/ThreeDCard";
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
  },

  {
    title: "Lumina - Social Media App",
    description:
      "A comprehensive Social Media App for course delivery and progress tracking. Built with MERN stack for scalability.",
    link: "https://chat-front-end-nine.vercel.app",
    img: projectImg2,
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
          Featured <span className="premium-gradient-text">Projects</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
          A selection of my recent works where I solve complex problems and
          create intuitive digital experiences.
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-x-8 gap-y-12 flex-wrap">
        {projectData.map((pr, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ThreeDCardDemo pr={pr} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
