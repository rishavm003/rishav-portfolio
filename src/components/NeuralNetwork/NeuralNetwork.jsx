import React from 'react';
import styles from './NeuralNetwork.module.css';
import { portfolioData } from '../../data/portfolioData';

export default function NeuralNetwork() {
  const { name } = portfolioData.hero;

  // Generate 8 nodes in a circle
  const nodeCount = 8;
  const radius = 100;
  const centerX = 150;
  const centerY = 150;
  
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const angle = (i * 360) / nodeCount - 90; // Start from top
    const radian = (angle * Math.PI) / 180;
    return {
      id: i,
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian),
      isPink: i % 2 === 1, // Alternate purple/pink
    };
  });

  return (
    <div className={styles.networkContainer}>
      <svg className={styles.svgNetwork} viewBox="0 0 300 300">
        <defs>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d4bff" />
            <stop offset="100%" stopColor="#9b7bff" />
          </linearGradient>
          <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#ff6b8a" />
          </linearGradient>
          <filter id="purpleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pinkGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer faint circle */}
        <circle cx="150" cy="150" r="130" fill="rgba(109, 75, 255, 0.05)" />
        
        {/* Connection lines */}
        <g className={styles.connections}>
          {/* Connect outer nodes to each other (octagon shape) */}
          {nodes.map((node, i) => {
            const nextNode = nodes[(i + 1) % nodeCount];
            return (
              <line
                key={`outer-${i}`}
                x1={node.x}
                y1={node.y}
                x2={nextNode.x}
                y2={nextNode.y}
                className={styles.connectionLine}
              />
            );
          })}
          
          {/* Connect each node to center */}
          {nodes.map((node, i) => (
            <line
              key={`center-${i}`}
              x1={node.x}
              y1={node.y}
              x2={centerX}
              y2={centerY}
              className={styles.connectionLine}
            />
          ))}
          
          {/* Cross connections for neural network effect */}
          {[0, 2, 4, 6].map((i) => {
            const oppositeIndex = (i + 4) % nodeCount;
            return (
              <line
                key={`cross-${i}`}
                x1={nodes[i].x}
                y1={nodes[i].y}
                x2={nodes[oppositeIndex].x}
                y2={nodes[oppositeIndex].y}
                className={styles.connectionLine}
              />
            );
          })}
        </g>

        {/* Outer nodes */}
        <g className={styles.outerNodes}>
          {nodes.map((node, i) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.isPink ? 10 : 8}
              fill={node.isPink ? "url(#pinkGrad)" : "url(#purpleGrad)"}
              filter={node.isPink ? "url(#pinkGlow)" : "url(#purpleGlow)"}
              className={node.isPink ? styles.pinkNode : styles.purpleNode}
            />
          ))}
        </g>

        {/* Center circle */}
        <circle cx="150" cy="150" r="55" fill="url(#purpleGrad)" filter="url(#purpleGlow)" />
        <circle cx="150" cy="150" r="45" fill="#6d4bff" />
        
        {/* Center text */}
        <text x="150" y="142" textAnchor="middle" className={styles.centerName}>{name}</text>
        <text x="150" y="162" textAnchor="middle" className={styles.centerRole}>AI Engineer</text>
      </svg>
    </div>
  );
}
