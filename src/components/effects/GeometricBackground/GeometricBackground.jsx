import React from 'react';
import styles from './GeometricBackground.module.css';

const GeometricBackground = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.diamond} ${styles.d1}`}></div>
      <div className={`${styles.diamond} ${styles.d2}`}></div>
      <div className={`${styles.diamond} ${styles.d3}`}></div>
      <div className={`${styles.diamond} ${styles.d4}`}></div>
      <div className={`${styles.diamond} ${styles.d5}`}></div>
      <div className={`${styles.diamond} ${styles.d6}`}></div>
      <div className={`${styles.diamond} ${styles.d7}`}></div>
    </div>
  );
};

export default GeometricBackground;
