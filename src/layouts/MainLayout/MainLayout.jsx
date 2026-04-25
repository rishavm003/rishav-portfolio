import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Navbar, Footer } from '@/components/layout';
import { Home, About, Skills, Projects, Certifications, Experience, Contact } from '@/sections';

const MainLayout = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);
      
      // Toggle geometric background visibility based on scroll
      const geoBg = document.getElementById('geometric-bg');
      if (geoBg) {
        if (window.scrollY < windowHeight * 0.5) {
          geoBg.style.opacity = '0';
          geoBg.style.visibility = 'hidden';
        } else {
          geoBg.style.opacity = '1';
          geoBg.style.visibility = 'visible';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll reveal animations
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    // Initial check
    revealElements();
    
    // Check on scroll
    window.addEventListener('scroll', revealElements);
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      

      
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
