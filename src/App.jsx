import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MainLayout } from '@/layouts';
import UpdateResume from '@/pages/UpdateResume/UpdateResume';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/Admin" element={<UpdateResume />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
