import React from 'react';
import SearchInput from './SearchInput'
import LocationInput from './LocationInput';
import FullTimeCheckbox from './FullTimeCheckbox';
import MobileFilterBar from './MobileFilterBar/MobileFilterBar';
import { useDispatch , useSelector} from 'react-redux';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './styles.module.css';

function FilterBar() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const mobile = useMediaQuery('(max-width: 760px)');

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        const location = e.target.elements.location.value;
        let fulltime = e.target.elements.fulltime.value;

        fulltime = fulltime === 'true' ? true : false;              //'fulltime' initially has a string instead of a boolean value
        dispatch({type: 'change filter', filter: {search, location, fulltime}})
    }


    return mobile ? 
            <MobileFilterBar theme={theme} handleSubmit={handleSubmit}/> :
        <form className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')} 
            onSubmit={handleSubmit}>
            <SearchInput theme={theme}/>
            <LocationInput theme={theme}/>
            <FullTimeCheckbox theme={theme}/>
        </form>
    
}

export default FilterBar;