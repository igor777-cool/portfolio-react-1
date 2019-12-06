import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Hi!</span>
          <span>My name is Igor Baranov</span>
          <span>I'm  Front-End Developer</span>


        </div>
        <div className={styles.photo}>
         <img src="/img/1500911.jpg" alt=""/>
        </div>


      </div>

    </div>
  );
}

export default  Main;
