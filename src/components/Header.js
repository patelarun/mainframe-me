"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition">
            Arun Patel
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-gray-700 hover:text-gray-900 transition">About</Link>
          <Link href="#experience" className="text-gray-700 hover:text-gray-900 transition">Experience</Link>
          <Link href="#skills" className="text-gray-700 hover:text-gray-900 transition">Skills</Link>
          <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
