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
          <Briefcase className={styles.icon} size={32} />
          <h2 className={styles.title}>Where I've Worked</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.timeline}>
          {portfolioData.experience.map((job, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobRole}>
                  {job.role} <span className={styles.company}>@ {job.company}</span>
                </h3>
                <p className={styles.jobDate}>{job.date} | {job.location}</p>
                <ul className={styles.jobDescriptionList}>
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
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
