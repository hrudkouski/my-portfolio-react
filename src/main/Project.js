import React from 'react';
import styles from './Project.module.css';
import Zoom from 'react-reveal/Zoom';

function Project(props) {
  return (
    <Zoom clear>
      <div className={styles.item}>
        <div className={styles.logoItem}>
          <img src={props.logo} alt="logo"/>
        </div>
        <div className={styles.tittleItem}>{props.tittleItem}</div>
        <div className={styles.textItem}>{props.textItem} </div>
        <div className={styles.linkItem}>
          <span aria-label="eye" role="img">🔍 </span>
          <a target="blank" href={props.linkItem}>
            GitHub Repository
          </a>
        </div>
        <div className={styles.linkItem}>
          <span aria-label="eye" role="img">👁️ </span>
          <a target="blank" href={props.gitPages}>
            You can see project on GitHub Pages
          </a>
        </div>
      </div>
    </Zoom>
  );
}

export default Project;