import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hello!</span>
                    <span>I'm <span>Mikita Hrudkouski!</span></span>
                    <h1>I am a front-end developer</h1>
                </div>
                <div className={styles.ava}>
                    <div className={styles.photo}> </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
