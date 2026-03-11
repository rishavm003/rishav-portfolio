import React from 'react';
import styles from './Projects.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FolderGit2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <FolderGit2 className={styles.icon} size={32} />
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <FolderGit2 size={36} className={styles.folderIcon} />
                <a href={project.link} target="_blank" rel="noreferrer" className={styles.externalLink}>
                  <ExternalLink size={24} />
                </a>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectDescription}>
                <p>{project.description}</p>
              </div>
              <ul className={styles.techList}>
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
