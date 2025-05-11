import React from 'react';
import './Projects.css';
import MediaDisplay from '../components/MeidaDisplay';


interface MediaSet {
    title: string;
    links: string[];
}

const Projects: React.FC = () => {
    const mediaSets: MediaSet[] = [
        {
            title: '563 Little Lonsdale',
            links: [
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            ],
        },
        {
            title: 'Urban Skyline',
            links: [
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            ],
        },
        {
            title: 'Cityscape Trio',
            links: [
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            ],
        },
    ];

    return (
        <div className="container-fluid">
            <div className="content">
                <div className="title-section">
                    <div className="title">
                        <h1>Projects</h1>
                    </div>
                    <div className="description">
                        <p>
                            Our work is way beyond creating top-quality images. We bring you the added value - we translate your ideas into visual or multimedia reality.
                        </p>
                    </div>
                </div>
                {mediaSets.map((set, index) => (
                    <MediaDisplay
                        key={index}
                        sectionId={`media-section-${index}`}
                        title={set.title}
                        mediaLinks={set.links}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;