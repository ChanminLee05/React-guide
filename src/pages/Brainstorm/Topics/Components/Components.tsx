import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import "./Component.css";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";

interface ComponentProps {
    closeContent: () => void;
}
const Components: React.FC<ComponentProps> = ({closeContent}) => {
    const [showComponent, toggleComponent] = useToggle(true);

    const handleClose = () => {
        toggleComponent();
        closeContent();
    };
    return (
        <div className="component-page">
            <div className="component-card">
                <div className="component-header common-header">
                    {showComponent && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="component-card-title">Component</h2>
                </div>
                <div className="component-body">
                    <p><GlowingStar/>
                        Component is a <i>reusable piece of UI</i> that can be used to build complex user interfaces from simple building blocks.
                        Components can be thought of as custom HTML elements, and they can be defined as either <b>function components</b> or <b>class components</b>.
                    </p>
                    <ul className="component-type-title">
                        <li><b>Function Component</b>
                            <ol>
                                <li>
                                    <h5>Function Component returns a React element</h5>
                                    <HookDisplay text=
        {`import React from 'react';
        
        const Greeting = ({ name }) => {    //takes prop "name" that gets passed to the Greeting component
            return <h1>Hello, {name}!</h1>;
        };
        
        export default Greeting;
        `}
                                    />
                                </li>
                                <li>
                                    <h5>This component can be used in another component like this:</h5>
                                    <HookDisplay text=
                                                     {`import React from 'react';
        import Greeting from './Greeting';
        
        const App = () => {
            return (
                <div>
                    <Greeting name="Alice" />
                    <Greeting name="Bob" />
                </div>
            );
        };
        
        export default App;
        `}
                                    />
                                </li>
                            </ol>
                        </li>
                        <li><b>Class Component</b>
                            <ol>
                                <li>
                                    <h5>Class components are defined using ES6 classes and can have additional features such as local state and lifecycle methods.</h5>
                                    <HookDisplay text=
                                                     {`import React, { Component } from 'react';

class Greeting extends Component {
    render() {  //render method that returns a React element
        return <h1>Hello, {this.props.name}!</h1>;  //this.props.name is used to access the name prop
    }
}

export default Greeting;
        `}
                                    />
                                </li>
                                <li>
                                    <h5>This component can be used in the same way as the function component</h5>
                                    <HookDisplay text=
                                                     {`import React from 'react';
        import Greeting from './Greeting';
        
        const App = () => {
            return (
                <div>
                    <Greeting name="Alice" />
                    <Greeting name="Bob" />
                </div>
            );
        };
        
        export default App;
        `}
                                    />
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <div className="summary-container">
                        <h3>Summary</h3>
                        <ul>
                            <li><b>Function components: </b>
                                Simple components that are defined as functions and can use hooks for state and lifecycle methods.
                            </li>
                            <li><b>Class components: </b>
                                More complex components that are defined as ES6 classes and can have state and lifecycle methods.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Components;
