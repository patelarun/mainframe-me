"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          I'm a software engineer with a passion for building scalable and user-friendly applications.
        </p>
      </div>
    </section>
  );
};

export default About;
