import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.sloganContainer}>
                <div className={styles.sloganText}>
                    I Am Available For Freelancer
                </div>
                <div className={styles.moduleLine}> </div>
                <div className={styles.sloganButton}>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
);
}

export default Slogan;
