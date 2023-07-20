import React from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from './Switch';
import styles from './styles.module.css';
import logo from './images/logo.svg';

function NavBar(){
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/')
    }

    return(
        <nav className={styles.container}>
            <div className={styles.content}>
                <img src={logo} className={styles.logo} onClick={handleGoBack}/>
                <Switch/>
            </div>
        </nav>
    )
}

export default NavBar;