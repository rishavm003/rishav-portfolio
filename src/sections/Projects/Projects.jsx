import React from 'react';
import styles from './Projects.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Code, Github } from 'lucide-react';

/* ─── Topic icons ──────────────────────────────────────────── */
const ProjectIcon = ({ type, color }) => {
  const p = { width: 36, height: 36, fill: 'none', strokeWidth: 1.6, stroke: color, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'brain':     return <svg {...p} viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 3.5 7 5.7a4 4 0 0 0-3 3.8 4 4 0 0 0 1 2.7A4 4 0 1 0 12 18.2a4 4 0 1 0 7-2A4 4 0 0 0 17 5.7C16.5 3.5 14.5 2 12 2Z" /><path d="M12 18v4M9 21h6" /></svg>;
    case 'health':    return <svg {...p} viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
    case 'trading':   return <svg {...p} viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;
    case 'emotion':   return <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" /><line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" /></svg>;
    case 'sentiment': return <svg {...p} viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><path d="M3 7l4-4 4 4 4-4 4 4" /></svg>;
    case 'chatbot':   return <svg {...p} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="9" y1="10" x2="15" y2="10" /><line x1="9" y1="14" x2="13" y2="14" /></svg>;
    case 'drug':      return <svg {...p} viewBox="0 0 24 24"><path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3" /><circle cx="17" cy="17" r="5" /><path d="m14.5 19.5 5-5" /></svg>;
    case 'meeting':   return <svg {...p} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case 'room':      return <svg {...p} viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
    case 'dashboard': return <svg {...p} viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
    case 'cricket':   return <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="m9 9 6 6M15 9l-6 6" /><path d="M15 19v2M9 19v2" /></svg>;
    case 'hospital':  return <svg {...p} viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>;
    default:          return null;
  }
};

/* ─── Section ──────────────────────────────────────────────── */
export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>

        <div className={styles.header}>
          <Code className={styles.icon} size={32} />
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.line} />
        </div>

        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project, idx) => (
            <div
              key={idx}
              className={styles.projectCard}
              style={{
                '--card-accent': project.accent,
                animationDuration: project.floatDuration,
                animationDelay: project.floatDelay,
              }}
            >
              <div className={styles.cardGlow} />

              <div className={styles.iconWrap}>
                <ProjectIcon type={project.icon} color={project.accent} />
              </div>

              <h3 className={styles.projectTitle} style={{ color: project.accent }}>
                {project.title}
              </h3>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={styles.tagPill}
                    style={{
                      borderColor: `${project.accent}55`,
                      color: project.accent,
                      background: `${project.accent}12`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.githubBtn}
                  style={{ '--btn-color': project.accent }}
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllWrap}>
          <a
            href="https://github.com/rishavm003"
            target="_blank"
            rel="noreferrer"
            className={styles.viewAllBtn}
          >
            <Github size={18} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
