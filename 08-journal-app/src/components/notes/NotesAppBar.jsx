import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector(state => state.notes);

	const handleSaveNote = () => {
		dispatch(startSaveNote(note));
	}; 

	const handlePictureUpload = () => {
		document.querySelector('#fileSelector').click();
	}; 

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if(file) {
			dispatch(startUploading(file));
		}
	}; 

	return (
		<div className='notes__app-bar'>
			<span>28 August 2022</span>
			<input 
				id='fileSelector'
				type='file'
				name='file'
				style={{ display:'none' }}
				onChange={ handleFileChange }
			/>
			<div>
				<button
					className='btn btn-primary'
					onClick={ handlePictureUpload }
				>
					Upload
				</button>
				<button
					className='btn btn-primary'
					onClick={ handleSaveNote }
				>
					Save
				</button>
			</div>
		</div>
	)
}
