import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import styles from './UpdateResume.module.css';

export default function UpdateResume() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
  
  // The password from our .env file
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Incorrect password.');
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a PDF file first.');
      return;
    }

    if (file.type !== 'application/pdf') {
      setMessage('Only PDF files are allowed.');
      return;
    }

    setIsUploading(true);
    setMessage('');

    try {
      // 1. Upload to the "portfolio-assets" bucket. We overwrite if it exists.
      // Make sure you have created a public bucket called 'portfolio-assets' in your Supabase project!
      const { error } = await supabase.storage
        .from('portfolio-assets')
        .upload('resume.pdf', file, {
          cacheControl: '3600',
          upsert: true 
        });

      if (error) {
        throw error;
      }
      
      setMessage('Resume uploaded successfully!');
      setFile(null);
      // Reset input
      document.getElementById('file-upload').value = null;

    } catch (error) {
      setMessage(`Upload failed: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.adminCard}>
          <h2>Admin Access Required</h2>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input 
              type="password" 
              placeholder="Enter Admin PIN" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
            <button type="submit" className={styles.btn}>Login</button>
          </form>
          {message && <p className={styles.errorText}>{message}</p>}
          <a href="/" className={styles.backLink}>← Back to Portfolio</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminCard}>
        <h2>Update Resume</h2>
        <p className={styles.description}>
          Upload your latest resume (PDF format). This will instantly update the download button on the live site.
        </p>
        
        <form onSubmit={handleUpload} className={styles.uploadForm}>
          <div className={styles.fileDropArea}>
            <input 
              id="file-upload"
              type="file" 
              accept="application/pdf" 
              onChange={handleFileChange}
              className={styles.fileInput}
            />
            {!file ? (
              <p>Drag & drop or click to select resume.pdf</p>
            ) : (
              <p className={styles.selectedFile}>Selected: {file.name}</p>
            )}
          </div>
          
          <button 
            type="submit" 
            className={styles.btn} 
            disabled={isUploading || !file}
          >
            {isUploading ? 'Uploading to Supabase...' : 'Upload & Publish Resume'}
          </button>
        </form>
        
        {message && (
          <p className={message.includes('success') ? styles.successText : styles.errorText}>
            {message}
          </p>
        )}
        
        <a href="/" className={styles.backLink}>← Back to Portfolio</a>
      </div>
    </div>
  );
}
