import React from 'react';
import styles from './Main.module.css';
import Flip from 'react-reveal/Flip';
import ava from '../assets/images/ava.webp';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Flip top>
                    <div className={styles.greeting}>
                        <span>Hello!</span>
                        <span>I'm <span>Mikita Grudkowski!</span></span>
                        <h1>I am a front-end developer</h1>
                    </div>
                </Flip>
                <div className={styles.ava}>
                    <div className={styles.photo}>
                        <img src={ava} alt="ava"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
