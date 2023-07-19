import React from 'react';
import styles from './styles.module.css';

function PostDescription({state}) {
    return(
        <section className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.position_data}>
                    <p className={styles.postedAt}>
                        {state.postedAt}
                    </p>
                    <div className={styles.dot}></div>
                    <p className={styles.contract}>
                        {state.contract}
                    </p>
                    <h2 className={styles.jobPosition}>
                        {state.position}
                    </h2>
                    <h3 className={styles.location}>
                        {state.location}
                    </h3>
                </div>
                <button className={styles.applyButton}>
                    Apply Now
                </button>                
            </div>
            <p className={styles.description}>
                {state.description}
            </p>
            <h1 className={styles.title}>
                Requirements
            </h1>
            <p className={styles.requirements}>
                {state.requirements.content}
            </p>
            <ul className={styles.requirement_list}>
                {state.requirements.items.map((item, i) => {
                    return(
                        <li className={styles.item} key={i}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <h1 className={styles.title}>
                What You Will Do
            </h1>
            <p className={styles.role}>
                {state.role.content}
            </p>

            <ol className={styles.role_list}>
                {state.role.items.map((item, i) => {
                    return(
                        <li className={styles.item} key={i}>
                            {item}
                        </li>
                    )
                })}
            </ol>

        </section>
    )
}

export default PostDescription;
