import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.sloganContainer}>
                <div className={styles.sloganText}>
                    I am considering a job where I would work remotely
                </div>
                <div className={styles.sloganButton}>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
);
}

export default Slogan;
