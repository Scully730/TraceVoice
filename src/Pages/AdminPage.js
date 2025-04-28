import React, { useEffect, useState } from "react";
import { db } from "../Services/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const AdminPage = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const q = query(collection(db, "waitlist"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const emailList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setEmails(emailList);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">📥 Waitlist Submissions</h1>

      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4">Email</th>
              <th className="border-b py-2 px-4">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((entry) => (
              <tr key={entry.id}>
                <td className="border-b py-2 px-4">{entry.email}</td>
                <td className="border-b py-2 px-4">
                  {entry.timestamp?.toDate().toLocaleString() || "No Timestamp"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {emails.length === 0 && (
        <p className="text-gray-400 mt-10">No emails yet 😶</p>
      )}
    </div>
  );
};

export default AdminPage;
