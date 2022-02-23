import { mount } from 'enzyme';
import { Routes, Route } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { HeroScreen } from '../../../components/hero/HeroScreen';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,

}));

describe('Test HeroScreen', () => {
	
	
	test('Should render correctly', () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				logged: true,
				name: 'Brian Magario'
			}
		};
	
		const wrapper = mount(
			<AuthContext.Provider value={ contextValue }>
				<MemoryRouter initialEntries={ ['/hero'] }>
					<Routes>
						<Route path='/hero' element={<HeroScreen />} />
						<Route path='/' element={<h1>No hero page</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	// test('Should show a hero', () => {
	// 	const contextValue = {
	// 		dispatch: jest.fn(),
	// 		user: {
	// 			logged: true,
	// 			name: 'Brian Magario'
	// 		}
	// 	};

	// 	const wrapper = mount(
	// 		<AuthContext.Provider value={ contextValue }>
	// 			<MemoryRouter initialEntries={ ['/hero/marvel-captain'] }>
	// 				<Routes>
	// 					<Route path='/hero/:heroeId' element={<HeroScreen />} />
	// 					<Route path='/' element={<h1>No hero page</h1>} />
	// 				</Routes>
	// 			</MemoryRouter>
	// 		</AuthContext.Provider>
	// 	);
	// 	console.log(wrapper.html());
	// 	expect(wrapper.find('.row').exists()).toBeTruthy();
	// });

	// test('Should return to the previous', () => {
	// 	const contextValue = {
	// 		dispatch: jest.fn(),
	// 		user: {
	// 			logged: true,
	// 			name: 'Brian Magario'
	// 		}
	// 	};

	// 	const wrapper = mount(
	// 		<AuthContext.Provider value={ contextValue }>
	// 			<MemoryRouter initialEntries={ ['/hero/marvel-captain'] }>
	// 				<Routes>
	// 					<Route path='/hero/:heroeId' element={<HeroScreen />} />
	// 				</Routes>
	// 			</MemoryRouter>
	// 		</AuthContext.Provider>
	// 	);
	// 	wrapper.find('button').prop('onClick')();
	// 	expect(mockNavigate).toHaveBeenCalledWith(0);
	// });


	
});