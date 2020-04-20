import axios from 'axios';
import {API_URL} from '../constants'
import {authTypes} from './_types';
import {returnErrors, clearErrors} from './errorActions';

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({type: authTypes.USER_LOADING})

    //Get User
    const fetchUserAPIURL = API_URL + '/auth/user';
    axios
        .get(fetchUserAPIURL, tokenConfig(getState))
        .then(res => {
            console.log(res); 
            //User Loaded - from API
            dispatch({type: authTypes.USER_LOADED, payload: ''});
        })
        .catch(er => {
            //console.log(er.response)
            const {
                response: {
                    data: {
                        code = '',
                        msg = ''
                    }
                }
            } = er;
            //Handle Auth Error
            dispatch(returnErrors(msg, '', code))
            dispatch({type: authTypes.AUTH_ERROR})
        });
}

//Setup config/headers & token
export const tokenConfig = getState => {
    //Get Token from localStorage | auth - reducer name added on the combineReducer
    const _token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //If token, add to headers
    if (_token) {
        config.headers['x-auth-token'] = _token;
        //config.headers.x_auth_token = _token; config.headers.x-auth-token = _token;
    }

    return config;
}

export const login = ({email, password}) => dispatch => {
    //Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //Request Body
    const body = JSON.stringify({email, password});

    //Login Request
    const loginAPIURL = API_URL + '/auth/login';
    axios
        .post(loginAPIURL, body, config)
        .then(res => {
            //console.log(res); 
            dispatch(clearErrors());
            dispatch({type: authTypes.LOGIN_SUCCESS, payload: res.data})
        })
        .catch(er => {
            //console.log(er.response)
            const {
                response: {
                    data: {
                        code = '',
                        error = {},
                        msg = null
                    }
                }
            } = er;
            dispatch(returnErrors(msg, error, code, 'LOGIN_FAIL'));
            dispatch({type: authTypes.LOGIN_FAIL})
        });
}

/*
getState() -
Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.
*/