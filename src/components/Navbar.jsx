import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  // Handle dark/light mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Nav links array for easy updates
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Cyb3r_Cure Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dark/Light Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ rotate: 180, scale: 0.9 }}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-300 dark:border-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Dark/Light Toggle in Mobile */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ rotate: 180, scale: 0.9 }}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 mt-2"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;