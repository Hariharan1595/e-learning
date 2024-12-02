import React from 'react'
import './Footer.css'

const Footer = () => {
    let date = new Date()
  return (
    <div className='footer'>
        <p>&#169; {date.getFullYear()} Edusity.All
         rights reserved</p>
         <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
         </ul>
      
    </div>
  )
}

export default Footer
