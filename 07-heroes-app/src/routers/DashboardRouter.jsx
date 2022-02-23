import { Route, Routes } from "react-router"

import { DCScreen } from "../components/dc/DCScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/NavBar"

export const DashboardRouter = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='marvel' element={<MarvelScreen />}></Route>
					<Route path='dc' element={<DCScreen />}></Route>
					<Route path='search' element={<SearchScreen />}></Route>
					<Route path='hero/:id' element={<HeroScreen />}></Route>
					<Route path='/' element={<MarvelScreen />}></Route>
				</Routes>
			</div>
		</>
	)
}
