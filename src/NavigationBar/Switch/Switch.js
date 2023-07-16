import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import sunIcon from './images/icon-sun.svg';
import moonIcon from './images/icon-moon.svg';
import styles from './styles.module.css';

function Switch() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const dotRef = useRef();

    const handleSwitch = () => {
        dispatch({type: 'change theme'});
    }

    useEffect(() => {
        if(theme)                   //if its light theme
            dotRef.current.style.left = '29px';
        else                        //if its dark theme
            dotRef.current.style.left = '';

    }, [theme])

    return(
        <div className={styles.container}>
            <img className={styles.themeIcon} src={sunIcon}/>
            <div className={styles.switch} onClick={handleSwitch} >
                <div className={styles.dot} ref={dotRef}></div>
            </div>
            <img className={styles.themeIcon} src={moonIcon}/>
        </div>
    )
}

export default Switch;