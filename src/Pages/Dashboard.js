import React, { useEffect, useState, useCallback } from "react";
import { auth, db } from "../Services/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [noteLimitReached, setNoteLimitReached] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Fetch user notes from Firestore
  const fetchNotes = useCallback(async () => {
    if (!user) return;
    const q = query(collection(db, "notes"), where("uid", "==", user.uid));
    const snapshot = await getDocs(q);
    const userNotes = snapshot.docs.map(doc => doc.data());
    setNotes(userNotes);
    if (userNotes.length >= 3) setNoteLimitReached(true);
  }, [user]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);  

  const handleSave = async () => {
    if (!user || !transcript.trim() || noteLimitReached) return;
    await addDoc(collection(db, "notes"), {
      uid: user.uid,
      content: transcript,
      createdAt: new Date()
    });
    resetTranscript();
    fetchNotes();
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Sorry, your browser doesn't support voice input.</p>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Welcome to TraceVoice</h2>
        <button onClick={handleLogout} className="text-red-500 underline">Log out</button>
      </div>

      <div className="mb-6">
        <button
          onClick={listening ? SpeechRecognition.stopListening : () => SpeechRecognition.startListening({ continuous: true })}
          className={`px-6 py-2 text-white rounded ${listening ? "bg-red-500" : "bg-primary"}`}
        >
          {listening ? "Stop" : "Start Recording"}
        </button>

        <button
          onClick={handleSave}
          disabled={!transcript.trim() || noteLimitReached}
          className="ml-4 px-6 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        >
          Save Note
        </button>

        <p className="mt-4 p-4 border rounded bg-gray-100">{transcript || "Your voice notes will appear here..."}</p>

        {noteLimitReached && (
          <div className="mt-4 text-yellow-600 font-semibold">
            Free limit reached. Upgrade to save unlimited notes with Markdown support.
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Your Notes</h3>
        <div className="grid gap-3">
          {notes.map((note, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              {note.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
