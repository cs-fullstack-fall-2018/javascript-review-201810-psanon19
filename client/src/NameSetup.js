import React, {Component} from "react";
import NameSetUpAgain from './NameSetUpAgain'


class NameSetup extends Component {
    render() {
        return <div className="setup">
            <NameSetUpAgain/>
            <h1>This is a Test</h1>
            <p> Something else</p>
            <p>Something more</p>
            <h1>{this.props.firstName} is awesome</h1>
        </div>
    }
}

export default NameSetup;