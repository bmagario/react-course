import { heroes } from '../data/heroes'

export const getHeroByPublisher = ( publisher ) => {
	return heroes.filter(h => h.publisher === publisher);
}