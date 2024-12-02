import React from 'react'
import './AboutUs.css'
import AboutImg from '../../assets/about.png'
import PlayIcon from '../../assets/play-icon.png'

const Aboutus = ({setPlayState}) => {
  return (
    <div className='about-us'>
        <div className="about-left">
            <img src={AboutImg} alt="img" className='about-img' />
            <img src={PlayIcon} alt="img" className='play-icon' onClick={()=>
            {setPlayState(true)}} />

        </div>
        <div className="about-right">
            <h3>about university</h3>
            <h2>nurturing tomorrow's leaders today</h2>
            <p>Our campus is a vibrant community where students from diverse backgrounds come together to learn, grow, and thrive. With state-of-the-art facilities and a picturesque campus setting, we provide the perfect environment for academic excellence and personal development.</p>
            <p>But we're not just about academics. We also place a strong emphasis on holistic development, encouraging students to explore their interests outside the classroom through a wide range of extracurricular activities, community service projects, and leadership opportunities.</p>
            <p>As you embark on your academic journey,will be your partner every step of the way, providing the support, resources, and inspiration you need to reach your full potential. Welcome to a place where possibilities are limitless and dreams are within reach.</p>

        </div>
      
    </div>
  )
}

export default Aboutus
