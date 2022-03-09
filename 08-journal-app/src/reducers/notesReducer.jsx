import { types } from "../types/types";

const initialState = {
	notes: [],
	active: null,

}

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.notesAddNew:
			return {
				...state,
				notes: [...state.notes, action.payload]
			}			
		case types.notesSetActive:
			return {
				...state,
				active: {
					...action.payload
				}
			}			
		case types.notesLoad:
			return {
				...state,
				notes: [...action.payload]
			}
		case types.notesUpdate:
			return {
				...state,
				active: null,
				notes: state.notes.map(
					note => note.id === action.payload.id
					? action.payload.note
					: note
				)
			}
		case types.notesDelete:
			return {
				...state,
				notes: state.notes.filter(note => note.id !== action.payload)
			}
		case types.notesLogoutCleaning:
			return {
				...state,
				active: null,
				notes: []
			}
		default:
			return state;
	}

}