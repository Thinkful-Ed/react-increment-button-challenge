import React from 'react';
import IncrementButton from './increment-button';
import {hot} from "react-hot-loader";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton />
            </div>
        );
    }
}

export default hot(module)(App);
