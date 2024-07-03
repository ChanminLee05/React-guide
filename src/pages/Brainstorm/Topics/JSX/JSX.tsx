import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import "./JSX.css";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";

interface JSXProps {
    closeContent: () => void;
}
const JSX: React.FC<JSXProps> = ({closeContent}) => {
    const [showJSX, toggleJSX] = useToggle(true);

    const handleClose = () => {
        toggleJSX();
        closeContent();
    };
    return (
        <div className="jsx-page common-page">
            <div className="jsx-card">
                <div className="jsx-header common-header">
                    {showJSX && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="jsx-card-title common-card-title">JSX</h2>
                </div>
                <div className="jsx-body common-body">
                    <p><GlowingStar/>
                        JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML directly within React components.
                        JSX makes it easier to write and understand the structure of your component's output.
                    </p>
                    <h3>Key Features of JSX</h3>
                    <ol>
                        <li>
                            <b>HTML-like Syntax: </b>
                            JSX allows you to write HTML-like code within JavaScript, making it more intuitive to create user interfaces.
                        </li>
                        <li>
                            <b>Embedding Expressions: </b>
                            You can embed JavaScript expressions within JSX using curly braces.
                        </li>
                        <li>
                            <b>Attributes: </b>
                            JSX supports standard HTML attributes, but they are written in camelCase (e.g., className instead of class, htmlFor instead of for).
                        </li>
                        <li>
                            <b>Components: </b>
                            JSX allows you to define and use React components as if they were HTML tags.
                        </li>
                    </ol>
                    <ul>
                        <li><h5>Without JSX</h5>
                            <HookDisplay text=
{`import React from 'react';

const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

export default element;`} />
                        </li>
                        <li><h5>With JSX</h5>
                            <HookDisplay text=
{`import React from 'react';

const element = <h1 className="greeting">Hello, world!</h1>;

export default element;`} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JSX;
