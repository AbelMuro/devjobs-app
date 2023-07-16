import React from 'react';
import postings from '../../Data';
import styles from './styles.module.css';
import logos from './logos';


function DisplayJobListings() {
    return(
        <section className={styles.container}>
            {postings.map((posting, i) => {
                const logoName = posting.logo.replace('.svg', '');
                const logoBackground = posting.logoBackground;
                return(
                    <div className={styles.posting} key={i}>
                        <div className={styles.logo_container} style={{backgroundColor: logoBackground}}>
                            <img className={styles.logo} src={logos[logoName]}/>
                        </div>
                        
                    </div>
                )
            })}
        </section>
    )
}

export default DisplayJobListings;
