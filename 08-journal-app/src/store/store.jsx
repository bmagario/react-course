import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';

const composeEnhancers = compose(
	// applyMiddleware(thunk, logger),
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: args => args,
);

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	notes: notesReducer
});
export const store = createStore(
	reducers,
	composeEnhancers
);