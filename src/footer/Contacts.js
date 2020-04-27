import React from 'react';
import styles from './Contacts.module.css';
import Zoom from 'react-reveal/Zoom';
import Button from "../main/Button";

function Contacts() {
    return (
        <div id='Contacts' className={styles.contacts}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactsText}>
                    Contacts
                </div>
                <div className={styles.moduleLine}> </div>
                <Zoom clear>
                    <form className={styles.contactsForm}>
                        <input placeholder='Name'
                               type='text'/>
                        <input placeholder='E-mail'
                               type='email'/>
                        <textarea required="" placeholder='Your message'/>
                        <Button title={'Submit'}/>
                    </form>
                </Zoom>
            </div>
        </div>
    );
}

export default Contacts;
