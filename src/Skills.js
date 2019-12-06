import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills}>
<div className={styles.container}>
  <span className={styles.blockTitle}>My Skills</span>
  <div className={styles.skillsWrapper}>
    <div className={styles.skill}>
    <div className={styles.icon}>
      <img src="" alt=""/>
    </div>
    <span className={styles.skillTitle}>HTML&CSS</span>
    <span className={styles.description}>My texxxxxxxxxxt</span>
  </div>
    <div className={styles.skill}>
      <div className={styles.icon}>
        <img src="" alt=""/>
      </div>
      <span className={styles.skillTitle}>JS</span>
      <span className={styles.description}>My texxxxxxxxxxt</span>
    </div>
    <div className={styles.skill}>
      <div className={styles.icon}>
        <img src="" alt=""/>
      </div>
      <span className={styles.skillTitle}>React</span>
      <span className={styles.description}>My texxxxxxxxxxt</span>
    </div>

    </div>
    </div>

</div>




  );
}

export default  Skills;
