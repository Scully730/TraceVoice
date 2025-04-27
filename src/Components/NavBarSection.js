import React, { useState } from "react";
import logo from "../Assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">

        {/* Logo */}
        <div className="flex items-center">
          <div className={`transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <img src={logo} alt="TraceVoice Logo" className="h-12 w-50" />
          </div>
        </div>

        {/* Navigation Links (centered absolutely on desktop) */}
        <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg font-medium`}>
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/#features" className="hover:text-gray-400">Features</a>
          <a href="/blog" className="hover:text-gray-400">Blog</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Hamburger Menu (only mobile) */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? (
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`flex-col md:hidden absolute top-full left-0 w-full bg-gray-900/90 backdrop-blur-md transition-all duration-500 ease-in-out ${menuOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-5'}`}>
          <a href="/" className="block px-6 py-4 text-center hover:text-gray-400">Home</a>
          <a href="/#features" className="block px-6 py-4 text-center hover:text-gray-400">Features</a>
          <a href="/blog" className="block px-6 py-4 text-center hover:text-gray-400">Blog</a>
          <a href="/contact" className="block px-6 py-4 text-center hover:text-gray-400">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
