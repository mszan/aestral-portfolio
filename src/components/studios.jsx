import React from 'react';

import classes from './studios.module.css'
import ClipLoader from "react-spinners/ClipLoader";

class Studios extends React.Component {
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
        if (this.state.imgLoadedAmount === 5) {
            this.hideSpinner();
        }
    }

    getCovers() {
        let coversAmount = 6;
        let res = [];
        for(let i = 1; i <= coversAmount; i++) {
            let imgSource = `/img/studios/cover${i}.png`
            res.push(<img
                className={classes.studiosCoverImg}
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
                     style={{display: this.state.loading ? 'none' : 'block' }}>
                    {this.getCovers()}
                </div>
            </div>

        );
    }
}

Studios.propTypes = {};

export default Studios;