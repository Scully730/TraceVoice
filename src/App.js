import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { Analytics } from '@vercel/analytics/react';
import { motion } from "framer-motion";
import AdminPage from "./Pages/AdminPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <LandingPage />
            </motion.div>
          } 
        />
        {/* Smooth redirect for all other pages */}
        <Route 
          path="*" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Navigate to="/" />
            </motion.div>
          } 
        />

        <Route path="/admin-secret123" element={<AdminPage />} />
      </Routes>

      <Analytics />
    </Router>
  );
};

export default App;
