import React from 'react';
import styles from './Footer.module.css';
import gitHubIcon from '../assets/images/github.svg';
import codeWarsIcon from '../assets/images/codewars.png';
import instagramIcon from '../assets/images/instagram.svg';
import linkedInIcon from '../assets/images/linkedin.png';
import telegramIcon from '../assets/images/telegram.svg';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerText}>
                    Mikita Grudkowski
                </div>
                <div className={styles.footerSocial}>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://github.com/hrudkouski">
                            <img src={gitHubIcon}
                                 alt={'gitHubIcon'}
                                 title={'gitHubIcon'}
                                 className={styles.socialItemIcon}/>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://www.codewars.com/users/grudkowski">
                            <img src={codeWarsIcon}
                                 alt={'codeWarsIcon'}
                                 title={'codeWarsIcon'}
                                 className={styles.socialItemIcon}/>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://www.linkedin.com/in/mikitagrudkowski/">
                            <img src={instagramIcon}
                                 alt={'instagramIcon'}
                                 title={'instagramIcon'}
                                 className={styles.socialItemIcon}/>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://www.instagram.com/hrudkouski/">
                            <img src={linkedInIcon}
                                 alt={'linkedInIcon'}
                                 title={'linkedInIcon'}
                                 className={styles.socialItemIcon}/>
                        </a>
                    </div>
                    <div className={styles.socialItem}>
                        <a target="blank" href="https://t.me/Grudkowski">
                            <img src={telegramIcon}
                                 alt={'telegramIcon'}
                                 title={'telegramIcon'}
                                 className={styles.socialItemIcon}/>
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