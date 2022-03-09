import Swal from "sweetalert2";
import { collection, doc, db, addDoc, updateDoc, deleteDoc } from "../firebase/firebase.config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types"

export const addNewNote = (err) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const newNote = {
			title: 'Otraaaa',
			body: 'Prueba de textoooo',
			date: new Date().getTime()
		}

		const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
		dispatch(activeNote(docRef.id, newNote));
		dispatch(addNew(docRef.id, newNote));
	}
}

export const activeNote = ( id, note ) => ({
	type: types.notesSetActive,
	payload: {
		id,
		...note
	}
})

export const addNew = (id, note) => ({
	type: types.notesAddNew,
	payload: {
		id,
		...note
	}
})

export const setNotes = (notes) => ({
	type: types.notesLoad,
	payload: notes
})

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	}
}

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if(!note.url){
      delete note.url
    }
 
    const noteToFirestore = {...note}
    delete noteToFirestore.id
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
    await updateDoc(noteRef, noteToFirestore);
		dispatch(refreshNote(note.id, note));
	}
}

export const refreshNote = (id, note) => ({
	type: types.notesUpdate,
	payload: {
		id,
		note: {
			id,
			...note
		}
	}
});

export const startUploading = (file) => {
	return async (dispatch, getState) => {
		const { active:note } = getState().notes;
		Swal.fire({
			title: 'Uploading',
			text: 'Please wait...',
			allowOutsideClick: false,
			onBeforeOpen: () => {
				Swal.showLoading()
			}
		});
		const url = await fileUpload(file);
		note.url = url;
		dispatch(startSaveNote(note));
		Swal.close();
	}
};

export const startDelete = (id) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

    const noteRef = doc(db, `${uid}/journal/notes/${id}`)
    await deleteDoc(noteRef);
		dispatch(deleteNote(id));
	}
};

export const deleteNote = (id) => ({
	type: types.notesDelete,
	payload: id
})

export const cleanNotes = () => ({
	type: types.notesLogoutCleaning
})