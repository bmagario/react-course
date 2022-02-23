import { heroes } from '../data/heroes'

export const getHeroesByName = ( name = '' ) => {
	name = name.toLowerCase();
	if(name === '') {
		return [];
	}
	return heroes.filter(h => h.superhero.toLowerCase().includes(name));
}