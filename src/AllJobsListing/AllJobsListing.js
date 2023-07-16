import React from 'react';
import FilterBar from './FilterBar';
import DisplayJobListings from './DisplayJobListings';
import styles from './styles.module.css';

function AllJobsListing() {
    return(
        <main className={styles.container}>
            <FilterBar/>
            <DisplayJobListings/>
        </main>
    )
}

export default AllJobsListing;