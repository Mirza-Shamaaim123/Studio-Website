import React from "react";
import "./Projects.css";
import MediaDisplay from "../components/MeidaDisplay";
import { motion } from "framer-motion";
import RotatingCube from "../components/RotatingCube";
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
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Overview Clip",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          title: "Detail Render",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          title: "Aerial View",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          title: "Street Perspective",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          title: "Sunset Shot",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          title: "York House",
          link: "https://images.prismic.io/cuub/01874440-6893-413f-96c5-55f125fb1c86_YORK%20HOUSE%20V10%20HERO.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=2490",
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
