import React from 'react';
import styles from './Experience.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className={styles.experienceSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <div className={styles.headerReveal}>
            <div className={styles.headerLeft}>
              <Briefcase className={styles.headerIcon} size={28} />
              <h2 className={styles.title}>Where I've Worked</h2>
            </div>
            <div className={styles.headerLine}></div>
          </div>
        </div>
        
        <div className={styles.timeline}>
          <div className={styles.verticalLine}></div>
          
          {portfolioData.experience.map((job, idx) => (
            <div 
              key={idx} 
              className={`${styles.timelineItem} reveal`} 
              style={{ '--stagger-index': idx }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.jobHeading}>
                  <h3 className={styles.jobTitle}>
                    {job.role} <span className={styles.company}>@ {job.company}</span>
                  </h3>
                  <p className={styles.metadata}>
                    {job.date} <span className={styles.separator}>|</span> {job.location}
                  </p>
                </div>
                
                <ul className={styles.pointsList}>
                  {job.points.map((point, i) => (
                    <li key={i} className={styles.pointItem}>
                      <span className={styles.bullet}></span>
                      <p className={styles.pointText}>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
