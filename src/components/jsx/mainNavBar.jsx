import React from 'react';

import nav_classes from '../css/mainNavBar.module.css'
import {Social} from "./social";
import {Link} from 'react-router-dom'

export const MainNavBar = () => {
    return (
        <div className={nav_classes.navBarWrapper}>
            <div className={nav_classes.mainLogoWrapper}>
                <img src={process.env.PUBLIC_URL + '/img/logos/aestral_logo_slim.png'} alt=""/>
            </div>
            <div className={nav_classes.socialWrapperSmall}>
                <Social/>
            </div>
            <nav className={nav_classes.navBar}>
                <ul>
                    <li key={0}><Link to="/"
                                      className={`${nav_classes.btn} ${nav_classes.btn2}`}
                    >HOME</Link></li>

                    <li key={1}><Link to="/about"
                                      className={`${nav_classes.btn} ${nav_classes.btn2}`}
                    >ABOUT</Link></li>

                    <li key={2}><Link to="/work"
                                      className={`${nav_classes.btn} ${nav_classes.btn2}`}
                    >WORK</Link></li>

                    <li key={3}><Link to="/studios"
                                      className={`${nav_classes.btn} ${nav_classes.btn2}`}
                    >ASTRALÉ STUDIOS</Link></li>

                    <li key={'beats'}><a
                        className={`${nav_classes.btn} ${nav_classes.btn2}`}
                        href="https://traktrain.com/aestral"
                    >BEATS</a></li>
                </ul>
            </nav>
        </div>
    );
}