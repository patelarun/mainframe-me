"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Let's Connect
      </motion.h2>
      <p className="mt-4 text-gray-600">Reach out to me via LinkedIn or GitHub.</p>
      <a
        href="https://www.linkedin.com/in/arunpwrk/"
        className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Contact;
