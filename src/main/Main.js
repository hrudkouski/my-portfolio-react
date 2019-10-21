import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hello!</span>
                    <span>My name is Mikita Hrudkouski! </span>
                    <span>I am a front-end developer</span>
                </div>
                <div className={styles.photo}>
                    <img
                        src='https://www.articls.ru/uploads/images/articls/programmer.png'
                        alt='samurai'/>
                </div>
            </div>
        </div>
    );
}

export default Main;
