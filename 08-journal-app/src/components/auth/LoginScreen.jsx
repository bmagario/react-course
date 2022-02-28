import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { signInWithGoogle, startLoginEmailPasswordLogin } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.ui);


	const [ formValues, handleInputChange ] = useForm({
		email: 'brian2@gmail.com',
		password: 'allday'
	});

	const { email, password } = formValues; 

	const isFormValid = () => {
		if(!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		} else if(password.length < 5) {
			dispatch(setError('Password dont match'));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	const handleLogin = (e) => {
		e.preventDefault();
		if(isFormValid()) {
			dispatch(startLoginEmailPasswordLogin(email, password));
		}
	};

	const handleGoogleLogin = () => {
		dispatch(signInWithGoogle());
	}

	return (
		<div className='container mt-5'>
			<h3 className='auth__title'>Login</h3>

			<form onSubmit={ handleLogin }>

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
					className='auth__input'
					value={ password }
					onChange={ handleInputChange }
				/>
				<button 
					type='submit'
					className='btn btn-primary btn-block'
					disabled={ loading }
				>
					Login
				</button>

				<hr />
				
				<div className='auth__social-network'>
					<p>Login wih social networks</p>
					<div 
						className="google-btn"
						onClick={ handleGoogleLogin }
					>
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link to='/auth/register' className='link'>
					Create new account
				</Link>
			</form>
		</div>
	)
}
