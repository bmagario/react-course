import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { SearchScreen } from '../../../components/search/SearchScreen';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,

}));

describe('Test SearchScreen', () => {
	
	const contextValue = {
		user: {
			logged: true,
			name: 'Brian Magario'
		}
	};

	test('Should render correctly with default values', () => {

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={ ['/search'] }>
					<SearchScreen />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.alert-warning').text().trim()).toBe('Search a hero');
	});

	test('Should show spiderman', () => {

		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={ ['/search?q=batman'] }>
					<SearchScreen />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		wrapper.find('input').simulate('change', {
			target: {
				name: 'searchText',
				value: 'batman'
			}
		});
		wrapper.find('form').prop('onSubmit')({
			preventDefault: () => {}
		});

		expect(mockNavigate).toHaveBeenCalled();
		
	});

});