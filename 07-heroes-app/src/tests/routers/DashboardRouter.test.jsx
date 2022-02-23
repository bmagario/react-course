import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRouter } from '../../routers/DashboardRouter';

describe('Test DashboardRouter', () => {
	
	const contextValue = {
		user: {
			logged: true,
			name: 'Brian Magario'
		}
	};
	test('Should render correctly', () => {

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={ ['/'] }>
					<DashboardRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-info').text().trim()).toBe('Brian Magario');
	});

	test('Should render correctly DC', () => {

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={ ['/dc'] }>
					<DashboardRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-info').text().trim()).toBe('Brian Magario');
	});

});