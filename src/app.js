import React from 'react';
import {BackgroundVideo} from "./components/jsx/backgroundVideo";
import { CSSTransitionGroup } from 'react-transition-group'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LandingNavBar} from "./components/jsx/landingNavBar";
import {Social} from "./components/jsx/social";
import {MainNavBar} from "./components/jsx/mainNavBar";
import {About} from "./components/jsx/about";
import {Footer} from "./components/jsx/footer";
import Work from "./components/jsx/work";
import {Studios} from "./components/jsx/studios";
import classes from './app.module.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
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
                                <div className={classes.landingFaceWrapper}>
                                    <div>
                                        <img width="100%" src={process.env.PUBLIC_URL + '/img/logos/aestral_logo_slim.png'} alt=""/>
                                    </div>
                                    <LandingNavBar/>
                                    <div className={classes.socialWrapper}>
                                        <Social/>
                                    </div>
                                </div>
                            </Route>

                            <Route exact path="/about">
                                <div className={classes.mainFaceWrapper}>
                                    <MainNavBar/>
                                    <About/>
                                    <Footer/>
                                </div>
                            </Route>

                            <Route exact path="/work">
                                <div className={classes.mainFaceWrapper}>
                                    <div className={classes.mainFaceWrapper}>
                                        <MainNavBar/>
                                        <Work/>
                                        <Footer/>
                                    </div>
                                </div>
                            </Route>

                            <Route exact path="/studios">
                                <div className={classes.mainFaceWrapper}>
                                    <MainNavBar/>
                                    <Studios/>
                                    <Footer/>
                                </div>
                            </Route>
                        </Switch>
                    </CSSTransitionGroup>
                </div>
            </Router>
        );
    }
}

export default App;
