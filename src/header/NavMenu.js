import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href="https://www.google.by" className={styles.link}>Home</a>
            <a href="https://www.google.by" className={styles.link}>Skills</a>
            <a href="https://www.google.by" className={styles.link}>Projects</a>
            <a href="https://www.google.by" className={styles.link}>Contacts</a>
        </div>
    );
}

export default NavMenu;
