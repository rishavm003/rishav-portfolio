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
        <div className="reveal">
          <h2 className={styles.preTitle}>What's Next?</h2>
          <h2 className={styles.title}>Get In <span className="text-gradient">Touch</span></h2>
        </div>
        
        <div className={`${styles.contactCard} glass-panel reveal`}>
          <div className={styles.statusBadge}>
            <MapPin size={18} className={styles.pinIcon} />
            <span className={styles.statusText}>India</span>
            <span className={styles.divider}>•</span>
            <span className={styles.statusDot}></span>
            <span className={styles.statusText}>Open to AI/ML Roles</span>
          </div>

          <p className={styles.description}>
            I'm currently seeking opportunities to apply my skills in AI/ML engineering, LLMs, and RAG. 
            Whether you have a project idea, a job opening, or just want to geek out about AI — 
            my inbox is always open.
          </p>

          <div className={styles.emailContainer}>
            <a href={`mailto:${email}`} className={styles.emailLink}>
              <Mail size={24} />
              <span>{email}</span>
            </a>
            <p className={styles.responseTime}>⚡ Usually responds within 24 hours</p>
          </div>
          
          <div className={styles.actionButtons}>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className={styles.resumeBtn}>
              Download Full Resume
            </a>
          </div>

          <div className={styles.socialGrid}>
            <a href={github} target="_blank" rel="noreferrer" className={styles.socialItem} aria-label="GitHub">
              <Github size={28} />
              <span>GitHub</span>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className={styles.socialItem} aria-label="LinkedIn">
              <Linkedin size={28} />
              <span>LinkedIn</span>
            </a>
            <a href={`tel:${phone}`} className={styles.socialItem} aria-label="Phone">
              <Phone size={28} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
