import React from 'react';
import "./HookDisplay.css";

interface HookDisplayProps {
    text: string;
}
const HookDisplay: React.FC<HookDisplayProps> = ({ text }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    return (
        <div className="hook-display">
            <pre>
                <code>
                    {text}
                    <i className="bi bi-copy" onClick={copyToClipboard}></i>
                    <span className="copy-message">Copy to Clipboard</span>
                </code>
            </pre>
        </div>
    );
};

export default HookDisplay;
