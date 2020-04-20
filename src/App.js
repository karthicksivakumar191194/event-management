import React, {useEffect}  from 'react';
//import logo from './logo.svg'; import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "./layouts/BackEnd/Admin";
import Login from "./views/BackEnd/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/BackEnd/css/animate.min.css";
import "./assets/BackEnd/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/BackEnd/css/demo.css";
import "./assets/BackEnd/css/pe-icon-7-stroke.css";

import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './_actions/authActions';

export default function App() {
    //on component mount
    useEffect(() => {
        //store.dispatch(loadUser());
    }, []);

    // route render: func - inline rendering similar to 'component' since we use
    // inline rendering, we are passing the router props(history, match, ..) manually
    // to the component.
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/admin/" to="/admin/dashboard"/>
                    <Route path="/admin/login" render={props => <Login {...props}/>}/>
                    <Route path="/admin" render={props => <AdminLayout {...props}/>}/>
                    <Redirect from="/" to="/admin/dashboard"/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}
