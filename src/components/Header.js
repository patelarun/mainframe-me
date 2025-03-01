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
        <Link href="/" className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tracking-wide">
          {'<ArunPatel />'}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition">Me</Link>
          <Link href="/jobs" className="text-gray-700 hover:text-gray-900 transition">Looking for a job?</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
