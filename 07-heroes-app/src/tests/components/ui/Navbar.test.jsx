import { mount } from 'enzyme';
import { Routes, Route } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/NavBar';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,

}));

describe('Test Navbar', () => {
	
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: true,
			name: 'Brian Magario'
		}
	};

	const wrapper = mount(
		<AuthContext.Provider value={ contextValue }>
			<MemoryRouter initialEntries={ ['/'] }>
				<Routes>
					<Route path='/' element={<Navbar />} />
				</Routes>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	test('Should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-info').text().trim()).toBe('Brian Magario');
	});

	test('Should call logout, call navigate and dispatch with arguments', () => {
		wrapper.find('button').prop('onClick')();

		expect(contextValue.dispatch).toHaveBeenCalledWith({ "type": types.logout });
		expect(mockNavigate).toHaveBeenLastCalledWith('/login', { replace: true });
	});

	
});