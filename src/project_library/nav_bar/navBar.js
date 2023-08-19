import React from 'react';
import styles from './navBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarTitleContainer}>
        <h1 className={styles.navbarTitle}>Petar's Project Hub</h1>
      </div>
      <a href="mailto:petar@radojicic.co" className={styles.contactButton}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
        <span>Contact Me</span>
      </a>
    </nav>
  );
};

export default Navbar;
