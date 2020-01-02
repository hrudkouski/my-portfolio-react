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
                        <a target="blank" href="https://github.com/hrudkouski">
                            <div className={styles.socialItemIcon + ' ' + styles.gitHubIcon}> </div>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://www.codewars.com/users/hrudkouski">
                            <div className={styles.socialItemIcon + ' ' + styles.codeWarsIcon}> </div>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://www.linkedin.com/in/mikita-hrudkouski-87257319a/">
                            <div className={styles.socialItemIcon + ' ' + styles.linkedInIcon}> </div>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://www.instagram.com/hrudkouski/">
                            <div className={styles.socialItemIcon + ' ' + styles.instagramIcon}> </div>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://t.me/Grudkowski">
                            <div className={styles.socialItemIcon + ' ' + styles.telegramIcon}> </div>
                        </a>
                    </div>
                </div>
                <div className={styles.footerCopyright}>
                    &copy;2020 All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
//