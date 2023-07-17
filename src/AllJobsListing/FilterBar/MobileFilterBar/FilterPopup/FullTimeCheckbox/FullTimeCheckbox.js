import React from 'react';
import styles from './styles.module.css';
import checkmark from './images/checkmark.svg';

function FullTimeCheckbox () {
    return(
        <fieldset className={styles.container}>
            <label htmlFor='checkbox' className={styles.checkbox}>
                <input id='checkbox' type='checkbox' className={styles.invisibleCheckbox}/>
                <img src={checkmark} className={styles.checkmark}/>
            </label>
            <p className={styles.title}>
                Full Time Only
            </p>
        </fieldset>
    )
}

export default FullTimeCheckbox;