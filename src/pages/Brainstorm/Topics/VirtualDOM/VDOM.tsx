import React from 'react';
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import useToggle from "../../../../shared/Toggle/Toggle";
import "./VDOM.css";

interface VDOMProps {
    closeContent: () => void;
}
const VDOM: React.FC<VDOMProps> = ({closeContent}) => {
    const [showVDOM, toggleShowVDOM] = useToggle(true);

    const handleClose = () => {
        toggleShowVDOM();
        closeContent();
    };
    return (
        <div className="vdom-page">
            <div className="vdom-card">
                <div className="vdom-header common-header">
                    {showVDOM && <ToggleCloseButton onClick={handleClose} style={{top: "3vw"}}/> }
                    <h2 className="vdom-card-title">Virtual DOM (VDOM)</h2>
                </div>
                <div className="vdom-body">
                    <h2>What is the Virtual DOM?</h2>
                    <p>The Virtual DOM (VDOM) is a lightweight copy of the real DOM (Document Object Model) that React uses to optimize and manage updates to the user interface.</p>
                    <h3>DOM Recap</h3>
                    <p>The DOM represents the structure of a webpage, with elements organized in a tree-like structure. Manipulating the DOM can be slow, especially if you make frequent updates.</p>
                    <h3>Why Virtual DOM?</h3>
                    <p>Directly updating the real DOM can be slow and inefficient. React uses the Virtual DOM to minimize these performance issues.</p>
                    <h3>How it Works:</h3>
                    <ul>
                        <li><b>Virtual DOM Creation:</b> When you create or update a React component, React builds a Virtual DOM—a lightweight representation of the real DOM.</li>
                        <li><b>Diffing Algorithm:</b> React compares (diffs) the new Virtual DOM with the previous version to see what has changed.</li>
                        <li><b>Batch Updates:</b> Instead of making multiple changes directly to the real DOM, React groups (batches) the changes together.</li>
                        <li><b>Reconciliation:</b> React updates only the parts of the real DOM that have changed, making the process much faster and more efficient.</li>
                    </ul>
                    <h3>Benefits:</h3>
                    <ul>
                        <li><b>Performance:</b> By minimizing direct updates to the real DOM, React applications run faster and more efficiently.</li>
                        <li><b>Simplicity:</b> Developers can write code as if the entire component re-renders on every update, without worrying about the performance implications of direct DOM manipulation.</li>
                        <li><b>Consistency:</b> The Virtual DOM ensures that the UI stays consistent with the underlying state of the application.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default VDOM;
