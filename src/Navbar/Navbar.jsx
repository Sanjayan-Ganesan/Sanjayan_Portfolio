import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './Navbar.module.css';
//import logo from './logo.png';
import logo from '../Assests/Logo.png';

import { Link } from "react-scroll";

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
                                <Link activeClass="active" smooth spy to="about">About</Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="experience">Experience</Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="projects">Projects</Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="contacts">Contacts</Link>
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
                                <Link activeClass="active" smooth spy to="about">About</Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="experience">Experience</Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="projects">Projects</Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar