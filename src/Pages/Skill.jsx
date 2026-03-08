import React from "react";
import SkillComponent from "../Component/SkillComponent";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section id="skills" className="py-10 relative overflow-hidden">
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
      </div>
    </section>
  );
};

export default Skill;
