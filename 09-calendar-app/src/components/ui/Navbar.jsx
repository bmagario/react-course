import React from 'react'

export const Navbar = () => {
	return (
		<div className='navbar navbar-dark bg-dark mb-4'>
			<span className='navbar-brand m-1'>
				Brian
			</span>
			<button className='btn btn-outline-danger m-1'>
				<i className='fa fa-sign-out'></i>
				<span> Sign Out</span>
			</button>
		</div>
	)
}
