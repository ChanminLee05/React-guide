import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import "./Rendering.css";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";

interface RenderingProps {
    closeContent: () => void;
}
const Rendering: React.FC<RenderingProps> = ({closeContent}) => {
    const [showRendering, toggleRendering] = useToggle(true);

    const handleClose = () => {
        toggleRendering();
        closeContent();
    };
    return (
        <div className="rendering-page common-page">
            <div className="rendering-card">
                <div className="rendering-header common-header">
                    {showRendering && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="rendering-card-title common-card-title">Rendering</h2>
                </div>
                <div className="rendering-body common-body">
                    <p><GlowingStar/>
                        Rendering is the process of translating React components into a structure of DOM nodes that the browser can understand and display.
                        React uses a virtual DOM to optimize the rendering process by minimizing the number of direct manipulations to the actual DOM, which can be slow.
                    </p>
                    <h3>Key Concepts:</h3>
                    <ol>
                        <li>
                            <b>Root Element: </b>
                            In a React application, there is usually a single root element (e.g., a &lt;div&gt; with an id of "root") that serves as the entry point for the React app.
                            This is where the entire React component tree is mounted.
                        </li>
                        <li>
                            <b>ReactDOM: </b>
                            ReactDOM is the package that provides DOM-specific methods to interact with the DOM, such as rendering a React component tree into the root element.
                        </li>
                        <li>
                            <b>JSX: </b>
                            JSX is a syntax extension for JavaScript that looks similar to HTML.
                            It allows you to write HTML-like code within JavaScript, which React can then transform into actual HTML DOM elements.
                        </li>
                        <li>
                            <b>React Components: </b>
                            These are the building blocks of a React application.
                            Components can be either function components or class components, and they return JSX that describes the UI.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Rendering;
