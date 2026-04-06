import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>
            © {currentYear} Rishav Mishra. All rights reserved.
          </p>
          <p className={styles.credit}>
            Built with <span className={styles.heart}>♥</span> in React
          </p>
        </div>
      </div>
    </footer>
  );
}
