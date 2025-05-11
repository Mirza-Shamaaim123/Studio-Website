import React, { useEffect, useRef } from 'react';

interface MediaDisplayProps {
    sectionId: string;
    title: string;
    mediaLinks: string[];
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ sectionId, title, mediaLinks }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Dynamically set section height to viewport height
    useEffect(() => {
        const setSectionHeight = () => {
            if (sectionRef.current) {
                sectionRef.current.style.height = `${window.innerHeight}px`;
            }
        };

        setSectionHeight();
        window.addEventListener('resize', setSectionHeight);

        return () => {
            window.removeEventListener('resize', setSectionHeight);
        };
    }, []);

    // Reset videoRefs array when mediaLinks change
    useEffect(() => {
        videoRefs.current = [];
    }, [mediaLinks]);

    const renderMedia = () => {
        const linkCount = mediaLinks.length;

        if (linkCount === 1) {
            const link = mediaLinks[0];
            const isVideo = link.endsWith('.mp4');
            return (
                <div className="media-container">
                    {isVideo ? (
                        <video
                            ref={(el) => (videoRefs.current[0] = el)}
                            className="media-content"
                            autoPlay
                            muted
                            loop
                        >
                            <source src={link} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={link} alt="Media" className="media-content" />
                    )}
                    <div className="media-overlay">
                        <span className="media-title">{title}</span>
                    </div>
                </div>
            );
        } else if (linkCount === 2) {
            return (
                <div className="media-container two-columns">
                    {mediaLinks.map((link, index) => {
                        const isVideo = link.endsWith('.mp4');
                        return (
                            <div key={index} className="media-wrapper">
                                {isVideo ? (
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        className="media-content"
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={link} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={link} alt={`Media ${index + 1}`} className="media-content" />
                                )}
                                <div className="media-overlay">
                                    <span className="media-title">{title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        } else if (linkCount === 3) {
            return (
                <div className="media-container three-columns">
                    <div className="two-thirds">
                        {mediaLinks.slice(0, 2).map((link, index) => {
                            const isVideo = link.endsWith('.mp4');
                            return (
                                <div key={index} className="media-wrapper half-height">
                                    {isVideo ? (
                                        <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            className="media-content"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            <source src={link} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={link} alt={`Media ${index + 1}`} className="media-content" />
                                    )}
                                    <div className="media-overlay">
                                        <span className="media-title">{title}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="one-third">
                        {mediaLinks.slice(2, 3).map((link, index) => {
                            const isVideo = link.endsWith('.mp4');
                            return (
                                <div key={index + 2} className="media-wrapper full-height">
                                    {isVideo ? (
                                        <video
                                            ref={(el) => (videoRefs.current[index + 2] = el)}
                                            className="media-content"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            <source src={link} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={link} alt={`Media ${index + 3}`} className="media-content" />
                                    )}
                                    <div className="media-overlay">
                                        <span className="media-title">{title}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <section className="media-section" ref={sectionRef} id={sectionId}>
            {renderMedia()}
        </section>
    );
};

export default MediaDisplay;