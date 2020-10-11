import React from 'react';
import {BackgroundVideo} from "./components/jsx/backgroundVideo";
import {Face} from "./components/jsx/face";
import { CSSTransitionGroup } from 'react-transition-group'
import classes from './App.css'


class App extends React.Component {
    constructor() {
        super(App);
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
            <React.StrictMode>
                    <BackgroundVideo/>
                    <CSSTransitionGroup
                        transitionName="transition"
                        transitionAppear={true}>
                        <Face
                            key = {this.state.selectedPage}
                            setSelectedPage = {this.setSelectedPage}
                            selectedPage = {this.state.selectedPage}
                        />
                    </CSSTransitionGroup>

            </React.StrictMode>
        );
    }
}

export default App;
