import {errorTypes} from './_types';

//Return ERRORS
export const returnErrors = (msg, errors, status, id) => {
    return {
        type: errorTypes.GET_ERRORS,
        payload: {
            msg,
            errors,
            status,
            id
        }
    }
}

//Clear ERRORS
export const clearErrors = () => {
    return {type: errorTypes.CLEAR_ERRORS}
}