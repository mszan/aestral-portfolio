import React from 'react';
import classes from './mainLogo.module.css'

export const MainLogo = () => {
    let imgLogoSource = '/img/logos/aestral_logo_slim.png';
    return (
        <div className={classes.mainLogoWrapper}>
            <img src={imgLogoSource} alt=""/>
        </div>
    );
};