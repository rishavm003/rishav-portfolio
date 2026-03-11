import React from 'react';
import styles from './NeuralNetwork.module.css';
import { portfolioData } from '../../data/portfolioData';

export default function NeuralNetwork() {
  const { name } = portfolioData.hero;

  return (
    <div className={styles.networkContainer}>
      <svg className={styles.svgNetwork} viewBox="0 0 300 300">
        <defs>
          <linearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections (Lines) */}
        <g className={styles.connections}>
          {/* Layer 1 to center */}
          <line x1="40" y1="50" x2="150" y2="150" />
          <line x1="30" y1="150" x2="150" y2="150" />
          <line x1="40" y1="250" x2="150" y2="150" />
          
          {/* Layer 2 to center */}
          <line x1="260" y1="50" x2="150" y2="150" />
          <line x1="270" y1="150" x2="150" y2="150" />
          <line x1="260" y1="250" x2="150" y2="150" />

          {/* Interconnections */}
          <line x1="40" y1="50" x2="100" y2="90" />
          <line x1="30" y1="150" x2="100" y2="90" />
          <line x1="30" y1="150" x2="100" y2="210" />
          <line x1="40" y1="250" x2="100" y2="210" />

          <line x1="260" y1="50" x2="200" y2="90" />
          <line x1="270" y1="150" x2="200" y2="90" />
          <line x1="270" y1="150" x2="200" y2="210" />
          <line x1="260" y1="250" x2="200" y2="210" />

          <line x1="100" y1="90" x2="150" y2="150" />
          <line x1="100" y1="210" x2="150" y2="150" />
          <line x1="200" y1="90" x2="150" y2="150" />
          <line x1="200" y1="210" x2="150" y2="150" />
        </g>
        
        {/* Animated Signals */}
        <g className={styles.signals}>
           <path d="M 30 150 L 150 150" className={styles.signalPath} />
           <path d="M 40 50 L 150 150" className={styles.signalPathDelay1} />
           <path d="M 260 250 L 150 150" className={styles.signalPathDelay2} />
           <path d="M 270 150 L 150 150" className={styles.signalPathDelay3} />
        </g>

        {/* Nodes (Circles) */}
        <g className={styles.nodes} filter="url(#glow)">
          {/* Input Layer */}
          <circle cx="40" cy="50" r="6" />
          <circle cx="30" cy="150" r="8" />
          <circle cx="40" cy="250" r="6" />

          {/* Hidden Layer 1 */}
          <circle cx="100" cy="90" r="7" className={styles.pulseNode} />
          <circle cx="100" cy="210" r="7" className={styles.pulseNodeDelay} />

          {/* Hidden Layer 2 */}
          <circle cx="200" cy="90" r="7" className={styles.pulseNodeDelay2} />
          <circle cx="200" cy="210" r="7" className={styles.pulseNode} />

          {/* Output Layer */}
          <circle cx="260" cy="50" r="6" />
          <circle cx="270" cy="150" r="8" />
          <circle cx="260" cy="250" r="6" />

          {/* Center Brain Node */}
          <circle cx="150" cy="150" r="45" className={styles.centerNode} />
        </g>

        {/* Center Text */}
        <text x="150" y="145" textAnchor="middle" className={styles.centerName}>{name}</text>
        <text x="150" y="165" textAnchor="middle" className={styles.centerRole}>AI Engineer</text>
      </svg>
    </div>
  );
}
