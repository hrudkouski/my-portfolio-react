import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.mySkills}>
                    My skills
                </div>
                <div className={styles.description}>
                    <div className={styles.item}>
                        <div className={styles.logo}>
                            <img
                                src="https://i1.wp.com/www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png?ssl=1"
                                alt="javaScript"/>
                        </div>
                        <div className={styles.tittleItem}>JavaScript</div>
                        <div className={styles.textItem}>
                            JavaScript often abbreviated as JS, is a high-level, interpreted
                            scripting language that conforms to the ECMAScript specification. JavaScript has
                            curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class
                            functions...
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logo}>
                            <img src="http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg"
                                 alt="html5+css3"/>
                        </div>
                        <div className={styles.tittleItem}>
                            HTML5 + CSS3
                        </div>
                        <div className={styles.textItem}>
                            HTML5 is a software solution stack that defines the properties and behaviors of web page
                            content by implementing a markup based pattern to it.
                            HTML5 is the fifth and current major version of HTML, and subsumes XHTML...
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.logo}>
                            <img src="https://hackernoon.com/hn-images/1*VeM-5lsAtrrJ4jXH96h5kg.png"
                                 alt="reactRedux"/>
                        </div>
                        <div className={styles.tittleItem}>
                            React + Redux
                        </div>
                        <div className={styles.textItem}>
                            React (also known as React.js or ReactJS) is a JavaScript library for building user
                            interfaces. It is maintained by Facebook and a community of individual developers and
                            companies...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
