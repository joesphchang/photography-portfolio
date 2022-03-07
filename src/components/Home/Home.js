import React from 'react';
import './Home.css';
import Hero from '../../assets/landing-page.jpg';

function Home() {
	return (
		<div className='home'>
			<h1>Photographer / Creative Director</h1>
			<h2>avantogarde<span className='period'>.</span></h2>
			<img src={Hero} alt='landing-page' className='home-image'/>
		</div>
	);
}

export default Home;
