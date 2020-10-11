import React from 'react';

import classes from '../css/studios.module.css'
import ClipLoader from "react-spinners/ClipLoader";

export class Studios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            imgLoadedAmount: 0
        };
    }

    hideSpinner = () => {
        this.setState({
            loading: false
        });
    };

    imgLoadedAmountAdd = () => {
        let imgLoadedAmount = this.state.imgLoadedAmount
        imgLoadedAmount++;
        this.setState({imgLoadedAmount: imgLoadedAmount});
        if (this.state.imgLoadedAmount === 6) {
            this.hideSpinner();
        }
    }

    getCovers() {
        let coversAmount = 6;
        let res = [];
        for(let i = 1; i <= coversAmount; i++) {
            let imgSource = `${process.env.PUBLIC_URL}/img/studios/cover${i}.png`
            res.push(<img
                className={`${classes.studiosImg} ${classes.studiosImgCover}`}
                src={imgSource}
                alt={imgSource}
                onLoad={this.imgLoadedAmountAdd}
            />);
        }
        return res;
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <ClipLoader
                        css={'text-align: center; display: block; margin: auto; top: 50%;'}
                        size={200}
                        color={"#fff"}
                        loading={this.state.loading}
                    />
                ) : null}
                <div className={classes.studiosWrapper}
                     style={{opacity: this.state.loading ? 0 : 1 }}>
                    {this.getCovers()}
                    <img
                        className={`${classes.studiosImg} ${classes.studiosImgBanner}`}
                        src={`${process.env.PUBLIC_URL}/img/studios/banner1.png`}
                        alt={`${process.env.PUBLIC_URL}/img/studios/banner1.png`}
                        onLoad={this.imgLoadedAmountAdd}
                    />
                </div>
            </div>

        );
    }
}