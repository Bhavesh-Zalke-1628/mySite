import { Link, useNavigate } from "react-router-dom";
import bhavesh from "../assets/Profile.jpeg";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileDrawer, setMobileDrawer] = useState(false);

  function toggleNavbar() {
    setMobileDrawer(!mobileDrawer);
  }

  const navItems = [
    { name: "Home", slug: "#home" },
    { name: "About", slug: "#about" },
    { name: "Experience", slug: "#experience" },
    { name: "Skills", slug: "#skills" },
    { name: "Projects", slug: "#projects" },
    { name: "Contact", slug: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-[80px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
          B
        </div>
        <span className="text-xl font-bold tracking-tight hidden sm:block">
          Bhavesh<span className="text-cyan-500">.</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-8">
        {navItems.map((el, index) => (
          <a
            href={el.slug}
            key={index}
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
          >
            {el.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </ul>

      {/* Profile & Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
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
        <div className="absolute top-[80px] left-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-lg border-b border-[var(--glass-border)] flex flex-col items-center py-8 space-y-6 lg:hidden animate-in fade-in slide-in-from-top-4 transition-colors">
          {navItems.map((el, index) => (
            <a
              href={el.slug}
              key={index}
              className="text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
