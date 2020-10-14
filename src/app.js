import React from 'react';
import {BackgroundVideo} from "./components/jsx/backgroundVideo";
import { CSSTransitionGroup } from 'react-transition-group'
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import {About} from "./components/jsx/about";
import Work from "./components/jsx/work";
import {Studios} from "./components/jsx/studios";
import classes from './app.module.css'
import {Landing} from "./components/jsx/landing";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Router>
                <div className={classes.appWrapper}>
                    <BackgroundVideo/>
                    <CSSTransitionGroup
                        transitionName="transition"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        <Switch>
                            <Route exact path="/">
                                <Landing/>
                            </Route>

                            <Route exact path="/about">
                                <About/>
                            </Route>

                            <Route exact path="/work">
                                <Work/>
                            </Route>

                            <Route exact path="/studios">
                                <Studios/>
                            </Route>
                        </Switch>
                    </CSSTransitionGroup>
                </div>
            </Router>
        );
    }
}

export default App;
