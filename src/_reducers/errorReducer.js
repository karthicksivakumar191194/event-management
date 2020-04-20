import { errorTypes }from '../_actions/_types';

const initialState = {
    msg: null,
    errors: {},
    status: null,
    id: null
}

function errorReducer(state = initialState, action){
    switch(action.type){
        case errorTypes.GET_ERRORS:
            return {
                msg: action.payload.msg,
                errors: action.payload.errors ? action.payload.errors : {},
                status: action.payload.status,
                id: action.payload.id
            };
        case errorTypes.CLEAR_ERRORS:
            return {
                msg: null,
                errors: {},
                status: null,
                id: null
            };
        default:
            return state;     
    }
}

export default errorReducer;
