import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { db } from "../Services/firebase"; // adjust path if needed
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner
    try {
      await addDoc(collection(db, "waitlist"), {
        email: email,
        createdAt: serverTimestamp(),
      });
      console.log("Email submitted:", email);
      setSuccess(true); // Show success screen
      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Always stop spinner
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSuccess(false); // reset popup
    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 bg-[#0f172a]">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
        TraceVoice
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-8">
        Talk your way to better bug bounty notes. Capture your findings with your voice and let TraceVoice do the rest.
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-black font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all"
      >
        Join the Waitlist
      </button>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded bg-[#0f172a] p-6 shadow-lg border border-gray-700">
                
                {success ? (
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">You're on the list! 🎉</h2>
                    <p className="text-gray-300 mb-6 text-center">
                      Thanks for joining the waitlist. We'll keep you updated!
                    </p>
                    <button
                      onClick={closeModal}
                      className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg transition-all"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Dialog.Title className="text-2xl font-bold text-white text-center mb-4">
                      Join the Waitlist
                    </Dialog.Title>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex items-center justify-center gap-2 bg-[#38bdf8] hover:bg-[#0ea5e9] text-black font-semibold py-2 rounded-lg transition-all ${
                        loading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent border-solid rounded-full animate-spin" />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </form>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default HeroSection;
