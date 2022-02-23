import { Link } from "react-router-dom";

// import batman from '../../assets/dc-batman.jpg'; //Just for static content
const heroImages = require.context('../../assets/', true)

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters
}) => {

	// const imagePath = `${process.env.PUBLIC_URL}/assets/${id}.jpg`;
	const imagePath = heroImages(`./${id}.jpg`);

	return (
		<div className='col'>
			<div className='card'>
				<div className='row no-gutters'>
					<div className='col-md-4'>
						<img src={ imagePath } className='card-img' alt={ superhero } />
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5 className='card-title'>{ superhero }</h5>
							<p className='card-text'>{ alter_ego }</p>
							{
								( alter_ego !== characters) &&
								<p className='text-muted'>{ characters }</p>
							}
							<p className='card-text'>
								<small className='text-muted'>{	first_appearance }</small>
							</p>
							<Link to={`/hero/${id}`}>+ Info</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
