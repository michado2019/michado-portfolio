import React from 'react'
import './Header.css'
import { CancelOutlined, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'

export default function Header() {

  
  function handleMenu(){
    document.getElementById('menuContent').style.display = 'block'

  }
  function handleMenuCancel(){
    document.getElementById('menuContent').style.display = 'none'
  }
  return (
    <div className='headerWrapper'>
      <div className='headerFlex'>
        <Link to='/michado-portfolio'>
          <h1 className='headerLogo'>Michado</h1>
        </Link>
        <div className='headerFlex-1'>
          <Menu className='headerMenu-icon' id='headerMenu-icon' onClick={handleMenu} />
          <div className='menuContent' id='menuContent'>
            <CancelOutlined className='cancel' onClick={handleMenuCancel}/>
            <Link to='/michado-portfolio'>
              <div className='menuContent-text'>
                <MenuItem>Home</MenuItem>
              </div>
            </Link>
            <Link to='/about'>
              <div className='menuContent-text'>
                <MenuItem>About</MenuItem>
              </div>
            </Link>
            <a href='https://github.com/michado2019?tab=repositories'>
              <div className='menuContent-text'>
                <MenuItem>Projects</MenuItem>
              </div>
            </a>
            <a href='https://docs.google.com/document/d/1rdklE1nOA99g-a7Pi7Q57G6YBT3Jjh9ENOSSHNQHET4/edit?usp=sharing'>
              <div className='menuContent-text'>
                <MenuItem>My Cv</MenuItem>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
