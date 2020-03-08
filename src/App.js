import React from 'react';
//import logo from './logo.svg'; 
//import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "./layouts/BackEnd/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

export default function App() {

   //route render: func - inline rendering similar to 'component'
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props}/>}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </BrowserRouter>
    );
}

