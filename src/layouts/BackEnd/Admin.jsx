import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

export default class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <div
                    id="sidebar"
                    className="sidebar"
                    data-color="black"
                    data-image="/static/media/sidebar-3.34535b95.jpg">
                    <div className="sidebar-background"></div>
                    <div className="logo">
                        <a
                            href="https://www.creative-tim.com?ref=lbd-sidebar"
                            className="simple-text logo-mini">
                            <div className="logo-img"><img src="/static/media/reactlogo.9b864b36.png" alt="logo_image"/></div>
                        </a>
                        <a
                            href="https://www.creative-tim.com?ref=lbd-sidebar"
                            className="simple-text logo-normal">Event Management</a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="active">
                                <a aria-current="page" className="nav-link active" href="/admin/dashboard">
                                    <i className="pe-7s-graph"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li className="">
                                <a className="nav-link" href="/admin/user">
                                    <i className="pe-7s-user"></i>
                                    <p>My Profile</p>
                                </a>
                            </li>
                            <li className="">
                                <a aria-current="page" className="nav-link active" href="/admin/dashboard">
                                    <i className="pe-7s-users"></i>
                                    <p>User Management</p>
                                </a>
                            </li>
                            <li className="">
                                <a className="nav-link" href="/admin/table">
                                    <i className="pe-7s-note2"></i>
                                    <p>Event Management</p>
                                </a>
                            </li>
                            <li className="">
                                <a className="nav-link" href="/admin/typography">
                                    <i className="pe-7s-news-paper"></i>
                                    <p>Event Category</p>
                                </a>
                            </li>
                            <li className="">
                                <a className="nav-link" href="/admin/icons">
                                    <i className="pe-7s-map-marker"></i>
                                    <p>Event Locations</p>
                                </a>
                            </li>
                            <li className="">
                                <a className="nav-link" href="/admin/notifications">
                                    <i className="pe-7s-tools"></i>
                                    <p>Settings</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="main-panel" className="main-panel">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a href="#pablo" className="navbar-brand">Dashboard</a>
                                <button type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                <div>
                                    <ul className="nav navbar-nav">
                                        <li role="presentation" className="">
                                            <a href="#" role="button">
                                                <i className="fa fa-dashboard"></i>
                                                <p className="hidden-lg hidden-md">Dashboard</p>
                                            </a>
                                        </li>                                       
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">                                        
                                       <li role="presentation" className="">
                                            <a href="#" role="button">Log out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}