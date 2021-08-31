import React from 'react';
import styles from './Main.module.css';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import ava from '../assets/images/ava.webp';
import myCV from '../assets/files/Front End Developer CV Resume - Mikita Grudkowski.pdf'

function Main() {
  return (
    <div id='Home' className={styles.main}>
      <div className={styles.container}>

        <Flip top>
          <div className={styles.greeting}>
            <span>Hello!</span>
            <span>I'm <span>Mikita Grudkowski!</span></span>
            <h1>I am a front-end developer</h1>
            <>
              <a href={myCV} target="_blank" rel="noopener noreferrer" download>
                <button className={styles.download} data-file="pdf" data-size="0.7MB">
                  Download my CV
                </button>
              </a>
            </>
          </div>
        </Flip>

        <Zoom clear>
          <div className={styles.ava}>
            <div className={styles.photo}>
              <img src={ava} alt="ava"/>
            </div>
          </div>
        </Zoom>

      </div>
    </div>
  );
}

export default Main;
