import React from 'react'
import './Hero.css'
import Arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>
            Explore, Learn, Thrive.
Unveil the World of Knowledge with Us!
            </h1>
            <p>Welcome to EduVista, where learning knows no bounds. Dive into a world of 
                endless possibilities as we offer comprehensive educational resources tailored
                 to your needs. From interactive courses to expert-led tutorials, embark
                  on a journey of discovery and growth. </p>
                    <button className='btn'>explore more <img src={Arrow} alt="" /></button>


        </div>
    </div>
  )
}

export default Hero
