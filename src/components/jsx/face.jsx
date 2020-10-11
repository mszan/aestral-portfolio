import React from 'react';
import {LandingLogo} from "./landingLogo";
import {About} from "./about";
import {Footer} from "./footer";
import {Social} from "./social";
import {LandingNavBar} from "./landingNavBar";
import {MainNavBar} from "./mainNavBar";
import {Studios} from "./studios";
import Work from "./work";
import classes from '../css/face.module.css'
import { CSSTransitionGroup } from 'react-transition-group'


export const Face = (props) => {
    let pageNumber = props.selectedPage;
    if (pageNumber === 0) {
        return (
            <div className={classes.landingFaceWrapper}>
                <LandingLogo/>
                <LandingNavBar
                    setSelectedPage={props.setSelectedPage}/>
                {/*<div className="soundCloudPlayerWrapper">*/}
                {/*    <iframe*/}
                {/*        width="100%"*/}
                {/*        height="20"*/}
                {/*        scrolling="no"*/}
                {/*        frameBorder="no"*/}
                {/*        allow="autoplay"*/}
                {/*        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/691718908&color=%231f2a32&inverse=true&auto_play=true&show_user=true"/>*/}
                {/*</div>*/}
                <div className={classes.socialWrapper}>
                    <Social/>
                </div>
            </div>
        );
    } else if (pageNumber === 1) {
        return (
            <div className={classes.mainFaceWrapper}>
                <MainNavBar
                    setSelectedPage={props.setSelectedPage}/>
                <About/>
                <Footer/>
            </div>
        );
    } else if (pageNumber === 2) {
        return (
            <div className={classes.mainFaceWrapper}>
                <MainNavBar
                    setSelectedPage={props.setSelectedPage}/>
                <Work/>
                <Footer/>
            </div>
        );
    } else if (pageNumber === 3 ) {
        return (
            <div className={classes.mainFaceWrapper}>
                <MainNavBar
                    setSelectedPage={props.setSelectedPage}/>
                <Studios/>
                <Footer/>
            </div>
        );
    } else {
        console.log('Page not found, switching to home page.', pageNumber)
        return 0;
    }
}