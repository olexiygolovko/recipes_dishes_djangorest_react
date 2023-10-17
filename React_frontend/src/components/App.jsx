import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import '../styles/App.css'


import Main from './Main'
import Category from './Category'
import Recipe from './Recipe'
import CategoryRubric from './CategoryRubric'



function App() {
	return (
		<Router>
		<div className='main'>
			<div className='button'>
				<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/'}>🏠 Home</NavLink></button>
				<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/category/'}>Category</NavLink></button>
			</div>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path={'/category/'} element={<CategoryRubric />} />
					<Route path={'/category/:category'} element={<Category />} />
					<Route path={'/recipe/:id'} element={<Recipe />} />
					<Route path={'*'} element={<h1>Page not found 😅</h1>} />
				</Routes>
			</div>
		</Router>
	)
}

export default App