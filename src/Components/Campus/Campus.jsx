import React from 'react'
import './Campus.css'
import img_1 from '../../assets/gallery-1.png'
import img_2 from '../../assets/gallery-2.png'
import img_3 from '../../assets/gallery-3.png'
import img_4 from '../../assets/gallery-4.png'
import icon_white from '../../assets/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={img_1} alt="img" className='img' />
            <img src={img_2} alt="img" className='img' />
            <img src={img_3} alt="img" className='img' />
            <img src={img_4} alt="img" className='img' />
        </div>
        <button className='btn dark-btn'>see more here <img src={icon_white} alt="icon" /></button>
      
    </div>
  )
}

export default Campus
