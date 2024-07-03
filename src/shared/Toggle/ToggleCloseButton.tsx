import React, {CSSProperties} from 'react';
import "./ToggleCloseButton.css";

interface CloseButtonProps {
    onClick: () => void;
    style: CSSProperties;
}
const ToggleCloseButton: React.FC<CloseButtonProps> = ({onClick, style}) => {
    return (
        <div className="close-container" onClick={onClick} style={style}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
        </div>
    );
};

export default ToggleCloseButton;
