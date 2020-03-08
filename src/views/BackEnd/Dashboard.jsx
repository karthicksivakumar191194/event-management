import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                Welcome to Event Management...
            </div>
        )
    }
}