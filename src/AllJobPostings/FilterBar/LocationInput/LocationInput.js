import React, {useState} from 'react';
import styles from './styles.module.css';
import icon from './icons/icon-location.svg';

function LocationInput({theme}) {
    const [location, setLocation] = useState('');

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    return(
        <fieldset className={styles.container}>
            <div className={styles.input_container}>
                <img className={styles.icon} src={icon}/>
                <input type='text' 
                    value={location}
                    name='location'
                    onChange={handleChange}
                    className={theme ? [styles.input, styles.dark].join(' ') : [styles.input, styles.light].join(' ')} 
                    placeholder='Filter by location…'
                    />
            </div>
        </fieldset>
    )
}

export default LocationInput;