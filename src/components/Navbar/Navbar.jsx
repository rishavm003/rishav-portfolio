import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 200;

      let currentActive = activeItem;
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = section.id.charAt(0).toUpperCase() + section.id.slice(1);
        }
      });
      setActiveItem(currentActive);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeItem]);

  const handleNavClick = (item) => {
    setActiveItem(item);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <a href="#home" className={styles.logo}>
            <span className="text-gradient">R</span>M<span className={styles.dot}>.</span>
          </a>
          
          <ul className={styles.navLinks}>
            {navItems.map(item => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={activeItem === item ? styles.active : ''}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div 
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`${styles.overlay} ${mobileMenuOpen ? styles.active : ''}`} onClick={toggleMobileMenu} />
      
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.active : ''}`}>
        <ul>
          {navItems.map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className={activeItem === item ? styles.active : ''}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
