import React from 'react'
import './Skills.css'
import { skills } from './skillsData/SkillsData'
const Skills = () => {

  
  return (
    <div className='skillsWrapper'>
      <h2 className='skillsTitle'>Skills</h2>
     <div className='skillsContents'>
     {
             skills.map((skill) => {
              return(
                <div className='skillsContent'>
                    <img src={skill.img} alt='img' className='skillsImg'/>
                    <h2 className='skillsTool'>{skill.tool}</h2>
                </div>
              )
             })
     }
     </div>
    </div>
  )
}

export default Skills