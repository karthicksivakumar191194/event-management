import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Sidebar from '../../components/BackEnd/Sidebar/Sidebar'
import TopNavBar from '../../components/BackEnd/NavBars/TopNavBar'
import Footer from '../../components/BackEnd/Footer/Footer'
import {adminRoutes as routes} from '../../routes';

export default class Admin extends Component {
    constructor(props) {
        super(props);
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (<prop.component {...props}/>)}
                        key={key}/>
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (
            <div className="wrapper">
                <Sidebar {...this.props} routes={routes}/>
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <TopNavBar/>
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Footer/>
                </div>
            </div>
        )
    }
}