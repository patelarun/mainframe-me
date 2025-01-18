"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/car_tool.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <h1 className="text-6xl font-extrabold">
          Hi, I'm <span className="text-blue-400">Arun Patel</span> 👋
        </h1>
        <p className="mt-4 text-xl">
          A passionate software engineer specializing in modern web development.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
