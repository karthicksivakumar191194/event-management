import React, {Component} from "react";
import "./../../assets/BackEnd/css/login.css";
import logo from "../../assets/BackEnd/img/reactlogo.png"

export default class Login extends Component {

    render() {
        return (
            <div className="pageBody">
            <div className="loginBox">
                <div className="logoContainer">
                    <img src={logo} alt="logo"/>
                </div>
                <form>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="submit" name="sign-in" value="Sign In"/>
                </form>
            </div>
            </div>
        )
    }
}