import React, { useState, useEffect } from 'react'
import './Header.css'
import { CampaignOutlined, CancelOutlined, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import logoImg from './assets/logoPortfolio.png'
export default function Header({setDisplay, display, count, minute, hour}) {


  //States
   const [timeDisplay, setTimeDisplay] = useState(true)
  //Handlers
  function handleMenu() {
    setDisplay(prev => !prev)
  }
  function handleMenuCancel() {
    setDisplay(false)
  }

  useEffect(() => {

  const handleTime = () => {

    setTimeDisplay(prev => !prev)
    console.log(timeDisplay)
  }

  const interval = setInterval(handleTime, 20000)
  return () => {
    clearInterval(interval)
  }
  }, [timeDisplay])
  return (
    <div className='headerWrapper'>
      <div className='headerFlex'>
        <Link to='/michado-portfolio' className='headerLogo-div'>
          <img src={logoImg} alt='logo' className='headerLogo-img'/>
          <h1 className='headerLogo'>Michado</h1>
        </Link>
        <div className="headerTime" style={{opacity: timeDisplay? "1" : "0", transition: "all 0.5s"}}>
          <CampaignOutlined className='headerCampaign-icon'/>
          <span>Spent time: </span>
          <span>{hour}h : {minute}m : {count}s</span>
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
            <Link to='/about'>
              <div className='menuContent-text'>
                <MenuItem className='menuItems'>About</MenuItem>
              </div>
            </Link>
            <Link to='/projects'>
              <div className='menuContent-text'>
                <MenuItem className='menuItems'>Projects</MenuItem>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
