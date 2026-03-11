import React from 'react';
import styles from './About.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { User, Database, Code, Blocks } from 'lucide-react';
import NeuralNetwork from '../../components/NeuralNetwork/NeuralNetwork';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <User className={styles.icon} size={32} />
          <h2 className={styles.title}>About Me</h2>
          
          {/* Decorative Icons around Header */}
          <div className={`${styles.floatingIcon} ${styles.icon1}`}>
            <Code size={24} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.icon2}`}>
            <Database size={24} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.icon3}`}>
            <Blocks size={24} />
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.bioText}>
            {Array.isArray(portfolioData.about.bio) 
              ? portfolioData.about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              : <p>{portfolioData.about.bio}</p>
            }
          </div>
          <div className={styles.imageContainer}>
            <NeuralNetwork />
          </div>
        </div>
      </div>
    </section>
  );
}
