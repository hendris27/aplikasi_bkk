import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Profile />} />
				<Route path="/" element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
