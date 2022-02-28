import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = compose(
	applyMiddleware(thunk, logger),
	window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: args => args,
);

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer
});
export const store = createStore(
	reducers,
	composeEnhancers
);