import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
        <img
          className="w-[60px] h-[60px] [clip-path:circle(50%)]"
          src="/DSC_9574.JPG"
          alt="Logo"
        />
        <ul className="flex space-x-6 font-medium">
          <li>
            <a href="#hero" className="hover:text-yellow-300 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-300 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
