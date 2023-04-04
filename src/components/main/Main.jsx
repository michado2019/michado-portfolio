import React, { useEffect, useState } from 'react'
import './Main.css'
import avatarImg from './assets/mainAvatar.jpg'
export default function Main() {

   const [avatar, setAvatar] = useState(false)

   function getAvatar(){
      setAvatar(true)
   }

   setInterval(() => {
      if(avatar === true){
      getAvatar()
      }
   }, 5000) 

   useEffect(() => {
      getAvatar()
   },[])
   return (
      <div className='mainWrapper'>
         <div className='mainIntro-flex'>
            <span className='mainIntro-greetings'>
               Hello!
            </span>
            <span className='mainIntro-greetings'>
               I'm Mike
            </span>
            <span className='mainIntro-job'>
               FRONT-END DEVELOPER
            </span>
         </div>
         <div className='main2'>
          <img src={avatarImg} alt='img' className='mainAvatar-img'/>
         </div>
         <div className='main2'>
           <div className='main2Btn-flex_col'>
             <a href="https://drive.google.com/file/d/1rXNLzAJh4HwAThWbymC2w9vBTbpeVlS1/view?usp=share_link" className='main2-btns'>Download CV</a>
             <a href='https://wa.me/08100075254' className='main2-btns'>Whatsapp</a>
               <a href='mailto: adeshinaobafemi09@gmail.com' className='main2-btns'>Hire Me</a>
           </div>
         </div>
      </div>
   )
}