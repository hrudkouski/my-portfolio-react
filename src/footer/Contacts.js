import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactsText}>
                    Contacts
                </div>
                <form className={styles.contactsForm}>
                    <input/>
                    <input/>
                    <textarea placeholder='write me something...'/>
                </form>
                <div className={styles.contactsFormButton}>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
