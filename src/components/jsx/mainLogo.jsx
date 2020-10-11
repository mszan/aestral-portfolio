import React from 'react';
import classes from '../css/mainLogo.module.css'

export const MainLogo = () => {
    let imgLogoSource = process.env.PUBLIC_URL + '/img/logos/aestral_logo_slim.png';
    return (
        <div className={classes.mainLogoWrapper}>
            <img src={imgLogoSource} alt=""/>
        </div>
    );
};