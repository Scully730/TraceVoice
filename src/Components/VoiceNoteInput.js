import React, { useState, useRef } from "react";

const VoiceNoteInput = ({ onTranscriptionComplete }) => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
    onTranscriptionComplete(transcript);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-gray-900">
      <h3 className="text-xl font-semibold mb-4">Voice Note</h3>

      <div className="mb-4 h-32 border rounded-md p-3 overflow-y-auto bg-gray-50">
        {transcript || (
          <p className="text-gray-400 italic">Start talking to see transcription...</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={listening ? stopListening : startListening}
          className={`px-6 py-2 text-white rounded-md font-medium transition ${
            listening ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {listening ? "Stop Recording" : "Start Talking"}
        </button>
      </div>
    </div>
  );
};

export default VoiceNoteInput;