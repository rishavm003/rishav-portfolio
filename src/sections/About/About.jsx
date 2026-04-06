import React from 'react';
import styles from './About.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { User, Database, Code, Blocks, GitBranch, Calendar, Award, Target } from 'lucide-react';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  const stats = [
    { number: '3+', label: 'Years Coding', icon: Calendar },
    { number: '12+', label: 'Projects Built', icon: GitBranch },
    { number: '5+', label: 'AI Models', icon: Target },
    { number: '2', label: 'Certifications', icon: Award }
  ];

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <div className="reveal">
            <h2 className={styles.title} data-text="About Me">About Me</h2>
          </div>
        </div>
        
        <div className={styles.layout}>
          <div className={`${styles.bioColumn} reveal`}>
            <div className={styles.bioContent}>
              {Array.isArray(portfolioData.about.bio) 
                ? portfolioData.about.bio.map((paragraph, idx) => (
                    <p key={idx} className={styles.bioParagraph}>
                      <span className={styles.bracket}></span>
                      {paragraph}
                    </p>
                  ))
                : <p className={styles.bioParagraph}>
                    <span className={styles.bracket}></span>
                    {portfolioData.about.bio}
                  </p>
              }
            </div>
          </div>

          <div className={`${styles.statsColumn} reveal`}>
            <div className={styles.statsPanel}>
              <h3 className={styles.statsTitle}>Developer <span className="text-gradient">Highlights</span></h3>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} className={`${styles.statCard} glass-panel`}>
                    <div className={styles.statIcon}>
                      <stat.icon size={20} />
                    </div>
                    <div className={styles.statInfo}>
                      <div className={styles.statNumber}>{stat.number}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
