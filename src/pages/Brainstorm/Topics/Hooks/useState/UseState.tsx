import React from 'react';
import HookDisplay from "../../../../../shared/HookDisplay/HookDisplay";

const UseState: React.FC = () => {
    return (
        <div className="use-state-container hook-container">
            <h3>What is a Hook?</h3>
            <p>A Hook is a special function in React that lets you "hook into" React features</p>
            <h3>When do we use Hook?</h3>
            <p>When adding state or lifecycle methods to a functional component.
                Hooks allow to use React features without writing class components</p>
            <h1>Using the State Hook</h1>
            <ol>
                <li>
                    <h5>To use the 'useState' Hook, import 'useState' from React</h5>
                    <HookDisplay text={`import React, { useState } from 'react';`}/>
                </li>
                <li>
                    <h5>Use the useState hook to create a state variable and a function to update it</h5>
                    <HookDisplay text={`const [count, setCount] = useState(0); // 0 will be the initial state`}/>
                </li>
                <li>
                    <h5>Use the updater function to change the state in response to user actions or other events</h5>
                    <HookDisplay
                        text=
                            {`return (
    <div className="counter">
        <p>Count: {count}</p>   // we can display the current count like this
        <button onClick={() => setCount(count + 1)}>Increment</button>  // we can update count state using setCount
    </div>
);
`}
                    />
                </li>
                <li>
                    <h5>React will re-render Component, passing the new count value to it</h5>
                </li>
            </ol>
        </div>
    );
};

export default UseState;
