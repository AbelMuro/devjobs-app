import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import logos from '../../../Common/Logos';

function JobPosting({posting}) {
    const navigate = useNavigate();
    const theme = useSelector(state => state.theme);

    const datePosted = posting.postedAt;
    const contract = posting.contract;
    const position = posting.position;
    const company = posting.company;
    const location = posting.location;
    const logoName = posting.logo.replace('.svg', '');
    const logoBackground = posting.logoBackground;
    const jobPosting = JSON.stringify(posting);


    const handleListing = (e) => {
        let post = e.target.getAttribute('data-post');
        post = JSON.parse(post);
        navigate('/ListingDetails', {state: post});
    }

    return(
        <section className={theme ? 
            [styles.posting, styles.dark].join(' ') : 
            [styles.posting, styles.light].join(' ')} 
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
            [styles.position, styles.light].join(' ')} 
            onClick={handleListing}
            data-post={jobPosting}>
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
}

export default JobPosting;