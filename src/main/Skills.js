import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.mySkills}>
                    My skills
                </h2>
                <div className={styles.moduleLine}> </div>
                <div className={styles.description}>
                    <div className={styles.item}>
                        <div className={styles.logo + ' ' + styles.logoHTML}> </div>
                        <div className={styles.tittleItem}>
                            HTML5
                        </div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim...
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logo + ' ' + styles.logoCSS}> </div>
                        <div className={styles.tittleItem}>CSS3</div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim...
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logo + ' ' + styles.logoJS}></div>
                        <div className={styles.tittleItem}>JavaScript</div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim...
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logo + ' ' + styles.logoReact}></div>
                        <div className={styles.tittleItem}>
                            REACT
                        </div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim...
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logo + ' ' + styles.logoRedux}></div>
                        <div className={styles.tittleItem}>
                            REDUX
                        </div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim...
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logo + ' ' + styles.logoTs}></div>
                        <div className={styles.tittleItem}>TypeScript</div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
