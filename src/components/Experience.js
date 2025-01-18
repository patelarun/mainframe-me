"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Company A",
    position: "Software Engineer",
    duration: "2021 - Present",
    description: "Developed modern web applications using Next.js and React.",
  },
  {
    company: "Company B",
    position: "Frontend Developer",
    duration: "2019 - 2021",
    description: "Worked on UI/UX improvements and component optimizations.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h2>
        <div className="mt-8 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p>
              <p className="mt-2 text-gray-500">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
