import React, {useState} from 'react';
import styles from './styles.module.css';
import checkmark from './images/checkmark.svg';

function FullTimeCheckbox ({theme}) {
    const [fulltime, setFulltime] = useState(false);

    const handleFulltime = () => {
        setFulltime(!fulltime);
    }

    return(
        <fieldset className={styles.container}>
            <label htmlFor='checkbox' className={theme ? 
                [styles.checkbox, styles.dark].join(' ') : 
                [styles.checkbox, styles.light].join(' ')}>
                <input id='checkbox' 
                    value={fulltime}
                    onChange={handleFulltime}
                    type='checkbox' 
                    name='fulltime'
                    className={styles.invisibleCheckbox}/>
                <img src={checkmark} className={styles.checkmark}/>
            </label>
            <p className={theme ? 
                [styles.title, styles.dark].join(' ') : 
                [styles.title, styles.light].join(' ')}>
                Full Time Only
            </p>
        </fieldset>
    )
}

export default FullTimeCheckbox;