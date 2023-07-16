import React, {useRef, useState} from 'react';
import styles from './styles.module.css';
import icon from './icons/icon-location.svg';

function LocationInput({theme}) {
    const [location, setLocation] = useState('');
    const errorMessageRef = useRef();

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        errorMessageRef.current.style.display = '';
        setLocation(e.target.value)
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'block';
    }

    return(
        <fieldset className={styles.container}>
            <div className={styles.input_container}>
                <img className={styles.icon} src={icon}/>
                <input type='text' 
                    value={location}
                    name='location'
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    className={theme ? [styles.input, styles.dark].join(' ') : [styles.input, styles.light].join(' ')} 
                    placeholder='Filter by location…'
                    required
                    />
                <div className={styles.errorMessage} ref={errorMessageRef}>
                    Can't be empty
                </div>
            </div>
        </fieldset>
    )
}

export default LocationInput;