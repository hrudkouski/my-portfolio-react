import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <div className={styles.formButton}>
            <button type='submit'>{props.title}</button>
        </div>
    );
}

export default Button;
