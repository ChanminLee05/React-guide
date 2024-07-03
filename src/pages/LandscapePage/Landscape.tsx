import React, {useEffect, useState} from 'react';
import "./Landscape.css";
import landscape from "../../assets/landscape.jpg";
import useScrollerHandler from '../../shared/ScrollEffect/ScrollHandler';
const Landscape: React.FC = () => {
    const [brightness, setBrightness] = useState(1);

    useScrollerHandler([
        (currentScrollY) => {
            const maxScroll = 600;
            const brightnessValue = 1 - Math.min(currentScrollY / maxScroll, 1);
            setBrightness(brightnessValue);
        }
    ]);

    return (
        <div className="landscape-page">
            <img
                src={landscape}
                alt="landscape"
                className="landscape-img"
                style={{ filter: `brightness(${brightness})` }}
            />
            <div className="landscape-txt-container">
                <h1 data-text="Explore React" className="title">Explore React</h1>
                <h2 data-text="Discover React's Core Concepts" className="sub-title1">Discover React's Core Concepts</h2>
                <h2 data-text="Master the Basics and Beyond" className="sub-title2">Master the Basics and Beyond</h2>
            </div>
        </div>
    );
};

export default Landscape;
