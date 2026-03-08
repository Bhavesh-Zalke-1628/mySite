import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Skill from "./Pages/Skill";
import Project from "./Pages/Project";
import { Contact } from "./Pages/Contact";
import Navbar from "./Component/Header";
import CustomCursor from "./Component/CustomCursor";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-cyan-500/30 overflow-x-hidden transition-colors duration-300 lg:cursor-none">
      <CustomCursor />
      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-cyan-500/[0.03] dark:bg-cyan-500/5 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-violet-500/[0.03] dark:bg-violet-500/5 rounded-full blur-[160px]"></div>
      </div>

      <Navbar />

      <main className="relative">
        <Home />

        <div className="max-w-7xl mx-auto px-6 space-y-16 pb-24">
          <About />
          <Experience />
          <Skill />
          <Project />
          <Contact />
        </div>
      </main>

      <AnimatePresence>
        {showScrollTop && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-4 rounded-full glass-card border border-[var(--glass-border)] text-cyan-500 z-50 shadow-2xl backdrop-blur-md"
          >
            <ChevronUp size={24} strokeWidth={3} />
          </motion.a>
        )}
      </AnimatePresence>

      <footer className="py-12 border-t border-[var(--glass-border)] bg-[var(--bg-secondary)] backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white text-sm">
              B
            </div>
            <span className="font-bold tracking-tight text-[var(--text-primary)]">
              Bhavesh.
            </span>
          </div>

          <p className="text-[var(--text-secondary)] text-sm">
            © {new Date().getFullYear()} Bhavesh Zalke. Built with React &
            Aceternity UI.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Bhavesh-Zalke-1628"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhavesh-zalke-1b2646255/"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
