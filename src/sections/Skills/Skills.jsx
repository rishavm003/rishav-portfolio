import React from 'react';
import styles from './Skills.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Code2 } from 'lucide-react';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <Code2 className={styles.icon} size={32} />
          <h2 className={styles.title}>Skills & Expertise</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.skillsGrid}>
          {/* Left Column - Technical */}
          <div className={styles.skillColumn}>
            <h3 className={styles.columnTitle}>Technical Skills</h3>
            <div className={styles.techList}>
              {portfolioData.skills.technical.map((skill, idx) => (
                <div key={idx} className={styles.techItem}>
                  <span className={styles.techCategory}>{skill.category}:</span> {skill.items}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Soft Skills & Core */}
          <div className={styles.skillColumn}>
            <div className={styles.subColumn}>
              <h3 className={styles.columnTitle}>Soft Skills</h3>
              <ul className={styles.bulletList}>
                {portfolioData.skills.soft.map((skill, idx) => (
                  <li key={idx} className={styles.bulletItem}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.subColumn}>
              <h3 className={styles.columnTitle}>Core Computer Science</h3>
              <ul className={styles.bulletList}>
                {portfolioData.skills.core.map((skill, idx) => (
                  <li key={idx} className={styles.bulletItem}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
