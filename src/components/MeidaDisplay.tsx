import React, { useEffect, useRef } from 'react';

interface MediaItem {
    title: string;
    link: string;
}

interface MediaDisplayProps {
    sectionId: string;
    mediaItems: MediaItem[];
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ sectionId, mediaItems }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Set section height to viewport height
    useEffect(() => {
        const setSectionHeight = () => {
            if (sectionRef.current) {
                sectionRef.current.style.height = `${window.innerHeight}px`;
            }
        };

        setSectionHeight();
        window.addEventListener('resize', setSectionHeight);
        return () => window.removeEventListener('resize', setSectionHeight);
    }, []);

    // Reset refs when items change
    useEffect(() => {
        videoRefs.current = [];
    }, [mediaItems]);

    const renderMedia = () => {
        const count = mediaItems.length;

        if (count === 1) {
            const item = mediaItems[0];
            const isVideo = item.link.endsWith('.mp4');
            return (
                <div className="media-container">
                    <div className="media-wrapper">
                        {isVideo ? (
                            <video
                                ref={(el) => (videoRefs.current[0] = el)}
                                className="media-content"
                                autoPlay
                                muted
                                loop
                            >
                                <source src={item.link} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={item.link} alt={item.title} className="media-content" />
                        )}
                        <div className="media-overlay">
                            <span className="media-title">{item.title}</span>
                        </div>
                    </div>
                </div>
            );
        } else if (count === 2) {
            return (
                <div className="media-container two-columns">
                    {mediaItems.map((item, index) => {
                        const isVideo = item.link.endsWith('.mp4');
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
                                        <source src={item.link} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={item.link} alt={item.title} className="media-content" />
                                )}
                                <div className="media-overlay">
                                    <span className="media-title">{item.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        } else if (count === 3) {
            return (
                <div className="media-container three-columns">
                    <div className="two-thirds">
                        {mediaItems.slice(0, 2).map((item, index) => {
                            const isVideo = item.link.endsWith('.mp4');
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
                                            <source src={item.link} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={item.link} alt={item.title} className="media-content" />
                                    )}
                                    <div className="media-overlay">
                                        <span className="media-title">{item.title}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="one-third">
                        {mediaItems.slice(2, 3).map((item, index) => {
                            const isVideo = item.link.endsWith('.mp4');
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
                                            <source src={item.link} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={item.link} alt={item.title} className="media-content" />
                                    )}
                                    <div className="media-overlay">
                                        <span className="media-title">{item.title}</span>
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
        <div className="media-section" ref={sectionRef} id={sectionId}>
            {renderMedia()}
        </div>
    );
};

export default MediaDisplay;
