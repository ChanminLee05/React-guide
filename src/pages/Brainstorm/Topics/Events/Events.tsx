import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import "./Events.css";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";

interface EventProps {
    closeContent: () => void;
}
const Events: React.FC<EventProps> = ({closeContent}) => {
    const [showEvent, toggleEvent] = useToggle(true);

    const handleClose = () => {
        toggleEvent();
        closeContent();
    };
    return (
        <div className="event-page common-page">
            <div className="event-card">
                <div className="event-header common-header">
                    {showEvent && <ToggleCloseButton onClick={handleClose} style={{top: "3vw"}}/>}
                    <h2 className="event-card-title common-card-title">Events</h2>
                </div>
                <div className="event-body common-body">
                    <p><GlowingStar/>
                        In React, handling events such as button clicks, form submissions, or keyboard interactions is similar to handling events in HTML, but with some syntactical differences due to JSX.
                        Events in React are passed as props to components and are written in camelCase instead of lowercase.
                    </p>
                    <h3>Key Concepts About Events in React</h3>
                    <ol>
                        <li><b>Event Handling: </b>Events in React are handled using JSX and are similar to DOM events in vanilla JavaScript.</li>
                        <li><b>Synthetic Events: </b>React uses SyntheticEvent, a cross-browser wrapper around the browser’s native event, to ensure consistent event handling.</li>
                        <li><b>Binding Methods: </b>When passing a method as an event handler in a class component, you need to bind this to the method or use arrow functions to avoid losing context.</li>
                    </ol>
                    <h3>Example of Event Handling</h3>
                    <HookDisplay text=
                                     {`import React from 'react';

const ButtonClick = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click me</button> 
  );                        //onClick event handler is directly assigned to handleClick
};

export default ButtonClick;`}
                    />
                    <h3>Preventing Default Behavior</h3>
                    <HookDisplay text=
{`import React from 'react';

const PreventDefault = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting (i.e., without reloading the page).
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PreventDefault;
`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Events;
