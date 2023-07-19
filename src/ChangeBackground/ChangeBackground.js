import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import backgroundDesktopForNav from '../NavigationBar/images/bg-pattern-header.svg';
import backgroundTabletForNav from '../NavigationBar/images/bg-pattern-header-tablet.svg';
import backgroundMobileForNav from '../NavigationBar/images/bg-pattern-header-mobile.svg';

function ChangeBackground() {
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        const body = document.querySelector('body');

        if(theme)
            body.style.backgroundColor = '#121721';
        else
            body.style.backgroundColor = '#F4F6F8';

    }, [theme])

    //pre loading the background images so that they wont 'flicker' when we change them
    return(
        <>
            <img src={backgroundDesktopForNav} style={{display: 'none'}} />         
            <img src={backgroundTabletForNav} style={{display: 'none'}} />
            <img src={backgroundMobileForNav} style={{display: 'none'}} />
        </>
    )

}

export default ChangeBackground;