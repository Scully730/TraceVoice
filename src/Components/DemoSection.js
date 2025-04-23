import React from "react";
import demoImage from "../Assets/demo-mockup.png"; // Replace this with the actual filename of the image you downloaded

const DemoSection = () => {
  return (
    <section className="py-20 px-6 bg-[#1e293b] text-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src={demoImage}
            alt="TraceVoice Demo"
            className="w-full max-w-[500px] mx-auto rounded-2xl shadow-xl transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Voice in. Notes out.
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Hit the mic, speak your thoughts, and let TraceVoice transcribe
            everything with AI. Your voice becomes clean, structured notes—
            formatted and ready.
          </p>
          <p className="text-gray-400 text-sm">
            Built for speed, clarity, and focus while you’re bug hunting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
