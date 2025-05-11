import React from "react";

interface ServicesProjectProps {
  projectImages: string[];
}

const ServicesProject: React.FC<ServicesProjectProps> = ({ projectImages }) => {
  return (
    <div className="servicesProjContainer">
      <div className="servicesProjContent">
       
          <p className="servicesProjSeeText">See for yourself</p>
          <h2 className="servicesProjTitle">Some of our works</h2>
       
        
      </div>
      <div className="servicesProjTopGrid">
          <div className="servicesProjImageBox">
            <img
              src={projectImages[0]}
              alt="Project 1"
              className="servicesProjImg"
            />
          </div>
          <div className="servicesProjImageBox">
            <img
              src={projectImages[1]}
              alt="Project 2"
              className="servicesProjImg"
            />
          </div>
        </div>
        <div className="servicesProjBottomGrid">
          <div className="servicesProjImageBox">
            <img
              src={projectImages[2]}
              alt="Project 3"
              className="servicesProjImg"
            />
          </div>
        </div>
    </div>
  );
};

export default ServicesProject;
