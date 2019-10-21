import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    Hello! <br/> My name is Mikita Hrudkouski! <br/> I am a front-end developer
                </div>
                <div className={styles.photo}>
                    <img
                        src='https://www.articls.ru/uploads/images/articls/programmer.png'
                        alt='samurai' width='100%'/>
                </div>
            </div>
        </div>
    );
}

export default Main;
