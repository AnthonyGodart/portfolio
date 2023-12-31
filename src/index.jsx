import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './pages/Introduction';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
