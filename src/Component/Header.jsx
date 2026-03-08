import bhavesh from "../assets/Profile.jpeg";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
  }, []);

  function toggleNavbar() {
    setMobileDrawer(!mobileDrawer);
  }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 lg:px-12 ${
        scrolled
          ? "h-[70px] bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--glass-border)]"
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
      <ul className="hidden lg:flex items-center gap-8">
        {navItems.map((el, index) => (
          <Magnetic key={index}>
            <a
              href={el.slug}
              className={`text-sm font-medium transition-all duration-300 relative group py-2 ${
                activeSection === el.id
                  ? "text-cyan-500"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {el.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-500 transition-all duration-300 ${
                  activeSection === el.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          </Magnetic>
        ))}
      </ul>

      {/* Profile & Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <Magnetic>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-cyan-500/50 transition-all duration-300 group"
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

        <div className="p-1 rounded-full border border-[var(--glass-border)] hover:border-cyan-500/50 transition-colors hidden sm:block">
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
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {mobileDrawer ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileDrawer && (
        <div className="absolute top-[70px] left-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-lg border-b border-[var(--glass-border)] flex flex-col items-center py-8 space-y-6 lg:hidden animate-in fade-in slide-in-from-top-4 transition-colors">
          {navItems.map((el, index) => (
            <a
              href={el.slug}
              key={index}
              className={`text-lg font-medium transition-colors ${
                activeSection === el.id
                  ? "text-cyan-500"
                  : "text-[var(--text-secondary)]"
              }`}
              onClick={() => setMobileDrawer(false)}
            >
              {el.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
