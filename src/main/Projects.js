import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.allProjects}>
                    My projects
                </div>
                <div className={styles.moduleLine}> </div>
                <div className={styles.myProjects}>

                    <div className={styles.item}>
                        <div className={styles.logoItem + ' ' + styles.logoPortfolio}> </div>
                        <div className={styles.tittleItem}>React.Js Portfolio</div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat...
                        </div>
                        <div className={styles.linkItem}>
                            <a target="blank" href='https://hrudkouski.github.io/my-portfolio-react/'>
                                You can see project on GitHub Pages
                            </a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.logoItem + ' ' + styles.logoCounter}> </div>
                        <div className={styles.tittleItem}>Counter</div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat...
                        </div>
                        <div className={styles.linkItem}>
                            <a target="blank" href='https://hrudkouski.github.io/counter-react/'>
                                You can see project on GitHub Pages
                            </a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.logoItem + ' ' + styles.logoDogGame}> </div>
                        <div className={styles.tittleItem}>Dog Game</div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat...
                        </div>
                        <div className={styles.linkItem}>
                            <a target="blank" href='https://github.com/hrudkouski/dog-app-react/'>
                                You can see project on GitHub Pages
                            </a>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.logoItem + ' ' + styles.logoToDoList}> </div>
                        <div className={styles.tittleItem}>To Do List</div>
                        <div className={styles.textItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat...
                        </div>
                        <div className={styles.linkItem}>
                            <a target="blank" href='https://github.com/hrudkouski/toDoList'>
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