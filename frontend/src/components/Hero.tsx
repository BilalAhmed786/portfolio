import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 text-center px-6"
    >
      {/* Main Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-gray-800"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-blue-600">Bilal Ahmed</span>
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.h2
        className="mt-4 text-2xl md:text-3xl font-semibold text-blue-700 h-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typewriter
          words={[
            "I am a Full Stack Developer",
            "I build scalable MERN Apps",
            "I love React & Next.js",
            "I craft modern UIs with Tailwind",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-600 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        A passionate MERN Stack Developer skilled at building modern, scalable,
        and user-friendly web applications with React & TypeScript.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
