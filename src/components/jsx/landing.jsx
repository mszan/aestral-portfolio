import React from 'react';
import landing_classes from "../css/landing.module.css"
import {Social} from "./social";
import {Link} from "react-router-dom";
import {CSSTransitionGroup} from "react-transition-group";

export const Landing = () => {
    return (
        <CSSTransitionGroup
            transitionName="transition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div className={landing_classes.landingWrapper}>
                <div className={landing_classes.navBarWrapper}>
                    <div>
                        <img width="100%" src={process.env.PUBLIC_URL + '/img/logos/aestral_logo_slim.png'} alt=""/>
                    </div>
                    <nav className={landing_classes.navBar}>
                        <ul>
                            <li><Link to="/about"
                                      className={`${landing_classes.btn} ${landing_classes.btn2}`}
                            >ABOUT</Link></li>

                            <li><Link to="/work"
                                      className={`${landing_classes.btn} ${landing_classes.btn2}`}
                            >WORK</Link></li>

                            <li><Link to="/studios"
                                      className={`${landing_classes.btn} ${landing_classes.btn2}`}
                            >ASTRALÉ STUDIOS</Link></li>

                            <li><a
                                className={`${landing_classes.btn} ${landing_classes.btn2}`}
                                href="https://traktrain.com/aestral"
                            >BEATS</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={landing_classes.socialWrapper}>
                    <Social/>
                </div>
            </div>
        </CSSTransitionGroup>
    );
};