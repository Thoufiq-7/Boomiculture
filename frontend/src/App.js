import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Blogs from "./Blogs";
import Features from "./Features";
import Login from "./Login";
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
