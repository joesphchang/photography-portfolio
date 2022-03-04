import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/projects' element={<Project />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
