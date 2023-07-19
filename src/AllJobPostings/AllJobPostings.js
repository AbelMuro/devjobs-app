import React from 'react';
import FilterBar from './FilterBar';
import DisplayJobPostings from './DisplayJobPostings';
import styles from './styles.module.css';

function AllJobsPostings() {
    return(
        <main className={styles.container}>
            <FilterBar/>
            <DisplayJobPostings/>
        </main>
    )
}

export default AllJobsPostings;