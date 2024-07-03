import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import "./State.css";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";

interface StateProps {
    closeContent: () => void;
}
const State: React.FC<StateProps> = ({closeContent}) => {
    const [showState, toggleState] = useToggle(true);

    const handleClose = () => {
        toggleState();
        closeContent();
    };
    return (
        <div className="state-page">
            <div className="state-card">
                <div className="state-header common-header">
                    {showState && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="state-card-title common-card-title">State</h2>
                </div>
                <div className="state-body common-body">
                    <p><GlowingStar/>
                        State in React is a built-in object that holds data or information about the component.
                        The state of a component can change over time, typically as a result of user actions or network responses.
                        When the state of a component changes, React re-renders the component to reflect the new state, ensuring that the UI stays in sync with the data.
                    </p>
                    <h3>Key Points about State in React:</h3>
                    <ol>
                        <li>
                            <b>Initialization:</b>
                            <ul>
                                <li>State is usually initialized in the constructor of a class component using this.state.</li>
                                <li>In functional components, state is initialized using the useState hook.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <b>Updating State:</b>
                            <ul>
                                <li>State should never be directly modified.
                                    Instead, use the setState method in class components or the updater function returned by useState in functional components.
                                </li>
                                <li>Updating state triggers a re-render of the component, ensuring the UI reflects the latest state.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Async Nature:</b>
                            <ul>
                                <li>State updates in React are asynchronous.
                                    This means that calling setState does not immediately update the state but schedules an update.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <b>Components Re-render:</b>
                            <ul>
                                <li>When state changes, React compares the new state with the previous state and re-renders the component if there is a difference.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Local to Component:</b>
                            <ul>
                                <li>
                                    State is local to the component in which it is defined.
                                    To share state between components, it can be lifted up to the nearest common ancestor or managed through context or state management libraries like Redux.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default State;
