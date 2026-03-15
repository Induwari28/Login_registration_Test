import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from "./Signup"; 
import Login from "./Login"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirects the base URL to /register */}
        <Route path="/" element={<Navigate to="/register" replace />} />
        
        {/* Route for Signup page */}
        <Route path="/register" element={<Signup />} />
        
        {/* Route for Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
