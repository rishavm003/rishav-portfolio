import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const { email, phone, github, linkedin } = portfolioData.contact;
  const [resumeUrl, setResumeUrl] = useState('https://ixnzwrhuekyyrqkrvlft.supabase.co/storage/v1/object/public/portfolio-assets/Resume/Resume%20latest.pdf');

  return (
    <section id="contact" className={styles.contactSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.preTitle}>What's Next?</h2>
        <h2 className={styles.title}>Get In Touch</h2>
        
        <div className={styles.statusBadge}>
          <MapPin size={16} className={styles.pinIcon} /> India · <span className={styles.statusDot}></span> Open to full-time & internship roles
        </div>

        <p className={styles.description}>
          I'm actively looking for my first role in AI/ML engineering. Got a project idea, an opportunity, or just want to talk about AI? My inbox is always open — I reply fast.
        </p>

        <div className={styles.emailContainer}>
          <a href={`mailto:${email}`} className={styles.emailText}>{email}</a>
          <p className={styles.responseTime}>⚡ Usually responds within 24 hours</p>
        </div>
        
        <div className={styles.actionButtons}>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className={styles.secondaryButton}>
            Download Resume
          </a>
        </div>

        <div className={styles.socials}>
          <a href={github} target="_blank" rel="noreferrer" className={styles.socialWrapper} aria-label="GitHub">
            <div className={styles.socialIcon}><Github size={24} /></div>
            <span className={styles.socialLabel}>GitHub</span>
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className={styles.socialWrapper} aria-label="LinkedIn">
            <div className={styles.socialIcon}><Linkedin size={24} /></div>
            <span className={styles.socialLabel}>LinkedIn</span>
          </a>
          <a href={`tel:${phone}`} className={styles.socialWrapper} aria-label="Phone">
            <div className={styles.socialIcon}><Phone size={24} /></div>
            <span className={styles.socialLabel}>Phone</span>
          </a>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <p>Built with React & Vite.</p>
      </footer>
    </section>
  );
}
