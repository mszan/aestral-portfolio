import React from 'react';

import {About} from "./components/jsx/about";
import {BackgroundVideo} from "./components/jsx/backgroundVideo";
import {Landing} from "./components/jsx/landing";
import {Studios} from "./components/jsx/studios";
import Work from "./components/jsx/work";

import {CSSTransitionGroup} from 'react-transition-group'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <BackgroundVideo/>
                <Switch location={this.props.location}>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/work" component={Work}/>
                    <Route exact path="/studios" component={Studios}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
