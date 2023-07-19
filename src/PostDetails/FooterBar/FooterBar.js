import React from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';

function FooterBar({state}) {
    const theme = useSelector(state => state.theme);

    return(
        <footer className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}>
            <section className={styles.content}>
                <div className={styles.position_company}>
                    <h1 className={theme ? 
                    [styles.position, styles.dark].join(' ') : 
                    [styles.position, styles.light].join(' ')
                    }>
                        {state.position}
                    </h1>
                    <h2 className={styles.company}>
                        {state.company}
                    </h2>
                </div>
                <button className={styles.applyButton}>
                    Apply Now
                </button>
            </section>
        </footer>
    )
}

export default FooterBar;