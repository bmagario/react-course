import { useContext } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
	const { dispatch } = useContext(AuthContext);

	// const navigate = useNavigate();

	const handleLogin = () => {
		dispatch({
			type: types.login,
			payload: { name: 'Brian Magario' }
		});

		const lastPath = localStorage.getItem('lastPath') || '/';

		// navigate(lastPath, {
		// 	replace: true
		// });
	};

	return (
		<div className='container mt-5'>
			<h3 className='auth__title'>Login</h3>

			<form>

				<input 
					type='text'
					placeholder='email'
					name='email'
					autoComplete='off'
					className='auth__input'
					/>
				<input 
					type='password'
					placeholder='password'
					name='password'
					className='auth__input'
				/>
				<button 
					type='submit'
					className='btn btn-primary btn-block'
					onClick={ handleLogin }
				>
					Login
				</button>

				<hr />
				
				<div className='auth__social-network'>
					<p>Login wih social networks</p>
					<div 
						className="google-btn"
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
