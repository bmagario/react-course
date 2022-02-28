import Swal from 'sweetalert2';
import { 
	auth,
	googleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
	signOut
} from '../firebase/firebase.config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startRegisterEmailPasswordLogin = (name, email, password) => {
	return async dispatch => {
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			const user = res.user;
			await updateProfile(user, {
				displayName: name
			});
			dispatch(login(
				user.uid, 
				user.displayName
			))
		} catch (e) {
			dispatch(finishLoading());
			Swal.fire('Error: ' + e.message, 'Error');
		}
	}
};

export const startLoginEmailPasswordLogin = (email, password) => {
	return async dispatch => {
		try {
			dispatch(startLoading());
			const res = await signInWithEmailAndPassword(auth, email, password);
			const user = res.user;
			dispatch(login(
				user.uid, 
				user.displayName
			));
			dispatch(finishLoading());
		} catch (e) {
			dispatch(finishLoading());
			Swal.fire('Error: ' + e.message, 'Error');
		}
	}
};

export const signInWithGoogle = () => {
	return async dispatch => {
		const res = await signInWithPopup(auth, googleAuthProvider);
		const user = res.user;
		dispatch(login(
			user.uid, 
			user.displayName
		))
	}
};

export const login = ( uid, displayName ) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
});

export const startLogout = () => {
	return async dispatch => {
		await signOut(auth);
		dispatch(logout());
	}
};

export const logout = () => ({
	type: types.logout
})