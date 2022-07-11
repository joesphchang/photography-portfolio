import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Street from './components/Street/Street';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Portfolio />} />
				<Route path='/street' element={<Street />} />
				<Route path='/projects' element={<Project />} />
				<Route path='/projects/:id' element={<ProjectDetails />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
