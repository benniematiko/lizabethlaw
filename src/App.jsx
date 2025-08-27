import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import AreasWeServePage from './pages/AreasWeServePage';
import CasesPage from './pages/CasesPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/areasweserve" element={<AreasWeServePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
