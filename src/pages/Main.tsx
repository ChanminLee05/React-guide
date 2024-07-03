import React, {useEffect, useRef, useState} from 'react';
import Brainstorm from "./Brainstorm/Brainstorm";
import Landscape from "./LandscapePage/Landscape";
import {initialTopics} from "../entities/Topics";
import ExploreMore from "./ExploreMore/ExploreMore";

const Main: React.FC = () => {
    const iconRef = useRef<HTMLDivElement>(null);
    const brainRef = useRef<HTMLDivElement>(null);

    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIcon(true);
        }, 500);


        return () => {
            clearTimeout(timer);
        }
    }, []);


    return (
        <>
            <div
                className={`react-icon ${showIcon ? 'show' : ''}`}
                ref={iconRef}
            >
                <i className="fa-brands fa-react"></i>
            </div>
            <Landscape />
            <ExploreMore />
            <div className="brainstorming-page" ref={brainRef}>
                <Brainstorm topics={initialTopics} />
            </div>
        </>
    );
};

export default Main;
