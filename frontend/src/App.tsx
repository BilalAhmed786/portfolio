import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import LeadDetails from "./components/LeadDetails";
import Protectedroute from "./components/Protectedroute";

import "./App.css";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={<Protectedroute Component ={AdminDashboard}/>}
        />
        <Route 
         path="/admin/lead/:id" 
          element={<LeadDetails />}
        />

        </Routes>
    </Router>
  );
};

export default App;
