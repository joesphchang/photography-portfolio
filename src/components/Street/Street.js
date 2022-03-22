import React, { useState, useEffect } from 'react';

function Street() {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/streetphotos')
			.then((res) => res.json())
			.then((res) => {
				setPhotos(res);
			});
	}, []);

	return (
		<div className='lifestyle'>
			<ul className='portfolio-list'>
				{photos.map((photo) => {
					return (
						<li className='portfolio-list-items'>
							<img
								className='portfolio-images'
								src={photo.street_photos}
								alt={photo.title}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Street;
