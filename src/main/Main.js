import React from 'react';
import styles from './Main.module.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import ava from '../assets/images/ava.webp';

function Main() {
    return (
        <div id='Home'  className={styles.main}>
            <div className={styles.container}>
                <Flip top>
                    <div className={styles.greeting}>
                        <span>Hello!</span>
                        <span>I'm <span>Mikita Grudkowski!</span></span>
                        <h1>I am a front-end developer</h1>
                    </div>
                </Flip>
                <Fade right>
                    <div className={styles.ava}>
                        <div className={styles.photo}>
                            <img src={ava} alt="ava"/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;
