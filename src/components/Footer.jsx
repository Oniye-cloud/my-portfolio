import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-6 mt-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        © {currentYear} Cybersecurity Portfolio by{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Cyberflex
        </span>
        . Built with ❤ using React, TailwindCSS & Framer Motion.
      </p>
    </motion.footer>
  );
};

export default Footer;