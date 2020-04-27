import React from 'react';
import styles from './Project.module.css';
import Slide from 'react-reveal/Slide';

function Project(props) {
    return (
        <Slide left>
            <div className={styles.item}>
                <div className={styles.logoItem}>
                    <img src={props.logo} alt="logo"/>
                </div>
                <div className={styles.tittleItem}>{props.tittleItem}</div>
                <div className={styles.textItem}>{props.textItem} </div>
                <div className={styles.linkItem}>
                    <a target="blank" href={props.linkItem}>
                        You can see project on GitHub Pages
                    </a>
                </div>
            </div>
        </Slide>
    );
}

export default Project;