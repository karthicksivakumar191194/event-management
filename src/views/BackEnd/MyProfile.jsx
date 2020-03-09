import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class MyProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h4 className="title">Edit Profile</h4>
                                    <p className="category"></p>
                                </div>
                                <div class="content">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">First name</label>
                                                    <input
                                                        placeholder="First name"
                                                        type="text"
                                                        className="form-control"
                                                        value="Mike"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Last name</label>
                                                    <input
                                                        placeholder="Last name"
                                                        type="text"
                                                        className="form-control"
                                                        value="Andrew"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Email address</label>
                                                    <input
                                                        placeholder="Email address"
                                                        type="email"
                                                        className="form-control"
                                                        value=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Password</label>
                                                    <input
                                                        placeholder="Password"
                                                        type="password"
                                                        className="form-control"
                                                        value=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="formControlsTextarea" className="control-label">Address</label>
                                                    <textarea
                                                        rows="5"
                                                        placeholder="Address"
                                                        id="formControlsTextarea"
                                                        className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="control-label">City</label>
                                                    <input placeholder="City" type="text" className="form-control" value="Mike"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="control-label">Country</label>
                                                    <input
                                                        placeholder="Country"
                                                        type="text"
                                                        className="form-control"
                                                        value="Andrew"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="control-label">Postal Code</label>
                                                    <input placeholder="ZIP Code" type="number" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn-fill pull-right btn btn-info">Update Profile</button>
                                        <div class="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}