import { useEffect, useState } from 'react';
import { 
	BrowserRouter as Router,
	Switch,
	Redirect
} from 'react-router-dom';

import { auth, onAuthStateChanged } from '../firebase/firebase.config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes, startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				dispatch(login(
					user.uid,
					user.displayName
				));
				setIsLoggedIn(true);
				dispatch(startLoadingNotes(user.uid));				
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch, checking, isLoggedIn]);
	
	if(checking) {
		return <h1>Waiting...</h1>
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path='/auth'
						component={ 
							AuthRouter
						}
						isAuthenticated={ isLoggedIn }
						/>
					<PrivateRoute 
						path='/' 
						component={ 
							JournalScreen
						}
						isAuthenticated={ isLoggedIn }
						exact
					/>
					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	)
}
