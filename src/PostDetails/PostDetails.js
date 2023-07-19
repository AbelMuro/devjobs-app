import React from 'react';
import PostDescription from './PostDescription';
import {useLocation} from 'react-router-dom';
import logos from '../Common/Logos'
import styles from './styles.module.css';

function ListingDetails() {
    const {state} = useLocation();        

    return(
        <section className={styles.container}>

            <div className={styles.company_container}>
                <div className={styles.company_logo} style={{backgroundColor: state.logoBackground}}> 
                    <img className={styles.logo} 
                    src={logos[state.logo.replace('.svg', '')]}/>
                </div>

                <div className={styles.company_data}>
                    <h1 className={styles.company}>
                        {state.company}
                    </h1>
                    <h2 className={styles.company_website}>
                        {state.website}
                    </h2>
                </div>
                <button className={styles.company_siteButton}>
                    Company Site
                </button>
            </div>
            <PostDescription state={state}/>
        </section>
    )
}

export default ListingDetails;