import React from 'react';
import locationIcon from './icons/icon-location.svg';
import styles from './styles.module.css';

function LocationInput() {
    return(
        <fieldset className={styles.container}>
            <img src={locationIcon} className={styles.icon}/>
            <input type='text' 
                className={styles.input}
                name='location'
                placeholder={'Filter by location…'}/>
        </fieldset>
    )
}

export default LocationInput;