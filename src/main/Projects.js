import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import logoPortfolio from "../assets/images/portfolio.webp";
import logoCounter from "../assets/images/counter.webp";
import logoToDoList from "../assets/images/toDoList.webp";
import logoDogGame from "../assets/images/dogGame.png";

function Projects() {

    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.allProjects}>
                    My projects
                </div>
                <div className={styles.moduleLine}> </div>
                <div className={styles.myProjects}>
                    <Project tittleItem={'React.Js Portfolio'}
                             linkItem={'https://hrudkouski.github.io/my-portfolio-react/'}
                             logo={logoPortfolio}
                             textItem={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'}/>
                    <Project tittleItem={'Counter'}
                             logo={logoCounter}
                             linkItem={'https://hrudkouski.github.io/counter-react/'}
                             textItem={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'}/>
                    <Project tittleItem={'Dog Game'}
                             logo={logoDogGame}
                             linkItem={'https://github.com/hrudkouski/dog-app-react/'}
                             textItem={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'}/>
                    <Project tittleItem={'To Do List'}
                             logo={logoToDoList}
                             linkItem={'https://github.com/hrudkouski/toDoList'}
                             textItem={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;