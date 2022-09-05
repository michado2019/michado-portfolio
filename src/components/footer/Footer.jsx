import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerWrapper'>
      <div className='footer-flex_div'>
        <div className='footer-flex'>
          <a href='https://github.com/michado2019'>
            <img src='github--icon.png' alt='img' className='footer-icons' id='githubIcon' />
          </a>
          <a href='https://www.linkedin.com/in/michado2019/'>
            <img src='linked--in_icon.png' alt='img' className='footer-icons' />
          </a>
        </div>
        <div className='footer-flex'>
          <a href='https://twitter.com/Mike_Adeshina'>
            <img src='twitter--icon.png' alt='img' className='footer-icons' />
          </a>
          <a href='mailto: adeshinaobafemi09@gmail.com'>
            <img src='email.png' alt='img' className='footer-icons' id='emailIcon' />
          </a>
        </div>
      </div>
      <p className='footer-copyright'>&copy; Michado 2022</p>
    </div>
  )
}
