import React from 'react'
import styles from './About.module.css'; 
import hero from '../Assests/About_Hero.jpeg';

const About = () => {
  return (
    <div>
        <div className={styles.aboutCtnr}>
            <div className={styles.AbtimgCtnr}>
                <img src={hero} alt="Hero" className={styles.heroImg} />
            </div>
            <div className={styles.AbtcntCtnr}>
                <h1 className={styles.abttitle}>About Me</h1>

                <div className={styles.abtpts}><b>Code Architect </b>– Crafts seamless web experiences with React, Angular, and Node.js.</div>
                <div className={styles.abtpts}><b>Bug Slayer & Problem Solver</b> – Masters DSA, debugging, and Agile teamwork.</div>
                <div className={styles.abtpts}><b>Tech Explorer</b> – Thrives on learning Docker, TypeScript, and Kubernetes.</div>
            </div>
        
        </div>        
    </div>
  )
}

export default About