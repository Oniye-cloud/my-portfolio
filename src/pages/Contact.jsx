import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Form submission logic can be added)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-16 px-6">
      <SectionHeader
        title="Contact Me"
        subtitle="Feel free to reach out for collaborations, questions, or learning opportunities."
      />

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
