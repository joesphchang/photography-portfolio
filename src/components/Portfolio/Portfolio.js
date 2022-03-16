import React, { useState, useEffect } from 'react';

function Portfolio() {
	const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/portfolios')
      .then((res) => res.json())
      .then((res) => {
        setPhotos(res);
      })
  }, [])


	return (
		<div className='portfolio'>
			<h1>Portfolio</h1>
      <ul>
      {photos.map((photo) => {
        return (
          <img src={photo.image} alt={photo.title} /> 
        )
      })}
      </ul>
		</div>
	);
}

export default Portfolio;
