import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactsText}>
                    Contacts
                </div>
                <div className={styles.contactsForm}>
                    <div className={styles.contactsFormGroup}>
                    </div>
                    <div className={styles.contactsFormGroup}>
                    </div>
                    <div className={styles.contactsFormGroup}>
                    </div>
                </div>
                <div className={styles.contactsFormButton}>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
