"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold">Hi, I'm Arun Patel 👋</h1>
        <p className="mt-4 text-lg text-gray-600">
          A passionate software engineer specializing in modern web development.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
