import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Introduction from './pages/Introduction';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Footer from '../src/components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
