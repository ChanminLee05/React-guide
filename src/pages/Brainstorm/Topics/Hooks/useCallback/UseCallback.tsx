import React from 'react';
import HookDisplay from "../../../../../shared/HookDisplay/HookDisplay";
import GlowingStar from "../../../../../shared/GlowingStar/GlowingStar";

const UseCallback: React.FC = () => {
    return (
        <div className="use-callback-container hook-container">
            <h1>Using the Callback Hook</h1>
            <p>UseCallback is used to <b>memoize functions</b>, preventing unnecessary renders in child components that rely on them. It's useful when passing callbacks to optimized child components.</p>
            <ol>
                <li>
                    <h5>To use the 'useCallback' Hook, import 'useCallback' from React</h5>
                    <HookDisplay text={`import React, { useState, useCallback } from 'react';`}/>
                </li>
                <li>
                    <h5>Create ChildComponent that receives a function onClick as props</h5>
                    <HookDisplay text=
{`const ChildComponent = ({ onClick }) => {
    return <button onClick={onClick}>Click me!</button>;
};
`}
                    />
                </li>
                <li>
                    <h5>ParentComponent maintains count state and defines a callback function</h5>
                    <HookDisplay
                        text=
{`const ParentComponent = () => {
    const [count, setCount] = useState(0);

    // Using useCallback to memoize the onClick function
    const handleClick = useCallback(() => {
        console.log('Button clicked');
        setCount(count + 1);
    }, [count]); // Dependency array ensures onClick is recreated only when count changes

    return (
        <div>
            <h2>Parent Component</h2>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleClick} />
        </div>
    );
};

export default ParentComponent;
`}
                    />
                </li>
                <li>
                    <h5>UesEffect tells React that component needs to do something after render</h5>
                </li>
            </ol>
            <p><GlowingStar />You should only rely on useCallback as a performance optimization.</p>
        </div>
    );
};

export default UseCallback;
