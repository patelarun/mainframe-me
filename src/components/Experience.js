"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Bird Vision AB",
    position: "Frontend (Web/Mobile) Lead",
    duration: "May 2020 - Present (4 yrs 9 mos)",
    location: "Stockholm, Sweden",
    description: "Remotely supervising and developing company product (SaaS platform) frontend applications for Web and mobile.",
    skills: ["React.js", "Node.js", "Ruby on Rails", "JavaScript", "Next.js", "HTML5", "CSS", "React Native"]
  },
  {
    company: "Bird Vision AB",
    position: "Frontend Developer (Part-time)",
    duration: "Aug 2019 - May 2020 (10 mos)",
    description: "Worked remotely as a developer for company product mobile and web frontend technologies.",
    skills: ["React.js", "Node.js", "Ruby on Rails", "Next.js", "React Native"]
  },
  {
    company: "BestPeers Infosystem Pvt. Ltd.",
    position: "Software Engineer",
    duration: "Sep 2017 - May 2020 (2 yrs 9 mos)",
    location: "Indore, Madhya Pradesh, India",
    description: "Developed web applications and frontend solutions for multiple clients.",
    skills: ["React.js", "Node.js", "JavaScript", "HTML5", "CSS"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center"
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
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
              <p className="text-gray-700">{exp.company} | {exp.duration}</p>
              {exp.location && <p className="text-gray-500">{exp.location}</p>}
              <p className="mt-2 text-gray-600">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
