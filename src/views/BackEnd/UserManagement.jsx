import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class UserManagement extends Component {
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
                                    <h4 className="title">Users</h4>
                                    <div>
                                        <a className="btn-fill pull-right btn btn-info">Add New User</a>
                                    </div>
                                </div>
                                <div className="content table-full-width table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email Address</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>Test</td>
                                                <td>Test@test.com</td>
                                                <td className="td-actions text-left">
                                                    <a href="#" className="btn btn-info btn-link btn-xs" title="View User">
                                                        <i className="fa fa-eye"></i>
                                                    </a>
                                                    <a href="#" className="btn btn-danger btn-link btn-xs" title="Remove User">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>Test</td>
                                                <td>Test@test.com</td>
                                                <td class="text-left"></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>Test</td>
                                                <td>Test@test.com</td>
                                                <td class="text-left"></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>Test</td>
                                                <td>Test@test.com</td>
                                                <td class="text-left"></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Doris Greene</td>
                                                <td>Test</td>
                                                <td>Test@test.com</td>
                                                <td class="text-left"></td>
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