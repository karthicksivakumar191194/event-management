import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './_reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;

/**
 * func1(func2(func3(func4))))
 * we could just write
 * compose(func1, func2, func3, func4)
 * These two lines of code do the same thing. It is only the syntax which differs.
 */