import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher = 'Marvel' }) => {
	const heroes = useMemo(() => getHeroByPublisher(publisher), [ publisher ])

	return (
		<div className='row row-cols-1 row-cols-3 g-3 animate__animated animate__fadeIn'>
			{
				heroes.map(hero => (
					<HeroCard 
						key={ hero.id }
						{...hero}					
					/>
				))
			}
		</div>
	)
}
