import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import GetInvolvedPage from './components/GetInvolvedPage';
import ContactPage from './components/ContactPage';
import Journey from './components/Journey';
import Gallery from './components/Gallery';
import Blog from './components/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
