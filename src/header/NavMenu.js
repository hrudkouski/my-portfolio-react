import React from 'react';
import styles from './NavMenu.module.css';
import {Link} from "react-scroll";

function NavMenu() {

    // import {Link, animateScroll as scroll} from "react-scroll";

    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    return (
        <div className={styles.navMenu}>
            <Link activeClass={styles.active}
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.link}>Home</Link>
            <Link activeClass={styles.active}
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.link}>Skills</Link>
            <Link activeClass={styles.active}
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.link}>Projects</Link>
            <Link activeClass={styles.active}
                  to="Contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.link}>Contacts</Link>
        </div>
    );
}

export default NavMenu;
