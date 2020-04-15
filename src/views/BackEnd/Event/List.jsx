import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class EventList extends Component {
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
                                    <h4 className="title">Events</h4>
                                    <div>
                                        <a className="btn-fill pull-right btn btn-info">Add New Event</a>
                                    </div>
                                </div>
                                <div className="content table-full-width table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Location</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>Test</td>
                                                <td>Test</td>
                                                <td>09-03-20</td>
                                                <td>15-03-20</td>
                                                <td className="td-actions text-left">
                                                    <a href="#" className="btn btn-info btn-link btn-xs" title="View Event">
                                                        <i className="fa fa-eye"></i>
                                                    </a>
                                                    <a href="#" className="btn btn-success btn-link btn-xs" title="Edit Event">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <a href="#" className="btn btn-danger btn-link btn-xs" title="Remove Event">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>Test</td>
                                                <td>Test</td>
                                                <td>09-03-20</td>
                                                <td>15-03-20</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>Test</td>
                                                <td>Test</td>
                                                <td>09-03-20</td>
                                                <td>15-03-20</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>Test</td>
                                                <td>Test</td>
                                                <td>09-03-20</td>
                                                <td>15-03-20</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Doris Greene</td>
                                                <td>Test</td>
                                                <td>Test</td>
                                                <td>09-03-20</td>
                                                <td>15-03-20</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}