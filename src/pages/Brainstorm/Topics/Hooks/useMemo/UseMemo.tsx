import React from 'react';
import HookDisplay from "../../../../../shared/HookDisplay/HookDisplay";

const UseMemo: React.FC = () => {
    return (
        <div className="use-memo-container hook-container">
            <h1>Using the Memo Hook</h1>
            <p>UseMemo ensures that a <b>memoized value</b> is recalculated only when its dependencies change. This optimization avoids unnecessary computations, crucial for performance-sensitive scenarios.</p>
            <ol>
                <li>
                    <h5>To use the 'useMemo' Hook, import 'useMemo' from React</h5>
                    <HookDisplay text={`import React, { useMemo, useState } from 'react';`}/>
                </li>
                <li>
                    <h5>Use the useMemo hook to avoid recalculating on every render</h5>
                    <HookDisplay text={`
const ExpensiveCalculationComponent = () => {
const [count, setCount] = useState(0);
  
const expensiveResult = useMemo(() => {
    return count * 2;
}, [count]); // Dependency array ensures recalculation only when count changes

    return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Expensive Result: {expensiveResult}</p>
    </div>
    );
};

export default ExpensiveCalculationComponent;
`}/>
                </li>
            </ol>
        </div>
    );
};

export default UseMemo;
