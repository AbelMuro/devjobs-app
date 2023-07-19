import React from 'react';
import PostDescription from './PostDescription';
import CompanyDetails from './CompanyDetails';
import {useLocation} from 'react-router-dom';
import logos from '../Common/Logos'
import styles from './styles.module.css';

function ListingDetails() {
    const {state} = useLocation();        

    return(
        <section className={styles.container}>
            <CompanyDetails state={state}/>
            <PostDescription state={state}/>
        </section>
    )
}

export default ListingDetails;