"use client";
import { motion } from "framer-motion";

const skills = [
  "React.js", "Node.js", "Ruby on Rails", "JavaScript", "Next.js",
  "HTML5", "CSS", "React Native", "Ionic", "Docker", "Mysql",
  "PostgreSQL", "MongoDB", "GraphQL", "DevOps"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
