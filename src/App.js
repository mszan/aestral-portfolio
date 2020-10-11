import React from 'react';
import {BackgroundVideo} from "./components/jsx/backgroundVideo";
import {Face} from "./components/jsx/face";
import { CSSTransitionGroup } from 'react-transition-group'
import classes from './App.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectedPage:0,
        }
    }

    setSelectedPage = number => {
        this.setState({
            selectedPage:number,
        });
    }

    render() {
        return (
            <div className={classes.appWrapper}>
                <BackgroundVideo/>
                <CSSTransitionGroup
                    transitionName="transition"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <Face
                        key = {this.state.selectedPage}
                        setSelectedPage = {this.setSelectedPage}
                        selectedPage = {this.state.selectedPage}
                    />
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default App;
