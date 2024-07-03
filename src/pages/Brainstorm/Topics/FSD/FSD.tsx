import React, {useEffect, useState} from 'react';
import "./FSD.css";
import useScrollEffect from "../../../../shared/ScrollEffect/ScrollEffect";
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import Organize from "../../../../assets/organize.jpg";
import Team from "../../../../assets/team.jpg";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";

interface FSDProps {
    closeContent: () => void;
}
const FSD: React.FC<FSDProps> = ({closeContent}) => {
    const benefitEffect = useScrollEffect(0.5);
    const conceptEffect = useScrollEffect(0.5);
    const sliceEffect = useScrollEffect(0.5);
    const segmentEffect = useScrollEffect(0.5);
    const [showFSD, toggleFSD] = useToggle(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClose = () => {
        toggleFSD();
        closeContent();
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="FSD-page">
            <div className="FSD-card">
                <div className="FSD-card-header common-header">
                    {showFSD && <ToggleCloseButton onClick={handleClose} style={{top: "3vw"}}/>}
                    <h2 className="FSD-card-title">Feature-Sliced Design (FSD)</h2>
                </div>
                <div className={`benefit-container ${benefitEffect.isVisible ? 'animate' : ''}`} ref={benefitEffect.targetRef}>
                    <div className="benefit-left position-absolute col-5">
                        <h4 className="benefit-left-title">Benefits of FSD</h4>
                        <ul className="common-list">
                            <li><b>Scalable:</b> Easily accommodates growth in project complexity.</li>
                            <li><b>Self-intuitive and Coherent:</b> Logical structure improves navigation.</li>
                            <li><b>Easy Maintenance:</b> Clear organization simplifies updates and bug fixes.</li>
                            <li><b>Standardized:</b> Well-documented and continuously refined.</li>
                        </ul>
                    </div>
                    <div className="benefit-right position-absolute col">
                        <img src={Organize} alt={Organize} className="organize-img fsd-img"/>
                    </div>
                </div>

                <div className={`downside-container flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={Team} alt={Team} className="team-img" />
                            <div className="hover-message">Downside of FSD</div>
                        </div>
                        <div className="flip-card-back">
                            <h4>Downside of FSF</h4>
                            <ul className="common-list">
                                <li><b>Complexity:</b> Team members need to have a good understanding of Full Stack Development; otherwise, the benefits of FSD can be lost</li>
                                <li><b>Time-Consuming:</b> Establishing the correct slices and ensuring all components adhere to the structure can delay the start of development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`concept-container ${conceptEffect.isVisible ? 'animate' : ''}`} ref={conceptEffect.targetRef}>
                    <h4 className="concept-title">Main Concept: Layers</h4>
                    <ol className="common-list layer-list">
                        <li>1. app
                            <span> — app-wide settings, styles and providers.</span>
                        </li>
                        <li>2. processes
                            <span> — complex inter-page scenarios. (widgets are used instead)</span>
                        </li>
                        <li>3. pages
                            <span> — compositional layer to construct full pages from entities, features and widgets.</span>
                        </li>
                        <li>4. widgets
                            <span> — compositional layer to combine entities and features into meaningful blocks (e.g. IssuesList, UserProfile)</span>
                        </li>
                        <li>5. features
                            <span> — user interactions, actions that bring business value to the user. (e.g. SendComment, AddToCart, UsersSearch)</span>
                        </li>
                        <li>6. entities
                            <span> — business entities. (e.g., User, Product, Order)</span>
                        </li>
                        <li>7. shared
                            <span> — reusable functionality, detached from the specifics of the project/business. (e.g. UIKit, libs, API)</span>
                        </li>
                    </ol>
                    <p><GlowingStar /> The hierarchy dictates that the 'app' layer can import from all layers below it, while 'shared' is restricted from importing higher layers.</p>
                </div>
                <div className={`slice-container ${sliceEffect.isVisible ? 'animate' : ''}`} ref={sliceEffect.targetRef}>
                    <h4 className="slice-title">Slices</h4>
                    <p><b>Purpose:</b> Divide code by business domain.</p>
                    <p><b>Rule:</b> Slices cannot use other slices on the same layer.</p>
                    <p><b>Benefit:</b> Ensures high cohesion and low coupling.</p>
                </div>
                <div className={`segment-container ${segmentEffect.isVisible ? 'animate' : ''}`} ref={segmentEffect.targetRef}>
                    <h4>Segments</h4>
                    <p><b>Purpose:</b> Separate code within a slice by technical purpose.</p>
                    <ul className="common-list">
                        <b>Common Segments:</b>
                        <li><b>'ui':</b> User interface components.</li>
                        <li><b>'model':</b> Stores interfaces, types, and DTOs.</li>
                        <li><b>'api':</b> Hooks based on ReactQuery.</li>
                        <li><b>'lib':</b> Utility functions and libraries.</li>
                    </ul>
                    <p><GlowingStar />Slices cannot use other slices on the same layer.</p>
                    <p><b>Flexibility:</b> Segments can be omitted or added as needed.</p>
                </div>
            </div>
        </div>
    );
};

export default FSD;
