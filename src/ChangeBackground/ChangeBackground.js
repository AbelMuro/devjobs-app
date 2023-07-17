import {useEffect} from 'react';
import {useSelector} from 'react-redux';

function ChangeBackground() {
    const theme = useSelector(state => state.theme);


    useEffect(() => {
        const body = document.querySelector('body');

        if(theme)
            body.style.backgroundColor = '#121721';
        else
            body.style.backgroundColor = '#F4F6F8';

    }, [theme])

}

export default ChangeBackground;