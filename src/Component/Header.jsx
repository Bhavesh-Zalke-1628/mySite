import bhavesh from "../assets/Profile.jpeg";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Close mobile drawer on scroll if it's open
      if (mobileDrawer && Math.abs(currentScrollY - lastScrollY) > 10) {
        setMobileDrawer(false);
      }
      lastScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = [
      "home",
      "about",
      "experience",
      "skills",
      "projects",
      "contact",
    ];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileDrawer]);

  function toggleNavbar() {
    setMobileDrawer(!mobileDrawer);
  }

  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (mobileDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileDrawer]);

  const navItems = [
    { name: "Home", slug: "#home", id: "home" },
    { name: "About", slug: "#about", id: "about" },
    { name: "Experience", slug: "#experience", id: "experience" },
    { name: "Skills", slug: "#skills", id: "skills" },
    { name: "Projects", slug: "#projects", id: "projects" },
    { name: "Contact", slug: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center justify-between px-6 lg:px-12 ${
        scrolled
          ? "h-[75px] bg-[var(--bg-primary)]/70 backdrop-blur-xl border-b border-white/[0.05]"
          : "h-[100px] bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Magnetic>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 cursor-pointer">
            B
          </div>
        </Magnetic>
        <span className="text-xl font-bold tracking-tight hidden sm:block text-[var(--text-primary)]">
          Bhavesh<span className="text-cyan-500">.</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center px-8 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-md">
        <ul className="flex items-center gap-10">
          {navItems.map((el, index) => (
            <li key={index}>
              <a
                href={el.slug}
                className={`text-sm font-medium transition-all duration-300 relative group py-2 flex items-center gap-2 ${
                  activeSection === el.id
                    ? "text-cyan-500"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {activeSection === el.id && (
                  <motion.span
                    layoutId="activeDot"
                    className="w-1.5 h-1.5 rounded-full bg-cyan-500"
                  />
                )}
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile & Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <Magnetic>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[var(--text-primary)] hover:border-cyan-500/50 transition-all duration-300 group"
          >
            {theme === "dark" ? (
              <Sun
                size={20}
                className="group-hover:rotate-45 transition-transform duration-500"
              />
            ) : (
              <Moon
                size={20}
                className="group-hover:-rotate-12 transition-transform duration-500"
              />
            )}
          </button>
        </Magnetic>

        <div className="p-1 rounded-full border border-white/[0.05] hover:border-cyan-500/50 transition-colors hidden sm:block">
          <img
            className="rounded-full w-8 h-8 object-cover"
            src={bhavesh}
            alt="Profile"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {mobileDrawer ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileDrawer && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawer(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] lg:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-[80%] sm:w-[400px] h-screen bg-[var(--bg-primary)]/90 backdrop-blur-2xl z-[70] lg:hidden shadow-2xl border-l border-white/[0.05] flex flex-col p-8 sm:p-12"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg">
                    B
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                    Bhavesh<span className="text-cyan-500">.</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileDrawer(false)}
                  className="p-3 rounded-full bg-white/[0.05] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col space-y-2"
              >
                {navItems.map((el, index) => (
                  <motion.a
                    variants={itemVariants}
                    href={el.slug}
                    key={index}
                    className={`text-3xl font-bold py-4 transition-all flex items-center justify-between group ${
                      activeSection === el.id
                        ? "text-cyan-500 pl-4"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:pl-4"
                    }`}
                    onClick={() => setMobileDrawer(false)}
                  >
                    <span>{el.name}</span>
                    <span
                      className={`w-2 h-2 rounded-full bg-cyan-500 transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                        activeSection === el.id ? "opacity-100 scale-150" : ""
                      }`}
                    />
                  </motion.a>
                ))}
              </motion.div>

              <div className="mt-auto">
                <div className="pt-8 border-t border-white/[0.05]">
                  <p className="text-[var(--text-secondary)] text-sm mb-6 uppercase tracking-widest font-bold opacity-50">
                    Let's connect
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://github.com/Bhavesh-Zalke-1628"
                      className="text-[var(--text-secondary)] hover:text-cyan-500 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bhavesh-zalke-1b2646255/"
                      className="text-[var(--text-secondary)] hover:text-cyan-500 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
