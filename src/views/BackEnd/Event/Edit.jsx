import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class EventEdit extends Component {
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
                                    <h4 className="title">Edit Event</h4>
                                    <p className="category"></p>
                                </div>
                                <div class="content">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Title</label>
                                                    <input
                                                        placeholder="Title"
                                                        type="text"
                                                        className="form-control"
                                                        value="Mike"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Category</label>
                                                    <input
                                                        placeholder="Category"
                                                        type="text"
                                                        className="form-control"
                                                        value="Andrew"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Location</label>
                                                    <input
                                                        placeholder="Location"
                                                        type="email"
                                                        className="form-control"
                                                        value=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Price</label>
                                                    <input
                                                        placeholder="Price"
                                                        type="number"
                                                        className="form-control"
                                                        value=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Available Tickets</label>
                                                    <input
                                                        placeholder="Available Tickets"
                                                        type="number"
                                                        className="form-control"
                                                        value=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Max Tickets per User</label>
                                                    <input
                                                        placeholder="Max Tickets per User"
                                                        type="number"
                                                        className="form-control"
                                                        value=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="control-label">Start Date</label>
                                                    <input placeholder="Start Date" type="date" className="form-control" value=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="control-label">End Date</label>
                                                    <input
                                                        placeholder="End Date"
                                                        type="date"
                                                        className="form-control"
                                                        value=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="control-label">Time</label>
                                                    <input placeholder="Time" type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="formControlsTextarea" className="control-label">Description</label>
                                                    <textarea
                                                        rows="5"
                                                        placeholder="Description"
                                                        id="formControlsTextarea"
                                                        className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn-fill pull-right btn btn-info">Update Event</button>
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