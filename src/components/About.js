"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          I'm a software engineer with a passion for building scalable and user-friendly applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
