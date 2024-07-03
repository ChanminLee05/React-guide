import React, {useEffect, useRef, useState} from 'react';
import "./Brainstorm.css";
import HookIframe from "../../shared/HookIframe/HookIframe";
import ScrollEffect from "../../shared/ScrollEffect/ScrollEffect";
import {Topics} from "../../entities/Topics";
import FSD from "../Brainstorm/Topics/FSD/FSD";
import Hooks from "./Topics/Hooks/Hooks";
import useScrollHandler from '../../shared/ScrollEffect/ScrollHandler';
import VDOM from "./Topics/VirtualDOM/VDOM";
import Components from "./Topics/Components/Components";
import Rendering from "./Topics/Rendering/Rendering";
import FaceBook from "./Topics/FaceBook/FaceBook";
import JSX from "./Topics/JSX/JSX";
import Effects from "./Topics/Effect/Effects";
import Props from "./Topics/Props/Props";
import Events from "./Topics/Events/Events";
import Fragments from "./Topics/Fragments/Fragments";
import State from "./Topics/State/State";
import Ref from "./Topics/Ref/Ref";
import Context from "./Topics/Context/Context";
interface BrainstormProps {
    topics: Topics[];
}

const Brainstorm: React.FC<BrainstormProps> = (({topics}) => {
    const [showIframe, setShowIframe] = useState(false);
    const { targetRef, isVisible } = ScrollEffect(0.5);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const lastScrollY = useRef(0);

    const toggleIframe = () => {
        setShowIframe(prevState => !prevState);
    }

    const toggleTopic = (topicName: string) => {
        setSelectedTopic((prevTopic) => (prevTopic === topicName ? null : topicName));
    };

    const isTopicExpanded = (topicName: string) => {
        return selectedTopic === topicName;
    };

    const closeContent = () => {
        setSelectedTopic(null);
    };

    const updateLinePositions = () => {
        const centralTopic = document.getElementById('central-topic');
        const scrollOffsetY = window.scrollY;
        const scrollOffsetX = window.scrollX;

        if (centralTopic) {
            const centralRect = centralTopic.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const newTop = Math.min(windowHeight / 2 + scrollOffsetY, centralRect.top + scrollOffsetY);
            const centralX = centralRect.left + scrollOffsetX + centralRect.width / 2;
            const centralY = newTop - scrollOffsetY + 50;

            topics.forEach((topic, index) => {
                const topicElement = document.getElementById(`topic-${index + 1}`);

                if (topicElement) {
                    const topicRect = topicElement.getBoundingClientRect();
                    const topicX = topicRect.left + scrollOffsetX + topicRect.width / 2 ;
                    const topicY = topicRect.top + scrollOffsetY + topicRect.height / 2 - 1785;

                    const line = document.getElementById(`line-${index + 1}`);
                    if (line) {
                        if (scrollDirection === 'up' || !isVisible) {
                            line.classList.add('hidden');
                            line.classList.remove('visible');
                        } else {
                            line.classList.add('visible');
                            line.classList.remove('hidden');
                            line.setAttribute('x1', centralX.toString());
                            line.setAttribute('y1', centralY.toString());
                            line.setAttribute('x2', topicX.toString());
                            line.setAttribute('y2', topicY.toString());
                        }
                    }

                    topic.subs.forEach((_, subIndex) => {
                        const subTopicElement = document.getElementById(`sub-topic-${index + 1}-${subIndex + 1}`);
                        if (subTopicElement) {
                            const subTopicRect = subTopicElement.getBoundingClientRect();
                            const subTopicX = subTopicRect.left + scrollOffsetX + subTopicRect.width / 2 ;
                            const subTopicY = subTopicRect.top + scrollOffsetY + subTopicRect.height / 2 - 1785;

                            const subLine = document.getElementById(`sub-line-${index + 1}-${subIndex + 1}`);
                            if (subLine) {
                                if (scrollDirection === 'up' || !isVisible) {
                                    subLine.classList.add('hidden');
                                    subLine.classList.remove('visible');
                                } else {
                                    subLine.classList.add('visible');
                                    subLine.classList.remove('hidden');
                                    subLine.setAttribute('x1', topicX.toString());
                                    subLine.setAttribute('y1', topicY.toString());
                                    subLine.setAttribute('x2', subTopicX.toString());
                                    subLine.setAttribute('y2', subTopicY.toString());
                                }
                            }
                        }
                    });
                }
            });
        }
    };

    useScrollHandler([
        (currentScrollY) => {
            console.log(currentScrollY);
            if (currentScrollY > lastScrollY.current) {
                if (scrollDirection !== 'down') {
                    setScrollDirection('down');
                }
            } else if (currentScrollY < lastScrollY.current) {
                if (scrollDirection !== 'up') {
                    setScrollDirection('up');
                }
            }
            lastScrollY.current = currentScrollY;
            updateLinePositions();
        },
    ]);

    useEffect(() => {
        updateLinePositions();

        window.addEventListener('scroll', updateLinePositions);

        return () => {
            window.removeEventListener('scroll', updateLinePositions);
        };
    }, [isVisible, topics]);

    return (
        <div className="brainstorming-container" id="brainstorm-section" ref={targetRef}>
            <div className="bg-circle" style={{top: "12vw", left: "12vw"}}></div>
            <div className="bg-circle" style={{top: "18vw", left: "18vw"}}></div>
            <div className="bg-circle" style={{top: "5vw", left: "30vw"}}></div>
            <div className="bg-circle" style={{top: "30vw", left: "36vw"}}></div>
            <div className="bg-circle" style={{top: "2vw", left: "60vw"}}></div>
            <div className="bg-circle" style={{top: "14vw", left: "55vw"}}></div>
            <div className="bg-circle" style={{top: "22vw", left: "70vw"}}></div>
            <div className="central-topic" id="central-topic" onClick={toggleIframe}></div>
            {showIframe && <HookIframe />}
            {selectedTopic && (
                <div className="topic-content">
                    {selectedTopic === 'Components' && <Components closeContent={closeContent}/>}
                    {selectedTopic === 'Rendering' && <Rendering closeContent={closeContent}/>}
                    {selectedTopic === 'Hooks' && <Hooks closeContent={closeContent}/>}
                    {selectedTopic === 'Facebook' && <FaceBook closeContent={closeContent}/>}
                    {selectedTopic === 'Refs' && <Ref closeContent={closeContent}/>}
                    {selectedTopic === 'JSX' && <JSX closeContent={closeContent}/>}
                    {selectedTopic === 'Effects' && <Effects closeContent={closeContent}/>}
                    {selectedTopic === 'Context' && <Context closeContent={closeContent}/>}
                    {selectedTopic === 'Props' && <Props closeContent={closeContent}/>}
                    {selectedTopic === 'Events' && <Events closeContent={closeContent}/>}
                    {selectedTopic === 'Fragments' && <Fragments closeContent={closeContent}/>}
                    {selectedTopic === 'State' && <State closeContent={closeContent}/>}
                    {selectedTopic === 'VDOM' && <VDOM closeContent={closeContent}/>}
                    {selectedTopic === 'FSD' && <FSD closeContent={closeContent}/>}
                </div>
            )}
            {topics.map((topic, index) => (
                <div key={index} className={`topic ${isTopicExpanded(topic.name) ? 'active' : ''} topic-${index + 1}`} id={`topic-${index + 1}`}>
                    <div className="topic-header" onClick={() => toggleTopic(topic.name)}>
                        {topic.name}
                    </div>
                    {topic.subs.length > 0 && topic.subs.map((sub, subIndex) => (
                        <div key={subIndex} className={`sub-topic sub-topic-${index + 1}-${subIndex + 1}`} id={`sub-topic-${index + 1}-${subIndex + 1}`}>
                            {sub}
                        </div>
                    ))}
                </div>
            ))}
            <svg className="lines-container">
                {topics.map((_, index) => (
                    <React.Fragment key={index}>
                        <line id={`line-${index + 1}`} className="line hidden"/>
                        {topics[index].subs.map((_, subIndex) => (
                            <line key={`sub-${index}-${subIndex}`} id={`sub-line-${index + 1}-${subIndex + 1}`} className="line sub-line hidden"/>
                        ))}
                    </React.Fragment>
                ))}
            </svg>
        </div>
    );
});

export default Brainstorm;
