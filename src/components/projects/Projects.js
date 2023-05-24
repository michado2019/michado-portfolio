import React, { useState } from "react";
import "./Project.css";
import soloProjectsData from "./projectData/SoloProjectData";
import collaborativeProjectsData from "./projectData/CollaborativeProjectData";
import Pagination from "../Pagination";
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
            <div className="projectsContent" key={each.id}>
              <a href={each.app_link} className="projectsSearch-link">
                <div className="projectTop-flex">
              <h4 className="projectsName">{each.projectName}</h4>
                </div>
              <p className="projectsDetails">{each.details.slice(0, 80)}...</p>
              <div className="projectsTool-flex">
                <p className="projectsTools">{each.tool1}</p>
                <p className="projectsTools">{each.tool2}</p>
              </div>
              <img src={each.projectImg} alt="img" className="projectsImg" />
              </a>
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
            <div className="projectsContent" key={each.id}>
               <a href={each.app_link} className="projectsSearch-link">
                <div className="projectTop-flex">
              <h4 className="projectsName">{each.projectName}</h4>
                </div>
              <p className="projectsDetails">{each.details.slice(0, 80)}...</p>
              <div className="projectsTool-flex">
                <p className="projectsTools">{each.tool1}</p>
                <p className="projectsTools">{each.tool2}</p>
              </div>
              <img src={each.projectImg} alt="img" className="projectsImg" />
              </a>
            </div>
          );
        })}
      </div>
      <Pagination page={page} pages={pages} setPage={setPage}/>
    </div>
  );
}
export default Projects;
