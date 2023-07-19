import React, {useState} from 'react';
import styles from './styles.module.css';

function SearchInput({theme}) {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return(
        <input type='text' 
            value={search}
            onChange={handleChange}
            className={theme ? 
                [styles.input, styles.dark].join(' ') :
                [styles.input, styles.light].join(' ')}
            name='search'
            placeholder='Filter by title…'/>
    )
}

export default SearchInput;