import React from 'react';
import styles from './Hero.module.css';
import hero from '../Assests/Software_Eng.jpeg';
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div>
            <div className={styles.heroCtnr}>
                <div className={styles.hero}>
                    <div className={styles.heroText}>
                        <h1>Hi, I'm Sanjayan</h1>
                        <p>
                            A Full Stack Developer with 2.5 years of experience building dynamic web applications. Skilled in React, Angular, and backend technologies, I craft seamless user experiences. Let’s build something amazing together!
                        </p>
                        <div className={styles.btnCtnr}>
                        <button className={styles.contactBtn}>Contact Me</button>
                        </div>
                        
                    </div>
                    <div className={styles.heroImgCtnr}>
                        <img src={hero} alt="Hero" className={styles.heroImg} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero