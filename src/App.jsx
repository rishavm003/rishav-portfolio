import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import CertificationsSection from './sections/Certifications/CertificationsSection';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import UpdateResume from './pages/UpdateResume/UpdateResume';

const PortfolioLayout = () => (
  <>
    <Navbar />
    <main>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CertificationsSection />
      <Contact />
    </main>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/Admin" element={<UpdateResume />} />
      </Routes>
    </Router>
  );
}

export default App;
