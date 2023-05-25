import { Launch } from "@mui/icons-material";
import React from "react";
import "./TechWriting.css";
import { techWritingData } from "./techWritingData/TechWriting";
const TechWriting = () => {
  return (
    <div className="techWriting-wrapper">
      <div className="techWriting-contents">
        <h2 className="techWriting-main_title">Blogs</h2>
        {techWritingData.map((each, index) => {
          return (
            <div className="techWriting-content" key={each.id}>
              <div className="techWriting-Index_img">
                <h2 className="techWriting-index">{index}</h2>
                <div className="techWriting-flex">
                  <img src={each.img} alt="img" className="techWriting-img" />
                  <h2 className="techWriting-title">
                    {each.title.slice(0, 40)}...
                  </h2>
                </div>
              </div>
              <a href={each.link} target="_blank" rel="noreferrer">
                <Launch className="techWriting-link" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechWriting;
