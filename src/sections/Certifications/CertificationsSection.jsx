import React from 'react';
import styles from './CertificationsSection.module.css';
import { certifications } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Award, ExternalLink } from 'lucide-react';

/* ─── Topic icons ──────────────────────────────────────────── */
const CertIcon = ({ type, color }) => {
  const p = { width: 36, height: 36, fill: 'none', strokeWidth: 1.6, stroke: color, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'brain':     return <svg {...p} viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 3.5 7 5.7a4 4 0 0 0-3 3.8 4 4 0 0 0 1 2.7A4 4 0 1 0 12 18.2a4 4 0 1 0 7-2A4 4 0 0 0 17 5.7C16.5 3.5 14.5 2 12 2Z" /><path d="M12 18v4M9 21h6" /></svg>;
    case 'code':      return <svg {...p} viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
    case 'database':  return <svg {...p} viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
    case 'cloud':     return <svg {...p} viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>;
    case 'nlp':       return <svg {...p} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="9" y1="10" x2="15" y2="10" /><line x1="9" y1="14" x2="13" y2="14" /></svg>;
    default:          return <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>;
  }
};

/* Helper to map certificate to icon type */
function getIconForCert(title) {
  if (title.toLowerCase().includes('machine learning') || title.toLowerCase().includes('deep learning')) return 'brain';
  if (title.toLowerCase().includes('python') || title.toLowerCase().includes('programming')) return 'code';
  if (title.toLowerCase().includes('sql') || title.toLowerCase().includes('database')) return 'database';
  if (title.toLowerCase().includes('cloud') || title.toLowerCase().includes('aws')) return 'cloud';
  if (title.toLowerCase().includes('language') || title.toLowerCase().includes('nlp')) return 'nlp';
  return 'default';
}

/* ─── Section ──────────────────────────────────────────────── */
export default function CertificationsSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="certifications" className={styles.projectsSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>

        <div className={styles.header}>
          <div className={styles.headerTextWrap}>
            <span className={styles.sectionLabel}>// achievements</span>
            <h2 className={styles.title}>Certifications & Courses</h2>
          </div>
          <div className={styles.line} />
        </div>

        <div className={styles.projectsGrid}>
          {certifications.map((cert, idx) => {
            const isPlaceholder = !cert.link || cert.link === "your-certificate-link-here";
            const iconType = getIconForCert(cert.title);
            // Derive generic float parameters to match Projects
            const floatDuration = `${5 + (idx % 3)}s`;
            const floatDelay = `${(idx % 4) * 0.5}s`;

            return (
              <div
                key={cert.id || idx}
                className={styles.projectCard}
                style={{
                  '--card-accent': cert.accentColor,
                  animationDuration: floatDuration,
                  animationDelay: floatDelay,
                }}
              >
                <div className={styles.cardGlow} />

                <div className={styles.iconWrap}>
                  <CertIcon type={iconType} color={cert.accentColor} />
                </div>

                <h3 className={styles.projectTitle} style={{ color: cert.accentColor }}>
                  {cert.title}
                </h3>
                
                <div className={styles.platformDate}>
                  <span className={styles.platform}>{cert.platform}</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>

                <p className={styles.projectDescription}>{cert.description}</p>

                <div className={styles.cardFooter}>
                  {isPlaceholder ? (
                    <button
                      disabled
                      className={styles.certBtn}
                      style={{ '--btn-color': cert.accentColor, opacity: 0.5, cursor: 'not-allowed' }}
                    >
                      <ExternalLink size={14} />
                      <span>View Certificate</span>
                    </button>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.certBtn}
                      style={{ '--btn-color': cert.accentColor }}
                    >
                      <ExternalLink size={14} />
                      <span>View Certificate</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
