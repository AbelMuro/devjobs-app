import React from 'react';
import Switch from './Switch';
import styles from './styles.module.css';
import logo from './images/logo.svg';


//need to set the tablet background image

function NavBar(){
    return(
        <nav className={styles.container}>
            <div className={styles.content}>
                <img src={logo} className={styles.logo}/>
                <Switch/>
            </div>
        </nav>
    )
}

export default NavBar;