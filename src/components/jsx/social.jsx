import React from 'react';

export const Social = () => {
    let socials = [
        {href:'https://facebook.com/aestralmusic', img:'/img/social/fb.png'},
        {href:'https://instagram.com/aestraldepth', img:'/img/social/ig.png'},
        {href:'https://open.spotify.com/artist/0WH6jkqBDDzQYQx3jSuNgL?si=4-dVD0eAQC6-2K5Xeu-s9w', img:'/img/social/spotify.png'},
        {href:'https://soundcloud.com/aestral', img:'/img/social/soundcloud.png'},
    ]
    return (
        socials.map((value, index) => {
                console.log(index, value)
                return <a href={socials[index].href}><img
                    src={process.env.PUBLIC_URL + socials[index].img}
                    alt={socials[index].img}/></a>
        })
    );
};