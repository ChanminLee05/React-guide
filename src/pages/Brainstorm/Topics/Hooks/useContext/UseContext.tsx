import React from 'react';
import HookDisplay from "../../../../../shared/HookDisplay/HookDisplay";

const UseContext: React.FC = () => {
    return (
        <div className="use-context-container hook-container">
            <h1>Using the Context Hook</h1>
            <p>Context provides a way to share values between components without having to pass props down manually through every level of the component tree.</p>
            <ol>
                <li>
                    <h5>To use the 'useContext' Hook, import 'useContext' from React</h5>
                    <HookDisplay text={`import React, { createContext, useContext, useState } from 'react';`}/>
                </li>
                <li>
                    <h5>Create a context and a provider component that uses this context</h5>
                    <HookDisplay text=
                                     {`const ThemeContext = createContext('light');
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
`}
                    />
                </li>
                <li>
                    <h5>Use the Context in a Component</h5>
                    <HookDisplay
                        text=
                            {`import React from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      Toggle Theme
    </button>
  );
};

export default ThemeButton;
`}
                    />
                </li>
                <li>
                    <h5>Wrap Your App with the Provider</h5>
                    <HookDisplay text=
                                     {`import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ThemeButton from './ThemeButton';

const App = () => (
  <ThemeProvider>
    <div>
      <h1>Hello, World!</h1>
      <ThemeButton />
    </div>
  </ThemeProvider>
);

export default App;
`}
                    />
                </li>
            </ol>
        </div>
    );
};

export default UseContext;
