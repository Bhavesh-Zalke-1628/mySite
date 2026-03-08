import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../Component/Magnetic";

function About() {
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "Code Reviews", value: "50+" },
  ];

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              Crafting Digital{" "}
              <span className="premium-gradient-text">Experiences</span>
            </h2>
            <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              <p>
                I'm a passionate Full-Stack Developer with a deep love for
                building scalable and user-centric web applications. My journey
                began with a curiosity about how things work on the internet,
                which quickly evolved into a dedicated career in modern web
                technologies.
              </p>
              <p>
                Specializing in the{" "}
                <span className="text-[var(--text-primary)] font-semibold">
                  MERN stack
                </span>
                , I focus on creating clean, efficient code that doesn't just
                work, but provides a seamless experience for every user. My
                approach combines technical rigor with an eye for design,
                ensuring every pixel serves a purpose.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-[var(--text-primary)]">
              {stats.map((stat, index) => (
                <Magnetic key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left p-4 rounded-2xl hover:bg-[var(--text-primary)]/[0.03] transition-colors cursor-default"
                  >
                    <motion.h3
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        delay: index * 0.1 + 0.8,
                      }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold mb-1"
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full flex justify-center lg:block"
          >
            <div className="w-full max-w-[400px] glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-3xl group-hover:bg-violet-500/40 transition-all duration-700"></div>

              <div className="relative z-10 space-y-6">
                <Magnetic>
                  <div className="p-4 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] hover:border-cyan-500/50 transition-colors cursor-default">
                    <h4 className="text-[var(--text-primary)] font-bold mb-2 tracking-tight">
                      Strategy Driven
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Every project starts with a deep dive into user needs and
                      business goals.
                    </p>
                  </div>
                </Magnetic>
                <Magnetic>
                  <div className="p-4 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] hover:border-violet-500/50 transition-colors cursor-default">
                    <h4 className="text-[var(--text-primary)] font-bold mb-2 tracking-tight">
                      Performance First
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Lightweight, fast-loading, and SEO-optimized by default.
                    </p>
                  </div>
                </Magnetic>
                <Magnetic>
                  <div className="p-4 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] hover:border-cyan-500/50 transition-colors cursor-default">
                    <h4 className="text-[var(--text-primary)] font-bold mb-2 tracking-tight">
                      Future-Proof
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Scalable architecture built to grow with your vision.
                    </p>
                  </div>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
