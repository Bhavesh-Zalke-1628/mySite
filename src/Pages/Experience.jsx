import React from "react";
import { motion } from "framer-motion";
import { IconBriefcase, IconCircleCheck } from "@tabler/icons-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Hously Fintech Reality",
    location: "Remote",
    period: "March 2025 - June 2025",
    description:
      "Developed and maintained web applications using the MERN stack. Focused on creating responsive user interfaces and optimizing backend performance.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Git", "CI/CD"],
  },
  {
    title: "Software Developer (Full Time)",
    company: "Senwell Solutions",
    location: "Pune, Maharashtra",
    period: "July 2025 - Present",
    description:
      "Worked on frontend development projects, implementing modern design patterns and ensuring cross-browser compatibility.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Express",
      "SQL",
      "CI/CD",
      "Git",
      "Docker",
      "GCP",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-20 pb-10 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Professional <span className="premium-gradient-text">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            A timeline of my professional experience and academic background,
            showcasing my growth as a developer.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line with Animation */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--glass-border)] -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-cyan-500 via-violet-600 to-transparent"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot with Pulse */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-cyan-500/20 -translate-x-1/2 blur-md"
                  />
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 border-2 border-white dark:border-[#030712] -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/40"></div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="w-full md:w-1/2 pl-10 md:pl-0"
                >
                  <div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] hover:border-cyan-500/30 transition-all duration-300 group relative">
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-tr-2xl -z-10 group-hover:bg-cyan-500/10 transition-colors"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-[var(--text-primary)]/5 text-cyan-500 group-hover:scale-110 transition-transform">
                        <IconBriefcase size={20} />
                      </div>
                      <span className="text-sm font-bold text-cyan-500 tracking-wider uppercase">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-medium mb-4 flex items-center gap-2">
                      <span className="text-[var(--text-primary)]">
                        {exp.company}
                      </span>{" "}
                      • {exp.location}
                    </p>

                    <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 text-[10px] font-bold uppercase tracking-tight rounded-md bg-[var(--text-primary)]/5 text-[var(--text-secondary)] border border-[var(--glass-border)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
