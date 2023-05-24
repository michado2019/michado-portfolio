import React from "react";
import "./Skills.css";
import { skills } from "./skillsData/SkillsData";
import { useState, useEffect } from "react";
const Skills = () => {
  //States
  const [data, setData] = useState([]); // Array to hold the data skills
  const [i, setI] = useState(0); // State for index
  //useEffect
  useEffect(() => {
    // Function to add an object to the array and update i
    const addObject = () => {
      if (i < skills.length) {
        setI((prev) => prev + 1);
        const newObj = skills[i]; // Create a new object with a timestamp property
        setData((prevData) => [...prevData, newObj]); // Add the new object to the data array
      } else {
        setI(0);
        setData([]);
      }
    };

    // Timer to add an object every 5 seconds
    const timer = setInterval(addObject, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [i]); // As i changes the effect is run

  return (
    <div className="skillsWrapper">
      <h2 className="skillsTitle">Skills</h2>
      <div className="skillsContents">
        {data.map((skill) => {
          return (
            <div className="skillsContent" key={skill.id}>
              <img src={skill.img} alt="img" className="skillsImg" />
              <h2 className="skillsTool">{skill.tool}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
