import React, {useState} from 'react';
import FilterPopup from './FilterPopup';
import styles from './styles.module.css';
import filterIcon from './icons/icon-filter.svg';
import filterIconWhite from './icons/icon-filter-white.svg';
import searchIcon from './icons/icon-search.svg';
import SearchInput from './SearchInput';

function MobileFilterBar({theme, handleSubmit}) {
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpen = () => {
        setOpenPopup(!openPopup);
    }

    return(
        <>
            <form className={theme ? 
                [styles.container, styles.dark].join(' ') : 
                [styles.container, styles.light].join(' ')}
                onSubmit={handleSubmit}>
                <SearchInput theme={theme}/>
                <div className={styles.search_container}>
                    <img src={theme ? 
                        filterIconWhite : 
                        filterIcon} 
                        className={styles.icon} 
                        onClick={handleOpen}/>
                    <button className={styles.searchButton}>
                        <img src={searchIcon} className={styles.searchIcon}/>
                    </button>
                </div>
                <FilterPopup openPopup={openPopup} setOpenPopup={setOpenPopup}/>                  
            </form>    
        </>

    )
}

export default MobileFilterBar;