import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-[#1e293b] text-gray-100 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">What is TraceVoice?</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          TraceVoice is a voice-powered note-taking platform built for bug bounty hunters. Instead of pausing your workflow to type,
          simply press a button, speak your thoughts, and let AI-powered transcription turn it into organized notes — all with markdown formatting and secure cloud storage.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
