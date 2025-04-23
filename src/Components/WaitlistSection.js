import React, { useState } from 'react';
import { db } from "../Services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        createdAt: Timestamp.now(),
      });
      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error joining waitlist: ", error);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
        <p className="text-gray-300 mb-8">
          Be the first to try TraceVoice. Get early access and updates!
        </p>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 rounded-md bg-white text-gray-900 w-full sm:w-auto sm:flex-1 placeholder:text-sm placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-medium mt-4">
            🎉 You’re on the list! We'll be in touch.
          </p>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
