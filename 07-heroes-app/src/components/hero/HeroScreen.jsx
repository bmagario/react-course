import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";
import { HeroCard } from "./HeroCard";

export const HeroScreen = () => {
	const params = useParams();
	const navigate = useNavigate();

	const hero = useMemo(() => getHeroById(params.id), [ params.id ])

	// Check Hero existence.
	if(!hero) {
		return (
			<Navigate to='/'/>
		)
	}


	const handleReturn = () => {
		navigate(-1);
	}

	return (
		<>
			<div className='col-4'>
				<HeroCard { ...hero }/>
			</div>
			<button
				className='btn btn-primary'
				onClick={ handleReturn }
			>
				Back
			</button>
		</>
	)
}
