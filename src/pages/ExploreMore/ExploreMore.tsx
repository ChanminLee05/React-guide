import React, {useState} from 'react';
import "./ExploreMore.css";
import Video from "../../assets/Dev.mp4";
import YoutubeIframe from "../../shared/YoutubeIframe/YoutubeIframe";

const ExploreMore: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const youtubeUrl1 = "https://www.youtube.com/embed/CgkZ7MvWUAA?si=qVSsR1fYmF749Mf2";
    const youtubeUrl2 = "https://www.youtube.com/embed/cd3P3yXyx30?si=4VkFPFvRhM3LsWGa";
    const youtubeUrl3 = "https://www.youtube.com/embed/SqcY0GlETPk?si=U_OWng0Km98fQpBg";
    const youtubeUrl4 = "https://www.youtube.com/embed/Rh3tobg7hEo?si=Ay9CJRhHRQZuB460";

    const loadingMessage = <i className="fa-solid fa-spinner"></i>

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <div className="explore-page">
            <h2>React Tutorial Videos</h2>
            <div className="video-container">
                <video autoPlay loop muted playsInline src={Video} className="dev-video"/>
            </div>
            <div className="content">
                <i className="bi bi-chevron-double-down explore-btn"></i>
            </div>
            <div className="youtube-container">
                {isLoading ? (
                    <div className="loading-message">
                        {loadingMessage}
                    </div>
                ) : (
                    <div className="youtube-links">
                        <YoutubeIframe src={youtubeUrl1}/>
                        <YoutubeIframe src={youtubeUrl2}/>
                        <YoutubeIframe src={youtubeUrl3}/>
                        <YoutubeIframe src={youtubeUrl4}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExploreMore;
