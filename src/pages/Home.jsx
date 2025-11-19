import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <motion.img
        src={avatar}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-500 mb-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 dark:text-gray-100"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Hello, I'm <span className="text-blue-600 dark:text-blue-400">Cyb3r_Cure</span>
      </motion.h1>
      <motion.p
        className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I'm a cybersecurity enthusiast dedicated to protecting systems and networks from threats. I enjoy exploring new security technologies and best practices.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          to="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          View My Security Projects
        </Link>
        <Link
          to="/contact"
          className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;