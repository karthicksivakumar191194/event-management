import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class UserManagement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                User Management
            </div>
        )
    }
}