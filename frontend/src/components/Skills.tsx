import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    items: ["React", "Next.js", "Tailwind CSS", "Redux-toolkit","Context-api"],
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
    items: ["Node.js", "Express", "REST/GraphQL", "JWT", "Prisma"],
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-yellow-500 text-4xl" />,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "DevOps & Tools",
    icon: <FaCloud className="text-indigo-600 text-4xl" />,
    items: ["Docker","Docker-Hub", "Nginx","Render","AWS (EC2, S3, SES)", "Git", "Postman"],
  },
  {
    title: "Other",
    icon: <FaTools className="text-gray-700 text-4xl" />,
    items: ["WebSocket", "Stripe Integration", "Real-time Apps", "Error Handling"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 transition transform"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">{skill.title}</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              {skill.items.map((item, idx) => (
                <li key={idx} className="hover:text-blue-600 transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
