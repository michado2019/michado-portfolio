import React from 'react'
import './Header.css'
import {Menu} from '@mui/icons-material'
export default function Header() {
  return (
    <div className='headerWrapper'>    
       <h1 className='headerLogo'>Michado</h1>
       <Menu className='headerMenu-icon'/>
       <div className='menuContent'>
           <span className='menuContent-text'>Home</span>
           <span className='menuContent-text'>About</span>
           <span className='menuContent-text'>Projects</span>
           <span className='menuContent-text'>My Cv</span>
       </div>
    </div>
  )
}
