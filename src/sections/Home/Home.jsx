import React from 'react';
import styles from './Home.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MapPin, GraduationCap, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Home() {
  const [ref, isVisible] = useScrollReveal();
  const { name, tagline, location, education } = portfolioData.hero;
  const { email, phone, github, linkedin } = portfolioData.contact;

  return (
    <section id="home" className={styles.homeSection} ref={ref}>
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>{name}.</h1>
        <h2 className={styles.role}>I build <span className="text-gradient">Intelligent</span> Software.</h2>
        <p className={styles.description}>{tagline}</p>
        
        <div className={styles.metaData}>
          <div className={styles.metaItem}>
            <MapPin size={18} />
            <span>{location}</span>
          </div>
          <div className={styles.metaItem}>
            <GraduationCap size={18} />
            <span style={{ whiteSpace: 'pre-line' }}>{education}</span>
          </div>
        </div>
        
        <div className={styles.actionArea}>
          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryBtn}>View Work</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
          </div>
          
          <div className={styles.socialIcons}>
            <a href={github} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${email}`} className={styles.socialLink} aria-label="Email">
              <Mail size={22} />
            </a>
            <a href={`tel:${phone}`} className={styles.socialLink} aria-label="Phone">
              <Phone size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.graphic} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
    </section>
  );
}
