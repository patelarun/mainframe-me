"use client";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology (BTech), Computer Science",
    duration: "2013 - 2017",
    grade: "6.82/10",
    description: "I am a Computer Science Engineering student passionate about technology and problem-solving. My academic journey has provided me with a solid foundation in programming, algorithms, and system design."
  },
  {
    institution: "School for Excellence",
    degree: "High School, Science",
    duration: "2009 - 2013",
    grade: "IX to XII",
    description: "Studies Science and Non-Medical subjects such as Physics, Chemistry, and Mathematics."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>
        <div className="mt-8 space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution} | {edu.duration}</p>
              {edu.grade && <p className="text-gray-500">Grade: {edu.grade}</p>}
              <p className="mt-2 text-gray-600">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
