import React from 'react';
import './Home.css';
import Hero from '../../assets/landing-page.jpg';
import Hero1 from '../../assets/landing-page-1.JPG';
import Hero2 from '../../assets/landing-page-3.jpg';

function Home() {
	return (
		<div className='home'>
			<div className='image-container'>
				<div className='image-container-2'>
					<div className='container'>
						<img src={Hero} alt='landing-page' className='home-image' />
						<h1>avantogarde</h1>
					</div>
					<div className='container-1'>
						<img src={Hero2} alt='landing-page' className='home-image' />
					</div>
				</div>
				<div className='image-container-1'>
					<img src={Hero1} className='home-image-1' alt='landing-page' />
				</div>
			</div>
		</div>
	);
}

export default Home;
