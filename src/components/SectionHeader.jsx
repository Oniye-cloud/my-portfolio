import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <motion.h2
        className="text-3xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-gray-600 dark:text-gray-400 mt-2 text-sm max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;