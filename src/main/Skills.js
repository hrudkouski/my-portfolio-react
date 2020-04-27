import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import logoTs from "../assets/images/tsLogo.svg";
import logoHTML from "../assets/images/htmlLogo.svg";
import logoCSS from "../assets/images/cssLogo.svg";
import logoJS from "../assets/images/jsLogo.svg";
import logoReact from "../assets/images/reactLogo.svg";
import logoRedux from "../assets/images/reduxLogo.svg";

function Skills() {

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.mySkills}>
                    My skills
                </h2>
                <div className={styles.moduleLine}> </div>
                <div className={styles.description}>
                    <Skill tittleItem={'HTML5'}
                           logo={logoHTML}
                           textItem={'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. HTML5 was the fifth and last major version of HTML that is a World Wide Web Consortium (W3C) recommendation.'}/>
                    <Skill tittleItem={'CSS3'}
                           logo={logoCSS}
                           textItem={'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'}/>
                    <Skill tittleItem={'JavaScript'}
                           logo={logoJS}
                           textItem={'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.'}/>
                    <Skill tittleItem={'REACT'}
                           logo={logoReact}
                           textItem={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill tittleItem={'REDUX'}
                           logo={logoRedux}
                           textItem={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill tittleItem={'TypeScript'}
                           logo={logoTs}
                           textItem={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
