import React, { useState } from "react";
import "./Project.css";
import soloProjectsData from "./projectData/SoloProjectData";
import collaborativeProjectsData from "./projectData/CollaborativeProjectData";
import Pagination from '../Pagination'
function Projects() {
  //use State
  const [page, setPage] = useState(1);

  /*Pagination */
  const perPage = 4;
  const pages = Math.ceil(soloProjectsData.length / perPage);
  const skip = page * perPage - perPage;
  return (
    <div className="projectsWrapper">
    <div className='projectsSub-title_div'>
        <h2 className='projectsSub-title'>Solo projects</h2>
    </div>
    <div className="projectsContents">
    {soloProjectsData
        .slice(skip, skip + perPage)
        .map((soloProject, index) => {
          return (
            <div className="projectsContent" key={soloProject.id}>
              <div>
                <h2 className="projectsIndex">{index + 1}</h2>
              </div>
              <div className="projectsDiv">
                <h3 className="projectsProject-name">
                  <span className="projectsLabel">App name: </span>
                  {soloProject.projectName}
                </h3>
                <h4 className="projectsGithub-name">
                  <span className="projectsLabel">Github name: </span>
                  {soloProject.gitHub_name}
                </h4>
                <p className="projectsDetails">
                  <span className="projectsLabel">Project deatails: </span>
                  {soloProject.details}
                </p>
                <a className="projectsApplink" href={soloProject.app_link}>
                  <span className="projectsLabel">
                    Link to the repo online
                  </span>
                </a>
              </div>
            </div>
          );
        })}
    </div>
    <div className='projectsSub-title_div' style={{display: page > 1? 'none' : ''}}>
        <h2 className='projectsSub-title'>Collaborative projects</h2>
    </div>
    <div className="projectsContents">
    {collaborativeProjectsData
        .slice(skip, skip + perPage)
        .map((collaborativeProject, index) => {
          return (
            <div className="projectsContent" key={collaborativeProject.id}>
              <div>
                <h2 className="projectsIndex">{index + 1}</h2>
              </div>
              <div className="projectsDiv">
                <h3 className="projectsProject-name">
                  <span className="projectsLabel">App name: </span>
                  {collaborativeProject.projectName}
                </h3>
                <h4 className="projectsGithub-name">
                  <span className="projectsLabel">Github name: </span>
                  {collaborativeProject.gitHub_name}
                </h4>
                <p className="projectsDetails">
                  <span className="projectsLabel">Project deatails: </span>
                  {collaborativeProject.details}
                </p>
                <a className="projectsApplink" href={collaborativeProject.app_link}>
                  <span className="projectsLabel">
                    Link to the app online
                  </span>
                </a>
              </div>
            </div>
          );
        })}
    </div>
        <Pagination setPage={setPage} page={ page } pages={pages}/>
    </div>
  );
}
export default Projects;
