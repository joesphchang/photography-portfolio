import React from 'react';
import './Home.css';
import Hero from '../../assets/landing-page.jpg';
import Hero1 from '../../assets/landing-page-1.JPG';

function Home() {
	return (
		<div className='home'>
			<h2>
				avantogarde<span className='period'>.</span>
			</h2>

			<img src={Hero} alt='landing-page' className='home-image' />
			<div>
				<img src={Hero1} className='home-image-1' alt='landing-page' />
				<h1>Photographer / Creative Director</h1>
			</div>
		</div>
	);
}

export default Home;
