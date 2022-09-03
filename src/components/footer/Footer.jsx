import { EmailOutlined, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footerWrapper'>
      <div className='footer-flex_div'>
        <div className='footer-flex'>
          <a href='https://github.com/michado2019'>
            <GitHub className='footer-icons' />
          </a>
          <a href='https://www.linkedin.com/in/adeshina-michael-a14045238/'>
            <LinkedIn className='footer-icons' />
          </a>
        </div>
        <div className='footer-flex'>
          <a href='https://twitter.com/Mike_Adeshina'>
            <Twitter className='footer-icons' />
          </a>
          <a href='mailto: adeshinaobafemi09@gmail.com'>
            <EmailOutlined className='footer-icons' />
          </a>
        </div>
      </div>
      <p className='footer-copyright'>&copy; Michado 2022</p>
    </div>
  )
}
