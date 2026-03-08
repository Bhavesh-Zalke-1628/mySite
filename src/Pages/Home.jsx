import React from "react";
import { motion } from "framer-motion";
import bhavesh from "../assets/Profile.jpeg";
import { FlipWords } from "../components/ui/flip-words";
import Magnetic from "../Component/Magnetic";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Icons/Elements */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-cyan-500/20 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full bg-violet-500/20 blur-sm"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 dark:text-cyan-400 text-sm font-medium tracking-wide uppercase">
            Available for Work
          </div>

          <h2 className="text-xl md:text-2xl text-[var(--text-secondary)] mb-2 font-medium">
            Hi, I'm{" "}
            <span className="text-[var(--text-primary)]">Bhavesh Zalke</span>
          </h2>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--text-primary)]">
            Transforming Ideas Into <br />
            <span className="premium-gradient-text">Digital Reality</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
            <span className="text-lg md:text-xl text-[var(--text-secondary)]">
              Expert in
            </span>
            <FlipWords
              className="text-lg md:text-xl text-cyan-600 dark:text-cyan-400 font-semibold"
              duration={2500}
              words={[
                "Full-Stack Development",
                "UI/UX Interaction",
                "MERN Stack Solutions",
                "Scalable Architecture",
              ]}
            />
          </div>

          <p className="text-lg text-[var(--text-secondary)] max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
            Building high-performance web applications with a focus on speed,
            scalability, and stunning user experiences.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-xl shadow-black/5 dark:shadow-white/5"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-[var(--glass-border)] glass-card text-[var(--text-primary)] font-bold hover:bg-[var(--glass-bg)] transition-all transform hover:scale-105"
              >
                Let's Connect
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Profile Image with Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-violet-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="absolute inset-2 p-4 glass-card rounded-full overflow-hidden">
              <img
                src={bhavesh}
                alt="Bhavesh Zalke"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-2xl text-xs font-bold text-cyan-400 shadow-xl"
            >
              🚀 Fast Loader
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-2xl text-xs font-bold text-violet-400 shadow-xl"
            >
              ⚛️ React Pro
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
