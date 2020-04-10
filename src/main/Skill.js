import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
    return (
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
    );
}

export default Skill;
