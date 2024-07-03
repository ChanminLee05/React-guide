import React from 'react';
import HookDisplay from "../../../../../shared/HookDisplay/HookDisplay";

const UseEffect: React.FC = () => {
    return (
        <div className="use-effect-container hook-container">
            <h1>Using the Effect Hook</h1>
                <ol>
                    <li>
                        <h5>To use the 'useEffect' Hook, import 'useEffect' from React</h5>
                        <HookDisplay text={`import React, { useState, useEffect } from 'react';`}/>
                    </li>
                    <li>
                        <h5>Use the useState hook to create a state variable and a function to update it</h5>
                        <HookDisplay text={`const [count, setCount] = useState(0);`}/>
                    </li>
                    <li>
                        <h5>The Effect Hook lets you perform side effects in function components</h5>
                        <HookDisplay
                            text={`useEffect(() => {
    document.title = "You clicked \${count} times";
},[]); //[] is a dependency array which determines when the effect should be re-run.
`}
                        />
                    </li>
                    <li>
                        <h5>UesEffect tells React that component needs to do something after render</h5>
                    </li>
                </ol>
        </div>
    );
};

export default UseEffect;
