"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Let's Connect
      </motion.h2>
      <p className="mt-4 text-gray-600">Reach out to me via LinkedIn or GitHub.</p>
      <a
        href="https://www.linkedin.com/in/arunpwrk/"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Contact;
