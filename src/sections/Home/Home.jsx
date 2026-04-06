import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { portfolioData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import NeuralNetwork from '../../components/NeuralNetwork/NeuralNetwork';
import { MapPin, GraduationCap, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Home() {
  const [ref, isVisible] = useScrollReveal();
  const [particles, setParticles] = useState([]);
  const { name, role: originalRole, tagline, location, education } = portfolioData.hero;
  const { email, phone, github, linkedin } = portfolioData.contact;

  // Generate particles for background
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 10,
        animationDuration: 8 + Math.random() * 4
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <section id="home" className={styles.homeSection} ref={ref}>
      {/* Particle Background */}
      <div className={styles.particleBg}>
        {particles.map(particle => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div className={styles.gridBg} />

      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>{name}.</h1>
        <h2 className={styles.role}>
          I build <span className="text-gradient">Intelligent</span> Software
          <span className="terminal-cursor" />
        </h2>
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
            <a href="#projects" className={`${styles.primaryBtn} neon-border`}>View Work</a>
            <a href="#contact" className={`${styles.secondaryBtn} neon-border`}>Contact Me</a>
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

      {/* Neural Network Graphic */}
      <div className={`${styles.graphic} ${isVisible ? styles.visible : ''}`}>
        <NeuralNetwork />
      </div>
      
      {/* Background Glowing Orb */}
      <div className={styles.glowingOrb} />
    </section>
  );
}
