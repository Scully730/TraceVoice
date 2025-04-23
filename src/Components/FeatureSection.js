import React from "react";
import { Mic, FileText, Cloud, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-8 h-8 text-[#38bdf8]" />,
    title: "Voice-to-Text",
    description: "Speak your findings in real time without breaking flow."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#facc15]" />,
    title: "AI-Powered Transcription",
    description: "Crystal-clear and accurate voice transcription."
  },
  {
    icon: <FileText className="w-8 h-8 text-[#38bdf8]" />,
    title: "Markdown Support",
    description: "Format your notes beautifully using markdown."
  },
  {
    icon: <Cloud className="w-8 h-8 text-[#38bdf8]" />,
    title: "Cloud Storage",
    description: "Access your notes anytime, securely stored in the cloud."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0f172a] text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Core Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
