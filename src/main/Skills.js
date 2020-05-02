import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import logoTs from "../assets/images/tsLogo.svg";
import logoHTML from "../assets/images/htmlLogo.svg";
import logoCSS from "../assets/images/cssLogo.svg";
import logoJS from "../assets/images/jsLogo.svg";
import logoReact from "../assets/images/reactLogo.svg";
import logoRedux from "../assets/images/reduxLogo.svg";
import ModuleLine from "./ModuleLine";

function Skills() {

    return (
        <div id='Skills' className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.mySkills}>
                    My skills
                </h2>
                <ModuleLine/>
                <div className={styles.description}>
                    <Skill tittleItem={'HTML5'}
                           logo={logoHTML}
                           textItem={'IDE (WebStorm, VSCode), Adaptive layout, Semantic HTML, Browsers, DevTools, Responsive layout, SVG, Media (Audio, Video, Maps), Fonts, Forms, etc...'}/>
                    <Skill tittleItem={'CSS3'}
                           logo={logoCSS}
                           textItem={'Selectors, Animation, FlexBox and Grid, Css preprocessors (Sass, Less), Bootstrap, CanIUse, Table layout, WebPack, Media queries, Gulp, Mobile layout, etc...'}/>
                    <Skill tittleItem={'JavaScript'}
                           logo={logoJS}
                           textItem={'Conditions, Loops and iteration, Grammar and types, Functions, Using promises, Arrays, Expressions and operators, Objects, Regular expressions, etc...'}/>
                    <Skill tittleItem={'REACT'}
                           logo={logoReact}
                           textItem={'SPA, Props, Route, UI, BLL, State, VirtualDOM, FLUX, REST API, Pure function, Hooks, UseEffect, High Order Component (hoc), Life cycle methods, ComponentDidMount, etc...'}/>
                    <Skill tittleItem={'REDUX'}
                           logo={logoRedux}
                           textItem={'Context API, Connect, Reducer, Action creator, Dispatch, Redux-ducks, MapStateToProps, Redux-form, Redux-thunk,  DAL, Axios.create, mapDispatchToProps, etc...'}/>
                    <Skill tittleItem={'TypeScript'}
                           logo={logoTs}
                           textItem={'Basic Types, Classes, Advanced Types, Declaration Merging, Decorators, Enums, Functions, Interfaces, JSX, Mixins,Modules, Namespaces, Symbols, etc...'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
