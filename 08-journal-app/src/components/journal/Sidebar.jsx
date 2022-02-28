import { useDispatch } from "react-redux"
import { startLogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries"

export const Sidebar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	}

	return (
		<aside className='journal__sidebar'>
			<div className='journal__sidebar-navbar'>
				<h3 className='mt-5'>
					<i className='fa fa-moon'></i>
					<span> Brian</span>
				</h3>
				<button
					className='btn'
					onClick={ handleLogout }
				>
					Logout
				</button>

			</div>

			<div className='journal__new-entry'>
				<i className='fa fa-calendar-plus fa-4x'></i>
				<p className='mt-5'>New Entry</p>
			</div>

			<JournalEntries />
		</aside>
	)
}
