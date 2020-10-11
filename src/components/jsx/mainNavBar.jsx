import React from 'react';

import classes from '../css/mainNavBar.module.css'
import {MainLogo} from "./mainLogo";
import {Social} from "./social";

export const MainNavBar = (props) => {
    const setSelectedPage = props.setSelectedPage;
    return (
        <div className={classes.navBarWrapper}>
            <MainLogo/>
            <div className={classes.socialWrapperSmall}>
                <Social/>
            </div>
            <nav className={classes.navBar}>
                <ul>
                    <li><a
                        className={`${classes.btn} ${classes.btn2}`}
                        onClick={() => setSelectedPage(0)}
                    >HOME</a></li>

                    <li><a
                        className={`${classes.btn} ${classes.btn2}`}
                        onClick={() => setSelectedPage(1)}
                    >ABOUT</a></li>

                    <li><a
                        className={`${classes.btn} ${classes.btn2}`}
                        onClick={() => setSelectedPage(2)}
                    >WORK</a></li>

                    <li><a
                        className={`${classes.btn} ${classes.btn2}`}
                        onClick={() => setSelectedPage(3)}
                    >ASTRALÉ STUDIOS</a></li>

                    <li><a
                        className={`${classes.btn} ${classes.btn2}`}
                        href="https://traktrain.com/aestral"
                    >BEATS</a></li>
                </ul>
            </nav>
        </div>
    );
}