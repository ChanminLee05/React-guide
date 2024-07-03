import React from 'react';
import useToggle from "../../../../shared/Toggle/Toggle";
import ToggleCloseButton from "../../../../shared/Toggle/ToggleCloseButton";
import GlowingStar from "../../../../shared/GlowingStar/GlowingStar";
import "./Ref.css";
import HookDisplay from "../../../../shared/HookDisplay/HookDisplay";

interface RefProps {
    closeContent: () => void;
}
const Ref: React.FC<RefProps> = ({closeContent}) => {
    const [showRef, toggleRef] = useToggle(true);

    const handleClose = () => {
        toggleRef();
        closeContent();
    };
    return (
        <div className="ref-page common-page">
            <div className="ref-card">
                <div className="ref-header common-header">
                    {showRef && <ToggleCloseButton onClick={handleClose} style={{top: "2vw"}}/>}
                    <h2 className="ref-card-title common-card-title">Reference</h2>
                </div>
                <div className="ref-body common-body">
                    <div className="ref-body-top">
                        <p><GlowingStar/>
                            Refs provide a way to access DOM nodes or React elements created in the render method.
                        </p>
                        <h5>Commonly Used For:</h5>
                        <ol>
                            <li>
                                Managing focus, text selection, or media playback.
                            </li>
                            <li>
                                Triggering imperative animations.
                            </li>
                            <li>
                                Integrating with third-party DOM libraries.
                            </li>
                        </ol>
                    </div>
                    <ul>
                        <li><b>Class Component Example</b>
                            <p>Refs are created using React.createRef() and attached to React elements via the ref attribute.</p>
                            <HookDisplay text=
                                             {`import React, { Component } from 'react';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // This will focus the input field when the component mounts
    this.inputRef.current.focus();
  }

  focusInput = () => {
    // Explicitly focus the input using the raw DOM API
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;`}
                            />
                        </li>
                        <li><b>Functional Component Example</b>
                            <HookDisplay text=
                                             {`import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // This will focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const focusInput = () => {
    // Explicitly focus the input using the raw DOM API
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;`} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Ref;
