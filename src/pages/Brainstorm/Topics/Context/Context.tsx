import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";
import "./Context.css";

interface ContextProps {
    closeContent: () => void;
}
const Context: React.FC<ContextProps> = ({closeContent}) => {
    const [showContext, toggleContext] = useToggle(true);

    const handleClose = () => {
        toggleContext();
        closeContent();
    };
    return (
        <div className="context-page common-page">
            <div className="context-card">
                <div className="context-header common-header">
                    {showContext && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="context-card-title common-card-title">Context</h2>
                </div>
                <div className="context-body common-body">
                    <p><GlowingStar/>
                        Context in React is a feature that allows you to share data across the component tree without passing props down manually at every level.
                        It is particularly useful when you have data that needs to be accessible by many components at different nesting levels, such as theme data, user information, or application settings.
                    </p>
                    <div className="context-body-top">
                        <h3>When to Use Context</h3>
                        <p>Context is primarily used when some data needs to be accessible by many components at different levels of the component tree.
                            It's a way to <i>avoid prop drilling</i>, which is the process of passing data through many layers of components.</p>
                    </div>
                    <ul>
                        <li><h5>Create a Context:</h5>
                            <HookDisplay text=
{`import React from 'react';

const ThemeContext = React.createContext('light'); // 'light' is the default value`}
                            />
                        </li>
                        <li><h5>Provide a Context:</h5>
                            <HookDisplay text=
{`import React from 'react';
import ThemeContext from './ThemeContext';

const App = () => {
  return (
    <ThemeContext.Provider value="dark">    //Provider component makes the context value available 
      <Toolbar />                           //to all components within its subtree.
    </ThemeContext.Provider>
  );
};
`}
                            />
                        </li>
                        <li>
                            <h5>Consume a Context:</h5>
                            <p>The <b>Consumer</b> component subscribes to context changes.
                                You can use the Consumer component or the <b>useContext</b> hook to read the context value.</p>
                            <HookDisplay text=
{`import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);

  return <button className={theme}>I am styled by theme context!</button>;
};`}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Context;
