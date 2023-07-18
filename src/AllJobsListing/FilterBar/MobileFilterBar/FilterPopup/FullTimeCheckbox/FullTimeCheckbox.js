import React, {useState} from 'react';
import styles from './styles.module.css';
import checkmark from './images/checkmark.svg';

function FullTimeCheckbox () {
    const [fulltime, setFulltime] = useState(false);

    const handleFulltime = () => {
        setFulltime(!fulltime);
    }

    return(
        <fieldset className={styles.container}>
            <label htmlFor='checkbox' className={styles.checkbox}>
                <input id='checkbox' 
                    value={fulltime}
                    onChange={handleFulltime}
                    type='checkbox' 
                    name='fulltime'
                    className={styles.invisibleCheckbox}/>
                <img src={checkmark} className={styles.checkmark}/>
            </label>
            <p className={styles.title}>
                Full Time Only
            </p>
        </fieldset>
    )
}

export default FullTimeCheckbox;