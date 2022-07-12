import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch('https://avanto-photography-backend.herokuapp.com/api/projects')
			.then((res) => res.json())
			.then((res) => {
				setProjects(res);
			});
	}, []);

	return (
		<div className='projects'>
			<ul className='project-list'>
				{projects.map((project) => {
					return (
						<Link
							to={`/projects/${project._id}`}
							className='project-list-items'>
							<img
								className='project-images'
								src={project.photo}
								alt={project.title}
							/>
							<h3>{project.title}</h3>
              <p>{project.description}</p>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

export default Project;
