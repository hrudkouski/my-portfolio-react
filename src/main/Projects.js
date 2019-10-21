import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.allProjects}>
                    My projects
                </div>
                <div className={styles.myProjects}>
                    <div className={styles.item}>
                        <div className={styles.logoItem}>
                            <img
                                src="https://www.topsinfosolutions.com/wp-content/uploads/2019/04/Social-Networking-App-in-React.png"
                                alt="javaScript"/>
                        </div>
                        <div className={styles.tittleItem}>Social Network</div>
                        <div className={styles.textItem}>
                            A social network is a social structure made up of a set of social actors (such as
                            individuals or organizations), sets of dyadic ties, and other social interactions between
                            actors...
                        </div>
                        <div className={styles.linkItem}>
                            <a href='https://hrudkouski.github.io/social-network-react/'>
                                You can see project on GitHub Pages
                            </a>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logoItem}>
                            <img
                                src="https://images.examples.com/wp-content/uploads/2017/11/Square-Portfolio-Brochure-Example.jpg"
                                alt="javaScript"/>
                        </div>
                        <div className={styles.tittleItem}>React.Js Portfolio</div>
                        <div className={styles.textItem}>
                            Career portfolios are used to plan, organize and document education, work samples and
                            skills. People use career portfolios to apply for jobs, apply to college or training
                            programs. They are more in-depth than a resume, which is used to summarize the above in one
                            or two pages...
                        </div>
                        <div className={styles.linkItem}>
                            <a href='https://hrudkouski.github.io/my-portfolio-react/'>
                                You can see project on GitHub Pages
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;