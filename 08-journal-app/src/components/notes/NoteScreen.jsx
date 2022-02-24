import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	const imageUrl = 'https://i.pinimg.com/564x/ff/5a/cb/ff5acbfeb585721703277a2b0fbbf681.jpg';

	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
					<input 
						type='text'
						placeholder='something amazing'
						className='notes__title-input'
						name='something'
						autoComplete='off'
					/>
					<textarea
						placeholder='what happened today?'
						className='notes__textarea'
					>
					</textarea>
					<div className='notes__image'>
						<img 
							src={imageUrl}
							alt='note'
						/>
					</div>
				</div>
		</div>
	)
}
