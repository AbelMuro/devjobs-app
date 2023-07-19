import React from 'react';
import locationIcon from './icons/icon-location.svg';
import styles from './styles.module.css';

function LocationInput({theme}) {
    return(
        <fieldset className={styles.container}>
            <img src={locationIcon} className={styles.icon}/>
            <input type='text' 
                className={theme ? 
                    [styles.input, styles.dark].join(' ') : 
                    [styles.input, styles.light].join(' ')}
                name='location'
                placeholder={'Filter by location…'}/>
        </fieldset>
    )
}

export default LocationInput;