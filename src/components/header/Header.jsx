import React from 'react'
import './Header.css'
import { CancelOutlined, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'

export default function Header({setDisplay, display}) {

  
  function handleMenu() {
    setDisplay(prev => !prev)
  }
  function handleMenuCancel() {
    setDisplay(false)
  }
  return (
    <div className='headerWrapper'>
      <div className='headerFlex'>
        <Link to='/michado-portfolio'>
          <h1 className='headerLogo'>Michado</h1>
        </Link>
        <div className='headerFlex-1'>
          {
            display ?
            <CancelOutlined className='cancel' onClick={handleMenuCancel} />
            :
          <Menu className='headerMenu-icon' id='headerMenu-icon' onClick={handleMenu} />
          }
          <div className='menuContent'>
            <Link to='/michado-portfolio'>
              <div className='menuContent-text'>
                <MenuItem className='menuItems'>Home</MenuItem>
              </div>
            </Link>
            <a href='#about'>
              <div className='menuContent-text'>
                <MenuItem className='menuItems'>About</MenuItem>
              </div>
            </a>
            <a href='#projects'>
              <div className='menuContent-text'>
                <MenuItem className='menuItems'>Projects</MenuItem>
              </div>
            </a>
            <a href='https://drive.google.com/file/d/1rXNLzAJh4HwAThWbymC2w9vBTbpeVlS1/view?usp=share_link'>
              <div className='menuContent-text'>
                <MenuItem className='menuItems'>My CV</MenuItem>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
