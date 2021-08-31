import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import fridayTeam from "../assets/images/fridayTeam.webp";
import logoCounter from "../assets/images/counter.webp";
import logoToDoList from "../assets/images/toDoList.webp";
import socialNetwork from "../assets/images/socialNetwork.webp";
import ModuleLine from "./ModuleLine";

function Projects() {

  return (
    <div id='Projects' className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.allProjects}>
          My projects
        </div>
        <ModuleLine/>
        <div className={styles.myProjects}>
          <Project tittleItem={'Friday teamwork project'}
                   linkItem={'https://github.com/hrudkouski/friday_teamwork_project'}
                   gitPages={'https://hrudkouski.github.io/friday_teamwork_project'}
                   logo={fridayTeam}
                   textItem={'The essence of the APP is the ability to create educational cards for studying various topics. For the ready-made back, by our team, the front was implemented, namely: registration, login, and password recovery, the learning mechanism was also written'}/>

          <Project tittleItem={'To-Do List'}
                   linkItem={'https://github.com/hrudkouski/todolist-ts'}
                   gitPages={'https://hrudkouski.github.io/todolist-ts/#/'}
                   logo={logoToDoList}
                   textItem={'Creating the basic App component structure and styling' +
                   ' in place, ready for individual component definition and interactivity. As a user, You can: read a list of tasks, add a task, mark any task as completed, delete any task, edit any task, view a specific subset of tasks: All tasks, only the active task, or only the completed tasks'}/>

          <Project tittleItem={'Counter'}
                   linkItem={'https://github.com/hrudkouski/counter-ts'}
                   gitPages={'https://hrudkouski.github.io/counter-ts'}
                   logo={logoCounter}
                   textItem={'Counter App with Redux and React'}/>

          <Project tittleItem={'React Social Network'}
                   linkItem={'https://github.com/hrudkouski/social-network-ts'}
                   gitPages={'https://hrudkouski.github.io/social-network-ts'}
                   logo={socialNetwork}
                   textItem={'Social media is a collective term for websites and applications which focus on communication, community-based input, interaction, content-sharing'}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;