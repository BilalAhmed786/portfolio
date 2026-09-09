import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaCloud,
} from "react-icons/fa";
import {
  SiRedux,
  SiDocker,
  SiSocketdotio,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Redux Toolkit",
      "Context API",
      "React Hook Form",
    ],
  },

  {
    title: "State & Data Management",
    icon: <SiRedux className="text-purple-600 text-4xl" />,
    items: [
      "Redux Toolkit",
      "RTK Query",
      "React Query",
      "Zustand",
      "API Caching",
      "Infinite Scroll",
      "Pagination",
      "Optimistic Updates",
    ],
  },

  {
    title: "Backend",
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "TypeScript",
      "JWT",
      "Middleware",
      "API Validation",
      "Error Handling",
    ],
  },

  {
    title: "Authentication & Security",
    icon: <FaTools className="text-red-500 text-4xl" />,
    items: [
      "Firebase Authentication",
      "Firebase Admin SDK",
      "OAuth",
      "Google OAuth",
      "Facebook OAuth",
      "Passport.js",
      "JWT Authentication",
      "Role-Based Access Control",
      "Protected Routes",
      "Zod Validation",
    ],
  },

  {
    title: "Database & ORM",
    icon: <FaDatabase className="text-yellow-500 text-4xl" />,
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "Database Relationships",
      "Database Indexing",
      "Query Optimization",
      "Cursor Pagination",
      "Connection Pooling",
    ],
  },

  {
    title: "Real-Time & Messaging",
    icon: <SiSocketdotio className="text-gray-800 text-4xl" />,
    items: [
      "Socket.IO",
      "WebSockets",
      "Real-Time Chat",
      "Private Messaging",
      "RabbitMQ",
      "Redis",
      "Firebase Cloud Messaging",
      "Event-Driven Architecture",
    ],
  },

  {
    title: "Cloud & Storage",
    icon: <FaCloud className="text-indigo-600 text-4xl" />,
    items: [
      "Cloudinary",
      "Firebase",
      "Firebase Admin",
      "AWS EC2",
      "AWS S3",
      "AWS SES",
      "Multer",
      "Image Upload",
      "File Management",
    ],
  },

  {
    title: "DevOps & Tools",
    icon: <SiDocker className="text-blue-600 text-4xl" />,
    items: [
      "Docker",
      "Docker Hub",
      "Nginx",
      "Render",
      "Vercel",
      "Cloudflare",
      "Netlify",
      "Git",
      "GitHub",
      "Postman",
      "CI/CD",
    ],
  },

  {
    title: "Integrations & APIs",
    icon: <FaTools className="text-gray-700 text-4xl" />,
    items: [
      "Stripe Integration",
      "Nodemailer",
      "Cloudinary",
      "Firebase Cloud Messaging",
      "OAuth",
      "Captcha",
      "REST API Integration",
      "Third-Party APIs",
      "webhook",
      "Custom API Clients",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-center"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Technical Skills
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Technologies and tools I use to build modern, scalable, secure and
          production-ready web applications.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-2xl p-7
                border border-gray-100
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div
                className="
                  flex items-center justify-center
                  w-16 h-16 mx-auto
                  rounded-2xl bg-gray-50
                  group-hover:bg-blue-50
                  transition-colors duration-300
                "
              >
                {skill.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-800">
                {skill.title}
              </h3>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1.5
                      text-sm font-medium
                      bg-gray-100 text-gray-700
                      rounded-full
                      hover:bg-blue-100
                      hover:text-blue-700
                      transition-colors duration-200
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;