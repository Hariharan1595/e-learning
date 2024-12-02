import React, { useEffect, useState } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import mobile_menu from '../../assets/menu-icon.png'
function Navbar() {
  const [stickyBar ,setStickyBar] = useState(false)
  const [mobileMenu , setMobileMenu] = useState(false)

  const mobile = ()=>{
    mobileMenu ? setMobileMenu(false):setMobileMenu(true)
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setStickyBar(true):setStickyBar(false)
    })
  },[])
  return (
    <nav className={`container ${stickyBar ?'sticky-nav-bar':''}`}>
        <img src={logo} alt="logo" className='logo'/>

        <ul className={mobileMenu ?'':'hidden'}>
            <li><Link to='hero' offset={0} smooth={true} duration={500}>Home</Link></li>
            <li><Link to='programs' offset={-250} smooth={true} duration={500}>Programs</Link></li>
            <li><Link to='about-us' offset={-150} smooth={true} duration={500}>About</Link></li>
            <li><Link to='campus' offset={-250} smooth={true} duration={500}>Campus</Link></li>
            <li><Link to='contact' offset={-250} smooth={true} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={mobile_menu} alt="icon" className='menu'onClick={mobile} />
    </nav>
  )
}

export default Navbar
