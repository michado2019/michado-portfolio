import React from 'react'
import './Main.css'

export default function Main() {
   return (
      <div className='mainWrapper'>
         <div className='mainIntro-flex'>
            <span className='mainIntro-greetings'>
               HELLO! I'M ADESHINA MICHAEL.
            </span>
            <span className='mainIntro-job'>
               I'M A FRONT-END DEVELOPER
            </span>
            <span className='mainHire-me_div'>
               <a href='mailto: adeshinaobafemi09@gmail.com'>
                  <button className='mainHire-me_btn'>Hire Me</button>
               </a>
            </span>
         </div>
      </div>
   )
}
