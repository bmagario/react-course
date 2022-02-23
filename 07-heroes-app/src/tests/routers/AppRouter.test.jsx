import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Test AppRouter', () => {
	
	test('Should login if user is not authenticated', () => {
		const contextValue = {
			user: {
				logged: false
			}
		};

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h1').text().trim()).toBe('Login Screen');
	});

	test('Should the marvel component if is authenticated', () => {
		const contextValue = {
			user: {
				logged: true,
				name: 'Brian'
			}
		};

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.navbar').exists()).toBeTruthy();
	});

});