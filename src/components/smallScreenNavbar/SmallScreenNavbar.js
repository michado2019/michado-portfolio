import React from 'react'
import './SmallScreenNavbar.css'
import { Link } from 'react-router-dom'
function SmallScreenNavbar({ display }) {

  return (
    <div className='smallScreen-navbar_wrapper' style={{ marginLeft: display ? '0' : '-1000px', transition: 'all 0.5s' }}>
        <Link to='/michado-portfolio' className='smallScreen-navbar_link'>Home</Link>
        <a href='#about'className='smallScreen-navbar_link' >About</a>
        <a href='#projects'className='smallScreen-navbar_link' >Projects</a>
        <a className='smallScreen-navbar_link' href='https://drive.google.com/file/d/1rXNLzAJh4HwAThWbymC2w9vBTbpeVlS1/view?usp=share_link'>My CV</a>
    </div>
  )
}

export default SmallScreenNavbar