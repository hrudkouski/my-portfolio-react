import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactsText}>
                    Contacts
                </div>
                <div className={styles.moduleLine}> </div>
                <form className={styles.contactsForm}>
                    <input placeholder='Name'/>
                    <input placeholder='E-mail'/>
                    <textarea required="" placeholder='Your message'/>
                </form>
                <div className={styles.contactsFormButton}>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;