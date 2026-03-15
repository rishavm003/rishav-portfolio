import React from 'react';
import styles from './Projects.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Code, Github } from 'lucide-react';

/* ─── Unique SVG icons per project topic ─────────────────────── */
const ProjectIcon = ({ type, color }) => {
  const props = { width: 48, height: 48, fill: 'none', strokeWidth: 1.5, stroke: color, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'brain':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M12 2C9.5 2 7.5 3.5 7 5.7a4 4 0 0 0-3 3.8 4 4 0 0 0 1 2.7A4 4 0 1 0 12 18.2a4 4 0 1 0 7-2A4 4 0 0 0 17 5.7C16.5 3.5 14.5 2 12 2Z" />
          <path d="M12 18v4M9 21h6" />
        </svg>
      );
    case 'health':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'trading':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case 'room':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'meeting':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="9" y1="10" x2="15" y2="10" />
          <line x1="9" y1="14" x2="13" y2="14" />
        </svg>
      );
    case 'dashboard':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    default:
      return null;
  }
};

/* ─── Single card (shared between featured and regular) ─────── */
const ProjectCard = ({ project, featured = false }) => (
  <div
    className={`${styles.projectCard} ${featured ? styles.featuredCard : ''}`}
    style={{ '--card-accent': project.accent }}
  >
    <div className={styles.cardGlow} />

    <div className={styles.cardTopRow}>
      <div className={styles.iconWrap}>
        <ProjectIcon type={project.icon} color={project.accent} />
      </div>
      {featured && (
        <span className={styles.featuredBadge} style={{ color: project.accent, borderColor: project.accent }}>
          ★ Featured
        </span>
      )}
    </div>

    <h3 className={styles.projectTitle} style={{ color: project.accent }}>{project.title}</h3>

    <p className={styles.projectDescription}>{project.description}</p>

    <div className={styles.tagsContainer}>
      {project.tags.map((tag, i) => (
        <span key={i} className={styles.tagPill} style={{ borderColor: `${project.accent}55`, color: project.accent, background: `${project.accent}12` }}>
          {tag}
        </span>
      ))}
    </div>

    <div className={styles.cardFooter}>
      <a href={project.github} target="_blank" rel="noreferrer" className={styles.githubBtn} style={{ '--btn-color': project.accent }}>
        <Github size={16} />
        <span>GitHub</span>
      </a>
    </div>
  </div>
);

/* ─── Section ─────────────────────────────────────────────────── */
export default function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const featured = portfolioData.projects.find(p => p.featured);
  const regular  = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <Code className={styles.icon} size={32} />
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.line} />
        </div>

        {/* Featured full-width card */}
        {featured && <ProjectCard project={featured} featured />}

        {/* Regular 2-col / 3-col grid */}
        <div className={styles.projectsGrid}>
          {regular.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
