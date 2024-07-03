import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import "./Fragments.css";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";

interface FragmentProps {
    closeContent: () => void;
}
const Fragments: React.FC<FragmentProps> = ({closeContent}) => {
    const [showFragment, toggleFragment] = useToggle(true);

    const handleClose = () => {
        toggleFragment();
        closeContent();
    };
    return (
        <div className="fragment-page common-page">
            <div className="fragment-card">
                <div className="fragment-header common-header">
                    {showFragment && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="fragment-card-title common-card-title">Fragments</h2>
                </div>
                <div className="fragment-body common-body">
                    <p><GlowingStar/>
                        Fragments provide a way to group multiple elements together without adding extra nodes to the DOM.
                        They are a lightweight syntax to return multiple elements from a component's render method, especially useful when you don't want to add an extra wrapping div or another element.
                    </p>
                    <div className="fragment-body-top">

                        <p>Side effects are operations that affect something outside the scope of a function or component.</p>
                        <p>Common examples of side effects include:</p>
                        <ol>
                            <li>
                                <h5>Purpose:</h5>
                                <ul>
                                    <li>
                                        In React, when you need to return multiple elements from a component's render method, you typically wrap them in a single parent element (like a div).
                                        This is because React components can only return a single root element.
                                        Fragments solve this problem by allowing you to group multiple elements without introducing an additional DOM node.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h5>Syntax:</h5>
                                <ul>
                                    <li>
                                        Fragments can be written using a shorthand syntax <> ... </> or using the &lt;React.Fragment&gt; ... &lt;/React.Fragment&gt; syntax.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h5>Benefits:</h5>
                                <ul>
                                    <li>
                                        <b>Cleaner HTML Output:</b> Fragments help to keep the HTML structure cleaner by not adding unnecessary wrapper elements.
                                    </li>
                                    <li>
                                        <b>Avoid Extra Styles:</b> They prevent the need to apply extra styles or classes to handle unnecessary parent elements in CSS.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <HookDisplay text=
{`import React from 'react';

const NameList = () => {
  return (
    <>  //this groups the heading and the list
      <h2>Names List</h2>
      <ul>
        <li>John</li>
        <li>Jane</li>
        <li>Michael</li>
      </ul>
    </>
  );
};

export default NameList;
`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Fragments;
