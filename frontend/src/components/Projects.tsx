import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  demo: string;
  code: string;
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Catering Store",
    description:
      "A full-stack catering and event management platform where customers can explore menu items, packages, hampers and events, manage a persistent shopping cart, and place orders. Includes a powerful admin dashboard for managing products, orders, events, store settings and notifications.",
    demo: "https://cateringstore.vercel.app",
    code: "https://github.com/BilalAhmed786/cateringstore",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "React Query",
      "Zustand",
      "Zod",
      "ShadCN UI",
      "Cloudinary",
      "FCM",
      "RabbitMQ",
    ],
    featured: true,
  },

  {
    title: "E-commerce App",
    description:
      "A full-stack MERN e-commerce application with product management, authentication, shopping cart, Redux Toolkit state management, RTK Query, payment integration and secure API communication.",
    demo: "https://thrifterspoint.netlify.app",
    code: "https://github.com/BilalAhmed786/ecommercertk",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "RTK Query",
      "JWT",
      "Stripe",
    ],
  },

  {
    title: "Real-Time Chat App",
    description:
      "A WhatsApp-inspired real-time messaging application supporting private conversations, authentication and instant message delivery using WebSockets and Socket.IO.",
    demo: "https://whatsappweb.fasst-sallar.workers.dev",
    code: "https://github.com/BilalAhmed786/whatsappweb",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "WebSockets",
      "JWT",
      "Nodemailer",
    ],
  },

  {
    title: "Mini Facebook",
    description:
      "A full-stack social media application featuring posts, comments, user interactions and real-time chat functionality.",
    demo: "https://facebookclone.fasst-sallar.workers.dev",
    code: "https://github.com/BilalAhmed786/facebookclone",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "REST API",
    ],
  },

  {
    title: "E-commerce NextApp",
    description:
      "A modern Next.js e-commerce application featuring server-side rendering, product browsing, dynamic product pages and a responsive shopping experience.",
    demo: "https://nextecommerce-wheat.vercel.app",
    code: "https://github.com/BilalAhmed786/nextecommerce",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SSR",
      "REST API",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            A selection of full-stack applications showcasing my experience
            with modern frontend, backend, database and real-time technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`
                relative
                bg-white
                rounded-2xl
                border
                ${
                  project.featured
                    ? "border-blue-200 ring-1 ring-blue-100"
                    : "border-gray-100"
                }
                shadow-md
                p-6
                flex
                flex-col
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              `}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    Featured
                  </span>
                </div>
              )}

              {/* Project Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 pr-16">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        rounded-full
                        bg-gray-100
                        text-gray-700
                        hover:bg-blue-100
                        hover:text-blue-700
                        transition-colors
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-center gap-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-lg
                    bg-blue-600
                    text-white
                    font-medium
                    hover:bg-blue-700
                    transition-colors
                  "
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-lg
                    border
                    border-gray-200
                    text-gray-700
                    font-medium
                    hover:bg-gray-100
                    hover:text-black
                    transition-colors
                  "
                >
                  <Github size={17} />
                  Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
