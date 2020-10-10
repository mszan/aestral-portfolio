import React from 'react';

import classes from './landingNavBar.module.css'


class LandingNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const setSelectedPage = this.props.setSelectedPage;
        return (
            <div className={classes.navBarWrapper}>
                <nav className={classes.navBar}>
                    <ul>
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
                        >ÆSTRALÉ STUDIOS</a></li>

                        <li><a
                            className={`${classes.btn} ${classes.btn2}`}
                            href="https://traktrain.com/aestral"
                        >BEATS</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

LandingNavBar.propTypes = {};

export default LandingNavBar;