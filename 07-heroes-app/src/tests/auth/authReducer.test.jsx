import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Test Auth Reducer', () => {
	
	test('Should return default state', () => {
		const state = authReducer({ logged: false }, {});
		expect(state).toEqual({ logged: false });
		
	});

	test('Should authenticate and put the name property', () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Brian'
			}
		};

		const state = authReducer({ logged: false }, action);
		expect(state).toEqual({ 
			logged: true,
			name: 'Brian'
		});
	});

	test('Should logout and delete the name property', () => {
		const action = {
			type: types.logout
		};

		const state = authReducer({ logged: true, name: 'Brian' }, action);
		expect(state).toEqual({ 
			logged: false
		});
	});
});