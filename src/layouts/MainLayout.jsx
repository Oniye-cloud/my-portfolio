import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const MainLayout = () => {
  const location = useLocation();

  // Smoothly scroll to top when navigating between pages
  useScrollToTop(location);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ✅ Navbar (reusable component) */}
      <Navbar />

      {/* ✅ Main Page Content */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="flex-1 pt-20 px-4 md:px-8"
      >
        <Outlet />
      </motion.main>

      {/* ✅ Footer (reusable component) */}
      <Footer />
    </div>
  );
};

export default MainLayout;
