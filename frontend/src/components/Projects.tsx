import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  demo: string;
  code: string;
}

const projects: Project[] = [
  {
    title: "E-commerce App",
    description: "A full-stack MERN app with payments integration.",
    demo: "https://thrifter-frontend.onrender.com",
    code: "https://github.com/BilalAhmed786/ecommercertk",
  },
  {
    title: "Chat App",
    description: "WhatsApp-like chat with WebSockets and real-time updates.",
    demo: "https://whatsappweb-frontend.onrender.com",
    code: "https://github.com/BilalAhmed786/whatsappweb",
  },
  {
    title: "Mini Facebook",
    description: "Full-stack app with posts, comments, and live chat.",
    demo: "https://facebookmini-frontend.onrender.com",
    code: "https://github.com/BilalAhmed786/facebookclone",
  },
  {
    title: "E-commerce NextApp",
    description: "Next.js app with SSR shop page and single product view.",
    demo: "https://thrifterpoint.onrender.com",
    code: "https://github.com/BilalAhmed786/nextecommerce",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition duration-300 ${
                index === projects.length - 1 ? "md:col-span-3 md:mx-auto md:w-2/3" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
              </div>

              {/* Links */}
              <div className="mt-6 flex justify-center gap-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 font-medium hover:text-black hover:underline"
                >
                  <Github size={18} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
