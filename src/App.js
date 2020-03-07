import React from 'react';
//import logo from './logo.svg'; 
//import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "./layouts/BackEnd/Admin";

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

