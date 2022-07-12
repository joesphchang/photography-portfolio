import React from 'react';
import './Home.css';

// SlideShow
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Home() {
	const images = [
			'https://i.imgur.com/EZ1WvnQ.jpg',
            'https://i.imgur.com/8BiKbIS.jpg',
			'https://i.imgur.com/IRV3Z1n.jpg',
	];

	return (
		<div className='home-container'>
			<Fade>
				<div className='each-slide'>
					<div>
						<img src={images[0]} alt='nyc' />
					</div>
				</div>
				<div className='each-slide'>
					<div>
						<img src={images[1]} alt='landscape' />
					</div>
				</div>
				<div className='each-slide'>
					<div>
						<img src={images[2]} alt='mega-bus' />
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Home;
