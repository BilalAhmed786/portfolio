import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/DSC_9574.JPG"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block relative">
            About Me
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
          </h2>

          {/* Bio Card */}
          <div className="mt-8 bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I’m a <span className="font-semibold text-blue-600 p-2">MERN Stack Developer</span> 
                passionate about building modern, scalable, and interactive web applications.  
              My expertise includes{" "}
              <span className="font-medium">React, TypeScript, Node.js, Express, MongoDB, GraphQL, and Prisma</span>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              My journey began with curiosity about how websites work, which grew into a passion
              for creating impactful solutions. I enjoy writing clean, maintainable code, improving
              performance, and crafting excellent user experiences.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I love exploring new technologies, contributing to open-source,
              and collaborating with developers worldwide. My long-term goal is to become a{" "}
              <span className="font-semibold text-blue-600">Full-Stack Architect</span>, building
              scalable systems and mentoring the next generation of developers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
