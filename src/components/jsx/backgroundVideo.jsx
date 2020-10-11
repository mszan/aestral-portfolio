import React from 'react';
import classes from '../css/backgroundVideo.module.css'

export const BackgroundVideo = () => {
    const videoSource = process.env.PUBLIC_URL + '/video/backgroundVideo.mp4'
    return (
        <div className={classes.videoContainer}>
            <video
                autoPlay="autoPlay"
                loop="loop"
                muted
                className={classes.video}>
                <source src={videoSource} type="video/mp4"/>
            </video>
        </div>
    )
}