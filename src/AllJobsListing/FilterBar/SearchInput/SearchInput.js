import React, {useState} from 'react';
import styles from './styles.module.css';
import icon from './icons/icon-search.svg';
import useMediaQuery from '../../../hooks/useMediaQuery';

function SearchInput({theme}) {
    const [search, setSearch] = useState('');
    const tablet = useMediaQuery('(max-width: 1100px)');


    const handleChange = (e) => {
        setSearch(e.target.value);
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
                    placeholder={tablet ? 'Filter by title...' : 'Filter by title, companies, expertise…'}
                    />
                <div className={styles.errorMessage}>
                    Can't be empty
                </div>
            </div>
        </fieldset>
    )
}

export default SearchInput;