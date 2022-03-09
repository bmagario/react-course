import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDelete } from "../../actions/notes";

export const NoteScreen = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector(state => state.notes);
	const [ formValues, handleInputChange, reset ] = useForm(note);
	const { title, body, url } = formValues;

	const activeId = useRef(note.id);
	useEffect(() => {
		if(note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);

	useEffect(() => {
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [dispatch, formValues]);
	
	const handleDelete = () => {
		dispatch(startDelete(note.id));
	}

	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
					<input 
						type='text'
						placeholder='something amazing'
						className='notes__title-input'
						name='title'
						autoComplete='off'
						value={ title }
						onChange={ handleInputChange }
					/>
					<textarea
						placeholder='what happened today?'
						className='notes__textarea'
						name='body'
						value={ body }
						onChange={ handleInputChange }
					>
					</textarea>
					{
						url &&
						(<div className='notes__image'>
							<img 
								src={ url }
								alt='note'
							/>
						</div>)
						}
				</div>
				<button
					className='btn btn-danger'
					onClick={ handleDelete }
				>
					Delete
				</button>
		</div>
	)
}
