import React from 'react'

export const NotesAppBar = () => {
	return (
		<div className='notes__app-bar'>
			<span>28 August 2022</span>
			<div>
				<button
					className='btn btn-primary'
				>
					Upload
				</button>
				<button
					className='btn btn-primary'
				>
					Save
				</button>
			</div>
		</div>
	)
}
