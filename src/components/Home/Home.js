import React, { useState } from 'react';
import './Home.css';

const images = [
	{
		id: 0,
		source: 'https://i.imgur.com/FGu8mvi.jpg',
		alt: 'Night Skies',
	},
	{
		id: 1,
		source: 'https://i.imgur.com/H1z2lAc.jpg',
		alt: 'Night Walks',
	},
	{
		id: 2,
		source: 'https://i.imgur.com/M58JBpv.jpg',
		alt: 'YawkowBanks - BCE',
	},
	{
		id: 3,
		source: 'https://i.imgur.com/g1hSLdU.jpg',
		alt: 'Deng - BCE',
	},
	{
		id: 4,
		source: 'https://i.imgur.com/6ULGH9s.jpg',
		alt: '1963 Impala',
	},
	{
		id: 5,
		source: 'https://i.imgur.com/oPeQaLZ.jpg',
		alt: 'Deni - Studio',
	},
	{
		id: 6,
		source: 'https://i.imgur.com/3TEvYsp.jpg',
		alt: 'Victoria - Flowers',
	},
	{
		id: 7,
		source: 'https://i.imgur.com/0K8ZO6c.jpg',
		alt: 'The love of twins',
	},
	{
		id: 8,
		source: 'https://i.imgur.com/s94gaDY.jpg',
		alt: 'The car that sits at the taco spot everyday',
	},
	{
		id: 9,
		source: 'https://i.imgur.com/CQPc0M3.jpg',
		alt: 'Boston',
	},
];
function Home() {
	const [current, setCurrent] = useState(0);
	const length = images.length;

	function nextSlide() {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	function prevSlide() {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}
	return (
		<div className='home'>
			{images.map((image, index) => {
				return (
					<div key={image.source}>
						{index === current}
						{index === current && (
							<img
								src={image.source}
								alt={image.alt}
								className='home-images'
							/>
						)}
					</div>
				);
			})}
			<div>
				<button onClick={prevSlide} className='home-btn-1 home-btn'>
					←
				</button>
				<button onClick={nextSlide} className='home-btn-2 home-btn'>
					→
				</button>
			</div>
		</div>
	);
}

export default Home;
