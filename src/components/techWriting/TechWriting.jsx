import { Launch } from "@mui/icons-material";
import React from "react";
import "./TechWriting.css";
import { techWritingData } from "./techWritingData/TechWriting";
const TechWriting = () => {
  return (
    <div className="techWriting-wrapper">
      <div className="techWriting-contents">
        {techWritingData.map((each, index) => {
          return (
            <div className="techWriting-content">
              <h2 className="techWriting-main_title">Blogs</h2>
              <div className="techWriting-Index_img">
                <h2 className="techWriting-index">{index}</h2>
                <div className="techWriting-flex">
                  <img src={each.img} alt="img" className="techWriting-img" />
                  <h2 className="techWriting-title">{each.title}</h2>
                </div>
              </div>
              <a href={each.link}>
                <Launch className="techWriting-link"/>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechWriting;