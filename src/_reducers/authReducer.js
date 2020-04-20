import {authTypes} from '../_actions/_types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case authTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case authTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case authTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case authTypes.AUTH_ERROR:
        case authTypes.LOGIN_FAIL:
        case authTypes.LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            }                  
        default:
            return state;
    }
}

export default authReducer;