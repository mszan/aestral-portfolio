import React from 'react';
import LandingLogo from "./landingLogo";
import LandingNavBar from "./landingNavBar";
import MainNavBar from "./mainNavBar";
import About from "./about";
import Work from "./work";
import classes from './face.module.css'
import Studios from "./studios";
import ClipLoader from "react-spinners/ClipLoader";


class Face extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getFaceContent() {
        let pageNumber = this.props.selectedPage;
        if (pageNumber === 0) {
            return (
                <div className={classes.landingFaceWrapper}>
                    <LandingLogo/>
                    <LandingNavBar
                        setSelectedPage={this.props.setSelectedPage}
                    />
                    <div className="soundCloudPlayerWrapper">
                        <iframe
                            width="100%"
                            height="20"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/691718908&color=%231f2a32&inverse=true&auto_play=true&show_user=true"
                        />
                    </div>
                </div>
            );
        } else if (pageNumber === 1) {
            return (
                <div className={classes.mainFaceWrapper}>
                    <MainNavBar
                        setSelectedPage={this.props.setSelectedPage}
                    />
                    <About/>
                </div>
            );
        } else if (pageNumber === 2) {
            return (
                <div className={classes.mainFaceWrapper}>
                    <MainNavBar
                        setSelectedPage={this.props.setSelectedPage}
                    />
                    <Work/>
                </div>
            );
        } else if (pageNumber === 3 ) {
            return (
                <div className={classes.mainFaceWrapper}>
                    <MainNavBar
                        setSelectedPage={this.props.setSelectedPage}
                    />
                    <Studios/>
                </div>
            );
        } else {
            console.log('pageNumber:', pageNumber)
            return null;
        }
    }

    render() {
        return this.getFaceContent();
    }
}

Face.propTypes = {};

export default Face;