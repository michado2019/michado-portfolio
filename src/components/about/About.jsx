import React from 'react'
import './About.css'
import aboutImg from './assets/profile-pix.jpg'
import { Avatar } from '@mui/material'
export default function About() {
  return ( 
    <div className='aboutWrapper' id="about">
      <div className='titlesDiv'>
      <Avatar className='aboutTitle-avatar'/>
      <h3 className='aboutTitle'>About Me</h3>
      </div>
      <div className='aboutFlex'>
       <img src={aboutImg} alt="img" className="aboutImg" />
       <p className='aboutDetails'>
        I am a Front-end Web Developer with experiences building websites of
        high standards utilizing best practices, accessibility and web
        optimization techniques. I am a self-starter defined by persistence,
        curiosity, problem-solving and obsessive attention to details. I have
        a working knowledge of languages and frameworks such as React,
        JavaScript, Html, Tailwind CSS, and CSS. I have a basic knowledge of PHP, MySql, and Firebase. I also know how to use React component
        libraries such as Bootstrap and Material UI. I have a good understanding of version
        control with git. I am a student of The ALT School Africa, School of Software Engineering. And also
        a graduate of Food Science and Nutrition.
      </p>
      </div>
    </div>
  )
}
