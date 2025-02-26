import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
    return (
        <div>
            <div className={styles.cntheading}>
                <p>Contact Me</p>
            </div>
            <div className={styles.contactWrapper}>

                <form id="contact-form" className={styles.formhorizontal} role="form">

                    <div className={styles.formgroup}>
                        <input type="text" className={styles.formcontrol} id="name" placeholder="NAME" name="name" value="" required />
                    </div>

                    <div className={styles.formgroup}>
                        <div>
                            <input type="email" className={styles.formcontrol} id="email" placeholder="EMAIL" name="email" value="" required />
                        </div>
                    </div>

                    <textarea className={styles.formgroup} rows="10" placeholder="MESSAGE" name="message" required></textarea>


                    <button className={styles.btn} id="submit" type="submit" value="SEND">
                        <div class="alt-send-button">
                            <p>Send</p>
                        </div>
                    </button>
                </form>

                <div className={styles.contactList}>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faLocationDot} size='lg' className={styles.SocialIcon} />
                        <p>Bangalore,India</p>
                    </div>

                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faPhone} size='lg' className={styles.SocialIcon} />
                        <p>+918248086622</p>
                    </div>

                    <div className={styles.contactItem}>
                        <a href="mailto:sanjayan1308@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size='lg' className={styles.SocialIcon} />
                        </a>
                        <p>sanjayan1308@gmail.com</p>
                    </div>

                    <div className={styles.socialMedia}>
                        <div className={styles.contactItem}>
                            <a href='https://www.linkedin.com/in/sanjayan-ganesan/' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} size='lg' className={styles.SocialIcon} />
                            </a>
                            <p>@ sanjayan-ganesan</p>
                        </div>

                        <div className={styles.contactItem}>
                            <a href='https://github.com/Sanjayan-Ganesan' target='_blank'><FontAwesomeIcon icon={faSquareGithub} size='lg' className={styles.SocialIcon} /></a>
                            <p>@ Sanjayan-Ganesan</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Contact