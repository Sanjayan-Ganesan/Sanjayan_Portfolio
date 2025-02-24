import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './Navbar.module.css';
//import logo from './logo.png';
import logo from '../Assests/Logo.png';

const Navbar = () => {

    const [showMenu, setshowMenu] = useState(false);

    const handleShowMenu = () => {
        setshowMenu(!showMenu);
    }

  return (
    <div  >
            <nav className={styles.navbar}>
                <div className={styles.title}>
                    <a href='/'><img src={logo} alt="Logo" className={styles.logo} /></a>
                </div>
                <div>
                    <div onClick={handleShowMenu} >
                        <FontAwesomeIcon icon={faBars} className={styles.Bars} />
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.menuItems}>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#experience'>Experience</a>
                            </li>
                            <li>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li>
                                <a href='#contacts'>Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {
                showMenu &&
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileMenuItems}>
                        <ul>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#experience'>Experience</a>
                            </li>
                            <li>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li>
                                <a href='#contacts'>Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            }

        </div>
  )
}

export default Navbar