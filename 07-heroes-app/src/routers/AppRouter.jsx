import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={ 
					<PublicRoute>
						<LoginScreen />
					</PublicRoute> 
				} />
				<Route path='/*' element={ 
					<PrivateRoute>
						<DashboardRouter />
					</PrivateRoute> 
				} />
			</Routes>
		</BrowserRouter>
	)
}
