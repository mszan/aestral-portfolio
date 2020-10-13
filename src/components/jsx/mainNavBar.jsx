import React from 'react';

import classes from '../css/mainNavBar.module.css'
import {MainLogo} from "./mainLogo";
import {Social} from "./social";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

export const MainNavBar = (props) => {
    return (
        <div className={classes.navBarWrapper}>
            <MainLogo/>
            <div className={classes.socialWrapperSmall}>
                <Social/>
            </div>
            <nav className={classes.navBar}>
                <ul>
                    <li key={0}><Link to="/"
                                      className={`${classes.btn} ${classes.btn2}`}
                    >HOME</Link></li>

                    <li key={1}><Link to="/about"
                                      className={`${classes.btn} ${classes.btn2}`}
                    >ABOUT</Link></li>

                    <li key={2}><Link to="/work"
                                      className={`${classes.btn} ${classes.btn2}`}
                    >WORK</Link></li>

                    <li key={3}><Link to="/studios"
                                      className={`${classes.btn} ${classes.btn2}`}
                    >ASTRALÉ STUDIOS</Link></li>

                    <li key={'beats'}><a
                        className={`${classes.btn} ${classes.btn2}`}
                        href="https://traktrain.com/aestral"
                    >BEATS</a></li>
                </ul>
            </nav>
        </div>
    );
}