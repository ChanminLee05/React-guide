import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import "./Props.css";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";

interface Props {
    closeContent: () => void;
}
const Components: React.FC<Props> = ({closeContent}) => {
    const [showProps, toggleProps] = useToggle(true);

    const handleClose = () => {
        toggleProps();
        closeContent();
    };
    return (
        <div className="props-page common-page">
            <div className="props-card">
                <div className="props-header common-header">
                    {showProps && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="props-card-title common-card-title">Properties</h2>
                </div>
                <div className="props-body common-body">
                    <p><GlowingStar/>
                        Props are a fundamental concept in React that allow you to pass data from one component to another.
                        Props are used to pass data from a parent component to a child component and are read-only, meaning they cannot be modified by the child component that receives them.
                    </p>
                    <h3>Key Points About Props</h3>
                    <ol>
                        <li>
                            <b>Immutable: </b>
                            Props cannot be changed by the receiving component.
                        </li>
                        <li>
                            <b>Passed from Parent to Child: </b>
                            Data is passed down the component tree via props.
                        </li>
                        <li>
                            <b>Used for Data Flow and Configuration: </b>
                            Props are used to pass data, configuration, callback functions, etc.
                        </li>
                    </ol>
                    <h3>Example of using Props</h3>
                    <ol>
                        <li><b>Create a Parent Component:</b>
                            <HookDisplay text=
{`import React from 'react';
import Greeting from './Greeting';

const App = () => {
  const user = { name: 'Alice', age: 25 };  //defines a user object with name and age properties

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Greeting user={user} />  //Greeting component is used within the App component 
                                //and the user object is passed as a prop to the Greeting component
    </div>
  );
};

export default App;
`}
                            />
                        </li>
                        <li><b>Create a Child Component:</b>
                            <HookDisplay text=
{`import React from 'react';

const Greeting = (props) => {   //Greeting component receives the user object as a prop
  return (
    <div>
      <h2>Hello, {props.user.name}!</h2>            //props object is used to access the user data
      <p>You are {props.user.age} years old.</p>    //and display it in the component
    </div>
  );
};

export default Greeting;
`}
                            />
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Components;
