import React, {useEffect} from 'react';
import SearchInput from './SearchInput'
import LocationInput from './LocationInput';
import FullTimeCheckbox from './FullTimeCheckbox';
import { useDispatch , useSelector} from 'react-redux';
import styles from './styles.module.css';

function FilterBar() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        const location = e.target.elements.location.value;
        const fulltime = e.target.elements.fulltime.value;

        dispatch({type: 'change filter', filter: {search, location, fulltime}})
    }

    useEffect(() => {
        const body = document.querySelector('body');

        if(theme)
            body.style.backgroundColor = '#121721';
        else
            body.style.backgroundColor = '#F4F6F8';

    }, [theme])

    return(
        <form className={theme ? [styles.container, styles.dark].join(' ') : [styles.container, styles.light].join(' ')} 
        onSubmit={handleSubmit}>
            <SearchInput theme={theme}/>
            <LocationInput theme={theme}/>
            <FullTimeCheckbox theme={theme}/>
            <input type='submit' value='Search' className={styles.submitButton} />
        </form>
    )
}

export default FilterBar;