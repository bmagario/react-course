import { mount } from 'enzyme';
import { Routes, Route } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { LoginScreen } from '../../components/login/LoginScreen';
import { types } from '../../types/types';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,

}));

describe('Test Navbar', () => {
	
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: false
		}
	};

	const wrapper = mount(
		<AuthContext.Provider value={ contextValue }>
			<MemoryRouter initialEntries={ ['/login'] }>
				<Routes>
					<Route path='/login' element={<LoginScreen />} />
				</Routes>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	test('Should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Should call login, call navigate and dispatch with arguments', () => {
		const handleClick = wrapper.find('button').prop('onClick');
		handleClick();

		expect(contextValue.dispatch).toHaveBeenCalledWith({ 
			"type": types.login,
			"payload": {
				name: 'Brian Magario'
			}
		});
		expect(mockNavigate).toHaveBeenLastCalledWith('/', { replace: true });
		
		localStorage.setItem('lastPath', '/dc');
		handleClick();
		expect(mockNavigate).toHaveBeenLastCalledWith('/dc', { replace: true });
	});

	
});