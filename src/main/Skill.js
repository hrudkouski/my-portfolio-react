import React from 'react';
import styles from './Skill.module.css';
import Zoom from 'react-reveal/Zoom';

function Skill(props) {
    return (
        <Zoom clear>
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
        </Zoom >
    );
}

export default Skill;
