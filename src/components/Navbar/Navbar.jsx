import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.logo}>RM.</a>
        <ul className={styles.navLinks}>
          {navItems.map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className={activeItem === item ? styles.active : ''}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
