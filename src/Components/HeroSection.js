import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 bg-[#0f172a]">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
        TraceVoice
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-8">
        Talk your way to better bug bounty notes. Capture your findings with your voice and let TraceVoice do the rest.
      </p>
      <a href="#waitlist">
        <button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-black font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all">
          Join the Waitlist
        </button>
      </a>
    </section>
  );
};

export default HeroSection;
