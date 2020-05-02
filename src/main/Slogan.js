import React from 'react';
import styles from './Slogan.module.css';
import Zoom from 'react-reveal/Zoom';
import Button from "./Button";
import ModuleLine from "./ModuleLine";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <Zoom clear>
                <div className={styles.sloganContainer}>
                    <div className={styles.sloganText}>
                        I Am Available For Freelancer
                    </div>
                    <ModuleLine/>
                    <Button title={'Hire me'}/>
                </div>
            </Zoom>
        </div>
    );
}

export default Slogan;
