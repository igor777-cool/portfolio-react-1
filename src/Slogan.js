import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <span className={styles.blockTitle}>I consider options of work</span>
        <button className={styles.btnSubmit} type="submit">Hire me</button>

          </div>
      </div>


  );
}

export default  Slogan;
