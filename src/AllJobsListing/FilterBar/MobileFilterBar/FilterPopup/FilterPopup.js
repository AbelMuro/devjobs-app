import React, {useEffect, useRef} from 'react';
import LocationInput from './LocationInput';
import FullTimeCheckbox from './FullTimeCheckbox/FullTimeCheckbox';
import styles from './styles.module.css';

function FilterPopup({openPopup, setOpenPopup}) {
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleOpen = () => {
        setOpenPopup(false);
    }

    useEffect(() => {
        if(openPopup){
            overlayRef.current.style.display = 'block';
            dialogRef.current.style.display = 'block'
            setTimeout(() => {
                if(!overlayRef.current || !overlayRef.current) return;
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.496)';
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current || !overlayRef.current) return;
                overlayRef.current.style.display = '';
                dialogRef.current.style.display = ''
            }, 200)
        }

    }, [openPopup])

    useEffect(() => {
        const handleClose = (e) => {
            if(e.target.matches('.' + styles.overlay))
                setOpenPopup(false);
        }
        const overlay = document.querySelector('.' + styles.overlay);

        overlay.addEventListener('click', handleClose)

        return () => {
           overlay.removeEventListener('click', handleClose);
        }
    }, [])

    return(
        <div className={styles.overlay} ref={overlayRef}>
            <dialog className={styles.dialog} ref={dialogRef}>
                <LocationInput/>
                <FullTimeCheckbox/>
                <input type='submit' value='Search' className={styles.submitButton} onClick={handleOpen}/>
            </dialog>
        </div>
    )
}

export default FilterPopup;