"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link href="/">
          <h1 className="text-xl font-bold">Arun Patel</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-gray-600">About</Link>
          <Link href="#experience" className="hover:text-gray-600">Experience</Link>
          <Link href="#skills" className="hover:text-gray-600">Skills</Link>
          <Link href="#contact" className="hover:text-gray-600">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
