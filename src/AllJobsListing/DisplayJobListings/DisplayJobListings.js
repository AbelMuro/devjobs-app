import React, {useMemo, useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import postings from '../../Data';
import styles from './styles.module.css';
import logos from './logos';


function DisplayJobListings() {
    const [loadMore, setLoadMore] = useState(9);
    const theme = useSelector(state => state.theme);
    const filter = useSelector(state => state.filter);
    const loadMoreButtonRef = useRef();

    const handleLoad = () => {
        if(loadMore < postings.length)
            setLoadMore(loadMore + 6)
        else
            setLoadMore(loadMore - 6);
    }


    const allListings = useMemo(() => {
        return postings.map((posting, index) => {
            if(index + 1 > loadMore) 
                return;

            const datePosted = posting.postedAt;
            const contract = posting.contract;
            const position = posting.position;
            const company = posting.company;
            const location = posting.location;
            const logoName = posting.logo.replace('.svg', '');
            const logoBackground = posting.logoBackground;
            const filterFullTime = filter.fulltime;
            const filterSearch = filter.search.toLowerCase();
            const filterLocation = filter.location.toLowerCase();

            if(filterFullTime && contract !== 'Full Time')
                return;

            if(filterLocation && !location.toLowerCase().includes(filterLocation))
                return;
            
            if(filterSearch && !(position.toLowerCase().includes(filterSearch) || company.toLowerCase().includes(filterSearch)))
                return;

            return(
                <section className={theme ? 
                        [styles.posting, styles.dark].join(' ') : 
                        [styles.posting, styles.light].join(' ')} 
                    key={index} 
                    data-id={posting.id}>
                    <div className={styles.logo_container} style={{backgroundColor: logoBackground}}>
                        <img className={styles.logo} src={logos[logoName]}/>
                    </div>
                    <p className={styles.timeStamp}>
                        {datePosted}
                    </p>
                    <div className={styles.dot}></div>
                    <p className={styles.contract}>
                        {contract}
                    </p>
                    <a className={theme ? 
                        [styles.position, styles.dark].join(' ') : 
                        [styles.position, styles.light].join(' ')} >
                        {position}
                    </a>
                    <p className={styles.company}>
                        {company}
                    </p>
                    <p className={styles.location}>
                        {location}
                    </p>
                </section>
            )
        }) 
    }, [loadMore, theme, filter])

    useEffect(() => {
        if(loadMore >= postings.length)
            loadMoreButtonRef.current.innerHTML = 'Load Less'
        else
            loadMoreButtonRef .current.innerHTML = 'Load More'; 
    }, [loadMore])


    return(
        <section className={styles.container}>
            {allListings}
            <button className={styles.loadMore} onClick={handleLoad} ref={loadMoreButtonRef}>
                Load More
            </button>
        </section>
    )
}

export default DisplayJobListings;
