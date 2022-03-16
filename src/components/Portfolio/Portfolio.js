import React, { useState, useEffect } from 'react';
import './Portfolio.css';

function Portfolio() {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/portfolios')
			.then((res) => res.json())
			.then((res) => {
				setPhotos(res);
			});
	}, []);

	return (
		<div className='portfolio'>
			<h1>Portfolio</h1>
			<ul className='portfolio-list'>
				{photos.map((photo) => {
					return (
						<li className='portfolio-list-items'>
							<img className='portfolio-images' src={photo.image} alt={photo.title} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Portfolio;
