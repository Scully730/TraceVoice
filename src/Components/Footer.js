import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} TraceVoice. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
          <a href="#contact-us" className="hover:text-white transition">
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
