import * as React from 'react';
import classes from './social.module.css'

export const Social = () => {

    let socials = [
        {href:'https://facebook.com/aestralmusic', img:'/img/social/fb.png'},
        {href:'https://instagram.com/aestraldepth', img:'/img/social/ig.png'},
        {href:'https://soundcloud.com/aestral', img:'/img/social/spotify.png'},
        {href:'https://open.spotify.com/artist/0WH6jkqBDDzQYQx3jSuNgL?si=4-dVD0eAQC6-2K5Xeu-s9w', img:'/img/social/soundcloud.png'},
    ]
    return (
        <div className={classes.socialWrapper}>
            {/*<a href={socials[0].href}><img src={socials[0].img} alt={socials[0].img}/></a>*/}
            {socials.map((value, index) => {
                console.log(index, value)
                return <a href={socials[index].href}><img
                    src={socials[index].img}
                    alt={socials[index].img}/></a>
            })}
        </div>
    );
};