import React from 'react';

import classes from '../css/landingNavBar.module.css'


export const LandingNavBar = (props) => {
    const setSelectedPage = props.setSelectedPage;
    return (
        <div className={classes.navBarWrapper}>
            <nav className={classes.navBar}>
                <ul>
                    <li><span
                        className={`${classes.btn} ${classes.btn2}`}
                        onClick={() => setSelectedPage(1)}
                    >ABOUT</span></li>

                    <li><span
                        className={`${classes.btn} ${classes.btn2}`}
                        onClick={() => setSelectedPage(2)}
                    >WORK</span></li>

                    <li><span
                        className={`${classes.btn} ${classes.btn2}`}
                        onClick={() => setSelectedPage(3)}
                    >ASTRALÉ STUDIOS</span></li>

                    <li><a
                        className={`${classes.btn} ${classes.btn2}`}
                        href="https://traktrain.com/aestral"
                    >BEATS</a></li>
                </ul>
            </nav>
        </div>
    );
}