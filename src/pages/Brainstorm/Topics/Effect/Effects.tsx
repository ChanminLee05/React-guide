import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import "./Effects.css";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";

interface EffectProps {
    closeContent: () => void;
}
const Effects: React.FC<EffectProps> = ({closeContent}) => {
    const [showEffect, toggleEffect] = useToggle(true);

    const handleClose = () => {
        toggleEffect();
        closeContent();
    };
    return (
        <div className="effect-page common-page">
            <div className="effect-card">
                <div className="effect-header common-header">
                    {showEffect && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="effect-card-title common-card-title">Effects</h2>
                </div>
                <div className="effect-body common-body">
                    <p><GlowingStar/>
                        Effects in React are used to handle side effects in your components.
                        The primary way to manage side effects in functional components is with the useEffect hook.
                    </p>
                    <div className="effect-body-top">
                        <h3>What are Side Effects?</h3>
                        <p>Side effects are operations that affect something outside the scope of a function or component.</p>
                        <p>Common examples of side effects include:</p>
                        <ul>
                            <li>Fetching data from an API</li>
                            <li>Subscribing to a service or event</li>
                            <li>Updating the DOM directly</li>
                            <li>Setting up timers</li>
                        </ul>
                    </div>
                    <h3>useEffect Hook</h3>
                    <p>The useEffect hook is a function provided by React that allows you to perform side effects in your components.</p>
                    <p>It takes two arguments:</p>
                    <ol>
                        <li><b>Effect Function: </b>A function that contains the side effect logic.</li>
                        <li><b>Dependency Array</b> (Optional) An array of values that the effect depends on. If any value in the array changes, the effect will re-run.</li>
                    </ol>
                    <HookDisplay text=
{`import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.log('Component has mounted');

    // Cleanup function (optional) to avoid memory leaks and unwanted behavior
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this runs once on mount

  return <div>Hello, world!</div>;
};`}/>
                </div>
            </div>
        </div>
    );
};

export default Effects;
