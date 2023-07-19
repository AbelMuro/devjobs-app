import React from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';

function FooterBar({state}) {
    const theme = useSelector(state => state.theme);
    const mobile = useMediaQuery('(max-width: 700px)');

    return(
        <footer className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}>
            <section className={styles.content}>
               {
                mobile ? <></> : 
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
               } 
                <button className={styles.applyButton}>
                    Apply Now
                </button>
            </section>
        </footer>
    )
}

export default FooterBar;