import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                Oops! Not Found..
            </div>
        )
    }
}