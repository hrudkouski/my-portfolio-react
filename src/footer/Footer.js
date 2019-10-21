import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerText}>
                    Mikita Hrudkouski
                </div>
                <div className={styles.footerSocial}>
                    <div className={styles.socialItem}>
                        <a href="https://vk.com">vk</a>
                    </div>
                    <div className={styles.socialItem}>
                        <a href="https://www.instagram.com">in</a>
                    </div>
                    <div className={styles.socialItem}>
                        <a href="https://github.com">gi</a>
                    </div>
                    <div className={styles.socialItem}>
                        <a href="https://www.linkedin.com">li</a>
                    </div>
                    <div className={styles.socialItem}>
                        <a href="https://twitter.com">tw</a>
                    </div>
                    <div className={styles.socialItem}>
                        <a href="https://www.youtube.com">yo</a>
                    </div>
                    <div className={styles.socialItem}>
                        <a href="https://www.facebook.com">fa</a>
                    </div>
                </div>
                <div className={styles.footerCopyright}>
                    &copy;2019 All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
//