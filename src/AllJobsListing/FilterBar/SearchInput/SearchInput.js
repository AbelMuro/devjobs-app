import React, {useRef, useState} from 'react';
import styles from './styles.module.css';
import icon from './icons/icon-search.svg';

function SearchInput({theme}) {
    const [search, setSearch] = useState('');
    const errorMessageRef = useRef();

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        errorMessageRef.current.style.display = '';
        setSearch(e.target.value);
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'block';
    }

    return(
        <fieldset className={styles.container}>
            <div className={styles.input_container}>
                <img className={styles.icon} src={icon}/>
                <input type='search' 
                    value={search}
                    name='search'
                    onChange={handleChange}
                    className={theme ? 
                        [styles.input, styles.dark].join(' ') : 
                        [styles.input, styles.light].join(' ')}
                    onInvalid={handleInvalid}
                    placeholder='Filter by title, companies, expertise…'
                    required
                    />
                <div className={styles.errorMessage} ref={errorMessageRef}>
                    Can't be empty
                </div>
            </div>
        </fieldset>
    )
}

export default SearchInput;