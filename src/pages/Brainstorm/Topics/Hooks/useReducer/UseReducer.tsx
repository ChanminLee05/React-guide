import React from 'react';
import HookDisplay from "../../../../../shared/HookDisplay/HookDisplay";

const UseReducer: React.FC = () => {
    return (
        <div className="use-reducer-container hook-container">
            <h1>Using the Reducer Hook</h1>
            <p>UseReducer is used for state management in scenarios where state transitions follow a specific pattern or involve complex state logic.
                It's an alternative to <b>'useState'</b> but more suited for managing state that involves multiple sub-values or when the next state depends on the previous one.
            </p>
            <ol>
                <li>
                    <h5>To use the 'useReducer' Hook, import 'useReducer' from React</h5>
                    <HookDisplay text={`import React, { useReducer } from 'react';`}/>
                </li>
                <li>
                    <h5>It takes the current state and an action, and returns a new state based on the action type.</h5>
                    <HookDisplay text=
{`const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};
`}
                    />
                </li>
                <li>
                    <h5>Use useReducer to initialize the state and to provide a dispatch function</h5>
                    <HookDisplay
                        text={`const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    //'reducer' is the function that determines state transitions.
    //'initialState' is the initial state of the component.
    //'dispatch' is a function returned by useReducer that allows components to dispatch actions to the reducer function.
    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default Counter;
`}
                    />
                </li>
                <li>
                    <h5>
                        When a button is clicked, dispatch is called with an action object.
                        Based on the type of action, the reducer function computes the new state.
                        And React re-renders the component with the updated state.
                    </h5>
                </li>
            </ol>
        </div>
    );
};

export default UseReducer;
