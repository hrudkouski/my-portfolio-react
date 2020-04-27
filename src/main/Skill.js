import React from 'react';
import styles from './Skill.module.css';
import Slide from 'react-reveal/Slide';

function Skill(props) {
    return (
        <Slide right>
            <div className={styles.skill}>
                <div className={styles.logo}>
                    <img src={props.logo} alt="logo"/>
                </div>
                <div className={styles.tittleItem}>
                    {props.tittleItem}
                </div>
                <div className={styles.textItem}>
                    {props.textItem}
                </div>
            </div>
        </Slide >
    );
}

export default Skill;
