import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom'; 

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	Navigate: () => <span>Flying away from here</span>
}));

describe('Test PrivateRoute', () => {
	Storage.prototype.setItem = jest.fn();

	test('Should render ok', () => {
		const contextValue = {
			user: {
				logged: true,
				name: 'Brian Magario'
			}
		};

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={[ '/' ]}>
					<PrivateRoute>
						<h1>Private Component</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
	});

	test('Should login if user is authenticated and save in localStorage', () => {
		const contextValue = {
			user: {
				logged: true,
				name: 'Brian Magario'
			}
		};

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={[ '/' ]}>
					<PrivateRoute>
						<h1>Private Component</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper.find('h1').exists()).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
	});

	test('Should lock the component if it is not authenticated', () => {
		const contextValue = {
			user: {
				logged: false
			}
		};

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={[ '/' ]}>
					<PrivateRoute>
						<h1>Private Component</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper.find('span').exists()).toBeTruthy();
	});

});