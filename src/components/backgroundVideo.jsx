import React from 'react';
import ReactDOM from 'react-dom'

import classes from './backgroundVideo.module.css'

const BackgroundVideo = () => {
    const videoSource = './video/backgroundVideo.mp4'
    return (
        <div className={classes.videoContainer}>
            <video
                autoPlay="autoPlay"
                loop="loop"
                muted
                className={classes.video}
            >
                <source src={videoSource} type="video/mp4"/>
            </video>
        </div>
    )
}

BackgroundVideo.propTypes = {};

export default BackgroundVideo;