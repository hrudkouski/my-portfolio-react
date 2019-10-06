import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет</span>
                    <span>Меня зовут Грудковский Никита</span>
                    <span>Я front-end developer</span>
                </div>
                <div className={styles.photo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Fotothek_df_roe-neg_0002766_001_Portrait_eines_Pioniers_beim_Fotografieren.jpg/220px-Fotothek_df_roe-neg_0002766_001_Portrait_eines_Pioniers_beim_Fotografieren.jpg" alt="#"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
