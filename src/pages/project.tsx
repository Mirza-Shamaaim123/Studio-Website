import React from "react";
import "./projects.css";
import MediaDisplay from "../components/MeidaDisplay";
import ServicesBoxSection from "./services/_components/ServicesBoxSection";


interface MediaSet {
  title: string;
  links: string[];
}

const Projects: React.FC = () => {
  interface MediaItem {
    title: string;
    link: string;
  }

  interface MediaSet {
    id: number;
    items: MediaItem[];
  }

  const mediaSets: MediaSet[] = [
    {
      id: 1,
      items: [
        {
          title: "Main Showcase",
          link: "/images/projectvideos/01 project.mp4",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Overview Clip",
          link: "/images/projectvideos/02 projectvideo.mp4",
        },
        {
          title: "Detail Render",
          link: "/images/projectvideos/03 projectvideo.mp4",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          title: "Aerial View",
          link: "/images/projectvideos/04 projectvideo.mp4",
        },
        {
          title: "Street Perspective",
          link: "/images/projectvideos/05 projectvideo.mp4",
        },
        {
          title: "Sunset Shot",
          link: "/images/projectvideos/06 projectvideo.mp4",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          title: "York House",
          link: "/images/projectvideos/07 projectvideo.mp4",
        },
      ],
    },
  ];

  return (
    <div >
      <div className="container-fluid">
        <div className="content">
          <div className="title-section">
            <div className="title">
              <h1>Projects</h1>
            </div>
            <div className="description">
              <p>
                Our work is way beyond creating top-quality images. We bring you
                the added value - we translate your ideas into visual or
                multimedia reality.
              </p>
            </div>
          </div>
          {mediaSets.map((set) => (
            <MediaDisplay
              key={set.id}
              sectionId={`media-section-${set.id}`}
              mediaItems={set.items}
            />
          ))}
        </div>
      </div>
 
    <ServicesBoxSection/>
    </div>
  );
};

export default Projects;
