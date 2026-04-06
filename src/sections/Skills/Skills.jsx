import React from 'react';
import styles from './Skills.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { 
  Terminal, 
  Code2, 
  Brain, 
  Database, 
  Cloud, 
  Cpu, 
  Heart, 
  BookOpen,
  GitBranch,
  Network,
  Layers
} from 'lucide-react';

const skillsData = {
  technical: [
    {
      category: 'Languages',
      icon: <Terminal size={20} />,
      skills: ['Python', 'C++']
    },
    {
      category: 'Frontend',
      icon: <Code2 size={20} />,
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'AI/ML Frameworks',
      icon: <Brain size={20} />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'HuggingFace Transformers', 'Whisper']
    },
    {
      category: 'AI Specializations',
      icon: <Cpu size={20} />,
      skills: [
        'Large Language Models (LLMs)', 
        'Retrieval-Augmented Generation (RAG)', 
        'Agentic AI Systems', 
        'NLP', 
        'Computer Vision (YOLO, CNNs)', 
        'Sentiment Analysis', 
        'Speech Recognition'
      ]
    },
    {
      category: 'Deep Learning',
      icon: <Layers size={20} />,
      skills: ['Convolutional Neural Networks (CNNs)', 'Transformer Architecture', 'Transfer Learning', 'Model Fine-tuning']
    },
    {
      category: 'Backend & APIs',
      icon: <GitBranch size={20} />,
      skills: ['FastAPI', 'REST APIs', 'Streaming Pipelines']
    },
    {
      category: 'Databases',
      icon: <Database size={20} />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      category: 'Cloud Platforms',
      icon: <Cloud size={20} />,
      skills: ['AWS', 'Google Cloud']
    },
    {
      category: 'MLOps & Tools',
      icon: <GitBranch size={20} />,
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Docker']
    }
  ],
  soft: [
    'Communication & Collaboration',
    'Critical Thinking',
    'Problem Solving',
    'Leadership & Teamwork',
    'Time Management'
  ],
  core: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Computer Networks'
  ]
};

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  const getTagColorClass = (index) => {
    const colorClasses = [
      styles.tagColor0,
      styles.tagColor1,
      styles.tagColor2,
      styles.tagColor3,
      styles.tagColor4,
      styles.tagColor5
    ];
    return colorClasses[index % colorClasses.length];
  };

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
      <div className={`container ${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & <span className={styles.gradient}>Expertise</span></h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.skillsGrid}>
          {/* Technical Skills - Split into two columns */}
          <div className={styles.technicalSkills}>
            <h3 className={styles.sectionTitle}>Technical Skills</h3>
            <div className={styles.technicalColumns}>
              <div className={styles.technicalColumn}>
                {skillsData.technical.slice(0, 4).map((skill, idx) => (
                  <div key={idx} className={styles.skillCategory}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.iconWrapper}>
                        {skill.icon}
                      </div>
                      <span className={styles.categoryName}>{skill.category}</span>
                    </div>
                    <div className={styles.skillTags}>
                      {skill.skills.map((tech, i) => (
                        <span key={i} className={styles.skillTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.technicalColumn}>
                {skillsData.technical.slice(5, 9).map((skill, idx) => (
                  <div key={idx + 5} className={styles.skillCategory}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.iconWrapper}>
                        {skill.icon}
                      </div>
                      <span className={styles.categoryName}>{skill.category}</span>
                    </div>
                    <div className={styles.skillTags}>
                      {skill.skills.map((tech, i) => (
                        <span key={i} className={styles.skillTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {/* Deep Learning at the bottom */}
                <div key={4} className={styles.skillCategory}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.iconWrapper}>
                      {skillsData.technical[4].icon}
                    </div>
                    <span className={styles.categoryName}>{skillsData.technical[4].category}</span>
                  </div>
                  <div className={styles.skillTags}>
                    {skillsData.technical[4].skills.map((tech, i) => (
                      <span key={i} className={styles.skillTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Soft Skills & Core */}
          <div className={styles.otherSkills}>
            <h3 className={styles.sectionTitle}>Soft & Core Skills</h3>
            <div className={styles.skillsCards}>
              <div className={styles.skillCard}>
                <div className={styles.cardHeader}>
                  <Heart size={20} className={styles.cardIcon} />
                  <h3 className={styles.cardTitle}>Soft Skills</h3>
                </div>
                <ul className={styles.skillList}>
                  {skillsData.soft.map((skill, idx) => (
                    <li key={idx} className={styles.skillItem}>
                      <span className={styles.bullet}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.skillCard}>
                <div className={styles.cardHeader}>
                  <BookOpen size={20} className={styles.cardIcon} />
                  <h3 className={styles.cardTitle}>Core Computer Science</h3>
                </div>
                <ul className={styles.skillList}>
                  {skillsData.core.map((skill, idx) => (
                    <li key={idx} className={styles.skillItem}>
                      <span className={styles.bullet}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
