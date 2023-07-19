import React, {useMemo, useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import postings from '../../Data';
import JobPosting from './JobPosting';
import styles from './styles.module.css';

function DisplayJobListings() {
    const [loadMore, setLoadMore] = useState(6);
    const filter = useSelector(state => state.filter);
    const loadMoreButtonRef = useRef();

    const handleLoad = () => {
        if(loadMore < postings.length)
            setLoadMore(loadMore + 6)
        else
            setLoadMore(loadMore - 6);
    }
    
    const allPosts = useMemo(() => {
        const posts = postings.map((posting, i) => {
            const filterFullTime = filter.fulltime;
            const filterSearch = filter.search.toLowerCase();
            const filterLocation = filter.location.toLowerCase();
            const contract = posting.contract;
            const position = posting.position;
            const location = posting.location;

            if(filterFullTime && contract !== 'Full Time')
                return;

            if(filterLocation && !location.toLowerCase().includes(filterLocation))
                return;
            
            if(filterSearch && !(position.toLowerCase().includes(filterSearch) || company.toLowerCase().includes(filterSearch)))
                return;

            return(
                <JobPosting posting={posting} key={i}/>
            )
        }) 
        return posts.filter((post) => {
            if(post)
                return true;
            else
                return false;
        })
    }, [loadMore, filter])

    const loadPosts = useMemo(() => {
        const posts = [];
        for(let i = 0; i < loadMore; i++){
            posts.push(allPosts[i]);
        }
        return posts;
    }, [loadMore, allPosts])

    useEffect(() => {
        setLoadMore(6);
    }, [filter])

    useEffect(() => {
        if(loadMore >= allPosts.length)
            loadMoreButtonRef.current.style.display = 'none';
        else 
            loadMoreButtonRef.current.style.display = '';
    }, [loadMore, allPosts])

    return(
        <section className={styles.container}>
            {loadPosts}
            <button className={styles.loadMore} onClick={handleLoad} ref={loadMoreButtonRef}>
                Load More
            </button>
        </section>
    )
}

export default DisplayJobListings;
