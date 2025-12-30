import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import VisionPage from './pages/VisionPage';
import ValuesPage from './pages/ValuesPage';
import StructurePage from './pages/StructurePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for saved theme or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light-mode') {
      setDarkMode(false);
    } else if (!savedTheme && !prefersDarkScheme.matches) {
      setDarkMode(false);
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.setItem('theme', 'dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', darkMode ? 'light-mode' : 'dark-mode');
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <img src="/logo.jpg" alt="GlobalRwanda Technologies" className="loading-logo" />
          <div className="loading-text">
            <h2>GLOBALRWANDA</h2>
            <p>TECHNOLOGIES GROUP</p>
          </div>
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
          <Route path="/services" element={<ServicesPage darkMode={darkMode} />} />
          <Route path="/vision" element={<VisionPage darkMode={darkMode} />} />
          <Route path="/values" element={<ValuesPage darkMode={darkMode} />} />
          <Route path="/structure" element={<StructurePage darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;