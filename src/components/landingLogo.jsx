import React from 'react';

import classes from './landingLogo.module.css'

class LandingLogo extends React.Component {
    constructor(props) {
        super(props);
        this.imgLogoSource = '/img/logos/aestral_logo_fancy.png';
        this.state = {};
    }

    render() {
        return (
            <div className={classes.imgLogoWrapper}>
                <img className={classes.imgLogo} src={this.imgLogoSource} alt=""/>
            </div>
        );
    }
}

LandingLogo.propTypes = {};

export default LandingLogo;