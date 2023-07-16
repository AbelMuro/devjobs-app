import React, {useState} from 'react';
import styles from './styles.module.css';
import checkmark from './images/checkmark.svg';

function FullTimeCheckbox({theme}) {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }

    return(
        <fieldset className={styles.container}>
            <label className={theme ? 
            [styles.checkbox_container, styles.dark].join(' ') : 
            [styles.checkbox_container, styles.light].join(' ')} 
            htmlFor='checkbox'>
                <input type='checkbox' 
                    id='checkbox'
                    name='fulltime'
                    value={checked}
                    onChange={handleChecked}
                    className={styles.checkbox}/>
                <img className={styles.checkmark} src={checkmark}/>
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