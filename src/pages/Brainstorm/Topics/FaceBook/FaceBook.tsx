import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import "./FaceBook.css";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import Like from "../../../../assets/like.jpg";
interface FaceBookProps {
    closeContent: () => void;
}
const FaceBook: React.FC<FaceBookProps> = ({closeContent}) => {
    const [showFaceBook, toggleFaceBook] = useToggle(true);

    const handleClose = () => {
        toggleFaceBook();
        closeContent();
    };
    return (
        <div className="facebook-page">
            <div className="facebook-card">
                <div className="facebook-header common-header">
                    {showFaceBook && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <i className="bi-facebook"></i><h2 className="facebook-card-title">facebook</h2>
                </div>
                <div className="facebook-body">
                    <img src={Like} alt={Like} className="like-img"/>
                    <div className="facebook-body-card">
                        <ul>
                            <li><GlowingStar/><b>Created by Facebook:</b> React was developed by Facebook and released to the public in 2013.
                                It was initially designed to address the challenges of building large-scale, interactive user interfaces with predictable state management.</li>
                            <li><GlowingStar/><b>Library, Not a Framework:</b> Unlike traditional frameworks that impose specific structures and workflows, React is more lightweight and focuses on the view layer of your application.
                                It provides a declarative way of describing how your UI should look based on the application's state.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaceBook;
