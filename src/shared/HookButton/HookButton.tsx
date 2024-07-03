import React from 'react';
import "./HookButton.css";
interface HookButtonProps {
    text: string;
    onClick: () => void;
}
const HookButton: React.FC<HookButtonProps> = ({text, onClick}) => {

    return (
        <button className="hook-btn" onClick={onClick}>{text}</button>
    );
};

export default HookButton;
