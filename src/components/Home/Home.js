import React from 'react'
import Hero from '../../assets/hero-photo-home.jpg';

function Home() {
  return (
    <div className='home-container'>
        <img src={Hero} alt='hero-img' />
    </div>
  )
}

export default Home