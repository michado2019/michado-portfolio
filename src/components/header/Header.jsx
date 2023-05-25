import React from 'react'
import './Header.css'
import { CancelOutlined, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import logoImg from './assets/logoPortfolio.png'
export default function Header({setDisplay, display, count, minute, hour}) {

  function handleMenu() {
    setDisplay(prev => !prev)
  }
  function handleMenuCancel() {
    setDisplay(false)
  }
  return (
    <div className='headerWrapper'>
      <div className='headerFlex'>
        <Link to='/michado-portfolio' className='headerLogo-div'>
          <img src={logoImg} alt='logo' className='headerLogo-img'/>
          <h1 className='headerLogo'>Michado</h1>
        </Link>
        <div className="headerTime">
          {hour}h : {minute}m : {count}s
        </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
