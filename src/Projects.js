import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.project}>
    <div className={styles.conteiner}>
      <span className={styles.blockTitle}>My projects</span>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsBlock}>
        <div className={styles.icon}>
          <img src="" alt=""/>
        </div>
          <span className={styles.description}>name project</span>
          <span className={styles.description}>description</span>
      </div>
      <div className={styles.projectsBlock}>
        <div className={styles.icon}>
          <img src="" alt=""/>
          <button className={styles.btnSubmit} type="submit">WATCH</button>
        </div>
        <span className={styles.description}>name project</span>
        <span className={styles.description}>description</span>
      </div>

        </div>
        </div>
      </div>

  );
}

export default Projects;
