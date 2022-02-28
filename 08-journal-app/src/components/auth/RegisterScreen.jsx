import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { setError, removeError } from '../../actions/ui'
import { startRegisterEmailPasswordLogin } from "../../actions/auth";

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector(state => state.ui);

	const [ formValues, handleInputChange ] = useForm({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = formValues;

	const isFormValid = () => {
		if(name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if(!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		} else if(password !== password2 || password.length < 5) {
			dispatch(setError('Password dont match'));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if(isFormValid()) {
			dispatch(
				startRegisterEmailPasswordLogin(
					name,
					email,
					password
				)
			)
		}
		// dispatch({
		// 	type: types.register,
		// 	payload: { name: 'Brian Magario' }
		// });

		// const lastPath = localStorage.getItem('lastPath') || '/';

		// navigate(lastPath, {
		// 	replace: true
		// });
	};

	return (
		<div className='container mt-5'>
			<h3 className='auth__title'>Register</h3>

			<form onSubmit={ handleRegister }>
				{
					msgError &&
					(
					<div className='auth__alert-error'>
						{ msgError }
					</div>
					)
				}
				<input 
					type='text'
					placeholder='name'
					name='name'
					autoComplete='off'
					className='auth__input'
					value={ name }
					onChange={ handleInputChange }
				/>
				<input 
					type='text'
					placeholder='email'
					name='email'
					autoComplete='off'
					className='auth__input'
					value={ email }
					onChange={ handleInputChange }
				/>
				<input 
					type='password'
					placeholder='password'
					name='password'
					autoComplete='off'
					className='auth__input'
					value={ password }
					onChange={ handleInputChange }
				/>
				<input 
					type='password'
					placeholder='confirm password'
					name='password2'
					autoComplete='off'
					className='auth__input'
					value={ password2 }
					onChange={ handleInputChange }
				/>
				<button 
					type='submit'
					className='btn btn-primary btn-block'
				>
					Register
				</button>

				<hr />
				
				<div className='auth__social-network'>
					<p>Register wih social networks</p>
					<div 
						className="google-btn"
					>
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
							<b>Sign up with google</b>
						</p>
					</div>
				</div>

				<Link to='/auth/login' className='link'>
					Already register?
				</Link>
			</form>
		</div>
	)
}