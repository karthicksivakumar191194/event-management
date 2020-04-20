import React, {Component} from "react";
import "./../../assets/BackEnd/css/login.css";
import logo from "../../assets/BackEnd/img/reactlogo.png";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../_actions/authActions';
import {clearErrors} from '../../_actions/errorActions';

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null,
        errors: {}
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const {email, password} = this.state;

        const user = {
            email,
            password
        };

        //Atempt to Login
        this
            .props
            .login(user);
    }

    componentDidMount() {
        //console.log('login-mount');
        const {isAuthenticated} = this.props;
        if (isAuthenticated && localStorage.getItem('token')) {
            //if authenticated - trigger when browser back button is hit after login
            this.props.history.push('/admin/dashboard')
        }
    }

    componentDidUpdate(prevProps) {
        console.log('login-update');
        const {error, isAuthenticated} = this.props;
        if (isAuthenticated && localStorage.getItem('token')) {
            //if authenticated
            this.props.history.push('/admin/dashboard')
        } else {
            //if not authenticated
            if (error !== prevProps.error) {
                if (error.id === 'LOGIN_FAIL') {
                    if (error.errors && this.isObjEmpty(error.errors)) {
                        this.setState({msg: error.msg});
                    }
                    this.setState({errors: error.errors});
                } else {
                    this.setState({msg: null});
                    this.setState({errors: {}});
                }
            }
        }
    }

    isObjEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    hasErrorFor = (fieldName) => {
        return !!this.state.errors[fieldName];
    }

    renderErrorFor = (fieldName) => {
        if (this.hasErrorFor(fieldName)) {
            return (
                <p className="error validation-field-error">{this.state.errors[fieldName]}</p>
            )
        }
    }

    render() {
        return (
            <div className="pageBody">
                <div className="loginBox">
                    <div className="logoContainer">
                        <img src={logo} alt="logo"/>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            onChange={this.onChange}/> {this.renderErrorFor('email')}
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.onChange}/> {this.renderErrorFor('password')}
                        <input type="submit" name="sign-in" value="Sign In"/> {this.state.msg && <p className="error validation-field-error">{this.state.msg}</p>}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // get all state stored in redux store
    // console.log('login-mapStateToProps',state);
    return {isAuthenticated: state.auth.isAuthenticated, error: state.error}
}

//login, clearErrors - dispatch can be used here
export default connect(mapStateToProps, {login, clearErrors})(Login);