import React from "react";
import { FaEnvelope, FaPhone, FaFileAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Name/Brand */}
        <h2 className="text-xl font-bold text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} Bilal Ahmed
        </h2>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaEnvelope /> bilal.ahmed4817@gmail.com
          </a>

          <a
            href="tel:+921234567890"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaPhone /> +923315195278
          </a>

          <a
            href="/Bilal Ahmed CV-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaFileAlt /> View CV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
