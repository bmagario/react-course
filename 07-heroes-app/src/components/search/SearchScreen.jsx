import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';

export const SearchScreen = () => {

	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [ values, handleInputChange ] = useForm({
		searchText: q
	});
	const { searchText } = values;
	
	// Only reexecute when query change.
	const heroesFiltered =  useMemo(() => getHeroesByName(q), [ q ]);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1>Search Screen</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Search Form</h4>
					<hr />
					<form onSubmit={ handleSubmit }>
						<input 
							type='text'
							placeholder='type to search a hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							onChange={ handleInputChange }
							value={ searchText }
						/>
						<button
							type='submit'
							className='btn btn-outline-primary mt-1 btn-block'
						>
							Search...
						</button>
					</form>

				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />

					{
						(q === '')
							? <div className='alert alert-warning'>
									Search a hero
								</div>
							: ( heroesFiltered.length === 0) 
								&& <div className='alert alert-warning'>
										There are not result
									</div>
					}

					{
						heroesFiltered.map(hero => (
							<HeroCard 
								key={ hero.id }
								{...hero}					
							/>
						))
					}

				</div>
			</div>
		</>
	)
}
