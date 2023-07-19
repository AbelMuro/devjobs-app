import React from 'react';
import logos from '../../Common/Logos'
import styles from './styles.module.css';
import {useSelector} from 'react-redux';


function CompanyDetails({state}) {
    const theme = useSelector(state => state.theme);

    return(            
        <div className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}>
            <div className={styles.company_logo} style={{backgroundColor: state.logoBackground}}> 
                <img className={styles.logo} src={logos[state.logo.replace('.svg', '')]}/>
            </div>
            <div className={styles.company_data}>
                <h1 className={theme ? 
                    [styles.company, styles.dark].join(' ') : 
                    [styles.company, styles.light].join(' ')}>
                    {state.company}
                </h1>
                <h2 className={styles.company_website}>
                    {state.website}
                </h2>
            </div>
            <button className={theme ? 
                [styles.company_siteButton, styles.dark].join(' ') : 
                [styles.company_siteButton, styles.light].join(' ')}>
                Company Site
            </button>
        </div>
    )
}

export default CompanyDetails;