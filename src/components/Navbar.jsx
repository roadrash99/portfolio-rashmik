import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 shadow-md">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-5xl font-bold">RM</h1>
        {/* Hamburger Icon */}
        <button className="block md:hidden text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Menu container */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col w-full md:flex md:flex-row md:items-center md:w-auto md:gap-6 text-xl transition-all duration-300`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <a href="#about" className="block py-2 md:py-0 md:mx-2">
            About Me
          </a>
          <a href="#tech" className="block py-2 md:py-0 md:mx-2">
            Tech Stack
          </a>
          <a href="#experience" className="block py-2 md:py-0 md:mx-2">
            Experience
          </a>
          <a href="#projects" className="block py-2 md:py-0 md:mx-2">
            Projects
          </a>
          <a href="#contact" className="block py-2 md:py-0 md:mx-2">
            Contact
          </a>
    
          <a
            href="/resume.pdf"  
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 md:py-0 md:mx-2"
          >
            Resume
          </a>
        </div>

       
        <div className="flex justify-center gap-4 py-4 md:py-0 md:ml-6">
          <a
            href="https://www.linkedin.com/in/rashmik007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/roadrash99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
