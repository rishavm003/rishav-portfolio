import React from 'react';
import styles from './Projects.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Code, Github } from 'lucide-react';

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <Code className={styles.icon} size={32} />
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              
              <div className={styles.projectDescription}>
                <p>{project.description}</p>
              </div>
              
              <div className={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tagPill}>{tag}</span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <a href={project.github} target="_blank" rel="noreferrer" className={styles.githubLink} aria-label="GitHub Repository">
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
