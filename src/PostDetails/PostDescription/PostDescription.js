import React from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function PostDescription({state}) {
    const theme = useSelector(state => state.theme);

    const changeTheme = (className) => {
        return theme ? [className, styles.dark].join(' ') : [className, styles.light].join(' ');
    }

    return(
        <section className={changeTheme(styles.container)}>
            <div className={styles.flex}>
                <div className={styles.position_data}>
                    <p className={styles.postedAt}>
                        {state.postedAt}
                    </p>
                    <div className={styles.dot}></div>
                    <p className={styles.contract}>
                        {state.contract}
                    </p>
                    <h2 className={changeTheme(styles.jobPosition)}>
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
            <p className={changeTheme(styles.description)}>
                {state.description}
            </p>
            <h1 className={changeTheme(styles.title)}>
                Requirements
            </h1>
            <p className={changeTheme(styles.requirements)}>
                {state.requirements.content}
            </p>
            <ul className={changeTheme(styles.requirement_list)}>
                {state.requirements.items.map((item, i) => {
                    return(
                        <li className={changeTheme(styles.item)} key={i}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <h1 className={changeTheme(styles.title)}>
                What You Will Do
            </h1>
            <p className={changeTheme(styles.role)}>
                {state.role.content}
            </p>

            <ol className={changeTheme(styles.role_list)}>
                {state.role.items.map((item, i) => {
                    return(
                        <li className={changeTheme(styles.item)} key={i}>
                            {item}
                        </li>
                    )
                })}
            </ol>

        </section>
    )
}

export default PostDescription;
