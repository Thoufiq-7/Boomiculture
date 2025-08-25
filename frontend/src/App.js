import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Blogs from "./pages/Blogs";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}