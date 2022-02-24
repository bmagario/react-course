import React from 'react'

export const JournalEntry = () => {
	const url = 'https://www.zochagroup.com/wp-content/uploads/2020/03/ibiza-nightlife-destination-party-vacation.jpg';
	return (
		<div className='journal__entry'>
			
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url(${url})`
				}}
			>
			</div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>
					Ejemplo titulo
				</p>
				<p className='journal__entry-content'>
					Ejemplo Content
				</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28-02-2022</h4>
			</div>
		</div>
	)
}
