import React from 'react';
import classes from '../css/landingNavBar.module.css'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'


export const LandingNavBar = (props) => {
    return (
        <div className={classes.navBarWrapper}>
            <nav className={classes.navBar}>
                <ul>
                    <li><Link to="/about"
                              className={`${classes.btn} ${classes.btn2}`}
                    >ABOUT</Link></li>

                    <li><Link to="/work"
                              className={`${classes.btn} ${classes.btn2}`}
                    >WORK</Link></li>

                    <li><Link to="/studios"
                              className={`${classes.btn} ${classes.btn2}`}
                    >ASTRALÉ STUDIOS</Link></li>

                    <li><a
                        className={`${classes.btn} ${classes.btn2}`}
                        href="https://traktrain.com/aestral"
                    >BEATS</a></li>
                </ul>
            </nav>
        </div>
    );
}