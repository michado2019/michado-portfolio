import React, { useState } from "react";
import "./Project.css";
import soloProjectsData from "./projectData/SoloProjectData";
import collaborativeProjectsData from "./projectData/CollaborativeProjectData";
import Pagination from "../Pagination";
import { Launch } from "@mui/icons-material";
function Projects() {
  const [page, setPage] = useState(1);

  /*Pagination */
  const perPage = 4;
  const pages = Math.ceil(soloProjectsData.length / perPage);
  const skip = page * perPage - perPage;
  return (
    <div className="projectsWrapper">
      <div>
      <h3 className="projectsTitle">Solo projects</h3>
      </div>
      <div className="projectsContents">
        {soloProjectsData.slice(skip, skip + perPage).map((each) => {
          return (
            <div className="projectsContent">
              <img src={each.projectImg} alt="" className="projectsImg" />
              <h4 className="projectsName">{each.projectName}</h4>
              <div className="projectsSearch-link_div">
                <a href={each.app_link} className="projectsSearch-link"><Launch className="projectsSearch-img" /></a>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination page={page} pages={pages} setPage={setPage}/>

      <div>
      <h3 className="projectsTitle">Collaborative projects</h3>
      </div>
      <div className="projectsContents">
        {collaborativeProjectsData.slice(skip, skip + perPage).map((each) => {
          return (
            <div className="projectsContent">
              <img src={each.projectImg} alt="" className="projectsImg" />
              <h4 className="projectsName">{each.projectName}</h4>
              <div className="projectsSearch-link_div">
                <a href={each.app_link} className="projectsSearch-link"><Launch className="projectsSearch-img" /></a>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination page={page} pages={pages} setPage={setPage}/>
    </div>
  );
}
export default Projects;
