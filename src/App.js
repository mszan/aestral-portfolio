import React from 'react';
import BackgroundVideo from "./components/backgroundVideo";
import Face from "./components/face";
import { CSSTransitionGroup } from 'react-transition-group' // ES6


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
                    <Face
                        setSelectedPage = {this.setSelectedPage}
                        selectedPage = {this.state.selectedPage}
                    />
            </React.StrictMode>
        );
    }
}

export default App;
