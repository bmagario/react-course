import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const RegisterScreen = () => {
	const { dispatch } = useContext(AuthContext);

	// const navigate = useNavigate();

	const handleRegister = () => {
		dispatch({
			type: types.register,
			payload: { name: 'Brian Magario' }
		});

		const lastPath = localStorage.getItem('lastPath') || '/';

		// navigate(lastPath, {
		// 	replace: true
		// });
	};

	return (
		<div className='container mt-5'>
			<h1>RegisterScreen</h1>

			{/* <button 
				className='btn btn-primary'
				onClick={ handleRegister }
			>
				Register
			</button> */}
		</div>
	)
}
